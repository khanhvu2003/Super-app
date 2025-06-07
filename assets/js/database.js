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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-Trong-Su%E1%BB%91t-K75-PRO-Esport-N%C3%A2ng-C%E1%BA%A5p-LED-RGB-Tr%E1%BB%A5c-C%C6%A1-White-Switch-C%C3%B3-HOTSWAP-i.12208293.22528189730?sp_atk=59f18f7d-14a6-4905-9ce3-23ec372a58ba&xptdk=59f18f7d-14a6-4905-9ce3-23ec372a58ba",
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
      dealLink: "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Bluetooth-Vi-Ti%CC%81nh-Attack-Shark-M86-Pro-LED-RGB-Co%CC%81-App-Macro-3-Mode-Hotswap-Pin-Sa%CC%A3c-i.12208293.29468366922?sp_atk=bad337dd-fcb6-40f6-b71d-2682e2a9a0cc&xptdk=bad337dd-fcb6-40f6-b71d-2682e2a9a0cc",
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
      dealLink: "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Bluetooth-Mini-Attack-Shark-X66-Nu%CC%81m-Xoay-Media-3-Mode-K%C3%AA%CC%81t-N%C3%B4%CC%81i-i.12208293.26220161413?sp_atk=0fc448a6-81b7-44c3-9ddb-5d73694d588a&xptdk=0fc448a6-81b7-44c3-9ddb-5d73694d588a",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Ko-D%C3%A2y-Bluetooth-Nh%C3%B4m-CNC-Attack-Shark-X75-Cao-C%E1%BA%A5p-Full-LED-RGB-Cho-M%C3%A1y-T%C3%ADnh-Laptop-i.12208293.27906004277?sp_atk=00ac5cd3-9a03-4cd0-9662-db007da3514b&xptdk=00ac5cd3-9a03-4cd0-9662-db007da3514b",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-T%E1%BB%AB-T%C3%ADnh-K85-LED-RGB-Magnetic-Switch-Rapid-Trigger-T%C3%B9y-Ch%E1%BB%89nh-L%E1%BB%B1c-%E1%BA%A4n-Qua-App-Hotswap-i.12208293.24466837594?sp_atk=2bf871a7-ecd7-4bf4-b382-9e13f1968e25&xptdk=2bf871a7-ecd7-4bf4-b382-9e13f1968e25",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-K86-RGB-PRO-VIP-C%C3%B3-M%C3%A0n-H%C3%ACnh-App-T%C3%B9y-Ch%E1%BB%89nh-HOTSWAP-5-Pin-L%C3%B3t-Foam-i.12208293.23655235090?sp_atk=70b02146-50e3-438b-860f-87b4052615bb&xptdk=70b02146-50e3-438b-860f-87b4052615bb",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Khung-Nh%C3%B4m-ALUMINUM-XM-M71-C%E1%BA%A5u-Tr%C3%BAc-GASKET-Hotwsap-5-Pin-M%E1%BA%A1ch-Xu%C3%B4i-Cao-C%E1%BA%A5p-G%C3%B5-C%E1%BB%B1c-S%C6%B0%E1%BB%9Bng-i.12208293.22651416328?sp_atk=41aa037f-177b-4a21-a9a7-8ecd9abb7478&xptdk=41aa037f-177b-4a21-a9a7-8ecd9abb7478",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=f0210a5f-702b-41d0-8e07-3b6d68384bb0&xptdk=f0210a5f-702b-41d0-8e07-3b6d68384bb0",
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
        "img/R65.png",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Dark-Alien-R65-RGB-Khung-Nh%C3%B4m-Aluminum-Cao-C%E1%BA%A5p-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-C%C3%B3-Hotswap-i.12208293.24386293179?sp_atk=b5bc8fc2-f7dc-45ad-b1e7-15674880e68a&xptdk=b5bc8fc2-f7dc-45ad-b1e7-15674880e68a",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=7fcabde2-08b5-4580-a804-16d9cbac3fda&xptdk=7fcabde2-08b5-4580-a804-16d9cbac3fda",
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
        "https://attackshark.com/cdn/shop/files/08_124c2ed9-35a7-4eef-8a06-53b081fb3625.jpg?v=1739780205&width=800",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Gaming-Rapid-Trigger-Attack-Shark-X68-HE-Polling-Rate-8KHz-LED-RGB-M%E1%BA%A1ch-Xu%C3%B4i-i.12208293.24740001169?sp_atk=28f82768-517e-4c98-92df-18a11c8a7716&xptdk=28f82768-517e-4c98-92df-18a11c8a7716",
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
        "https://attackshark.com/cdn/shop/files/bai.jpg?v=1740015271&width=800",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Gaming-Rapid-Trigger-Attack-Shark-X65HE-Led-RGB-Polling-Rate-8K-Hz-SOCD-App-Macro-i.12208293.26927226409?sp_atk=3c009973-56b7-4d00-81d0-b0fc3b7d52d5&xptdk=3c009973-56b7-4d00-81d0-b0fc3b7d52d5",
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
        "https://attackshark.com/cdn/shop/files/3333_2a26e1db-d775-4035-a89c-6fa327167627.jpg?v=1739244875&width=800",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X65HE-PRO-Polling-Rate-1K-8K-Hz-Led-RGB-App-i.12208293.29277212403?sp_atk=2167844f-5e06-498e-8a5d-d29790541b2d&xptdk=2167844f-5e06-498e-8a5d-d29790541b2d",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X68PRO-HE-3-Mode-LED-RGB-Pin-5000mAh-8000Hz-App-Macro-i.12208293.28430209471?sp_atk=5dfc9002-4027-4b8f-b1f2-4fcb2f7a458c&xptdk=5dfc9002-4027-4b8f-b1f2-4fcb2f7a458c",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Gaming-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X82-PRO-HE-LED-RGB-3-Mode-Pin-S%E1%BA%A1c-Keycap-PBT-i.12208293.42401064520?sp_atk=62a4fa7b-9d60-4c28-bb97-e1b879f4735b&xptdk=62a4fa7b-9d60-4c28-bb97-e1b879f4735b",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Full-Nh%C3%B4m-CNC-Attack-Shark-X86-LED-RGB-3-Mode-Hotswap-5-Pin-M%E1%BA%A1ch-Xu%C3%B4i-N%C3%BAm-Xoay-App-i.12208293.28312918857?sp_atk=6fad53d9-abee-403e-94e5-801d0f1aa063&xptdk=6fad53d9-abee-403e-94e5-801d0f1aa063",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-X87BT-Led-RGB-Bluetooth-3-Mode-Hotswap-5-pin-M%E1%BA%A1ch-xu%C3%B4i-L%C3%B3t-Foam-i.12208293.26761914988?sp_atk=3b2198ff-c943-4073-8bb2-fd38a5297358&xptdk=3b2198ff-c943-4073-8bb2-fd38a5297358",
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
        "img/X98.png",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-XM98-PRO-V2-LED-RGB-Cao-C%E1%BA%A5p-Hotswap-5-Pin-L%C3%B3t-Foam-PIN-Tr%C3%A2u-i.12208293.19083788176?sp_atk=4eb503db-937a-43c5-a519-7f4c5e4d144d&xptdk=4eb503db-937a-43c5-a519-7f4c5e4d144d",
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
      dealLink: "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Bluetooth-Attack-Shark-X98-PRO-MAX-C%C3%B3-M%C3%A0n-H%C3%ACnh-3-Mode-cho-m%C3%A1y-t%C3%ADnh-laptop-pc-i.12208293.28918629132?sp_atk=cfe1d8e7-885e-46b8-a0f1-3d58e00c488f&xptdk=cfe1d8e7-885e-46b8-a0f1-3d58e00c488f",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Gaming-Kh%C3%B4ng-D%C3%A2y-Bluetooth-XM87-V2-PRO-NEW-2025-LED-RGB-Pro-Keycap-X%E1%BB%8Bn-White-Switch-Hotswap-3-Mode-i.12208293.23256302840?sp_atk=76f48de1-67ec-4c3f-836a-b11e23f1034b&xptdk=76f48de1-67ec-4c3f-836a-b11e23f1034b",
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
        "img/F98.png",
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
        "img/F99.png",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Full-Case-Nh%C3%B4m-CNC-Dark-Alien-R83-Led-RGB-3-Mode-Lime-Switch-HOTSWAP-5-PIN-i.12208293.27011653518?sp_atk=f22f4ed8-b8fe-42c0-926c-30a0047bf2e4&xptdk=f22f4ed8-b8fe-42c0-926c-30a0047bf2e4",
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
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=85cd2b69-b4fe-4cc8-94ae-bdba65e6f74d&xptdk=85cd2b69-b4fe-4cc8-94ae-bdba65e6f74d",
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
