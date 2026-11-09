window.QUESTIONS.push(...[
 {
  "id": "u1-001",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Một gói tin bị mất (lost packet), nhìn từ phía end system, là gì?",
  "options": [
   "Tổng thời gian xử lý, xếp hàng và truyền của gói tin",
   "Bản sao của gói tin được tạo ra do retransmission",
   "Gói tin đến đích nhưng có bit bị lỗi",
   "Gói tin đã đi vào network core nhưng không bao giờ đến đích"
  ],
  "answer": 3,
  "explain": "Khi gói đến router mà buffer đã đầy thì bị drop: gói đã được gửi vào network core nhưng không bao giờ đến đích. Tổng thời gian xử lý + xếp hàng + truyền là delay; bản sao do retransmission là duplicate; bit lỗi được phát hiện bằng checksum/CRC và gói vẫn đến nơi.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 1; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-002",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Circuit switching phù hợp nhất với loại lưu lượng nào?",
  "options": [
   "Email",
   "Lưu lượng bursty, có nhiều khoảng thời gian rảnh",
   "Lưu lượng liên tục, tốc độ không đổi và cần bảo đảm băng thông (ví dụ cuộc gọi thoại)",
   "Các web request ngắn"
  ],
  "answer": 2,
  "explain": "Circuit switching dành riêng băng thông cố định suốt kết nối nên hợp với lưu lượng liên tục, tốc độ đều như cuộc gọi thoại; delay ổn định, không có queuing. Lưu lượng bursty, nhiều khoảng rảnh (email, web request ngắn) là ví dụ kinh điển của packet switching.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 2; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-003",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Trong mô hình phân tầng, một datagram ở tầng mạng gồm những gì?",
  "options": [
   "Header của tầng mạng và toàn bộ segment của tầng vận chuyển",
   "Header của tầng liên kết dữ liệu và datagram",
   "Chỉ dữ liệu ứng dụng, các header đã bị gỡ hết",
   "Segment sau khi tầng mạng đã gỡ bỏ header của tầng vận chuyển"
  ],
  "answer": 0,
  "explain": "Datagram = header tầng mạng + toàn bộ segment từ tầng vận chuyển: mỗi tầng giữ nguyên payload của tầng trên và gắn header của mình. Gắn thêm header tầng liên kết thì mới tạo ra frame, và tầng mạng không bao giờ gỡ header của tầng vận chuyển.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 3; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-004",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Tầng nào chịu trách nhiệm chuyển frame giữa hai node kề nhau (một hop)?",
  "options": [
   "Tầng vận chuyển (Transport)",
   "Tầng mạng (Network)",
   "Tầng vật lý (Physical)",
   "Tầng liên kết dữ liệu (Link)"
  ],
  "answer": 3,
  "explain": "Từ khóa là \"frame\" và \"node kề nhau\": đó là việc của tầng liên kết dữ liệu (Ethernet, Wi-Fi). Tầng vận chuyển lo process-to-process, tầng mạng lo đường đi qua nhiều hop, tầng vật lý chuyển từng bit.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 4; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-005",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Khi tăng kích thước buffer của router thì có sự đánh đổi (trade-off) nào?",
  "options": [
   "Mất gói giảm nhưng queuing delay dài hơn",
   "Propagation delay giảm vì gói đi nhanh hơn",
   "Transmission delay giảm vì tốc độ link R tăng",
   "Xác suất bit error giảm"
  ],
  "answer": 0,
  "explain": "Buffer lớn giúp giảm drop nhưng gói mới phải xếp sau nhiều gói hơn nên queuing delay tăng (tối đa ≈ N·L/R); buffer quá lớn gây bufferbloat. R là đặc tính của link, d_prop = d/s chỉ phụ thuộc vật lý, bit error do nhiễu đường truyền.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 5; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-006",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Lợi ích chính của việc chia mạng thành các tầng (layering) là gì?",
  "options": [
   "Bảo đảm truyền dữ liệu tin cậy",
   "Giảm propagation delay",
   "Loại bỏ nhu cầu dùng header",
   "Có thể thay đổi cách cài đặt của một tầng mà không ảnh hưởng các tầng còn lại"
  ],
  "answer": 3,
  "explain": "Layering mang lại tính module: đổi cách cài đặt một tầng (ví dụ Ethernet sang Wi-Fi) mà vẫn giữ nguyên dịch vụ thì phần còn lại không bị ảnh hưởng. Truyền tin cậy là dịch vụ của TCP, propagation do vật lý quyết định, và layering cần header nên có thêm overhead.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 6; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-007",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Phát biểu nào về protocol stack là đúng?",
  "options": [
   "Host có 3 tầng, router có 5 tầng",
   "Host, router và switch đều có đủ 5 tầng",
   "Switch có 3 tầng: network, link và physical",
   "Host có 5 tầng, router có 3 tầng (network, link, physical)"
  ],
  "answer": 3,
  "explain": "Host cài đủ 5 tầng; router chỉ có 3 tầng dưới (network, link, physical); switch chỉ có 2 tầng (link, physical). Độ phức tạp nằm ở network edge.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 7; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-008",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Phép ánh xạ giao thức → tầng nào sau đây đúng?",
  "options": [
   "SMTP – application, UDP – transport, IP – network, Ethernet – link",
   "SMTP – transport, TCP – application, IP – network, Ethernet – link",
   "HTTP – application, TCP – network, IP – transport, Wi-Fi – link",
   "DNS – transport, UDP – application, IP – link, PPP – network"
  ],
  "answer": 0,
  "explain": "Application: HTTP, SMTP, DNS, FTP. Transport: TCP, UDP. Network: IP và các giao thức định tuyến. Link: Ethernet, Wi-Fi, PPP. Mẹo loại trừ: TCP/UDP là transport, IP là network.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 8; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-009",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Nhà mạng như VNPT hoặc Viettel kết nối trực tiếp đến nhà sinh viên (qua DSL, FTTH, 4G/5G) thuộc loại nào trong \"mạng của các mạng\"?",
  "options": [
   "Access ISP",
   "Tier-1 ISP",
   "Content provider network",
   "Internet Exchange Point (IXP)"
  ],
  "answer": 0,
  "explain": "Access ISP là nhà mạng kết nối trực tiếp với end user. Tier-1 ISP nằm ở đỉnh phân cấp và không phục vụ hộ gia đình; content provider network là mạng của Google, Meta, Netflix; IXP (ví dụ VNIX) là điểm peering trung lập.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 9; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-010",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Mười kết nối cùng dùng chung một đường core 5 Mbps (chia đều). Mỗi kết nối có Rs = 2 Mbps và Rc = 1 Mbps. Throughput end-to-end của mỗi kết nối là bao nhiêu?",
  "options": [
   "2 Mbps",
   "1 Mbps",
   "0,5 Mbps",
   "5 Mbps"
  ],
  "answer": 2,
  "explain": "Throughput = min(Rs, Rc, R/10) = min(2; 1; 0,5) = 0,5 Mbps. Bottleneck là core link bị 10 luồng chia sẻ; sai lầm hay gặp là chỉ nhìn access link rồi chọn 1 Mbps.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 10; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "verified"
 },
 {
  "id": "u1-011",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Link 1 Mbps dùng TDM với 10 slot mỗi frame. Tốc độ của mỗi circuit là bao nhiêu?",
  "options": [
   "1 Mbps",
   "100 kbps",
   "10 Mbps",
   "10 kbps"
  ],
  "answer": 1,
  "explain": "Mỗi circuit giữ một slot cố định trong mỗi frame nên tốc độ = R / số slot = 1 Mbps / 10 = 100 kbps.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 11; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "verified"
 },
 {
  "id": "u1-012",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Cơ chế nào giúp chống tấn công IP spoofing (giả mạo địa chỉ IP nguồn)?",
  "options": [
   "Dùng packet sniffer để theo dõi lưu lượng",
   "Tăng kích thước buffer của router",
   "End-point authentication (xác thực điểm cuối bằng mật mã)",
   "Chặn toàn bộ gói UDP"
  ],
  "answer": 2,
  "explain": "Kẻ tấn công ghi địa chỉ IP nguồn giả vào gói tin và mạng không kiểm tra trường này. Cần xác thực điểm cuối bằng mật mã (chữ ký số, MAC, chứng chỉ) — chi tiết ở chương bảo mật.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 12; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-013",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Tình huống nào dễ gây mất gói (packet loss) nhất ở router?",
  "options": [
   "Header của gói tin quá lớn",
   "Link ra đang rảnh nên gói đi ngay",
   "Propagation delay của link quá lớn",
   "Nhiều input cùng dồn burst về một output link"
  ],
  "answer": 3,
  "explain": "Khi nhiều input cùng dồn về một output link, cường độ lưu lượng La/R tạm thời vượt 1, hàng đợi đầy và gói bị drop. Header lớn chỉ tăng overhead, link rảnh thì gói đi ngay, còn propagation xảy ra sau khi gói rời router.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 13; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-014",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Vì sao tấn công DDoS khó chống hơn DoS thông thường?",
  "options": [
   "Lưu lượng đến từ nhiều nguồn (botnet) nên khó phân biệt với người dùng hợp lệ và khó chặn",
   "DDoS là tấn công qua mạng còn DoS thì không",
   "DDoS sửa nội dung gói tin trên đường đi (man-in-the-middle)",
   "DDoS chỉ có một dạng duy nhất là SYN flood"
  ],
  "answer": 0,
  "explain": "DoS từ một nguồn thì chặn IP là xong. DDoS dùng botnet: quá nhiều IP rải rác, mỗi bot gửi ít nên giống người dùng hợp lệ. DDoS có 3 dạng: vulnerability attack, bandwidth flooding, connection flooding (SYN flood).",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 14; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-015",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Một gói tin L = 10.000 bit đi qua một link dài 2.000 km, tốc độ 10 Mbps, tốc độ lan truyền s = 2×10^8 m/s. Tổng (transmission + propagation) delay là bao nhiêu?",
  "options": [
   "22 ms",
   "1 ms",
   "10 ms",
   "11 ms"
  ],
  "answer": 3,
  "explain": "d_trans = 10.000 / 10^7 = 1 ms; d_prop = 2×10^6 m / 2×10^8 m/s = 10 ms; tổng 11 ms. Sai lầm hay gặp: chỉ tính một loại delay, quên đổi km → m, hoặc nhân đôi như round-trip.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 15; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "verified"
 },
 {
  "id": "u1-016",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Điều nào sau đây KHÔNG do protocol quy định?",
  "options": [
   "Định dạng của các message",
   "Thứ tự các message được trao đổi",
   "Hành động cần làm khi gửi hoặc nhận message",
   "Tốc độ lan truyền của tín hiệu vật lý"
  ],
  "answer": 3,
  "explain": "Protocol quy định ba thứ: định dạng message, thứ tự message và hành động khi gửi/nhận. Tốc độ lan truyền tín hiệu (khoảng 2–3×10^8 m/s) do vật lý quyết định.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 16; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-017",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Thiết bị đầu tiên trên đường đi (sau host gửi) đọc header IP của gói tin là gì?",
  "options": [
   "Switch",
   "Hub",
   "Server đích",
   "Router"
  ],
  "answer": 3,
  "explain": "Switch chỉ đọc địa chỉ MAC trong header tầng liên kết, không mở datagram; hub chỉ làm việc ở tầng vật lý. Router gỡ header tầng liên kết rồi đọc địa chỉ IP đích để forward. Server đích cũng đọc IP nhưng là thiết bị cuối cùng.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 17; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-018",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Sự khác biệt giữa tầng vận chuyển (transport) và tầng mạng (network) là gì?",
  "options": [
   "Transport giao dữ liệu giữa các process (process-to-process) bằng port; network giao dữ liệu giữa các host (host-to-host) bằng địa chỉ IP",
   "Cả hai đều giao dữ liệu giữa các host, chỉ khác tên giao thức",
   "Transport chạy trên mọi router dọc đường đi, còn network chỉ chạy ở end system",
   "Transport giao dữ liệu host-to-host, còn network giao dữ liệu process-to-process"
  ],
  "answer": 0,
  "explain": "IP (tầng mạng) giao host-to-host bằng địa chỉ IP; TCP/UDP (tầng vận chuyển) giao process-to-process bằng số port (multiplexing/demultiplexing). Tầng vận chuyển chỉ nằm ở end system, và phương án đảo vai trò là sai.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 18; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u1-019",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Link 1 Mbps, mỗi người dùng cần 100 kbps khi đang hoạt động nhưng chỉ hoạt động 10% thời gian. Với packet switching, 35 người dùng chung link vẫn ổn vì sao?",
  "options": [
   "Tổng 35 × 100 kbps = 3,5 Mbps vẫn nhỏ hơn dung lượng link",
   "Xác suất có hơn 10 người cùng hoạt động một lúc rất nhỏ (khoảng 0,0004)",
   "Link được chia cố định 100 kbps cho mỗi người như TDM",
   "Băng thông link tự tăng khi có thêm người dùng"
  ],
  "answer": 1,
  "explain": "Link phục vụ tối đa 10 người đang hoạt động (1 Mbps / 100 kbps). Số người hoạt động ~ Binomial(35; 0,1) và P(X > 10) ≈ 0,0004 — đây là statistical multiplexing, hỗ trợ gấp 3,5 lần số người so với circuit switching. Tổng 3,5 Mbps lớn hơn link; chia cố định là đặc điểm circuit switching; băng thông link là cố định.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 19; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "verified"
 },
 {
  "id": "u1-020",
  "chapter": "overview",
  "set": "u-ch1",
  "q": "Vì sao Google xây dựng mạng riêng của mình?",
  "options": [
   "Để không còn cần tới access ISP",
   "Để peer trực tiếp với access/regional ISP hoặc tại IXP, đưa nội dung đến gần người dùng hơn, giảm trễ và phí transit",
   "Để dùng một bộ giao thức khác TCP/IP",
   "Để chuyển từ packet switching sang circuit switching"
  ],
  "answer": 1,
  "explain": "Mạng riêng cho phép peer trực tiếp với access/regional ISP hoặc tại IXP để giảm độ trễ, giảm phí transit trả cho tier-1 và kiểm soát cách cung cấp dịch vụ. Google vẫn cần access ISP, vẫn dùng TCP/IP và packet switching.",
  "source": "user:Ôn tập Chương 1 – Computer Networks and the Internet.pdf (câu 20; câu hỏi và lựa chọn dựng lại từ bản rút gọn)",
  "confidence": "derived"
 },
 {
  "id": "u2-001",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Một trang Web gồm một file HTML gốc và 10 ảnh JPEG được tham chiếu, tất cả lưu trên cùng một server. Nếu dùng non-persistent HTTP, cần bao nhiêu kết nối TCP để lấy toàn bộ trang?",
  "options": [
   "10",
   "11",
   "1",
   "22"
  ],
  "answer": 1,
  "explain": "Non-persistent HTTP: mỗi TCP connection chỉ phục vụ đúng một cặp request/response, nên cần 1 connection cho file HTML + 10 connection cho 10 ảnh = 11. Con số 1 là của persistent HTTP, 22 là số RTT (11 object × 2 RTT) chứ không phải số connection, còn 10 là quên file HTML gốc.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 1)",
  "confidence": "derived"
 },
 {
  "id": "u2-002",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Sự khác biệt chính giữa kết nối HTTP non-persistent và persistent là gì?",
  "options": [
   "Với persistent HTTP, server lưu thông tin về các request trước đó của từng client",
   "Persistent HTTP chạy trên UDP, còn non-persistent HTTP chạy trên TCP",
   "Non-persistent HTTP truyền nhiều object qua mỗi kết nối TCP",
   "Với persistent HTTP, server giữ kết nối TCP mở để nhiều object được gửi qua cùng một kết nối"
  ],
  "answer": 3,
  "explain": "Persistent HTTP giữ TCP connection mở sau response, nên nhiều object đi qua cùng một connection và tiết kiệm RTT bắt tay. \"Với persistent HTTP, server lưu thông tin về các request trước đó của từng client\": HTTP là stateless, việc nhớ trạng thái là của cookies. \"Persistent HTTP chạy trên UDP, còn non-persistent HTTP chạy trên TCP\": cả hai đều chạy trên TCP. \"Non-persistent HTTP truyền nhiều object qua mỗi kết nối TCP\": ngược lại, non-persistent truyền tối đa 1 object trên mỗi connection.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 2)",
  "confidence": "derived"
 },
 {
  "id": "u2-003",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trường nào của một DNS resource record quy định record được phép lưu trong cache DNS bao lâu?",
  "options": [
   "Name",
   "Value",
   "Type",
   "TTL"
  ],
  "answer": 3,
  "explain": "Resource record có dạng (Name, Value, Type, TTL). TTL quy định thời gian record được giữ trong cache.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 3)",
  "confidence": "derived"
 },
 {
  "id": "u2-004",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong khi HTTP chủ yếu là giao thức pull, SMTP được mô tả đúng nhất là:",
  "options": [
   "giao thức stateless chạy trên UDP",
   "giao thức pull, vì server nhận yêu cầu thư từ server gửi",
   "giao thức đòi hỏi một relay mail server trung gian cho mọi thư",
   "giao thức push, vì mail server gửi đẩy thư sang mail server nhận"
  ],
  "answer": 3,
  "explain": "SMTP là push: server gửi mở connection và đẩy thư sang server nhận. \"giao thức stateless chạy trên UDP\": SMTP chạy trên TCP (port 25). \"giao thức pull, vì server nhận yêu cầu thư từ server gửi\": sai chiều. \"giao thức đòi hỏi một relay mail server trung gian cho mọi thư\": thường gửi trực tiếp, không bắt buộc qua relay.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 4)",
  "confidence": "derived"
 },
 {
  "id": "u2-005",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong chương trình UDP client viết bằng Python, lời gọi nào tạo socket của client?",
  "options": [
   "socket(AF_INET6, SOCK_RAW)",
   "socket(AF_INET, SOCK_STREAM)",
   "socket(AF_UNIX, SOCK_STREAM)",
   "socket(AF_INET, SOCK_DGRAM)"
  ],
  "answer": 3,
  "explain": "AF_INET = IPv4, SOCK_DGRAM = UDP. \"socket(AF_INET, SOCK_STREAM)\": SOCK_STREAM = TCP. \"socket(AF_INET6, SOCK_RAW)\": raw socket. \"socket(AF_UNIX, SOCK_STREAM)\": AF_UNIX dùng nội bộ trên cùng một máy.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 5)",
  "confidence": "derived"
 },
 {
  "id": "u2-006",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Để một process trên host này gửi message cho một process trên host khác, process nhận phải được xác định bằng:",
  "options": [
   "hostname của host đích và tên ứng dụng",
   "chỉ địa chỉ IP của host đích",
   "địa chỉ IP của host đích và số port của process nhận",
   "chỉ địa chỉ MAC của host đích"
  ],
  "answer": 2,
  "explain": "IP xác định host, port xác định process trên host đó. \"hostname của host đích và tên ứng dụng\": hostname phải phân giải qua DNS, tên ứng dụng không dùng để định danh. \"chỉ địa chỉ IP của host đích\": chỉ có IP thì chưa biết process nào. \"chỉ địa chỉ MAC của host đích\": MAC thuộc tầng link, chỉ có ý nghĩa trong mạng cục bộ.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 6)",
  "confidence": "derived"
 },
 {
  "id": "u2-007",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Vì sao user agent của Bob không thể dùng SMTP để lấy thư từ hộp thư trên mail server của anh ấy?",
  "options": [
   "SMTP không thể truyền văn bản ASCII 7-bit",
   "SMTP không hỗ trợ xác thực người dùng",
   "SMTP chạy trên UDP, không tin cậy để lấy thư",
   "SMTP là giao thức push, trong khi lấy thư là thao tác pull"
  ],
  "answer": 3,
  "explain": "SMTP chỉ dùng để đẩy thư đi. Lấy thư về là thao tác pull, nên phải dùng IMAP, POP3 hoặc HTTP (webmail). \"SMTP không thể truyền văn bản ASCII 7-bit\": ngược lại, SMTP chỉ truyền 7-bit ASCII. \"SMTP không hỗ trợ xác thực người dùng\": có SMTP AUTH, và đó không phải lý do chính. \"SMTP chạy trên UDP, không tin cậy để lấy thư\": SMTP chạy trên TCP.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 7)",
  "confidence": "derived"
 },
 {
  "id": "u2-008",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Nhóm DNS server nào chịu trách nhiệm cho các top-level domain như com, org, edu và các domain quốc gia như vn?",
  "options": [
   "Root server",
   "Local DNS server",
   "Authoritative server",
   "TLD server"
  ],
  "answer": 3,
  "explain": "TLD servers quản lý .com, .org, .edu và các domain quốc gia như .vn. Root: trả về địa chỉ TLD server. Local DNS: server của ISP, không thuộc cây phân cấp. Authoritative: quản lý record của từng tổ chức cụ thể.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 8)",
  "confidence": "derived"
 },
 {
  "id": "u2-009",
  "chapter": "application",
  "set": "u-ch2",
  "q": "HTTP dùng giao thức tầng vận chuyển nào và port mặc định nào của server?",
  "options": [
   "TCP, port 25",
   "UDP, port 80",
   "UDP, port 53",
   "TCP, port 80"
  ],
  "answer": 3,
  "explain": "\"TCP, port 25\": port 25 là SMTP. \"UDP, port 53\": UDP port 53 là DNS. \"UDP, port 80\": HTTP truyền thống không dùng UDP (riêng HTTP/3 chạy trên QUIC/UDP).",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 9)",
  "confidence": "derived"
 },
 {
  "id": "u2-010",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong UDP server viết bằng Python, phương thức socket nào nhận một datagram và đồng thời trả về địa chỉ IP và số port của bên gửi?",
  "options": [
   "accept()",
   "recv()",
   "recvfrom()",
   "listen()"
  ],
  "answer": 2,
  "explain": "accept(), listen(): dùng cho TCP. recv(): chỉ trả về dữ liệu, không kèm địa chỉ.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 10)",
  "confidence": "derived"
 },
 {
  "id": "u2-011",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong TCP server viết bằng Python, accept() trả về gì khi một client kết nối đến?",
  "options": [
   "Một socket UDP dùng để trả lời client",
   "Một socket mới (connectionSocket) dành riêng cho client đó, kèm địa chỉ của client",
   "Chính welcoming socket, nay đã gắn với port của client",
   "Message đầu tiên client gửi và địa chỉ của client"
  ],
  "answer": 1,
  "explain": "accept() tạo socket mới riêng cho client đó. Welcoming socket vẫn giữ nguyên để chờ client khác. accept() không đọc dữ liệu; muốn đọc phải gọi recv() sau đó.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 11)",
  "confidence": "derived"
 },
 {
  "id": "u2-012",
  "chapter": "application",
  "set": "u-ch2",
  "q": "HTTP được gọi là giao thức stateless vì:",
  "options": [
   "nó không mã hóa các message trao đổi giữa client và server",
   "kết nối TCP luôn bị đóng sau mỗi response",
   "server không lưu thông tin về các request trước đó của client",
   "nó chạy trên UDP, vốn không giữ trạng thái kết nối"
  ],
  "answer": 2,
  "explain": "Server không lưu thông tin về các request trước. Muốn nhớ trạng thái phải dùng cookies. \"nó không mã hóa các message trao đổi giữa client và server\": mã hóa là việc của HTTPS/TLS. \"kết nối TCP luôn bị đóng sau mỗi response\": persistent HTTP vẫn giữ connection mở mà vẫn stateless. \"nó chạy trên UDP, vốn không giữ trạng thái kết nối\": HTTP chạy trên TCP.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 12)",
  "confidence": "derived"
 },
 {
  "id": "u2-013",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Khi Alice gửi email cho Bob, việc truyền SMTP qua Internet thường diễn ra trực tiếp giữa hai thực thể nào?",
  "options": [
   "Mail server của Bob và user agent của Bob",
   "Mail server của Alice và mail server của Bob",
   "Mail server của Alice và một root DNS server",
   "User agent của Alice và user agent của Bob"
  ],
  "answer": 1,
  "explain": "Đường đi đầy đủ: Alice UA →(SMTP)→ Alice's mail server →(SMTP, trực tiếp)→ Bob's mail server →(IMAP/POP3/HTTP)→ Bob UA.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 13)",
  "confidence": "derived"
 },
 {
  "id": "u2-014",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Phát biểu nào mô tả đúng một khác biệt giữa lập trình socket TCP và UDP?",
  "options": [
   "TCP client phải thiết lập kết nối với server bằng handshake trước khi gửi dữ liệu",
   "UDP server cần một welcoming socket và một connection socket riêng cho mỗi client",
   "UDP client phải handshake với server trước khi gửi dữ liệu",
   "TCP client phải gắn địa chỉ đích vào từng gói tin mà nó gửi"
  ],
  "answer": 0,
  "explain": "TCP client gọi connect() để thực hiện three-way handshake trước khi gửi dữ liệu. Các phát biểu còn lại đều đảo vai TCP và UDP: UDP không bắt tay và không cần welcoming socket, còn TCP không phải gắn địa chỉ đích vào từng gói.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 14)",
  "confidence": "derived"
 },
 {
  "id": "u2-015",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Web cache gửi một conditional GET có header If-Modified-Since. Nếu object chưa bị sửa kể từ ngày đó, origin server trả lời bằng:",
  "options": [
   "404 Not Found",
   "200 OK kèm object trong entity body",
   "301 Moved Permanently",
   "304 Not Modified với entity body rỗng"
  ],
  "answer": 3,
  "explain": "Object chưa đổi thì server trả 304 Not Modified với body rỗng, cache dùng bản đang có. Nếu object đã bị sửa thì server trả 200 OK kèm bản mới.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 15)",
  "confidence": "derived"
 },
 {
  "id": "u2-016",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong quá trình phân giải DNS điển hình, truy vấn từ host đến local DNS server của nó là ____, còn các truy vấn từ local DNS server đến root, TLD và authoritative server là ____.",
  "options": [
   "iterative; recursive",
   "recursive; recursive",
   "iterative; iterative",
   "recursive; iterative"
  ],
  "answer": 3,
  "explain": "Host nhờ local DNS tìm giúp và chờ câu trả lời cuối cùng (recursive). Local DNS tự đi hỏi lần lượt root → TLD → authoritative; mỗi server chỉ trả lời \"hãy hỏi server X\" (iterative).",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 16)",
  "confidence": "derived"
 },
 {
  "id": "u2-017",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong một DNS resource record (Name, Value, Type, TTL) có Type=NS, trường Value là:",
  "options": [
   "canonical hostname ứng với alias hostname trong Name",
   "địa chỉ IP của host có tên trong Name",
   "canonical name của mail server của domain trong Name",
   "hostname của một authoritative DNS server biết cách lấy địa chỉ IP của các host trong domain"
  ],
  "answer": 3,
  "explain": "Ví dụ: (foo.com, dns.foo.com, NS). \"canonical hostname ứng với alias hostname trong Name\": CNAME. \"địa chỉ IP của host có tên trong Name\": A. \"canonical name của mail server của domain trong Name\": MX.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 17)",
  "confidence": "derived"
 },
 {
  "id": "u2-018",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Khả năng nào sau đây do IMAP cung cấp?",
  "options": [
   "Mã hóa tệp đính kèm nhị phân thành ASCII 7-bit",
   "Chuyển thư từ mail server của người gửi sang mail server của người nhận",
   "Giữ thư trên mail server để cùng một hộp thư có thể được truy cập và đồng bộ từ nhiều thiết bị",
   "Dịch hostname thành địa chỉ IP cho các mail server"
  ],
  "answer": 2,
  "explain": "IMAP giữ thư trên server và đồng bộ trạng thái giữa nhiều thiết bị. \"Mã hóa tệp đính kèm nhị phân thành ASCII 7-bit\": MIME. \"Chuyển thư từ mail server của người gửi sang mail server của người nhận\": SMTP. \"Dịch hostname thành địa chỉ IP cho các mail server\": DNS.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 18)",
  "confidence": "derived"
 },
 {
  "id": "u2-019",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Mục đích cơ bản của Content Distribution Network (CDN) là gì?",
  "options": [
   "Dịch hostname thành địa chỉ IP cho trình duyệt Web",
   "Thay TCP bằng một giao thức vận chuyển nhanh hơn cho video streaming",
   "Mã hóa toàn bộ lưu lượng giữa trình duyệt Web và origin server",
   "Lưu bản sao nội dung trên các server phân tán theo địa lý và chuyển mỗi request đến một server phù hợp ở gần"
  ],
  "answer": 3,
  "explain": "CDN lưu bản sao nội dung ở nhiều nơi và chuyển request tới server gần nhất, nhờ đó giảm độ trễ và giảm tải cho origin server (ví dụ Netflix, Akamai). \"Dịch hostname thành địa chỉ IP cho trình duyệt Web\": DNS. \"Thay TCP bằng một giao thức vận chuyển nhanh hơn cho video streaming\": CDN không thay thế TCP. \"Mã hóa toàn bộ lưu lượng giữa trình duyệt Web và origin server\": TLS/HTTPS.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 19)",
  "confidence": "derived"
 },
 {
  "id": "u2-020",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Trong kiến trúc client-server, phát biểu nào sau đây ĐÚNG?",
  "options": [
   "Mỗi client cũng phải đóng vai trò server cho các client khác",
   "Các client giao tiếp trực tiếp với nhau mà không qua server",
   "Server phải chủ động liên lạc với từng client trước",
   "Server là một host luôn bật, có địa chỉ IP cố định và nổi tiếng, phục vụ request của nhiều client"
  ],
  "answer": 3,
  "explain": "\"Mỗi client cũng phải đóng vai trò server cho các client khác\" / \"Các client giao tiếp trực tiếp với nhau mà không qua server\": đặc điểm của kiến trúc P2P. \"Server phải chủ động liên lạc với từng client trước\": ngược lại, client luôn là bên khởi tạo liên lạc.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 20)",
  "confidence": "derived"
 },
 {
  "id": "u3-001",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Trong cách tiếp cận end-to-end đối với kiểm soát tắc nghẽn (cách TCP áp dụng truyền thống):",
  "options": [
   "router gửi các giá trị tốc độ tường minh cho sender",
   "receiver cố ý bỏ gói để báo hiệu tắc nghẽn",
   "router dành riêng băng thông cho từng kết nối",
   "tầng mạng không hỗ trợ tường minh, các end system tự suy ra tắc nghẽn từ hành vi quan sát được như mất gói và trễ"
  ],
  "answer": 3,
  "explain": "Cách tiếp cận end-to-end: tầng mạng không hỗ trợ tường minh, end system tự suy ra tắc nghẽn từ mất gói và trễ quan sát được. Đây là cách TCP làm truyền thống.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 1)",
  "confidence": "derived"
 },
 {
  "id": "u3-002",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Dịch vụ nào sau đây KHÔNG được cả TCP lẫn UDP cung cấp trên Internet?",
  "options": [
   "Đảm bảo về throughput hoặc độ trễ",
   "Chuyển dữ liệu process-to-process",
   "Kiểm tra lỗi của segment",
   "Multiplexing và demultiplexing"
  ],
  "answer": 0,
  "explain": "Cả TCP và UDP đều không bảo đảm throughput hay độ trễ (best-effort). Các dịch vụ còn lại — giao tiếp process-to-process, kiểm tra lỗi, multiplexing/demultiplexing — thì cả hai đều có.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 2)",
  "confidence": "derived"
 },
 {
  "id": "u3-003",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Khi tốc độ gói đến router tiến gần dung lượng của link ra thì:",
  "options": [
   "xuất hiện queuing delay rất lớn",
   "mất gói không thể xảy ra",
   "throughput tăng không giới hạn",
   "queuing delay giảm về 0"
  ],
  "answer": 0,
  "explain": "Khi cường độ lưu lượng La/R tiến gần 1, hàng đợi dài ra rất nhanh nên queuing delay rất lớn; mất gói vẫn có thể xảy ra và throughput không tăng vô hạn.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 3)",
  "confidence": "derived"
 },
 {
  "id": "u3-004",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Nếu UDP receiver phát hiện lỗi trong segment nhận được bằng checksum thì UDP làm gì?",
  "options": [
   "Bỏ segment đó (hoặc chuyển cho ứng dụng kèm cảnh báo); bản thân UDP không làm gì để khắc phục lỗi",
   "Gửi NAK yêu cầu sender gửi lại segment",
   "Sửa các bit lỗi bằng checksum",
   "Gửi ACK kèm sequence number mong đợi"
  ],
  "answer": 0,
  "explain": "UDP chỉ phát hiện lỗi bằng checksum: khi có lỗi nó bỏ segment hoặc chuyển cho ứng dụng kèm cảnh báo. UDP không gửi NAK/ACK và không sửa lỗi.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 4)",
  "confidence": "derived"
 },
 {
  "id": "u3-005",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Host A gửi một file 500.000 byte cho Host B qua TCP với MSS là 1.000 byte, và byte đầu tiên của luồng dữ liệu được đánh số 0. Sequence number của segment thứ hai là bao nhiêu?",
  "options": [
   "1",
   "1.000",
   "999",
   "1.001"
  ],
  "answer": 1,
  "explain": "Sequence number là số thứ tự của byte đầu tiên trong segment. Segment 1 mang byte 0–999 nên segment 2 bắt đầu ở byte 1000.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 5)",
  "confidence": "verified"
 },
 {
  "id": "u3-006",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Trong cách tiếp cận kiểm soát tắc nghẽn có sự hỗ trợ của mạng (network-assisted):",
  "options": [
   "receiver thông báo cho sender dung lượng buffer còn trống",
   "router phản hồi tường minh cho sender và/hoặc receiver về trạng thái tắc nghẽn của mạng (ví dụ các bit ECN)",
   "sender chỉ dựa vào timeout để phát hiện tắc nghẽn",
   "end system không bao giờ nhận được thông tin về tắc nghẽn"
  ],
  "answer": 1,
  "explain": "Network-assisted: router phản hồi tường minh cho sender và/hoặc receiver về mức tắc nghẽn (ví dụ bit ECN).",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 6)",
  "confidence": "derived"
 },
 {
  "id": "u3-007",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Phát biểu nào về UDP là ĐÚNG?",
  "options": [
   "UDP thực hiện handshake trước khi gửi dữ liệu",
   "UDP giảm tốc độ gửi khi mạng bị tắc nghẽn",
   "UDP truyền lại các segment bị mất",
   "UDP là connectionless: không có handshake và mỗi segment được xử lý độc lập với các segment khác"
  ],
  "answer": 3,
  "explain": "UDP không bắt tay, không retransmit và không giảm tốc độ khi mạng tắc; mỗi segment được xử lý độc lập.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 7)",
  "confidence": "derived"
 },
 {
  "id": "u3-008",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Sự khác biệt chính giữa flow control và congestion control trong TCP là gì?",
  "options": [
   "Flow control ngăn sender làm tràn buffer của receiver, còn congestion control làm sender giảm tốc vì mạng bị tắc nghẽn",
   "Flow control do router thực hiện, còn congestion control do receiver thực hiện",
   "Flow control chỉ dùng cho UDP",
   "Không có khác biệt; hai thuật ngữ có cùng nghĩa"
  ],
  "answer": 0,
  "explain": "Flow control bảo vệ buffer của receiver khỏi bị tràn; congestion control làm sender giảm tốc vì mạng bị tắc nghẽn.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 8)",
  "confidence": "derived"
 },
 {
  "id": "u3-009",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Dịch vụ truyền dữ liệu tin cậy của TCP đảm bảo luồng dữ liệu mà một process đọc từ buffer nhận TCP là:",
  "options": [
   "được chuyển với throughput đảm bảo",
   "được mã hóa đầu cuối",
   "được chuyển trong một độ trễ giới hạn",
   "không bị hỏng, không thiếu, không trùng lặp và đúng thứ tự"
  ],
  "answer": 3,
  "explain": "TCP bảo đảm luồng byte đến process nhận không lỗi, không thiếu, không trùng và đúng thứ tự; nó không bảo đảm throughput, độ trễ hay mã hóa.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 9)",
  "confidence": "derived"
 },
 {
  "id": "u3-010",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "TCP được gọi là dùng cumulative acknowledgment (ACK tích lũy) vì:",
  "options": [
   "sender phải chờ ACK từ mọi router trên đường đi",
   "mỗi byte được xác nhận bằng một ACK riêng",
   "một acknowledgment number xác nhận mọi byte đến trước số đó (không bao gồm số đó)",
   "receiver chỉ xác nhận các segment đến không đúng thứ tự"
  ],
  "answer": 2,
  "explain": "ACK tích lũy: acknowledgment number là số byte kế tiếp mà receiver mong nhận, nên xác nhận mọi byte đứng trước nó.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 10)",
  "confidence": "derived"
 },
 {
  "id": "u3-011",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Multiplexing ở host gửi là:",
  "options": [
   "gom các đoạn dữ liệu từ các socket khác nhau, đóng gói mỗi đoạn kèm thông tin header để tạo segment và chuyển các segment xuống tầng mạng",
   "gộp nhiều IP datagram thành một frame tầng liên kết",
   "chia một segment thành nhiều IP datagram",
   "chuyển dữ liệu trong segment nhận được đến đúng socket"
  ],
  "answer": 0,
  "explain": "Multiplexing ở bên gửi là gom dữ liệu từ các socket khác nhau, thêm header (có port) tạo segment rồi chuyển xuống tầng mạng; demultiplexing là chiều ngược lại ở bên nhận.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 11)",
  "confidence": "derived"
 },
 {
  "id": "u3-012",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Giao thức tầng ứng dụng nào thường chạy trên UDP?",
  "options": [
   "HTTP/1.1",
   "IMAP",
   "DNS",
   "SMTP"
  ],
  "answer": 2,
  "explain": "DNS thường chạy trên UDP (port 53). HTTP/1.1, IMAP và SMTP chạy trên TCP.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 12)",
  "confidence": "derived"
 },
 {
  "id": "u3-013",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Một TCP receiver có RcvBuffer = 4.096 byte, LastByteRcvd = 3.000 và LastByteRead = 1.000. Giá trị rwnd là bao nhiêu?",
  "options": [
   "4.096 byte",
   "1.096 byte",
   "2.000 byte",
   "2.096 byte"
  ],
  "answer": 3,
  "explain": "rwnd = RcvBuffer − (LastByteRcvd − LastByteRead) = 4096 − (3000 − 1000) = 2096 byte.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 13)",
  "confidence": "verified"
 },
 {
  "id": "u3-014",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Vì sao UDP vẫn cung cấp checksum dù nhiều giao thức tầng liên kết cũng kiểm tra lỗi?",
  "options": [
   "Vì không có gì đảm bảo mọi link đều kiểm tra lỗi, và lỗi bit còn có thể xảy ra khi segment được lưu trong bộ nhớ của router",
   "Vì các segment UDP luôn được mã hóa",
   "Vì checksum được dùng để chọn port đích",
   "Vì UDP phải tự sửa lỗi"
  ],
  "answer": 0,
  "explain": "Không phải link nào cũng kiểm tra lỗi, và bit còn có thể bị lỗi ngay trong bộ nhớ của router, nên UDP vẫn cần checksum end-to-end. UDP chỉ phát hiện lỗi chứ không sửa.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 14)",
  "confidence": "derived"
 },
 {
  "id": "u3-015",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Khi timer của TCP sender hết hạn, sender:",
  "options": [
   "truyền lại tất cả các segment chưa được xác nhận",
   "đóng kết nối",
   "giảm một nửa receive window",
   "truyền lại segment gây ra timeout và khởi động lại timer"
  ],
  "answer": 3,
  "explain": "Khi timer hết hạn, TCP chỉ gửi lại segment cũ nhất chưa được ACK (segment gây timeout) rồi khởi động lại timer.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 15)",
  "confidence": "derived"
 },
 {
  "id": "u3-016",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Trong TCP, Maximum Segment Size (MSS) là:",
  "options": [
   "kích thước tối đa của header TCP",
   "lượng dữ liệu tầng ứng dụng tối đa trong một segment, không tính header",
   "kích thước tối đa của một IP datagram gồm mọi header",
   "kích thước của buffer nhận"
  ],
  "answer": 1,
  "explain": "MSS là lượng dữ liệu tầng ứng dụng tối đa trong một segment, không tính header.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 16)",
  "confidence": "derived"
 },
 {
  "id": "u3-017",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Mục đích chính của số source port trong một segment UDP là gì?",
  "options": [
   "Chỉ định sequence number của byte đầu tiên",
   "Đóng vai trò một phần của \"địa chỉ trả về\" để process nhận có thể gửi phản hồi",
   "Dùng để tính độ dài segment",
   "Xác định process đích"
  ],
  "answer": 1,
  "explain": "Source port là một phần của \"địa chỉ trả về\", giúp process nhận gửi phản hồi lại cho đúng process gửi.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 17)",
  "confidence": "derived"
 },
 {
  "id": "u3-018",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Để đóng một kết nối TCP, client gửi một segment có:",
  "options": [
   "bit URG = 1",
   "bit SYN = 1",
   "bit RST = 0",
   "bit FIN = 1"
  ],
  "answer": 3,
  "explain": "Để đóng kết nối TCP, bên muốn đóng gửi segment có cờ FIN = 1.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 18)",
  "confidence": "derived"
 },
 {
  "id": "u3-019",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Cần trao đổi bao nhiêu segment giữa client và server để thiết lập một kết nối TCP?",
  "options": [
   "4",
   "2",
   "3",
   "1"
  ],
  "answer": 2,
  "explain": "Thiết lập kết nối TCP bằng three-way handshake gồm 3 segment: SYN, SYN-ACK, ACK.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 19)",
  "confidence": "derived"
 },
 {
  "id": "u3-020",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "Trường Length trong header UDP quy định:",
  "options": [
   "độ dài của riêng phần payload",
   "số segment mà ứng dụng đã gửi",
   "số byte của segment UDP, gồm cả header và dữ liệu",
   "độ dài của toàn bộ IP datagram"
  ],
  "answer": 2,
  "explain": "Trường Length của UDP là số byte của cả segment UDP, gồm header 8 byte và phần dữ liệu.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 20)",
  "confidence": "derived"
 }
]
);
