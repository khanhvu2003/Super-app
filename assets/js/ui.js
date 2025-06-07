// Tệp này chứa các hàm chịu trách nhiệm cập nhật giao diện người dùng (DOM).
// Việc tách riêng logic giao diện giúp mã nguồn sạch sẽ và dễ quản lý hơn.

const detailModalElement = document.getElementById("productDetailModal");
const detailModalContent = document.getElementById("modalContent");

/**
 * Chuyển đổi URL video (YouTube, Google Drive) thành URL có thể nhúng được.
 * @param {string} originalUrl - URL gốc.
 * @returns {string|null} - URL nhúng hoặc null nếu không hợp lệ.
 */
function getEmbedUrl(originalUrl) {
    if (!originalUrl || typeof originalUrl !== "string" || originalUrl.trim() === "") return null;
    try {
        const url = new URL(originalUrl);
        if (url.hostname.includes("youtube.com") || url.hostname.includes("youtu.be")) {
            const videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
            return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        } else if (url.hostname === "drive.google.com" && url.pathname.includes("/file/d/")) {
            const fileId = url.pathname.split("/d/")[1].split("/")[0];
            return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
        }
    } catch (e) {
        console.error("Invalid URL format:", originalUrl, e);
        return null;
    }
    if (originalUrl.match(/\.(mp4|webm|ogg)$/i)) {
        return originalUrl;
    }
    return null;
}

/**
 * Hiển thị danh sách sản phẩm lên giao diện.
 * @param {Array} products - Mảng các đối tượng sản phẩm.
 * @param {string} containerId - ID của section chứa sản phẩm.
 * @param {string} category - Tên danh mục (ví dụ: 'keyboards').
 */
function renderProducts(products, containerId, category) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const grid = container.querySelector(".product-grid");
    grid.innerHTML = "";
    if (!products || products.length === 0) {
        grid.innerHTML = `<p class="text-center text-xl text-gray-500 font-heading py-12 col-span-full">Sắp có hàng...</p>`;
        return;
    }
    products.forEach((product) => {
        // Gỡ bỏ `onclick` và thêm thuộc tính `data-action` để JS bắt sự kiện
        const cardHtml = `
            <div class="card" data-id="${product.id}" data-category="${category}">
                <div class="p-4 flex-grow flex flex-col">
                    <div class="card-image-container cursor-pointer" data-action="show-detail">
                        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x400/141422/e8e8e8?text=SuperApp';">
                    </div>
                    <h3 class="font-heading font-bold text-[var(--primary-color)] text-xl mt-4 mb-2 flex-grow uppercase cursor-pointer" data-action="show-detail">${product.name}</h3>
                    <div class="mt-auto space-y-3 pt-2">
                        <a href="${product.dealLink}" target="_blank" class="btn btn-deal w-full"><i class="fas fa-shopping-cart mr-2"></i>Săn Deal Online</a>
                        <button class="btn btn-secondary w-full" data-action="show-detail"><i class="fas fa-cogs"></i>Chi Tiết & Driver</button>
                    </div>
                </div>
            </div>`;
        grid.innerHTML += cardHtml;
    });
}

/**
 * Hiển thị modal chi tiết sản phẩm.
 * @param {string} productId - ID của sản phẩm.
 * @param {string} categoryKey - Key của danh mục trong database.
 */
