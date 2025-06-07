// Tệp này chứa logic gọi API của Gemini.
// Việc tách riêng tệp này giúp quản lý và bảo mật key tốt hơn.

/**
 * Gửi yêu cầu đến Gemini AI và trả về phản hồi.
 * @param {string} userQuestion - Câu hỏi của người dùng.
 * @returns {Promise<string>} - Phản hồi từ AI.
 */
async function askGeminiAi(userQuestion) {
    // !!! CẢNH BÁO BẢO MẬT QUAN TRỌNG !!!
    // Để trống API Key (`const apiKey = ""`) chỉ hoạt động trong môi trường Canvas.
    // Khi bạn chạy trên máy tính cá nhân (localhost) hoặc server riêng,
    // BẠN BẮT BUỘC PHẢI THAY THẾ BẰNG API KEY THẬT CỦA BẠN từ Google AI Studio.
    // Nếu không, chức năng này sẽ luôn báo lỗi.
    const apiKey = "AIzaSyC6-809ZG8gU9sv0MkRM1Xz8CsiPZomTDA"; // <-- THAY THẾ BẰNG API KEY CỦA BẠN VÀO ĐÂY

    let allProductsContext = "";
    for (const category in database) {
        if (database[category].length > 0) {
            allProductsContext += `\n\n----- DANH MỤC: ${category.toUpperCase()} -----\n`;
            database[category].forEach(product => {
                // Cung cấp ngữ cảnh rõ ràng hơn cho AI
                allProductsContext += `\n### SẢN PHẨM: ${product.name} (ID: ${product.id})\n`;
                if (product.faqs && product.faqs.length > 0) {
                    product.faqs.forEach(faq => {
                        allProductsContext += `- Câu hỏi thường gặp: ${faq.q}\n  - Giải đáp chi tiết: ${faq.a}\n`;
                    });
                }
                // Thêm thông tin video vào ngữ cảnh
                if (product.videos && product.videos.length > 0) {
                    allProductsContext += `- Videos Hướng Dẫn Có Sẵn:\n`;
                    product.videos.forEach(video => {
                        allProductsContext += `  - Tiêu đề video: "${video.title}", Link: "${video.url}"\n`;
                    });
                }
            });
        }
    }

    // --- PROMPT NÂNG CẤP - V11.7 ---
    // Phiên bản này buộc AI chỉ tìm video trong context và không in ra `html`
    const prompt = `Bạn là một Trợ lý Kỹ thuật AI của SuperApp. Nhiệm vụ của bạn là trả lời các câu hỏi của người dùng CHỈ DỰA TRÊN "KHO DỮ LIỆU KIẾN THỨC" được cung cấp.

    --- KHO DỮ LIỆU KIẾN THỨC ---
    ${allProductsContext}
    ---

    **QUY TẮC VÀNG (BẮT BUỘC TUÂN THỦ):**
    1.  **Định dạng HTML:** Toàn bộ câu trả lời của bạn PHẢI ở định dạng HTML thuần túy.
    2.  **KHÔNG BAO GIỜ GHI RA \`html\`:** Câu trả lời cuối cùng TUYỆT ĐỐI không được bắt đầu bằng \`\`\`html hoặc bất kỳ thẻ code nào.
    3.  **Làm nổi bật:** Sử dụng thẻ \`<strong>\` để bọc các thông tin quan trọng như tên phím, tổ hợp phím (ví dụ: \`<strong>FN + R</strong>\`).
    4.  **VIDEO TỪ KIẾN THỨC:** Bạn CHỈ được phép lấy link video từ mục "Videos Hướng Dẫn Có Sẵn" trong KHO DỮ LIỆU KIẾN THỨC cho sản phẩm tương ứng. KHÔNG được tìm kiếm hay bịa ra link video khác.

    **QUY TRÌNH XỬ LÝ (để bạn tự ngầm hiểu, không được in ra):**
    
    1.  **Phân tích câu hỏi:** "${userQuestion}". Tìm tên sản phẩm (ví dụ: "m86", "k75") và từ khóa sự cố (ví dụ: "kết nối", "pin", "led").
    
    2.  **Xử lý các kịch bản:**
        * **KỊCH BẢN 1: Nếu người dùng chỉ hỏi tên sản phẩm (vd: "m86").**
            * Tìm sản phẩm đó.
            * Liệt kê TOÀN BỘ các câu hỏi và giải đáp có trong KHO DỮ LIỆU của sản phẩm đó. Mỗi cặp câu hỏi/giải đáp phải được định dạng: \`<h3>[Câu hỏi]</h3><p>[Giải đáp]</p>\`.
            * Bắt đầu câu trả lời bằng: \`<p>Chào bạn, đây là tất cả các hướng dẫn hiện có cho sản phẩm <strong>[Tên sản phẩm]</strong>:</p>\`.
        
        * **KỊCH BẢN 2: Nếu người dùng hỏi về một VẤN ĐỀ CHUNG cho một sản phẩm (vd: "lỗi kết nối m86").**
            * Tìm sản phẩm và tất cả các "Câu hỏi thường gặp" của sản phẩm đó có chứa TỪ KHÓA về sự cố ("kết nối").
            * Liệt kê tất cả các giải pháp tìm được, mỗi giải pháp theo định dạng: \`<h3>[Câu hỏi]</h3><p>[Giải đáp]</p>\`.
            * Bắt đầu câu trả lời: \`<p>Chào bạn, về vấn đề <strong>[từ khóa sự cố]</strong> của sản phẩm <strong>[Tên sản phẩm]</strong>, bạn có thể tham khảo các hướng dẫn sau:</p>\`.
        
        * **KỊCH BẢN 3: Nếu không xác định được sản phẩm hoặc không tìm thấy giải pháp.**
            * Nếu không rõ sản phẩm: Trả lời \`<p>Chào bạn, để tôi có thể hỗ trợ chính xác, bạn vui lòng cho biết tên đầy đủ của sản phẩm bạn đang gặp vấn đề là gì được không?</p>\`.
            * Nếu biết sản phẩm nhưng không có giải pháp: Trả lời \`<p>Chào bạn, tôi đã kiểm tra nhưng rất tiếc chưa tìm thấy hướng dẫn cho vấn đề bạn mô tả đối với sản phẩm <strong>[Tên sản phẩm]</strong>. Để được hỗ trợ nhanh nhất, bạn vui lòng liên hệ trực tiếp với đội ngũ kỹ thuật của SuperApp qua Zalo hoặc Hotline: 0984.129.321.</p>\`.

    3.  **Phần Video (luôn kiểm tra để thêm vào cuối):**
        * Sau khi có câu trả lời chính, hãy kiểm tra mục "Videos Hướng Dẫn Có Sẵn" của sản phẩm đó trong KHO DỮ LIỆU.
        * Nếu có video, thêm vào cuối câu trả lời: \`<h3>🎥 Video tham khảo:</h3><ul>\` và mỗi video là: \`<li><a href="[Link video]" target="_blank" class="ai-video-link">[Tiêu đề video]</a></li>\` sau đó kết thúc bằng \`</ul>\`.
            
    Bây giờ, hãy tạo câu trả lời HTML cuối cùng cho người dùng theo đúng các quy tắc trên.`;

    const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    };

    try {
        if (!apiKey) {
             throw new Error("API Key is missing. Please add your API key in assets/js/api.js");
        }
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error:", response.status, errorText);
            throw new Error(`API call failed with status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
            // Làm sạch đầu ra để đảm bảo không có ```html
            let rawText = result.candidates[0].content.parts[0].text;
            if (rawText.startsWith("```html")) {
                rawText = rawText.substring(7);
            }
            if (rawText.endsWith("```")) {
                rawText = rawText.substring(0, rawText.length - 3);
            }
            return rawText.trim();
        } else {
            console.warn("API response was valid, but contained no answer:", result);
            return "<p>Tôi không thể đưa ra câu trả lời lúc này. Để được hỗ trợ nhanh nhất, bạn vui lòng liên hệ trực tiếp với đội ngũ kỹ thuật của SuperApp qua Zalo hoặc Hotline: 0984.129.321.</p>";
        }
    } catch (error) {
        console.error('Gemini AI call failed:', error);
        return `<p>Đã xảy ra lỗi khi kết nối với trợ lý AI. Chi tiết lỗi: ${error.message}. Vui lòng thử lại sau hoặc liên hệ Hotline: 0984.129.321.</p>`;
    }
}
