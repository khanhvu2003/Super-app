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
                        allProductsContext += `- Câu hỏi thường gặp: ${faq.q}\n  - Giải đáp chi tiết: ${faq.a}\n`;
                    });
                }
                // Thêm thông tin video vào ngữ cảnh
                if (product.videos && product.videos.length > 0) {
                    allProductsContext += `- Videos Hướng Dẫn Có Sẵn:\n`;
                    product.videos.forEach(video => {
                        allProductsContext += `  - Tiêu đề video: "${video.title}", Link: "${video.url}"\n`;
                    });
                }
                // Thêm thông tin ứng dụng vào ngữ cảnh
                if (product.appPC || product.appWeb) {
                    allProductsContext += `- Link Ứng Dụng Có Sẵn:\n`;
                    if (product.appPC) {
                        allProductsContext += `  - Link App PC: "${product.appPC}"\n`;
                    }
                    if (product.appWeb) {
                        allProductsContext += `  - Link App Web: "${product.appWeb}"\n`;
                    }
                }
            });
        }
    }

    // --- PROMPT NÂNG CẤP - V15.0 (Xử lý xuống dòng & siết chặt đầu ra) ---
    const prompt = `Bạn là một Trợ lý Kỹ thuật AI. Nhiệm vụ của bạn là nhận câu hỏi và KHO DỮ LIỆU, sau đó trả về MỘT KHỐI HTML DUY NHẤT, SẠCH SẼ và GỌN GÀNG.

--- KHO DỮ LIỆU KIẾN THỨC ---
${allProductsContext}
---

**YÊU CẦU TUYỆT ĐỐI:**
1.  **CHỈ TRẢ VỀ HTML:** Toàn bộ phản hồi của bạn phải là mã HTML. KHÔNG được có bất kỳ văn bản, ghi chú, hay ký tự nào (như \`\`\`html hoặc 'html') nằm ngoài các thẻ HTML. Phản hồi phải kết thúc ngay sau thẻ HTML đóng cuối cùng.
2.  **GỌN GÀNG & SẠCH SẼ:** KHÔNG tạo ra các dòng trống, khoảng trắng thừa, hay các ký tự như '---'. Câu trả lời phải liền mạch và chỉ chứa nội dung người dùng cần.
3.  **TÌM KIẾM LINH HOẠT:**
    * Phân tích câu hỏi của người dùng: "${userQuestion}".
    * Tìm sản phẩm trong KHO DỮ LIỆU có Tên hoặc ID chứa từ khóa người dùng nhập (không phân biệt hoa thường). Ví dụ: "x82" khớp với "Attack Shark X82 Pro HE".
    * Nếu không tìm thấy sản phẩm, trả lời duy nhất: \`<p>Chào bạn, để tôi có thể hỗ trợ chính xác, bạn vui lòng cho biết đầy đủ tên sản phẩm bạn đang gặp vấn đề là gì được không?</p>\`
4.  **CẤU TRÚC NỘI DUNG (NẾU TÌM THẤY SẢN PHẨM):**
    * **Mở đầu:** Luôn bắt đầu bằng: \`<p>Chào bạn, đây là các hướng dẫn cho sản phẩm <strong>[Tên sản phẩm đầy đủ]</strong>:</p>\`
    * **Nội dung chính:** Dựa vào câu hỏi để cung cấp các giải pháp phù hợp từ mục "Câu hỏi thường gặp". Mỗi giải pháp có định dạng: \`<h3>[Câu hỏi]</h3><p>[Giải đáp]</p>\`. Nếu người dùng chỉ hỏi tên sản phẩm, liệt kê tất cả các giải pháp.
    * **QUAN TRỌNG - XỬ LÝ XUỐNG DÒNG:** Khi tạo phần giải đáp trong thẻ \`<p>\`, bạn PHẢI thay thế mọi ký tự xuống dòng (\\n) trong dữ liệu gốc bằng thẻ \`<br>\` để đảm bảo mỗi bước hướng dẫn được hiển thị trên một dòng riêng biệt.
    * **Phím tắt:** Luôn dùng thẻ \`<strong>\` để bọc các tổ hợp phím.
5.  **THÔNG TIN BỔ SUNG (Thêm vào cuối NẾU CÓ trong dữ liệu):**
    * **Video:** Nếu sản phẩm có "Videos Hướng Dẫn", thêm mục: \`<h3>🎥 Video tham khảo:</h3><ul><li><a href="[URL]" target="_blank" class="ai-video-link">[Tiêu đề video]</a></li></ul>\`
    * **Ứng dụng:** Nếu sản phẩm có "Link Ứng Dụng", thêm mục: \`<h3>💾 Link tải ứng dụng:</h3><ul>\`. Bên trong, nếu có "Link App PC" thì tạo \`<li><a href="..." target="_blank" class="ai-app-link">Tải ứng dụng cho PC (Windows/macOS)</a></li>\`. Nếu có "Link App Web", tạo \`<li><a href="..." target="_blank" class="ai-app-link">Mở ứng dụng trên nền Web</a></li>\`.

Bây giờ, hãy tạo câu trả lời HTML cuối cùng.`;

    const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    };

    try {
        if (!apiKey) {
             throw new Error("API Key is missing. Please add your API key in assets/js/api.js");
        }
        // SỬA LỖI: Cập nhật model API để khắc phục lỗi 404
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
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