function showProductDetail(productId, categoryKey) {
    const product = database[categoryKey]?.find((p) => p.id === productId);
    if (!product) return;

    const previewEmbedUrl = getEmbedUrl(product.previewVideo);
    let mediaHtml = "";

    if (previewEmbedUrl) {
        if (previewEmbedUrl.match(/\.(mp4|webm|ogg)$/i)) {
            mediaHtml = `<div class="video-preview-container"><video src="${previewEmbedUrl}" autoplay muted loop playsinline></video></div>`;
        } else {
            mediaHtml = `<div class="video-preview-container"><iframe src="${previewEmbedUrl}" allow="fullscreen; autoplay" style="border:0;"></iframe></div>`;
        }
    } else {
        mediaHtml = `<img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x400/141422/e8e8e8?text=SuperApp';" class="w-full rounded-lg shadow-lg max-w-sm mx-auto">`;
    }

    let instructionsHtml = '<div class="download-instructions">';
    if (product.appPC) {
        instructionsHtml += '<p><strong><i class="fas fa-desktop mr-2"></i>APP PC:</strong> Nhấn tải về, mở file và làm theo các bước (Next > Next > Finish) để hoàn tất cài đặt.</p>';
    }
    if (product.appWeb) {
        instructionsHtml += `<div class="mt-2"><p><strong><i class="fas fa-globe mr-2"></i>APP WEB:</strong></p><ol class="list-decimal list-inside pl-2"><li>Truy cập link và đợi vài giây để trang tự động tải về công cụ cài đặt.</li><li>Mở file vừa tải và làm theo chỉ dẫn để cài đặt.</li><li>Sau khi cài xong, tải lại (refresh) trang App Web ban đầu để bắt đầu sử dụng.</li></ol></div>`;
    }
    instructionsHtml += "</div>";

    let videosHtml = '<p class="text-gray-400">Chưa có video hướng dẫn.</p>';
    if (product.videos && product.videos.length > 0) {
        videosHtml = product.videos
            .map((video) => {
                const embedUrl = getEmbedUrl(video.url);
                if (!embedUrl) return "";
                return `<div class="mb-6"><h4 class="video-title-text">${video.title}</h4><div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto"><iframe src="${embedUrl}" allow="fullscreen" style="border:0;"></iframe></div></div>`;
            })
            .join("");
    }

    let faqsHtml = '<p class="text-gray-400">Không có thông tin hướng dẫn.</p>';
    if (product.faqs && product.faqs.length > 0) {
        faqsHtml = product.faqs.map((faq) => `<details class="faq-item"><summary class="text-base">${faq.q}</summary><div class="faq-answer">${faq.a}</div></details>`).join("");
    }
    
    const appPcText = product.appPcText || "Download App PC";
    const appWebText = product.appWebText || "Dùng App Web";

    detailModalContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div class="lg:col-span-5 flex justify-center">${mediaHtml}</div>
            <div class="lg:col-span-7 space-y-4">
                <h2 class="modal-title">${product.name}</h2>
                <div>
                    <h3 class="modal-section-title"><i class="fas fa-download mr-2"></i>Tải Về</h3>
                    <div class="flex flex-col sm:flex-row gap-4">
                        ${product.appPC ? `<a href="${product.appPC}" target="_blank" class="btn btn-primary flex-1"><i class="fas fa-desktop mr-2"></i>${appPcText}</a>` : ""}
                        ${product.appWeb ? `<a href="${product.appWeb}" target="_blank" class="btn btn-secondary flex-1"><i class="fas fa-globe mr-2"></i>${appWebText}</a>` : ""}
                    </div>
                    ${product.appPC || product.appWeb ? instructionsHtml : ""}
                </div>
            </div>
        </div>
        <div class="mt-8"><h3 class="modal-section-title"><i class="fas fa-video mr-2"></i>Video Hướng Dẫn</h3><div class="space-y-4">${videosHtml}</div></div>
        <div class="mt-8"><h3 class="modal-section-title"><i class="fas fa-tools mr-2"></i>Giải Pháp & Hướng Dẫn</h3><div class="space-y-3">${faqsHtml}</div></div>
    `;

    detailModalElement.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    detailModalElement.querySelector(".modal-bg").scrollTop = 0;
}

/**
 * Đóng modal chi tiết sản phẩm.
 */
function closeModal() {
    detailModalElement.classList.add("hidden");
    detailModalContent.innerHTML = "";
    document.body.style.overflow = "auto";
}

/**
 * Cập nhật giao diện khi chuyển đổi theme.
 * @param {boolean} isLightTheme - Trạng thái của theme sáng.
 */
function updateThemeUI(isLightTheme) {
    const themeToggleButton = document.getElementById("theme-toggle-button");
    const icon = themeToggleButton.querySelector("i");
    if (isLightTheme) {
        document.body.classList.add("light-theme");
        icon.className = "fas fa-sun";
    } else {
        document.body.classList.remove("light-theme");
        icon.className = "fas fa-moon";
    }
}
