// --- Database V11.2 ---
// Tệp này chứa toàn bộ dữ liệu sản phẩm.
// Để thêm/sửa/xóa sản phẩm, bạn chỉ cần chỉnh sửa trong tệp này.

const database = {
  keyboards: [
    {
      id: "Attack Shark K75 Pro",
      name: "Attack Shark K75 Pro",
      image:
        "img/k75.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1SPQxHUku49b9tGGb2umEpuDdea26I12O/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Phải làm gì khi phím bị liệt hoặc nhấn nhiều lần?",
          a: "Đây có thể là lỗi do switch. Bạn hãy thử thay thế switch của phím bị lỗi để khắc phục.",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "Thực hiện các bước sau:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `FN + R` trong 5 giây cho đến khi đèn báo nháy nhanh.\n3. Cắm lại đầu thu USB vào máy tính để hoàn tất kết nối.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "Thực hiện các bước sau:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `FN + Q` (kênh 1), `FN + W` (kênh 2), hoặc `FN + E` (kênh 3) trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Attack Shark M86",
      name: "Attack Shark M86",
      image:
        "https://attackshark.com/cdn/shop/files/05_6de6d266-3a3f-45ad-ba7e-44b3eded46e1.jpg?crop=center&height=400&v=1731940157&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1t6SdPw0_mntOXuPOvzstQu1kE0IqDDLn/view?usp=drive_link",
      appWeb: "",
      videos: [
          {
              url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Ví dụ link video
              title: "Video Đánh giá & Hướng dẫn sử dụng M86"
          }
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "Thực hiện các bước sau:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `FN + R` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "Thực hiện các bước sau:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `FN + Q`, `FN + W`, hoặc `FN + E` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị và tìm lại bàn phím.",
        },
        {
          q: "Làm thế nào để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `FN + Backspace` để kiểm tra dung lượng pin còn lại.",
        },
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Attack Shark X66",
      name: "Attack Shark X66",
      image:
        "https://attackshark.com/cdn/shop/files/1_0105d13c-430f-4dc0-abd1-12bc57437322.jpg?crop=center&height=400&v=1735904755&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1uRINdoji7dqXnEMXy9iPcHhWo3FPtYqG/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `FN + Backspace` để kiểm tra dung lượng pin còn lại.",
        },
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + PD` (Page Down) để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Attack Shark X75",
      name: "Attack Shark X75",
      image:
        "https://attackshark.com/cdn/shop/files/8f03b1df65528a9be4377130a266fe07.jpg?crop=center&height=400&v=1721981275&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1BBogqGzjI0hdIFa9hrvpjo_IUJ2vVyag/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/drive/folders/1T7fixDycNuT4St46fhbr6JUvEBRdL7-K?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1BBogqGzjI0hdIFa9hrvpjo_IUJ2vVyag/view?usp=drive_link",
          title: "Hướng dẫn cài đặt App cho X75",
        },
        {
          url: "https://drive.google.com/file/d/18Q3AEFIHpI6Sq2VNYhMHmu0xHIgkd62N/view?usp=drive_link",
          title: "Hướng dẫn sử dụng cơ bản X75",
        },
      ],
      faqs: [
        {
          q: "Làm cách nào để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + Backspace` để bật hoặc tắt đèn LED.",
        },
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
        {
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `FN + ESC` trong 5 giây để khôi phục cài đặt gốc.",
        },
      ],
    },
    {
      id: "Attack Shark K85",
      name: "Attack Shark K85",
      image:
        "https://attackshark.com/cdn/shop/files/1500_2_61c7f4f8-6a47-43cd-b218-4076475f1b64.jpg?crop=center&height=400&v=1742623189&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1V1YI5t4xCWqEykPwAHnUOT7yPrDwJTVT/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `Fn + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Attack Shark K86",
      name: "Attack Shark K86",
      image:
        "https://attackshark.com/cdn/shop/files/K86_1500_8102751a-78c6-4d86-b041-31e5abec5a04.jpg?crop=center&height=400&v=1712667316&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1zYaViTbQXiP-AzWunYMRRUrI72xcvuGd/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/11txBs7GC7_qmArS3wOXxsR4BuYTI9xlP/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1zYaViTbQXiP-AzWunYMRRUrI72xcvuGd/view?usp=drive_link",
          title: "Video Hướng dẫn Chỉnh Hình nền",
        },
        {
          url: "https://drive.google.com/file/d/1pFIRC89o1dzCSNy7uYv8dnbm4YDd2mDN/view?usp=drive_link",
          title: "Video Hướng dẫn Chỉnh Ngôn ngữ",
        },
        {
          url: "https://drive.google.com/file/d/1mPir2lmPm6vZHmkbxnCCONZGj049JSh3/view?usp=drive_link",
          title: "Video Hướng dẫn Chỉnh Thời gian",
        },
      ],
      faqs: [
        {
          q: "Mất kết nối USB 2.4G, phải làm sao?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + 4` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
      ],
    },
    {
      id: "Xinmeng M71",
      name: "Xinmeng M71",
      image: "img/m71.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1SqMCID_yijKXM9k-XwiNiT_SGTpzj87C/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + R` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
      ],
    },
    {
      id: "Xinmeng M75",
      name: "Xinmeng M75",
      image:
        "img/m75.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1BcSmiiMPsMzUWYWPLqSznh9hQmLQ2x7T/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển chức năng của núm xoay?",
          a: "Nhấn và giữ `FN + Núm xoay` trong 5 giây để chuyển đổi giữa chế độ Media và LED.",
        },
        {
          q: "Làm cách nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `FN + ESC` trong 5 giây.",
        },
        {
          q: "Làm sao để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + Backspace`.",
        },
      ],
    },
    {
      id: "Dark Alien R65",
      name: "Dark Alien R65",
      image:
        "img/r65.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1MFAfLxWGLB0DvShkZbAeY4XCHaTdd0DK/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm sao để chuyển layout sang Windows?",
          a: "Sử dụng tổ hợp phím `FN + A` để chuyển sang layout Windows.",
        },
        {
          q: "Làm sao để chuyển layout sang macOS?",
          a: "Sử dụng tổ hợp phím `FN + S` để chuyển sang layout macOS.",
        },
        {
          q: "Làm thế nào để chuyển chức năng núm xoay?",
          a: "Nhấn giữ `FN + Núm xoay` trong 5 giây để chuyển đổi giữa chế độ Media và LED.",
        },
        {
          q: "Làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `FN + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark X85 Pro",
      name: "Attack Shark X85 Pro",
      image:
        "https://attackshark.com/cdn/shop/files/1-1_fdd56494-556d-4cea-83a9-142666f07904.jpg?crop=center&height=400&v=1720168663&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
      dealLink: "#",
      appPC: "",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
          title: "Hướng dẫn sử dụng và kết nối",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
        {
          q: "Làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark X68 HE",
      name: "Attack Shark X68 HE",
      image:
        "https://attackshark.com/cdn/shop/files/06_13d08781-1abb-49e0-b2f9-bf6a453c016c.jpg?crop=center&height=400&v=1735574811&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1TCwiwztBdxy8iHaLm4eC5vaYSNyVAuvt/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
      ],
    },
    {
      id: "Attack Shark X65 HE",
      name: "Attack Shark X65 HE",
      image:
        "https://attackshark.com/cdn/shop/files/bai.jpg?crop=center&height=400&v=1740015271&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1yLL-KSMDdlPbm3YShrtG6o46uXmzEiR1/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
      ],
    },
    {
      id: "Attack Shark X65 Pro HE",
      name: "Attack Shark X65 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/1_68.jpg?crop=center&height=400&v=1739244775&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1b4BdQ0siDSIEohif2A8JlYbVOuTvRetn/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
      ],
    },
    {
      id: "Attack Shark X68 Pro HE",
      name: "Attack Shark X68 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/06_13d08781-1abb-49e0-b2f9-bf6a453c016c.jpg?crop=center&height=400&v=1735574811&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1TCwiwztBdxy8iHaLm4eC5vaYSNyVAuvt/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển đổi chức năng của hàng phím F?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F (ví dụ: F1-F12 và các phím media).",
        },
        {
          q: "Làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark X82 Pro HE",
      name: "Attack Shark X82 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/X82ProHE.620.jpg?crop=center&height=400&v=1746770896&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1X75mfxOeuOktAybcC7LUW7cYok1hoK0s/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển đổi chức năng của hàng phím F?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng.",
        },
        {
          q: "Làm sao để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
        {
          q: "Làm sao để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark X86",
      name: "Attack Shark X86",
      image:
        "https://attackshark.com/cdn/shop/files/1_61_4da744bd-50a8-4153-a251-2c3abc462549.jpg?crop=center&height=400&v=1731139402&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1Lkz830ZdU61RUSxqNfUm6e5XPfCJbWuP/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
          title: "Hướng dẫn sử dụng và kết nối",
        },
      ],
      faqs: [
        {
          q: "Làm sao để chuyển layout sang Windows?",
          a: "Sử dụng tổ hợp phím `FN + A`.",
        },
        {
          q: "Làm sao để chuyển layout sang macOS?",
          a: "Sử dụng tổ hợp phím `FN + S`.",
        },
      ],
    },
    {
      id: "Attack Shark X87",
      name: "Attack Shark X87",
      image:
        "https://attackshark.com/cdn/shop/files/01_cd378b19-410b-4c45-b3ae-73ebe653df57.jpg?crop=center&height=400&v=1726050878&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1Ds1-a4OYiH8B2vj1ko99PYaiBgwRclt5/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển đổi chức năng của núm xoay?",
          a: "Nhấn giữ tổ hợp `Fn + Núm xoay` trong 5 giây để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
        {
          q: "Làm sao để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + Spacebar` trong 5 giây.",
        },
        {
          q: "Làm sao để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
      ],
    },
    {
      id: "Attack Shark X98",
      name: "Attack Shark X98",
      image:
        "img/x98.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1G0203avtg3A6JDp7l4OtDz2QMl6MAnKa/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack shark X98 Pro Max",
      name: "Attack shark X98 Pro Max",
      image:
        "https://attackshark.com/cdn/shop/files/7712088c5dfea910e9869b35a092fd90_90d58bb5-950a-4ef7-9e23-0b4cc3760a08.jpg?crop=center&height=400&v=1735125125&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1BKG9aOmuDr8IX5MEV2mFfBvgtl5M2aEi/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1mgtzUYotUB_x8gbu0zcY5e_y9zs7egDh/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1BKG9aOmuDr8IX5MEV2mFfBvgtl5M2aEi/view?usp=drive_link",
          title: "Hướng dẫn tùy chỉnh màn hình",
        },
        {
          url: "https://drive.google.com/file/d/1azp3kNol4tM-hgKcH26Nm6K9xAQHSH4b/view?usp=drive_link",
          title: "Hướng dẫn chỉnh thời gian trên màn hình",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark M87",
      name: "Attack Shark M87",
      image:
        "https://attackshark.com/cdn/shop/files/M87.13.jpg?crop=center&height=400&v=1712667588&width=400",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1_PFNxt0hvK2LT4VRly8k4xGu7HFCDwjM/view?usp=drive_link",
      appWeb:
        "https://drive.google.com/file/d/1NagFskwmgovDYLK2D_bu-QGmQal0H0g1/view?usp=drive_link",
      videos: [],
      faqs: [
        {
          q: "Tôi nên dùng phần mềm nào cho phiên bản có dây và không dây?",
          a: "Bàn phím này có 2 phiên bản phần mềm:\n- **Bản không dây (Wireless):** Sử dụng link `appPC`.\n- **Bản có dây (Wired):** Sử dụng link `appWeb`.",
        },
        {
          q: "Làm thế nào để thay đổi LED viền?",
          a: "Sử dụng tổ hợp phím `FN + Right CTRL`.",
        },
        {
          q: "Làm sao để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `FN + Backspace`.",
        },
      ],
    },
    {
      id: "AULA F98",
      name: "AULA F98",
      image:
        "img/f98.png",
      previewVideo:
        "https://drive.google.com/file/d/1H4TkVH1C2gjLOtQbVoVHw8p3nOFpD2t7/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1udZU4Fs0-wXIjjeNRXWKi34qxWm9TlMA/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1H4TkVH1C2gjLOtQbVoVHw8p3nOFpD2t7/view?usp=drive_link",
          title: "Video hướng dẫn sử dụng AULA F98",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để chuyển chức năng của núm xoay?",
          a: "Nhấn nhanh `FN + Núm xoay` để chuyển đổi giữa chế độ điều chỉnh Media và LED.",
        },
      ],
    },
    {
      id: "AULA F99 Pro",
      name: "AULA F99 Pro",
      image:
        "img/f99.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1u5d7dvW8VqeGFtk2C6MDAtabBQAuo6nO/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển đổi layout cho các hệ điều hành?",
          a: "- **Android:** `FN + Q`\n- **Windows:** `FN + W`\n- **macOS:** `FN + E`",
        },
      ],
    },
    {
      id: "Dark Alien R83",
      name: "Dark Alien R83",
      image:
        "img/R83 DARK ALIEN.png",
      previewVideo: "",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1gGQrm4UdI2DSsgRHVturl_pM42KqyQmH/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để bật/tắt LED bằng núm xoay?",
          a: "Nhấn nhanh `Núm xoay` để bật hoặc tắt đèn LED.",
        },
        {
          q: "Làm sao để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `FN + ESC` trong 5 giây.",
        },
      ],
    },
    {
      id: "Attack Shark X85",
      name: "Attack Shark X85",
      image:
        "https://attackshark.com/cdn/shop/files/X85_58458282-1c5f-44a3-99dd-f04a714b9f9e.jpg?crop=center&height=400&v=1713408054&width=400",
      previewVideo:
        "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
      dealLink: "#",
      appPC:
        "https://drive.google.com/file/d/1qVwtZ4wFMRAl6SAkHlQby-39jh4e3ocI/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
          title: "Hướng dẫn sử dụng và kết nối",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
      ],
    },
  ],
  mice: [],
  headsets: [],
};
