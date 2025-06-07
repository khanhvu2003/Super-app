// Đây là tệp chính, khởi tạo và gắn kết các thành phần của trang.
// Nó lắng nghe các sự kiện và gọi các hàm tương ứng từ các tệp khác.

document.addEventListener("DOMContentLoaded", () => {
    // --- Lấy các element chính ---
    const searchInput = document.getElementById("searchInput");
    const themeToggleButton = document.getElementById("theme-toggle-button");
    const globalAiInput = document.getElementById('global-ai-input');
    const globalAskAiButton = document.getElementById('global-ask-ai-button');
    const globalAiResponse = document.getElementById('global-ai-response');
    const detailModalElement = document.getElementById("productDetailModal");

    // --- KHỞI TẠO BAN ĐẦU ---

    // 1. Render tất cả sản phẩm ra trang chủ
    function renderAllSections() {
        renderProducts(database.keyboards, "keyboard-products", "keyboards");
        renderProducts(database.mice, "mouse-products", "mice");
        renderProducts(database.headsets, "headset-products", "headsets");
    }
    renderAllSections();

    // 2. Thiết lập năm hiện tại cho footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    
    // 3. Kiểm tra và áp dụng theme đã lưu
    const savedTheme = localStorage.getItem("theme");
    updateThemeUI(savedTheme === "light");

    // --- GẮN KẾT SỰ KIỆN (EVENT LISTENERS) ---

    // 1. Sự kiện tìm kiếm sản phẩm
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        ["keyboards", "mice", "headsets"].forEach((category) => {
            const sectionElement = document.getElementById(`${category.slice(0, -1)}-products`);
            if (!sectionElement) return;

            const allCardsInCategory = sectionElement.querySelectorAll(".card");
            let matchesInCategory = 0;
            allCardsInCategory.forEach((card) => {
                const productName = card.querySelector("h3").textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.style.display = "flex";
                    matchesInCategory++;
                } else {
                    card.style.display = "none";
                }
            });
            sectionElement.style.display = matchesInCategory > 0 || searchTerm === "" ? "block" : "none";
        });
    });

    // 2. Sự kiện cho nút chuyển đổi theme
    themeToggleButton.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        updateThemeUI(isLight);
    });

    // 3. Sự kiện cho Trợ lý AI
    if (globalAskAiButton) {
        globalAskAiButton.addEventListener('click', async () => {
            const userQuestion = globalAiInput.value.trim();
            if (!userQuestion) {
                globalAiResponse.innerHTML = '<p>Vui lòng nhập câu hỏi của bạn để AI có thể hỗ trợ.</p>';
                return;
            }

            globalAskAiButton.disabled = true;
            globalAskAiButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>AI Đang Phân Tích...';
            globalAiResponse.innerHTML = '<div class="flex items-center justify-center"><i class="fas fa-spinner fa-spin mr-2"></i> AI đang tìm kiếm giải pháp, vui lòng chờ...</div>';

            try {
                const responseText = await askGeminiAi(userQuestion);
                // SỬA LỖI: Dùng innerHTML để render các thẻ định dạng như <strong> và <a>
                globalAiResponse.innerHTML = responseText;
            } catch (error) {
                globalAiResponse.innerHTML = `<p>Đã xảy ra lỗi khi kết nối với trợ lý AI. Chi tiết lỗi: ${error.message}. Vui lòng thử lại sau hoặc liên hệ Hotline: 0984.129.321.</p>`;
            } finally {
                globalAskAiButton.disabled = false;
                globalAskAiButton.innerHTML = '<i class="fas fa-robot mr-2"></i>Gửi Yêu Cầu Cho AI';
            }
        });
    }

    // 4. Sử dụng phương pháp Ủy quyền sự kiện (Event Delegation)
    document.body.addEventListener('click', function(event) {
        const target = event.target;

        // Xử lý mở popup Zalo
        const contactButton = target.closest('#contact-float-button');
        if (contactButton) {
            event.stopPropagation();
            document.getElementById('contact-popup').classList.toggle('show');
            return;
        }

        // Xử lý đóng popup Zalo khi click ra ngoài
        const contactPopup = document.getElementById('contact-popup');
        if (contactPopup && contactPopup.classList.contains('show') && !target.closest('#contact-popup')) {
             contactPopup.classList.remove('show');
        }

        // Xử lý mở modal chi tiết sản phẩm
        const detailAction = target.closest('[data-action="show-detail"]');
        if (detailAction) {
            const card = detailAction.closest('.card');
            if (card) {
                const productId = card.dataset.id;
                const category = card.dataset.category;
                showProductDetail(productId, category);
            }
            return;
        }

        // Xử lý đóng modal
        const closeButton = target.closest('#modal-close-button');
        if (closeButton) {
            closeModal();
            return;
        }
    });
    
    // Sự kiện đóng modal bằng phím ESC hoặc click ra ngoài
    if (detailModalElement) {
        detailModalElement.addEventListener("click", (event) => {
            if (event.target === detailModalElement) closeModal();
        });
    }
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && detailModalElement && !detailModalElement.classList.contains("hidden")) {
            closeModal();
        }
    });
});
