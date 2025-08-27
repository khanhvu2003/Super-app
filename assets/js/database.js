// --- Database V11.2 ---
// Tệp này chứa toàn bộ dữ liệu sản phẩm.
// Để thêm/sửa/xóa sản phẩm, bạn chỉ cần chỉnh sửa trong tệp này.

const database = {
  keyboards: [
    {
      id: "Attack Shark K75 Pro",
      name: "Attack Shark K75 Pro",
      image: "img/k75.png",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6jrnn-lkhjfbci0srsac.16000081692152186.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-Trong-Su%E1%BB%91t-K75-PRO-Esport-N%C3%A2ng-C%E1%BA%A5p-LED-RGB-Tr%E1%BB%A5c-C%C6%A1-White-Switch-C%C3%B3-HOTSWAP-i.12208293.22528189730?sp_atk=59f18f7d-14a6-4905-9ce3-23ec372a58ba&xptdk=59f18f7d-14a6-4905-9ce3-23ec372a58ba",
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
      previewVideo:
        "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwc-m2yure82jpbk1f.16000081732426661.mp4",
      dealLink:
        "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Bluetooth-Vi-Ti%CC%81nh-Attack-Shark-M86-Pro-LED-RGB-Co%CC%81-App-Macro-3-Mode-Hotswap-Pin-Sa%CC%A3c-i.12208293.29468366922?sp_atk=bad337dd-fcb6-40f6-b71d-2682e2a9a0cc&xptdk=bad337dd-fcb6-40f6-b71d-2682e2a9a0cc",
      appPC:
        "https://drive.google.com/file/d/1t6SdPw0_mntOXuPOvzstQu1kE0IqDDLn/view?usp=drive_link",
      appWeb: "",
      videos: [],
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
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwh-m3mxagi3fkm9c7.16000081733883745.mp4",
      dealLink:
        "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Bluetooth-Mini-Attack-Shark-X66-Nu%CC%81m-Xoay-Media-3-Mode-K%C3%AA%CC%81t-N%C3%B4%CC%81i-i.12208293.26220161413?sp_atk=0fc448a6-81b7-44c3-9ddb-5d73694d588a&xptdk=0fc448a6-81b7-44c3-9ddb-5d73694d588a",
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
        "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwj-lyrbslk9pllt4e.16003251724514346.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Ko-D%C3%A2y-Bluetooth-Nh%C3%B4m-CNC-Attack-Shark-X75-Cao-C%E1%BA%A5p-Full-LED-RGB-Cho-M%C3%A1y-T%C3%ADnh-Laptop-i.12208293.27906004277?sp_atk=00ac5cd3-9a03-4cd0-9662-db007da3514b&xptdk=00ac5cd3-9a03-4cd0-9662-db007da3514b",
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
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke16-lt3ml0ppxqdg7a.16000081710923179.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-T%E1%BB%AB-T%C3%ADnh-K85-LED-RGB-Magnetic-Switch-Rapid-Trigger-T%C3%B9y-Ch%E1%BB%89nh-L%E1%BB%B1c-%E1%BA%A4n-Qua-App-Hotswap-i.12208293.24466837594?sp_atk=2bf871a7-ecd7-4bf4-b382-9e13f1968e25&xptdk=2bf871a7-ecd7-4bf4-b382-9e13f1968e25",
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
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke17-llvn8pxgzgm784.16004101728420543.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-K86-RGB-PRO-VIP-C%C3%B3-M%C3%A0n-H%C3%ACnh-App-T%C3%B9y-Ch%E1%BB%89nh-HOTSWAP-5-Pin-L%C3%B3t-Foam-i.12208293.23655235090?sp_atk=70b02146-50e3-438b-860f-87b4052615bb&xptdk=70b02146-50e3-438b-860f-87b4052615bb",
      appPC:
        "https://drive.google.com/drive/folders/1_boz-yXWUwpXQewCd5fSDCHDjRsZ5um4?usp=drive_link",
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
          a: "Thực hiện các bước sau:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `FN + Q`, `FN + W`, hoặc `FN + E` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị và tìm lại bàn phím.",
        },
        {
          q: "Cách thay đổi chế độ đèn LED?",
          a: "Sử dụng tổ hợp phím `Fn + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Xinmeng M71",
      name: "Xinmeng M71",
      image: "img/m71.png",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6ke16-ll3kjs3raoqwa1.16000081693485838.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Khung-Nh%C3%B4m-ALUMINUM-XM-M71-C%E1%BA%A5u-Tr%C3%BAc-GASKET-Hotwsap-5-Pin-M%E1%BA%A1ch-Xu%C3%B4i-Cao-C%E1%BA%A5p-G%C3%B5-C%E1%BB%B1c-S%C6%B0%E1%BB%9Bng-i.12208293.22651416328?sp_atk=41aa037f-177b-4a21-a9a7-8ecd9abb7478&xptdk=41aa037f-177b-4a21-a9a7-8ecd9abb7478",
      appPC:
        "https://drive.google.com/file/d/1SqMCID_yijKXM9k-XwiNiT_SGTpzj87C/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + R` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + Q`, `FN + W` hoặc `FN + E` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "Cách Reset kết nối?",
          a: "Gạt công tắt ở giữ rồi kết nối nhấn tổ hợp phím `FN + T` GIỮ 5S",
        },
      ],
    },
    {
      id: "Xinmeng M75",
      name: "Xinmeng M75",
      image: "img/m75.png",
      previewVideo: "",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=f0210a5f-702b-41d0-8e07-3b6d68384bb0&xptdk=f0210a5f-702b-41d0-8e07-3b6d68384bb0",
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
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + `.",
        },
      ],
    },
    {
      id: "Dark Alien R65",
      name: "Dark Alien R65",
      image: "img/R65.png",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwb-m0i5od1pjffx21.16000081727057449.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Dark-Alien-R65-RGB-Khung-Nh%C3%B4m-Aluminum-Cao-C%E1%BA%A5p-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-C%C3%B3-Hotswap-i.12208293.24386293179?sp_atk=b5bc8fc2-f7dc-45ad-b1e7-15674880e68a&xptdk=b5bc8fc2-f7dc-45ad-b1e7-15674880e68a",
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
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
      ],
    },
    {
      id: "Attack Shark X85 Pro",
      name: "Attack Shark X85 Pro",
      image:
        "https://attackshark.com/cdn/shop/files/1-1_fdd56494-556d-4cea-83a9-142666f07904.jpg?crop=center&height=400&v=1720168663&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwh-lxnpc7ek2uhlcb.16000081720855464.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=7fcabde2-08b5-4580-a804-16d9cbac3fda&xptdk=7fcabde2-08b5-4580-a804-16d9cbac3fda",
      appPC: "",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1MwJUF5i_KgLwErzfl2b0SELF1Wj29hc6/view?usp=drive_link",
          title: "Chỉnh Màn hình sản phẩm tương tự",
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
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
      ],
    },
    {
      id: "X68 HE",
      name: "X68 HE",
      image:
        "https://attackshark.com/cdn/shop/files/08_124c2ed9-35a7-4eef-8a06-53b081fb3625.jpg?v=1739780205&width=800",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwj-m4k8dd9ts24vbb.16005681736271446.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Gaming-Rapid-Trigger-Attack-Shark-X68-HE-Polling-Rate-8KHz-LED-RGB-M%E1%BA%A1ch-Xu%C3%B4i-i.12208293.24740001169?sp_atk=28f82768-517e-4c98-92df-18a11c8a7716&xptdk=28f82768-517e-4c98-92df-18a11c8a7716",
      appPC:
        "https://drive.google.com/drive/folders/1zd_tw1WyjGgB97IgKXHrjjXlCh6d1K1W?usp=sharing",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
        {
          url: "https://drive.google.com/file/d/1tejRESXLWwW5Hip7NJ0tvW6RUTvDkrop/view?usp=drive_link",
          title: "lƯU Ý: CẮM DÂY CHỈNH POLLING RATE. RAPID TRIGGER + SOCD + 8KHZ",
        },
      ],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
        {
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
      ],
    },

    {
      id: "R82HE",
      name: "R82HE",
      image:
        "https://attackshark.com/cdn/shop/files/5_9_fa5d4e16-a769-4a78-9f9d-75ff08f6c47c.jpg?crop=center&height=400&v=1754568250&width=400",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kiny-mcspboh7bxr07a.16000081753846717.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Gaming-Attack-Shark-R82HE-Magnetic-Switch-Rapid-Trigger-0.005mm-Polling-Rate-8000Hz-i.12208293.41110331101",
      appPC:
        "https://drive.google.com/drive/folders/1v8-UMG7esKMVYTmYGZZrZGf_HSnBo0Z6?usp=drive_link",
      appWeb: "https://www.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
      ],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
        {
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
      ],
    },

    {
      id: "Attack Shark X68 MAX HE",
      name: "Attack Shark X68 MAX HE",
      image: "img/x68max.png",
      previewVideo:
        "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kinx-mbt1ovigbwq203.16005581751980871.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Rapid-Trigger-Nh%C3%B4m-CNC-Attack-Shark-X68MAX-Polling-Rate-8KHz-LED-RGB-App-Macro-M%E1%BA%A1ch-Xu%C3%B4i-i.12208293.40506782349?sp_atk=332808d7-3f2e-4e9d-8b9b-1b13345e2a0b&xptdk=332808d7-3f2e-4e9d-8b9b-1b13345e2a0b",
      appPC: "",
      appWeb: "https://www.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
        {
          url: "https://drive.google.com/file/d/1tejRESXLWwW5Hip7NJ0tvW6RUTvDkrop/view?usp=drive_link",
          title: "lƯU Ý: CẮM DÂY CHỈNH POLLING RATE. RAPID TRIGGER + SOCD + 8KHZ",
        },
      ],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra.\n Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
        {
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
        {
          q: "Sự khác biệt giữa Attack Shark X68 HE, X68 PRO và X68 MAX là gì?",
          a: "X68 HE phù hợp cho game thủ tìm kiếm tốc độ phản hồi cao (8000Hz)\n thiết kế đơn giản bằng nhựa cao cấp. X68 PRO hỗ trợ cả không dây và có dây, nhưng polling rate mặc định là 1000Hz.\n X68 MAX HE là bản cao cấp nhất với vỏ nhôm CNC, độ chính xác cao (0.005mm) và polling rate tùy chỉnh từ 125Hz đến 8000Hz.",
        },
      ],
    },

    {
      id: "Attack Shark X65 HE",
      name: "Attack Shark X65 HE",
      image:
        "https://attackshark.com/cdn/shop/files/bai.jpg?v=1740015271&width=800",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw5-m6mh6bggajawd9.16000081740394366.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Gaming-Rapid-Trigger-Attack-Shark-X65HE-Led-RGB-Polling-Rate-8K-Hz-SOCD-App-Macro-i.12208293.26927226409?sp_atk=3c009973-56b7-4d00-81d0-b0fc3b7d52d5&xptdk=3c009973-56b7-4d00-81d0-b0fc3b7d52d5",
      appPC:
        "https://drive.google.com/drive/folders/1RwuU0riPnezA7n7Kdsx9bL11ljd2Zn-_?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
      ],
      faqs: [
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + PGDN`.",
        },
        {
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
      ],
    },
    {
      id: "Attack Shark X65 Pro HE",
      name: "Attack Shark X65 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/3333_2a26e1db-d775-4035-a89c-6fa327167627.jpg?v=1739244875&width=800",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwa-m6mc4hycuct4db.16000081740385872.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X65HE-PRO-Polling-Rate-1K-8K-Hz-Led-RGB-App-i.12208293.29277212403?sp_atk=2167844f-5e06-498e-8a5d-d29790541b2d&xptdk=2167844f-5e06-498e-8a5d-d29790541b2d",
      appPC:
        "https://drive.google.com/file/d/1b4BdQ0siDSIEohif2A8JlYbVOuTvRetn/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
        {
          url: "https://drive.google.com/file/d/1Atm1RzyJ9irk7Sn_O67JSRnOobPiHDi0/view?usp=drive_link",
          title:
            "Chuyển chế độ Win dows sang macOS làm tương tự như X68 Pro HE",
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
        {
          q: "Bàn phím không nhận khi cắm dây, tôi phải làm gì?",
          a: "Hãy thử sử dụng một sợi cáp USB-C khác để kiểm tra. Nếu vẫn không được, vui lòng liên hệ bộ phận hỗ trợ.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + PGDN`.",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + R` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + Q`, `FN + W` hoặc `FN + E` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
      ],
    },
    {
      id: "Attack Shark X68 Pro HE",
      name: "Attack Shark X68 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/06_13d08781-1abb-49e0-b2f9-bf6a453c016c.jpg?crop=center&height=400&v=1735574811&width=400",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwa-m7ss5nq80w1f55.16000081742955281.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X68PRO-HE-3-Mode-LED-RGB-Pin-5000mAh-8000Hz-App-Macro-i.12208293.28430209471?sp_atk=5dfc9002-4027-4b8f-b1f2-4fcb2f7a458c&xptdk=5dfc9002-4027-4b8f-b1f2-4fcb2f7a458c",
      appPC:
        "https://drive.google.com/drive/folders/1IPa9vlq6IxK-_lFMbxH1J6j0A00UDwP2?usp=sharing",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
        {
          url: "https://drive.google.com/file/d/1Atm1RzyJ9irk7Sn_O67JSRnOobPiHDi0/view?usp=drive_link",
          title: "Chuyển chế độ Win dows sang macOS",
        },
        {
          url: "https://drive.google.com/file/d/1tejRESXLWwW5Hip7NJ0tvW6RUTvDkrop/view?usp=drive_link",
          title: "lƯU Ý: CẮM DÂY CHỈNH POLLING RATE. RAPID TRIGGER + SOCD + 8KHZ",
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
        {
          q: "Làm thế nào để chuyển đổi chức năng của hàng phím F?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F (ví dụ: F1-F12 và các phím media).",
        },
        {
          q: "Làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
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
          q: "Làm sao chuyển f1-f12 thành phím số?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F sang phím số.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
      ],
    },
    {
      id: "Attack Shark X82 Pro HE",
      name: "Attack Shark X82 Pro HE",
      image:
        "https://attackshark.com/cdn/shop/files/X82ProHE.620.jpg?crop=center&height=400&v=1746770896&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw0-m9xxrlrywqde25.16000081747625863.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Gaming-Kh%C3%B4ng-D%C3%A2y-Rapid-Trigger-Attack-Shark-X82-PRO-HE-LED-RGB-3-Mode-Pin-S%E1%BA%A1c-Keycap-PBT-i.12208293.42401064520?sp_atk=62a4fa7b-9d60-4c28-bb97-e1b879f4735b&xptdk=62a4fa7b-9d60-4c28-bb97-e1b879f4735b",
      appPC:
        "https://drive.google.com/file/d/1X75mfxOeuOktAybcC7LUW7cYok1hoK0s/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1J6cFPUuu5Aq0OW7ci1cSKpK0pfUudLKm/view?usp=drive_link",
          title: "Chỉnh SOCD",
        },
        {
          url: "https://drive.google.com/file/d/1UkDTqDV45qp0bSA1WFo0bOJ2sSRPfQ0a/view?usp=drive_link",
          title: "lƯU Ý: CẮM DÂY CHỈNH POLLING RATE. RAPID TRIGGER + SOCD + 8KHZ",
        },
        {
          url: "https://drive.google.com/file/d/1Atm1RzyJ9irk7Sn_O67JSRnOobPiHDi0/view?usp=drive_link",
          title:
            "Chuyển chế độ Win dows sang macOS làm tương tự như X68 Pro HE",
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
        {
          q: "Làm sao để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
        {
          q: "Làm thế nào để chuyển đổi chức năng của hàng phím F?",
          a: "Sử dụng tổ hợp phím `Fn + Shift` để chuyển đổi chức năng của hàng phím F (ví dụ: F1-F12 và các phím media).",
        },
        {
          q: "Làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
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
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
      ],
    },
    {
      id: "Attack Shark X86",
      name: "Attack Shark X86",
      image:
        "https://attackshark.com/cdn/shop/files/1_61_4da744bd-50a8-4153-a251-2c3abc462549.jpg?crop=center&height=400&v=1731139402&width=400",
      previewVideo:
        "https://down-bs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw6-m0zbjyaspgd792.16003251728489844.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Full-Nh%C3%B4m-CNC-Attack-Shark-X86-LED-RGB-3-Mode-Hotswap-5-Pin-M%E1%BA%A1ch-Xu%C3%B4i-N%C3%BAm-Xoay-App-i.12208293.28312918857?sp_atk=6fad53d9-abee-403e-94e5-801d0f1aa063&xptdk=6fad53d9-abee-403e-94e5-801d0f1aa063",
      appPC:
        "https://drive.google.com/file/d/1Lkz830ZdU61RUSxqNfUm6e5XPfCJbWuP/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm sao để chuyển layout sang Windows?",
          a: "Sử dụng tổ hợp phím `FN + A`.",
        },
        {
          q: "Làm sao để chuyển layout sang macOS?",
          a: "Sử dụng tổ hợp phím `FN + S`.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
        {
          q: "làm thế nào để reset bàn phím?",
          a: "Nhấn và giữ tổ hợp phím `FN + ESC` trong 5 giây.",
        },
        {
          q: "làm thế nào chuyển đổi chức năng của núm xoay?",
          a: "Nhấn và giữ tổ hợp `FN + Núm xoay`  để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
      ],
    },
    {
      id: "Attack Shark X87",
      name: "Attack Shark X87",
      image:
        "https://attackshark.com/cdn/shop/files/01_cd378b19-410b-4c45-b3ae-73ebe653df57.jpg?crop=center&height=400&v=1726050878&width=400",
      previewVideo:
        "https://down-bs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwh-m0e9vqrg60en4b.16000081726822420.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-X87BT-Led-RGB-Bluetooth-3-Mode-Hotswap-5-pin-M%E1%BA%A1ch-xu%C3%B4i-L%C3%B3t-Foam-i.12208293.26761914988?sp_atk=3b2198ff-c943-4073-8bb2-fd38a5297358&xptdk=3b2198ff-c943-4073-8bb2-fd38a5297358",
      appPC:
        "https://drive.google.com/file/d/1Ds1-a4OYiH8B2vj1ko99PYaiBgwRclt5/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm sao để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + Spacebar` trong 5 giây.",
        },
        {
          q: "Làm sao để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
        },
        {
          q: "Chuyển chế độ LED",
          a: "Sử dụng tổ hợp phím `FN + \\`.",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + 4` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
      ],
    },
    {
      id: "Attack Shark X98",
      name: "Attack Shark X98",
      image: "img/X98.png",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke18-llui7xu86y8v9c.16004081729258619.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-XM98-PRO-V2-LED-RGB-Cao-C%E1%BA%A5p-Hotswap-5-Pin-L%C3%B3t-Foam-PIN-Tr%C3%A2u-i.12208293.19083788176?sp_atk=4eb503db-937a-43c5-a519-7f4c5e4d144d&xptdk=4eb503db-937a-43c5-a519-7f4c5e4d144d",
      appPC:
        "https://drive.google.com/file/d/1G0203avtg3A6JDp7l4OtDz2QMl6MAnKa/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + 4` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "làm thế nào chuyển đổi chức năng của núm xoay?",
          a: "Nhấn và giữ tổ hợp `FN + Núm xoay`  để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
      ],
    },
    {
      id: "Attack shark X98 Pro Max",
      name: "Attack shark X98 Pro Max",
      image:
        "https://attackshark.com/cdn/shop/files/7712088c5dfea910e9869b35a092fd90_90d58bb5-950a-4ef7-9e23-0b4cc3760a08.jpg?crop=center&height=400&v=1735125125&width=400",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwc-m31z5rhf82be33.16005681737831700.mp4",
      dealLink:
        "https://shopee.vn/Ba%CC%80n-Phi%CC%81m-C%C6%A1-Bluetooth-Attack-Shark-X98-PRO-MAX-C%C3%B3-M%C3%A0n-H%C3%ACnh-3-Mode-cho-m%C3%A1y-t%C3%ADnh-laptop-pc-i.12208293.28918629132?sp_atk=cfe1d8e7-885e-46b8-a0f1-3d58e00c488f&xptdk=cfe1d8e7-885e-46b8-a0f1-3d58e00c488f",
      appPC:
        "https://drive.google.com/drive/folders/1Cd1iWZ9T-tPRi1Ey2IkT0CTSFg44tuqT?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
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
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím `FN + 4` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "làm thế nào chuyển đổi chức năng của núm xoay?",
          a: "Nhấn và giữ tổ hợp `FN + Núm xoay`  để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
      ],
    },
    {
      id: "Attack Shark M87",
      name: "Attack Shark M87",
      image:
        "https://attackshark.com/cdn/shop/files/M87.13.jpg?crop=center&height=400&v=1712667588&width=400",
      previewVideo: "",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Gaming-Kh%C3%B4ng-D%C3%A2y-Bluetooth-XM87-V2-PRO-NEW-2025-LED-RGB-Pro-Keycap-X%E1%BB%8Bn-White-Switch-Hotswap-3-Mode-i.12208293.23256302840?sp_atk=76f48de1-67ec-4c3f-836a-b11e23f1034b&xptdk=76f48de1-67ec-4c3f-836a-b11e23f1034b",
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
          q: "Làm sao để kiểm tra mức pin?",
          a: "Sử dụng tổ hợp phím `FN + Backspace`.",
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
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
        {
          q: "Làm thế nào để đổi led nền?",
          a: "Nhấn và tổ hợp phím `Fn + CTRL` .",
        },
      ],
    },
    {
      id: "AULA F98",
      name: "AULA F98",
      image: "img/F98.png",
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
          a: "Nhấn tổ hợp `FN + Núm xoay` để chuyển đổi giữa chế độ điều chỉnh Media và LED.",
        },
      ],
    },
    {
      id: "AULA F99 Pro",
      name: "AULA F99 Pro",
      image: "img/F99.png",
      previewVideo: "",
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-AULA-F99PRO-V2-LED-RGB-3-Mode-L%C3%B3t-Foam-Hotswap-5-Pin-M%E1%BA%A1ch-Xu%C3%B4i-i.12208293.28258089985?sp_atk=5d9f282d-8101-44a4-ae46-3e54c4e5e62d&xptdk=5d9f282d-8101-44a4-ae46-3e54c4e5e62d",
      appPC:
        "https://drive.google.com/file/d/1u5d7dvW8VqeGFtk2C6MDAtabBQAuo6nO/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để chuyển đổi layout cho các hệ điều hành?",
          a: "- **Android:** `FN + Q`\n- **Windows:** `FN + W`\n- **macOS:** `FN + E`",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím FN + ` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
      ],
    },
    {
      id: "AULA F75",
      name: "AULA F75",
      image: "img/AULA F75.png",
      previewVideo:
        "https://down-bs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwj-lxdid37fc5i331.16000081720238390.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Bluetooth-AULA-F75-PRO-V2-NEW-2025-C%C3%B3-App-Led-RGB-i.12208293.25233149243?sp_atk=b8ce0df0-c364-447f-b0b6-71f3ee38ee80&xptdk=b8ce0df0-c364-447f-b0b6-71f3ee38ee80",
      appPC:
        "https://drive.google.com/file/d/1bbgGrh-fXG9D3PW6wkk4fo081IFxR3V_/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để reset bàn phím về cài đặt gốc?",
          a: "Nhấn và giữ tổ hợp phím `Fn + ESC` trong 5 giây.",
        },
        {
          q: "Làm thế nào để chuyển đổi chức năng của núm xoay?",
          a: "Nhấn và giữ tổ hợp `FN + Núm xoay` trong 5s để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn và giữ tổ hợp phím FN + ` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Chọn kênh Bluetooth cần kết nối lại bằng cách giữ `FN + 1`, `FN + 2` hoặc `FN + 3` trong 5 giây.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "Làm thế nào để đổi chế độ LED?",
          a: "nhấn tổ hợp phím `FN + \\ để chuyển chế độ LED`.",
        },
      ],
    },

    {
      id: "Dark Alien R83",
      name: "Dark Alien R83",
      image: "img/R83 DARK ALIEN.png",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw2-m0mkji3pu6xba2.16000081727324583.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Full-Case-Nh%C3%B4m-CNC-Dark-Alien-R83-Led-RGB-3-Mode-Lime-Switch-HOTSWAP-5-PIN-i.12208293.27011653518?sp_atk=f22f4ed8-b8fe-42c0-926c-30a0047bf2e4&xptdk=f22f4ed8-b8fe-42c0-926c-30a0047bf2e4",
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
        {
          q: "Làm thế nào để kết nối lại USB 2.4G?",
          a: "Thực hiện các bước sau:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `FN + R` trong 5 giây cho đến khi đèn báo nháy nhanh.\n3. Cắm lại đầu thu USB vào máy tính để hoàn tất kết nối.",
        },
        {
          q: "Làm sao để kết nối lại Bluetooth?",
          a: "Thực hiện các bước sau:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `FN + Q` (kênh 1), `FN + W` (kênh 2), hoặc `FN + E` (kênh 3) trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
      ],
    },
    {
      id: "Attack Shark X85",
      name: "Attack Shark X85",
      image:
        "https://attackshark.com/cdn/shop/files/X85_58458282-1c5f-44a3-99dd-f04a714b9f9e.jpg?crop=center&height=400&v=1713408054&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke17-ltxjlfefvhg1ea.16004111715529362.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-X85-PRO-V2-M75-Led-RGB-M%E1%BA%A1ch-Xu%C3%B4i-Hotswap-5-Pin-3-Mode-K%E1%BA%BFt-N%E1%BB%91i-i.12208293.25272486045?sp_atk=85cd2b69-b4fe-4cc8-94ae-bdba65e6f74d&xptdk=85cd2b69-b4fe-4cc8-94ae-bdba65e6f74d",
      appPC:
        "https://drive.google.com/file/d/1qVwtZ4wFMRAl6SAkHlQby-39jh4e3ocI/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để bật/tắt đèn LED?",
          a: "Sử dụng tổ hợp phím `Fn + Backspace`.",
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
          q: "Làm sao chuyển núm xoay thành media và Led?",
          a: "nhấn giữ núm xoay trong 5s để chuyển đổi giữa chế độ điều chỉnh Media (âm lượng) và chế độ LED (độ sáng).",
        },
      ],
    },

    {
      id: "X820 Ultra",
      name: "Attack Shark X820 Ultra",
      image: "https://attackshark.com/cdn/shop/files/X820Ultra.1145.jpg?v=1752654059&width=800",          // TODO: điền link ảnh
      previewVideo: "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kio3-mcsoy5y9axss5b.16000081753846083.mp4",   // TODO: điền link video
      dealLink: "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-X820-Ultra-Gasket-%C3%8Am-%C3%81i-Hot-Swap-LED-RGB-M%C3%A0n-H%C3%ACnh-LCD-Pin-4000mAh-i.12208293.27789159318",       // TODO: điền link mua hàng
      appPC: "https://drive.google.com/drive/folders/1O05lWl_k4qa5S_AmbMytIOKBMp2ViyLh?usp=drive_link",
      appWeb: "",
      videos: [{
        url: "https://drive.google.com/file/d/1BKG9aOmuDr8IX5MEV2mFfBvgtl5M2aEi/view?usp=drive_link",
        title: "Hướng dẫn tùy chỉnh màn hình",
      },
      {
        url: "https://drive.google.com/file/d/1azp3kNol4tM-hgKcH26Nm6K9xAQHSH4b/view?usp=drive_link",
        title: "Hướng dẫn chỉnh thời gian trên màn hình",
      },],
      faqs: [
        {
          q: "Cách kết nối có dây?",
          a: "Gạt công tắc về vị trí giữa (chế độ có dây) rồi cắm cáp để sử dụng."
        },
        {
          q: "Cách kết nối qua USB 2.4G?",
          a:
            "1) Gạt công tắc sang chế độ 2.4G.\n" +
            "2) Nhấn tổ hợp FN + 4 trong 5 giây để reset/ghép lại đầu thu."
        },
        {
          q: "Cách kết nối Bluetooth?",
          a:
            "Có 3 kênh BT:\n" +
            "- Kênh 1: FN + 1\n" +
            "- Kênh 2: FN + 2\n" +
            "- Kênh 3: FN + 3\n" +
            "Nhấn giữ 5 giây tổ hợp kênh tương ứng để reset và vào chế độ ghép nối."
        },
        {
          q: "Làm sao reset bàn phím hoặc vào app?",
          a: "Nhấn giữ FN + ESC trong 5 giây."
        },
        {
          q: "Đổi giữa chỉnh LCD và Media thế nào?",
          a: "Nhấn FN + nhấn núm xoay 1 lần để chuyển chế độ giữa điều chỉnh Màn LCD và Media."
        },
        {
          q: "Chuyển layout Windows/Mac?",
          a: "Gạt công tắc chuyển đổi layout Win/Mac."
        },
        {
          q: "Đổi chế độ LED?",
          a: "Nhấn tổ hợp FN + \\ để đổi chế độ LED (hoặc chỉnh trong app và trên màn hình)."
        }
      ]
    },


    {
      id: "Free world M87",
      name: "Free world M87",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lme73lbh8q1rc9.webp",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwg-m85ygcx8tmkn0e.16000081743752817.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Bluetooth-PIN-S%E1%BA%A1c-M87-LED-gi%E1%BA%A3-c%C6%A1-D%C3%B9ng-Cho-M%C3%A1y-T%C3%ADnh-Laptop-%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-i.12208293.16799057109?sp_atk=04d849ab-80f8-4d41-8352-4f717a217645&xptdk=04d849ab-80f8-4d41-8352-4f717a217645",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/15JaEVIQWAhh31Ly_WdJ3YTJrLGhJP8m6/view?usp=drive_link",
          title: "Cách reset bàn phím M87",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Sản phẩm gặp vấn đề kết nối USB 2.4G hoặc Bluetooth, phải làm sao?",
          a: "Thao tác kết nối lại USB:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `ESC + Q` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại. \n\nThao tác kết nối lại Bluetooth:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `ESC + Q` trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
    {
      id: "Free world M96",
      name: "Free world M96",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu0e14cc8tgff0.webp",
      previewVideo:
        "https://down-bs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw3-m85y0he56smmd2.16000081743752074.mp4",
      dealLink:
        "https://shopee.vn/B%E1%BB%99-B%C3%A0n-Ph%C3%ADm-Kh%C3%B4ng-D%C3%A2y-Bluetooth-M96-LED-7-M%C3%A0u-C%C3%B3-M%C3%A0n-H%C3%ACnh-2-Mode-Ph%C3%ADm-PBT-Cao-C%E1%BA%A5p-G%C3%B5-%C3%8Am-Ch%E1%BB%91ng-%E1%BB%92n-Cho-Win-Mac-OS-i.12208293.25173777909?sp_atk=27429a0f-a126-49a5-961c-df540616e2ad&xptdk=27429a0f-a126-49a5-961c-df540616e2ad",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/15JaEVIQWAhh31Ly_WdJ3YTJrLGhJP8m6/view?usp=drive_link",
          title: "Cách reset bàn phím tương tự m87",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Sản phẩm gặp vấn đề kết nối USB 2.4G hoặc Bluetooth, phải làm sao?",
          a: "Thao tác kết nối lại USB:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `ESC + Q` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại. \n\nThao tác kết nối lại Bluetooth:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `ESC + Q` trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },

    {
      id: "Free world M75",
      name: "Free world M75",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8d2k8lgfg4u41.webp",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw1-m8g2pm5kylokb4.16000101744365321.mp4",
      dealLink:
        "https://shopee.vn/B%E1%BB%99-B%C3%A0n-Ph%C3%ADm-V%C3%A0-Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Bluetooth-M75-LED-C%C3%B3-M%C3%A0n-H%C3%ACnh-Pin-S%E1%BA%A1c-Keycap-PBT-Cho-Pc-Laptop-%C4%90T-i.12208293.26532687449?sp_atk=21e3d64f-bdb7-45cc-b893-f1fc44a046f7&xptdk=21e3d64f-bdb7-45cc-b893-f1fc44a046f7",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/15JaEVIQWAhh31Ly_WdJ3YTJrLGhJP8m6/view?usp=drive_link",
          title: "Cách reset bàn phím tương tự m87",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Sản phẩm gặp vấn đề kết nối USB 2.4G hoặc Bluetooth, phải làm sao?",
          a: "Thao tác kết nối lại USB:\n1. Rút đầu thu USB 2.4G ra khỏi máy tính.\n2. Nhấn giữ tổ hợp phím `ESC + Q` trong 5 giây.\n3. Cắm lại đầu thu vào máy tính để kết nối lại. \n\nThao tác kết nối lại Bluetooth:\n1. Gạt công tắc bàn phím sang chế độ Bluetooth.\n2. Nhấn giữ `ESC + Q` trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên thiết bị của bạn và tìm lại bàn phím.",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },

    {
      id: "Free world M68",
      name: "Free world M68",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m21vuy2rbezf32.webp",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwc-m2m4tcct8jay30.16005581738514801.mp4",
      dealLink:
        "https://shopee.vn/B%C3%B4%CC%A3-Ba%CC%80n-Phi%CC%81m-Va%CC%80-Chu%C3%B4%CC%A3t-Bluetooth-FreeWolf-M68-LED-Pro-Go%CC%83-Si%C3%AAu-%C3%8Am-Pin-Sa%CC%A3c-Keycap-PBT-Cho-Pc-Lap-i.12208293.28866215687?sp_atk=04c3a524-9722-4ac0-a8f7-247de0bb9d33&xptdk=04c3a524-9722-4ac0-a8f7-247de0bb9d33",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/15JaEVIQWAhh31Ly_WdJ3YTJrLGhJP8m6/view?usp=drive_link",
          title: "Cách reset bàn phím tương tự m87",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Cách kết nối Bluetooth cho bàn phím?",
          a: "1. Gạt công tắc qua chế độ Bluetooth.\n2. Bàn phím có 2 chế độ kết nối với 3 thiết bị khác nhau.\n3. Ấn tổ hợp `FN + E`, `FN + R`, `FN + T` để kết nối với 3 thiết bị khác nhau.\n4. Ấn tổ hợp `ESC + Q` tầm 3s để reset thiết bị cũ.\n5. Ấn tổ hợp `FN + Dấu Cách` 5 giây để reset bàn phím.",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },

    {
      id: "Free world K8",
      name: "Free world K8",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnr17r8m9abedb.webp",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke16-lnr232wfsdm500.16000081699266098.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Kh%C3%B4ng-D%C3%A2y-M%C3%A1y-T%C3%ADnh-K8BT-Bluetooth-5.0-Hotswap-Red-Switch-LED-Gaming-G%C3%B5-%C3%8Am-L%C3%B3t-Foam-i.12208293.25100267594?sp_atk=e497836e-4e5b-45e2-91b5-69c7a55c2454&xptdk=e497836e-4e5b-45e2-91b5-69c7a55c2454",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1ldKF6afOCLH9gc_HsextdtoSaNF0_RO2/view?usp=drive_link",
          title: "Cách reset bàn phím Free world K8",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Cách kết nối Bluetooth cho bàn phím?",
          a:
            "1. Gạt công tắc qua chế độ Bluetooth.\n" +
            "2. Ấn giữ tổ hợp phím để chọn kênh kết nối (ấn giữ tổ hợp 5s để tìm Bluetooth):\n" +
            "   - `FN + Q`\n" +
            "   - `FN + W`\n" +
            "   - `FN + E`\n" +
            "3. Sau đó kết nối với thiết bị 'K8BT 5.0' và sử dụng.\n" +
            "   Ấn giữ tổ hợp 5s cũng để reset thiết bị.",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },

    {
      id: "Free world K68",
      name: "Free world K68",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvv66wy32l0b7f.webp",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110107/mms/sg_24ac28b8-1475-41a3-9227-78557fd79907_000288.16004101726447280.mp4",
      dealLink:
        "https://shopee.vn/B%C3%A0n-Ph%C3%ADm-C%C6%A1-Bluetooth-Kh%C3%B4ng-D%C3%A2y-K68BT-Tr%E1%BB%A5c-C%C6%A1-Red-Switch-G%C3%B5-C%E1%BB%B1c-%C4%90%C3%A3-C%C3%B3-Hotswap-K%E1%BA%BFt-N%E1%BB%91i-M%C3%A1y-T%C3%ADnh-%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Tablet-i.12208293.20259729410?sp_atk=dbce8813-a956-4ef2-a723-657e7d1c9fe8&xptdk=dbce8813-a956-4ef2-a723-657e7d1c9fe8",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1oFXMILutFscnM-4tGVxNpuLSudkAH0Td/view?usp=drive_link",
          title: "Cách reset bàn phím Free world K68",
        },
      ],
      faqs: [
        {
          q: "Lưu ý ",
          a: "Sản phẩm không hỗ trợ phần mềm, chỉ có thể sử dụng các phím tắt cơ bản.",
        },
        {
          q: "Cách kết nối Bluetooth cho bàn phím?",
          a: "Ấn giữ `FN + W` hoặc `FN + E`.",
        },
        {
          q: "Cách kết nối qua USB 2.4Ghz và Type C?",
          a: "Ấn giữ `FN + Q` rồi cắm cổng USB hoặc cổng Type C vào PC. \n *Chú ý: Lắp pin và bật công tắc trước!",
        },
        {
          q: "làm sao để chuyển đổi giữa các chế độ LED?",
          a: "Sử dụng tổ hợp phím `FN + \\` để chuyển đổi giữa các hiệu ứng LED.",
        },
      ],
    },
  ],
  mice: [
    {
      id: " FREE WOLF V5",
      name: "FREE WOLF V5",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln3fg0f3yyk65@resize_w450_nl.webp",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwd-m7c0oi6yrm6440.16006711742393714.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-M%C3%A1y-T%C3%ADnh-FREE-WOLF-V5-PRO-2025-LED-RGB-%C4%91%E1%BB%95i-m%C3%A0u-c%E1%BB%B1c-%C4%91%E1%BA%B9p-chuy%C3%AAn-game-ch%E1%BB%89nh-%C4%91%C6%B0%E1%BB%A3c-dpi-app-c%C3%A0i-macro-i.12208293.1535102867?sp_atk=618a3f46-4654-4800-b6a4-554fa407ecea&xptdk=618a3f46-4654-4800-b6a4-554fa407ecea",
      appPC:
        "https://drive.google.com/file/d/1HKNwXkU_idQeXSamDZewi5SSEtq3rM3Y/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1LyoGF0vH7ZlneEq-0dFPBIR0C3dNsr2O/view?usp=drive_link",
          title: "chỉnh auto click v5",
        },
        {
          url: "https://drive.google.com/file/d/1MM3M-Ofu5vhscYKT5zpPsopCZ2ACCDpo/view?usp=drive_link",
          title: "fix lỗi không cài được app",
        },
        {
          url: "https://drive.google.com/file/d/1Ns-WzAuAt9uXamCFpMUhEaiaEl_mKO3Y/view?usp=drive_link",
          title: "V5 Macro liên minh",
        },
      ],
      faqs: [],
    },
    {
      id: " FREE WOLF X7",
      name: "FREE WOLF X7",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvv66wy316fv2b.webp",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6jrno-lhdccn70044z36.16003251745061214.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-M%C3%A1y-T%C3%ADnh-Bluetooth-X7-Wireless-Pin-S%E1%BA%A1c-K%E1%BA%BFt-N%E1%BB%91i-2-Ch%E1%BA%BF-%C4%90%E1%BB%99-Cho-M%E1%BB%8Di-Thi%E1%BA%BFt-B%E1%BB%8B-M%C3%A1y-T%C3%ADnh-Laptop-i.12208293.21779673135?sp_atk=be6053ee-59e4-4229-8fb8-9a5bc2484034&xptdk=be6053ee-59e4-4229-8fb8-9a5bc2484034",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1c6OcXhsh47XITpOdi21AixinxAut45A0/view?usp=drive_link",
          title: "Hướng Dẫn kết nối FREE WOLF X7",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm FREE WOLF X7",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },
    {
      id: "Attack shark R1",
      name: "Attack shark R1",
      image:
        "https://attackshark.com/cdn/shop/files/1_8a09869b-741a-4c58-a1bd-759f66e37b61.jpg?crop=center&height=400&v=1701937703&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke17-lp4zrx42is0rb8.16000081702288934.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Bluetooth-Chip-PAW3311-Attack-Shark-R1-18000DPI-3-Mode-C%C3%B3-App-Ch%E1%BB%89nh-Macro-Pin-S%E1%BA%A1c-i.12208293.23988101037?sp_atk=647065b0-35b0-434c-b428-0577b28f64b9&xptdk=647065b0-35b0-434c-b428-0577b28f64b9",
      appPC:
        "https://drive.google.com/file/d/1eLCCfykl_CYqwrrh7uB3O_58mivkaXld/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1HzUYbT75UD69XZV0ZE4RF-UDH1_XLzyh/view?usp=drive_link",
          title: "Macro Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1y1KuDP3JxTshoNNrJ3J42Aub_VO9-ioz/view?usp=drive_link",
          title: "Auto Click Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1oDpUM2e9sJz2DQPfFyHQP2ZlH3RS8aZ4/view?usp=drive_link",
          title: "Reset Attack Shark R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm FREE WOLF X7",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
        {
          q: "Cách chỉnh thời gian Sleep Chuột Attack shark R1?",
          a: "tải file để update \n https://drive.google.com/file/d/1Prz_mp31TL8B-vdTK6SP-5xt8cQgJHm7/view?usp=drive_link",
        },
      ],
    },
    {
      id: "Attack shark X11",
      name: "Attack shark X11",
      image:
        "https://attackshark.com/cdn/shop/files/3_5903f8ba-cd09-4b98-9443-1e2a658243d1.png?crop=center&height=400&v=1716263682&width=400",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke14-lvl5zklzvnrwb4.16004111721244156.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Bluetooth-Chip-PAW3311-Attack-Shark-R1-18000DPI-3-Mode-C%C3%B3-App-Ch%E1%BB%89nh-Macro-Pin-S%E1%BA%A1c-i.12208293.23988101037?sp_atk=647065b0-35b0-434c-b428-0577b28f64b9&xptdk=647065b0-35b0-434c-b428-0577b28f64b9",
      appPC:
        "https://drive.google.com/file/d/1YfBoo0c-Ynffs7R2z1Tfy3W3IaO_REzy/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1HzUYbT75UD69XZV0ZE4RF-UDH1_XLzyh/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Macro Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1y1KuDP3JxTshoNNrJ3J42Aub_VO9-ioz/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Auto Click Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1oDpUM2e9sJz2DQPfFyHQP2ZlH3RS8aZ4/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Reset Attack Shark R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark X11",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
        {
          q: "Cách chỉnh thời gian Sleep Chuột Attack shark X11?",
          a: "tải APP CHỈNH THỜI GIAN TRONG PHẦN SLEEP Bên phải App sản phẩm",
        },
      ],
    },

    {
      id: "Attack Shark X11 SE",
      name: "Attack Shark X11 SE",
      image: "img/mouse/X11SE.jpg",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kio4-mbx9j003wtwq63.16000081751943583.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-FreeWolf-X11SE-3-Ch%E1%BA%BF-%C4%90%E1%BB%99-K%E1%BA%BFt-N%E1%BB%91i-Chip-PAW3311-22.000-DPI-Pin-S%E1%BA%A1c-Switch-Huano-i.12208293.41656976929?sp_atk=74103745-3a5e-4c9e-89c6-0910b02c0b95&xptdk=74103745-3a5e-4c9e-89c6-0910b02c0b95",
      appPC:
        "https://drive.google.com/drive/folders/1cMRDs3n6Cqqj11XuYyrFVZXx0bjIXJs0?usp=drive_link",
      appWeb: "http://szslxd-tech.com/#/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1HzUYbT75UD69XZV0ZE4RF-UDH1_XLzyh/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Macro Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1y1KuDP3JxTshoNNrJ3J42Aub_VO9-ioz/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Auto Click Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1oDpUM2e9sJz2DQPfFyHQP2ZlH3RS8aZ4/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Reset Attack Shark R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark X11 SE?",
          a: "Để kết nối chế độ USB 2.4G:\n1. Gạt công tắc chuột sang chế độ USB 2.4G và tháo USB ra khỏi máy.\n2. Nhấn giữ nút RESET ở mặt dưới trong 5 giây để vào chế độ ghép nối.\n3. Cắm lại USB vào máy để kết nối.\n\nĐể kết nối Bluetooth:\n1. Gạt công tắc sang Bluetooth.\n2. Nhấn giữ RESET 5 giây để ghép nối.\n3. Kết nối qua cài đặt Bluetooth của thiết bị.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Hỗ trợ kết nối với điện thoại, tablet, laptop, PC, Smart TV... nhưng không tương thích với PS4, PS5, Xbox, iPhone.",
        },
        {
          q: "Cách chỉnh thời gian Sleep Chuột Attack Shark X11 SE?",
          a: "Tải phần mềm và điều chỉnh thời gian trong mục Sleep bên phải giao diện phần mềm.",
        },
        {
          q: "Điểm khác biệt giữa Attack Shark X11 và X11 SE là gì?",
          a: "Cả hai chuột đều dùng sensor PixArt PAW3311, DPI lên đến 22.000 và switch Huano/Huyu.\n Tuy nhiên, X11 SE không có đế sạc LED RGB còn X11 có tích hợp đế sạc đẹp mắt.\n Các thông số khác như polling rate, trọng lượng và kết nối đều giống nhau.",
        },
      ],
    },

    {
      id: "Free Wolf A7",
      name: "Free Wolf A7",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcranwv8d5f13f@resize_w900_nl.webp",          // TODO: điền link ảnh
      previewVideo: "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kio9-md03i3gdxkkc3a.16000081754294297.mp4",   // TODO: điền link video
      dealLink: "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-Free-Wolf-A7-C%E1%BA%A3m-Bi%E1%BA%BFn-PAW3311-24.000-DPI-Dock-S%E1%BA%A1c-RGB-M%C3%A0n-H%C3%ACnh-%C4%90a-N%C4%83ng-i.12208293.41360709601",       // TODO: điền link mua hàng
      appPC: "https://drive.google.com/drive/folders/1UYUn3kY_dMwPYsP2eEV14K7tk89eWt8T?usp=drive_link",          // TODO: link app tùy chỉnh (nếu có)
      appWeb: "",         // TODO: link app web (nếu có)
      videos: [],
      faqs: [
        {
          q: "Kết nối qua USB 2.4G như thế nào?",
          a:
            "Thực hiện 4 bước:\n" +
            "1) Gạt công tắc sang chế độ USB.\n" +
            "2) Rút đầu thu USB 2.4G khỏi thiết bị.\n" +
            "3) Nhấn nút PAIR giữ 5 giây để reset kết nối.\n" +
            "4) Cắm lại đầu thu USB 2.4G vào thiết bị."
        },
        {
          q: "Kết nối qua Bluetooth như thế nào?",
          a:
            "Thực hiện 3 bước:\n" +
            "1) Gạt công tắc sang chế độ Bluetooth.\n" +
            "2) Nhấn giữ nút PAIR 5 giây để vào chế độ ghép nối.\n" +
            "3) Quét Bluetooth trên thiết bị và kết nối với chuột."
        },
        {
          q: "Chuột có app để tùy chỉnh không?",
          a:
            "Có. Có app riêng để tùy chỉnh macro và các chức năng như macro, auto click..."
        }
      ]
    },


    {
      id: "Attack shark X6",
      name: "Attack shark X6",
      image:
        "https://attackshark.com/cdn/shop/files/X6-b.jpg?crop=center&height=400&v=1701941287&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke17-lp0kiyeqic7vfd.16000081702021156.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Bluetooth-Chip-PAW3395-Gaming-Attack-Shark-X6-Con-L%C4%83n-TTC-Dock-S%E1%BA%A1c-LED-RGB-i.12208293.25602951571?sp_atk=36e3160e-c30e-4d6b-a566-c6edece7bd2a&xptdk=36e3160e-c30e-4d6b-a566-c6edece7bd2a",
      appPC:
        "https://drive.google.com/file/d/1-Sdk4D1kehcXdfchi9LUEhLezkG5MEt0/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1HzUYbT75UD69XZV0ZE4RF-UDH1_XLzyh/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Macro Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1y1KuDP3JxTshoNNrJ3J42Aub_VO9-ioz/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Auto Click Attack Shark R1",
        },
        {
          url: "https://drive.google.com/file/d/1oDpUM2e9sJz2DQPfFyHQP2ZlH3RS8aZ4/view?usp=drive_link",
          title: "Sản phẩm làm tương tự Reset Attack Shark R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark X6",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
        {
          q: "Cách chỉnh thời gian Sleep Chuột Attack shark X6?",
          a: "tải APP CHỈNH THỜI GIAN TRONG PHẦN SLEEP Bên phải App sản phẩm",
        },
      ],
    },
    {
      id: "FREE WOLF M1",
      name: "FREE WOLF M1",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lkep8vj68lnge2.webp",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6jrno-lkbvta5y6dukd6.16004111728336810.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-C%C6%A1-Gaming-Chuy%C3%AAn-Ch%C6%A1i-Game-M%C3%A1y-T%C3%ADnh-PC-Laptop-M1-PRO-2025-Th%E1%BA%BF-H%E1%BB%87-M%E1%BB%9Bi-LED-RGB-Nhi%E1%BB%81u-Ch%E1%BA%BF-%C4%90%E1%BB%99-DPI-6-M%E1%BB%A9c-i.12208293.9246393039?sp_atk=1c48f67f-2411-4ce7-ac9d-d6f805512870&xptdk=1c48f67f-2411-4ce7-ac9d-d6f805512870",
      appPC:
        "https://drive.google.com/file/d/19BFTCb2Xc2A_CITU--8REqGSQUBbMj1z/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1SeyrfxIi5mVQF5GvfppqFI6G3Sa5ugXr/view?usp=drive_link",
          title: "Hướng dẫn Macro liên minh FREE WOLF M1",
        },
      ],
      faqs: [],
    },
    {
      id: "FREE WOLF A6",
      name: "FREE WOLF A6",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9b4e14kli8702.webp",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwh-m9l1t157v2o4bb.16000081746845709.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-FreeWolf-A6-C%E1%BA%A3m-Bi%E1%BA%BFn-PAW3311-24000-DPI-Si%C3%AAu-Nh%E1%BA%B9-59g-Switch-Huano-Pin-S%E1%BA%A1c-i.12208293.26135881438?sp_atk=a842eff9-0d0f-422d-b17b-07d519885ef7&xptdk=a842eff9-0d0f-422d-b17b-07d519885ef7",
      appPC:
        "https://drive.google.com/file/d/10GP8v7SmDBJt6MAfq3YiQkgOYgD8f1cm/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm FREE WOLF A6",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack Shark R5",
      name: "Attack Shark R5",
      image:
        "https://attackshark.com/cdn/shop/files/1_6ff4d1aa-4583-48d9-ba91-81b4ad706e42.png?crop=center&height=400&v=1749280949&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw5-m7unue9kshqeab.16000081743069093.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-R5-Ultra-S%E1%BB%A3i-Carbon-PAW3950MAX-DPI-42.000-8000Hz-i.12208293.26380684555?sp_atk=3589fbe4-2755-4dcc-82de-f41d6ecc09b1&xptdk=3589fbe4-2755-4dcc-82de-f41d6ecc09b1",
      appPC: "",
      appWeb: "https://www.xvalleyinno.top/Test/#/project/items",
      videos: [],
      faqs: [
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark R5",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính \n2. Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
      ],
    },
    {
      id: "ATTACK SHARK X1",
      name: "ATTACK SHARK X1",
      image:
        "https://attackshark.com/cdn/shop/files/1_67c03d8b-c585-4ce6-93af-311b1f1a934c.jpg?crop=center&height=400&v=1746769902&width=400",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw4-m80bma9c27oucf.16000081743411749.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Gaming-Attack-Shark-X1-PAW3395-Pro-40.000DPI-Dock-S%E1%BA%A1c-LED-RGB-i.12208293.29580115737?sp_atk=03edf011-3026-4385-ad5c-bf2860abdd40&xptdk=03edf011-3026-4385-ad5c-bf2860abdd40",
      appPC:
        "https://drive.google.com/drive/folders/1jIGRov0w-oUQ1WZ6NY8ctwLHCqqFrVR6?usp=drive_link",
      appWeb: "http://szslxd-tech.com/#/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm ATTACK SHARK X1",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack Shark R2",
      name: "Attack Shark R2",
      image:
        "https://attackshark.com/cdn/shop/files/fc43558c9b76e2b6d137b61b0538f3cb.jpg?crop=center&height=400&v=1740735916&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwa-lyvm7fxopefh1e.16003251730227227.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-R2-Magie-Si%C3%AAu-Chip-PAW3950-MAX-Th%E1%BA%BF-H%E1%BB%87-M%E1%BB%9Bi-Polling-Rate-8K-i.12208293.28657694837?sp_atk=2ded9e60-dcc4-4c13-be8f-6ef95bc8e632&xptdk=2ded9e60-dcc4-4c13-be8f-6ef95bc8e632",
      appPC:
        "https://drive.google.com/file/d/1byeY_whh3p68OMLAgV8xygpgtRyvKKAY/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1O0Ti_G8nJKRvf6ZSuY09MqEU43n9M791/view?usp=drive_link",
          title: "Hướng dẫn cài đặt Attack Shark R2",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark R2",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính \n2. Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack Shark R3",
      name: "Attack Shark R3",
      image:
        "https://attackshark.com/cdn/shop/files/7_e7020d5a-14d8-4f73-b1b3-3bf90a565766.jpg?crop=center&height=400&v=1737168023&width=400",
      previewVideo:
        "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6ke14-lv30ckopge0p5f.16003251722336715.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Bluetooth-Attack-Shark-R3-H%E1%BB%A3p-Kim-Magie-Polling-Rate-8K-Kh%C3%B4ng-D%C3%A2y-Si%C3%AAu-Chip-PAW3395-26000-DPI-i.12208293.24779419228?sp_atk=30648100-5921-4b49-90e2-8f77929c9d41&xptdk=30648100-5921-4b49-90e2-8f77929c9d41",
      appPC:
        "https://drive.google.com/file/d/1byeY_whh3p68OMLAgV8xygpgtRyvKKAY/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [
        {
          url: "https://drive.google.com/file/d/1O0Ti_G8nJKRvf6ZSuY09MqEU43n9M791/view?usp=drive_link",
          title: "Hướng dẫn cài đặt App làm tương tự Attack Shark R2",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark R3",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính \n2. Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },
    {
      id: "Attack Shark R6",
      name: "Attack Shark R6",
      image:
        "https://attackshark.com/cdn/shop/files/d92e076f69cb1a6f81c9bab8cd8f57a2_7acc51df-a0b6-4af5-b9e3-0f73e82b0dd0.jpg?crop=center&height=400&v=1727424971&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw5-m2lxgdttad521c.16003251732819496.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Bluetooth-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-R6-PAW3950-MAX-Si%C3%AAu-Nh%E1%BA%B9-38G-42000DPI-Dongle-8Khz-i.12208293.25537351714?sp_atk=ddccca51-e168-43dc-989f-3e482cd14038&xptdk=ddccca51-e168-43dc-989f-3e482cd14038",
      appPC:
        "https://drive.google.com/file/d/1in_bKGmGqp-i06MxMIWlDf_cdekORHPf/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark R6",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính \n2. Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ Nhấn đồng thời Chuột trái / Con lăn / Chuột Phải trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack Shark G3",
      name: "Attack Shark G3",
      image:
        "img/mouse/Attack_Shark_G3.jpg",
      previewVideo: "",
      dealLink: "",
      appPC:
        "https://drive.google.com/file/d/139QDszsDVpUnUM_EqitDR15hSFSoi00B/view?usp=drive_link",
      appWeb: "http://szslxd-tech.com/#/",
      videos: [],
      specs: {
        giaoDienSanPham: "USB / 2.4G / Bluetooth",
        giaoDienSac: "USB Type-C",
        sensor: "PixArt PAW3311",
        chipDieuKhien: "Broadcom BK3620",
        tanSoTruyen: "2402MHz - 2480MHz",
        pollingRate: {
          coDay_va_24G: "125 / 250 / 500 / 1000 Hz (tùy chỉnh bằng driver)",
          bluetooth: "125 Hz (không chỉnh được)",
        },
        tangTocToiDa: "40G",
        dpi: {
          default: "800 / 1600 / 2400 / 3200 / 4800 / 25000",
          colorIndicator: {
            800: "Đỏ",
            1600: "Xanh lục",
            2400: "Xanh lam",
            3200: "Vàng",
            4800: "Tím nhạt",
            25000: "Tím đậm",
          },
        },
        dungLuongPin: "500mAh Polymer",
        dongDienSac: "<230mA",
        dienApSac: "4.25V - 5.25V",
        trongLuong: "58g ± 3g",
        kichThuoc: "117 x 61.5 x 37.8 mm",
        chieuDaiCap: "Type-C / 1.6 mét",
        khoangCachKhongDay: "Tối đa 10 mét",
        switch: "Huanyu – 80 triệu lần nhấp",
        giaiMaChip: "Fengshi Weiqi – 300.000 lần",
        hoTroHeDieuHanh: "Windows XP / 7 / 8 / 10 / 11, macOS, Android, Linux",
      },
      faqs: [
        {
          q: "Làm thế nào để kết nối Bluetooth cho G3?",
          a: 'Gạt công tắc sang BT → Nhấn giữ chuột trái + chuột phải + nút giữa trong 3 giây → Đèn xanh Bluetooth nhấp nháy → Kết nối "G3 Mouse" trong cài đặt thiết bị → Khi kết nối thành công, đèn xanh sẽ sáng 1 giây rồi tắt.',
        },
        {
          q: "Cách kết nối chế độ 2.4G?",
          a: "Lấy USB 2.4G ra khỏi ngăn chuột → Gạt công tắc sang 2.4G → Cắm receiver vào máy tính. Nếu không tự nhận:\nNhấn giữ chuột trái + nút giữa 3 giây → đèn đỏ nhấp nháy → kết nối lại USB.",
        },
        {
          q: "Cách sử dụng chế độ có dây?",
          a: "Cắm cáp Type-C đi kèm → chuột tự động chuyển sang chế độ có dây và sạc.",
        },
        {
          q: "Chuột tự tắt sau một lúc không dùng?",
          a: "Sau 10 giây không hoạt động: Sleep nông. Sau 10 phút không hoạt động: Sleep sâu. Di chuyển chuột hoặc nhấn nút bất kỳ để đánh thức.",
        },
        {
          q: "Có thể sạc chuột bằng củ sạc nhanh không?",
          a: "Không. Không dùng củ sạc nhanh >5V để bảo vệ pin. Nên sạc qua cổng USB máy tính.",
        },
        {
          q: "Tôi không thấy DPI hiển thị màu?",
          a: "Mỗi mức DPI tương ứng màu khác nhau. Nhấn nút DPI để chuyển và quan sát màu đèn báo (đỏ, xanh, vàng, tím...).",
        },
      ],
    },

    {
      id: "Attack Shark X3",
      name: "Attack Shark X3",
      image: "img/mouse/attackshark_x3.jpg",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6jrnl-lkhlu545u6jgfd.16004111726260944.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-M%C3%A1y-T%C3%ADnh-Bluetooth-Kh%C3%B4ng-D%C3%A2y-Si%C3%AAu-Chip-PAW3395-Attack-Shark-X3-PRO-T%E1%BA%B7ng-Grip-Tape-C%E1%BA%A3m-Bi%E1%BA%BFn-Cao-C%E1%BA%A5p-i.12208293.19882910922?sp_atk=77e694fa-3d48-496f-bb44-69ce2ad1fb73&xptdk=77e694fa-3d48-496f-bb44-69ce2ad1fb73",
      appPC:
        "https://drive.google.com/file/d/1ykijw5CXlD2-dx7XqyrQYNauwOW1cwHw/view?usp=drive_link",
      videos: [
        {
          url: "https://drive.google.com/file/d/1h5y1HCF3s1oCVcUmxMyKQ7vjvby6VqRd/view?usp=drive_link",
          title: "Auto Click làm tương tự R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm ATTACK SHARK X3",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack Shark X8SE, PLUS, PRO",
      name: "Attack Shark X8SE, PLUS, PRO",
      image: "https://attackshark.com/cdn/shop/files/1_f8075bfb-d487-4be6-a991-9117c657eb11.jpg?crop=center&height=400&v=1753341472&width=400",
      previewVideo:
        "https://down-ws-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6kint-mcsovdqxxrocbe.16000081753845954.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Gaming-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-X8-PRO-Chip-PAW3395-Pro-Polling-Rate-8KHz-Switch-Omron-Pin-S%E1%BA%A1c-i.12208293.42859403204",
      appPC:
        "https://drive.google.com/drive/folders/1_mIxLL9m8szn-emPFXy1-BG_9vMX5NXV?usp=drive_link",
      videos: [
        {
          url: "https://drive.google.com/file/d/1h5y1HCF3s1oCVcUmxMyKQ7vjvby6VqRd/view?usp=drive_link",
          title: "Auto Click làm tương tự R1",
        },
      ],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack Shark X8SE, PLUS, PRO",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },
    {
      id: "Attack shark X3 MAX",
      name: "Attack shark X3 MAX",
      image:
        "https://attackshark.com/cdn/shop/files/X3MAX.jpg?crop=center&height=400&v=1723645128&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw7-lzym1g3ppft9e2.16000081725874275.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Chuy%C3%AAn-Game-Attack-Shark-X3Max-Si%C3%AAu-Nh%E1%BA%B9-49G-Chip-X%E1%BB%AD-L%C3%AD-Paw3950Max-42000DPI-i.12208293.27460730742?sp_atk=50700a33-6add-435e-8165-4f65eedb543b&xptdk=50700a33-6add-435e-8165-4f65eedb543b",
      appPC:
        "https://drive.google.com/file/d/18RHlqRfIO1gUJO6oGgowHhZhj38Ev1Ug/view?usp=drive_link",
      appWeb: "http://szslxd-tech.com/#/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm ATTACK SHARK X3 MAX",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Attack shark X3 PRO",
      name: "Attack shark X3 PRO",
      image:
        "https://attackshark.com/cdn/shop/files/10_22a28c3e-16bf-4c53-a226-92c1c3d81209.jpg?crop=center&height=400&v=1737168150&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6jrnl-lkhlu545u6jgfd.16004111726260944.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-M%C3%A1y-T%C3%ADnh-Bluetooth-Kh%C3%B4ng-D%C3%A2y-Si%C3%AAu-Chip-PAW3395-Attack-Shark-X3-PRO-T%E1%BA%B7ng-Grip-Tape-C%E1%BA%A3m-Bi%E1%BA%BFn-Cao-C%E1%BA%A5p-i.12208293.19882910922?sp_atk=3d07914f-4967-495e-82f0-0ed6becfbf4d&xptdk=3d07914f-4967-495e-82f0-0ed6becfbf4d",
      appPC:
        "https://drive.google.com/file/d/1TSXa27JZ7ML9eiWtBaTjfeoLuJApDLWd/view?usp=drive_link",
      appWeb: "https://iotdriver.qmk.top/",
      videos: [],
      faqs: [
        {
          q: "Làm thế nào để kết nối sản phẩm Attack shark X3 PRO",
          a: "Để kết nối chế độ USB 2.4G, làm như sau:\n1. Gạt công tắc chuột sang chế độ USB 2.4G, Tháo USB 2.4G Ra khỏi máy tính.\n2. Lật chuột lên và nhấn giữ nút Mode RESET  ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Cắm USB 2.4G vào máy tính. Khi chuột hoạt động là đã kết nối thành công. \n \nĐể kết nối chế độ Bluetooth, làm như sau:\n1. Gạt công tắc chuột sang chế độ Bluetooth.\n2. Nhấn giữ nút Mode RESET ở phía dưới chuột trong 5 giây để vào chế độ ghép nối.\n3. Mở cài đặt Bluetooth trên máy tính hoặc thiết bị của bạn và tìm kiếm chuột để kết nối.",
        },
        {
          q: "Chuột hỗ trợ kết nối với những thiết bị nào?",
          a: "Với chuột không dây sẽ kết nối tất cả các thiết bị từ điện thoại, máy tính bảng, laptop, PC, TV Box, Smart TV,  ...\n Nhưng sẽ không tương thích với các thiết bị console như PS4, PS5, Xbox, và iphone ...",
        },
      ],
    },

    {
      id: "Free WOLF M2",
      name: "Free WOLF M2",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5cnd2phtefrf0@resize_w450_nl.webp",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110107/mms/vn-11110107-6jrnl-lgt76zi6wbn77c.16000081684141073.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-C%C6%A1-M%C3%A1y-T%C3%ADnh-Gaming-M2-Led-RGB-Thi%E1%BA%BFt-K%E1%BA%BF-C%E1%BB%B1c-Ng%E1%BA%A7u-C%C3%A0i-Macro-Chuy%C3%AAn-Nghi%E1%BB%87p-Ch%C6%A1i-Game-M%E1%BB%8Di-Ch%E1%BA%BF-%C4%90%E1%BB%99-i.12208293.20879689869?sp_atk=d9df8736-4c22-461f-89b4-f7a344352363&xptdk=d9df8736-4c22-461f-89b4-f7a344352363",
      appPC:
        "https://drive.google.com/file/d/1-BWYcwMyWnfd3IYju_XCgQuNCQMNCVJx/view?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [],
    },
    {
      id: "Chuột Gaming G6",
      name: "Chuột Gaming G6",
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmfx6z91tecf1c.webp",
      previewVideo:
        "https://down-cvs-sg.vod.susercontent.com/api/v4/11110107/mms/vn_08352042-b470-4184-812b-37c00168bf4f_000236.16000081677810707.mp4",
      dealLink:
        "https://shopee.vn/Chu%E1%BB%99t-Kh%C3%B4ng-D%C3%A2y-Bluetooth-G6-ESPORT-GAMING-Led-Rgb-13-Ch%E1%BA%BF-%C4%90%E1%BB%99-Thi%E1%BA%BFt-K%E1%BA%BF-C%C3%B4ng-Th%C3%A1i-H%E1%BB%8Dc-Pin-S%E1%BA%A1c-Lithium-i.12208293.20374748280?sp_atk=aa1bf26b-3e05-4a2d-9e90-f2316331c3e2&xptdk=aa1bf26b-3e05-4a2d-9e90-f2316331c3e2",
      appPC:
        "https://drive.google.com/drive/folders/1GizojlzfwH_Y7Gk2JA2HsyamzozMZg5L?usp=drive_link",
      appWeb: "",
      videos: [],
      faqs: [
        {
          q: "Lưu ý App sản phẩm chỉ hỗ trợ bản dùng dây",
          a: "App không hỗ trợ bản không dây, vì vậy nếu bạn sử dụng bản không dây thì sẽ không thể cài đặt được các chức năng của chuột.",
        },
      ],
    },
  ],
  headsets: [
    {
      id: "Attack Shark L90",
      name: "Attack Shark L90",
      image:
        "https://attackshark.com/cdn/shop/files/1_5895ea19-bd67-4e80-9b77-1bf3fb474072.jpg?crop=center&height=400&v=1730981823&width=400",
      previewVideo:
        "https://down-zl-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khw2-m8g1qnc536tg88.16005581747297365.mp4",
      dealLink:
        "https://shopee.vn/Tai-Nghe-Gaming-Ch%E1%BB%A5p-Tai-Kh%C3%B4ng-D%C3%A2y-Attack-Shark-L90-LED-RGB-Micro-Bluetooth-5.3-App-Macro-Pin-S%E1%BA%A1c-i.12208293.27782535933?sp_atk=f6ad8cd1-a78f-4fd9-a4af-78691ed56ee7&xptdk=f6ad8cd1-a78f-4fd9-a4af-78691ed56ee7",
      appPC:
        "https://drive.google.com/file/d/1N7Rov8hFiy3O6vVPyl-v6ryijytrZSeZ/view?usp=drive_link",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1MDjbJy3xlJWengdZGi51KvisFllq9YSp/view?usp=drive_link",
          title: "Cài App Attack Shark L90",
        },
        {
          url: "https://drive.google.com/file/d/1KgzmtkjlwFLO8rDKSSyiIAt7n6NiiKqN/view?usp=drive_link",
          title: "Vệ Sinh Tai Nghe",
        },
      ],
      faqs: [
        {
          q: "Cách bật/tắt tai nghe?",
          a: "Ấn giữ nút nguồn 3 giây để bật/tắt tai nghe.",
        },
        {
          q: "Chức năng của nút 'M' là gì?",
          a: "- Ấn 1 lần để bật/tắt micro.\n- Ấn 2 lần liên tục để đổi giữa các chế độ kết nối (Bluetooth, USB 2.4G, JACK 3.5MM).\n- Ấn giữ để bật/tắt LED.",
        },
      ],
    },

    {
      id: "Attack Shark L80 Pro",
      name: "Attack Shark L80 Pro",
      image:
        "https://attackshark.com/cdn/shop/files/33ffae0206d3c7cd1aadac09875e5e96_91a97cc9-c332-4906-a06b-158dc6413540.jpg?v=1746683509&width=500",
      previewVideo:
        "https://down-tx-sg.vod.susercontent.com/api/v4/11110105/mms/vn-11110105-6khwh-m7bzahrti66we6.16006711747945518.mp4",
      dealLink:
        "https://shopee.vn/Tai-Nghe-Kh%C3%B4ng-D%C3%A2y-Ch%E1%BB%A5p-Tai-Bluetooth-Attack-Shark-L80-Super-Bass-%C3%82m-Thanh-V%C3%B2m-C%C3%B3-Mic-Ch%C6%A1i-Game-i.12208293.27407075172?sp_atk=78dd0a4e-bc5a-4849-bc2a-5d216fb3fa0e&xptdk=78dd0a4e-bc5a-4849-bc2a-5d216fb3fa0e",
      appPC: "",
      appWeb: "",
      videos: [
        {
          url: "https://drive.google.com/file/d/1KgzmtkjlwFLO8rDKSSyiIAt7n6NiiKqN/view?usp=drive_link",
          title: "Vệ Sinh Tai Nghe",
        },
      ],
      faqs: [
        {
          q: "Bật/Tắt nguồn tai nghe?",
          a: "Nhấn và giữ nút nguồn trong 3 giây.",
        },
        {
          q: "Chuyển đổi chế độ kết nối?",
          a: "- Chế độ 2.4G: Nhấn LIÊN TỤC nút nguồn 3 lần, đèn sẽ chuyển sang (MÀU XANH LÁ).\n- Chế độ Bluetooth: Tiếp tục nhấn LIÊN TỤC nút nguồn 3 LẦN, đèn sẽ chuyển sang màu (XANH NƯỚC BIỂN).\n- Chế độ có dây: Cắm đầu Type-C vào tai nghe và cắm jack 3.5mm vào PC.",
        },
        {
          q: "Chế độ âm thanh?",
          a: "Nhấn 2 lần liên tục để chuyển đổi giữa chế độ Âm nhạc và Game, Ở chế độ Game, âm lượng sẽ lớn hơn.",
        },
      ],
    },
  ],
};
