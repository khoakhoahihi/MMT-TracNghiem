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
  "q": "A Web page consists of a base HTML file and 10 referenced JPEG images, all stored on the same server. Using non-persistent HTTP, how many TCP connections are needed to retrieve the whole page?",
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
  "q": "What is the main difference between non-persistent and persistent HTTP connections?",
  "options": [
   "With persistent HTTP, the server stores information about each client's past requests",
   "Persistent HTTP runs over UDP, while non-persistent HTTP runs over TCP",
   "Non-persistent HTTP transfers multiple objects over each TCP connection",
   "With persistent HTTP, the server leaves the TCP connection open so that multiple objects can be sent over the same connection"
  ],
  "answer": 3,
  "explain": "Persistent HTTP giữ TCP connection mở sau response, nên nhiều object đi qua cùng một connection và tiết kiệm RTT bắt tay. \"With persistent HTTP, the server stores information about each client's past requests\": HTTP là stateless, việc nhớ trạng thái là của cookies. \"Persistent HTTP runs over UDP, while non-persistent HTTP runs over TCP\": cả hai đều chạy trên TCP. \"Non-persistent HTTP transfers multiple objects over each TCP connection\": ngược lại, non-persistent truyền tối đa 1 object trên mỗi connection.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 2)",
  "confidence": "derived"
 },
 {
  "id": "u2-003",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Which field of a DNS resource record specifies how long the record may remain in a DNS cache?",
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
  "q": "Whereas HTTP is mainly a pull protocol, SMTP is best described as:",
  "options": [
   "a stateless protocol that runs over UDP",
   "a pull protocol, because the receiving server requests mail from the sending server",
   "a protocol that requires an intermediate relay mail server for every message",
   "a push protocol, because the sending mail server pushes the message to the receiving mail server"
  ],
  "answer": 3,
  "explain": "SMTP là push: server gửi mở connection và đẩy thư sang server nhận. \"a stateless protocol that runs over UDP\": SMTP chạy trên TCP (port 25). \"a pull protocol, because the receiving server requests mail from the sending server\": sai chiều. \"a protocol that requires an intermediate relay mail server for every message\": thường gửi trực tiếp, không bắt buộc qua relay.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 4)",
  "confidence": "derived"
 },
 {
  "id": "u2-005",
  "chapter": "application",
  "set": "u-ch2",
  "q": "In a Python UDP client program, which call creates the client's socket?",
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
  "q": "For a process on one host to send a message to a process on another host, the receiving process must be identified by:",
  "options": [
   "the hostname of the destination host and the name of the application",
   "the IP address of the destination host only",
   "the IP address of the destination host and the port number of the receiving process",
   "the MAC address of the destination host only"
  ],
  "answer": 2,
  "explain": "IP xác định host, port xác định process trên host đó. \"the hostname of the destination host and the name of the application\": hostname phải phân giải qua DNS, tên ứng dụng không dùng để định danh. \"the IP address of the destination host only\": chỉ có IP thì chưa biết process nào. \"the MAC address of the destination host only\": MAC thuộc tầng link, chỉ có ý nghĩa trong mạng cục bộ.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 6)",
  "confidence": "derived"
 },
 {
  "id": "u2-007",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Why can't Bob's user agent use SMTP to obtain messages from his mailbox on his mail server?",
  "options": [
   "SMTP cannot carry 7-bit ASCII text",
   "SMTP does not support authentication of users",
   "SMTP runs over UDP, which is unreliable for retrieving mail",
   "SMTP is a push protocol, whereas obtaining messages is a pull operation"
  ],
  "answer": 3,
  "explain": "SMTP chỉ dùng để đẩy thư đi. Lấy thư về là thao tác pull, nên phải dùng IMAP, POP3 hoặc HTTP (webmail). \"SMTP cannot carry 7-bit ASCII text\": ngược lại, SMTP chỉ truyền 7-bit ASCII. \"SMTP does not support authentication of users\": có SMTP AUTH, và đó không phải lý do chính. \"SMTP runs over UDP, which is unreliable for retrieving mail\": SMTP chạy trên TCP.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 7)",
  "confidence": "derived"
 },
 {
  "id": "u2-008",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Which class of DNS servers is responsible for top-level domains such as com, org, edu and country domains such as vn?",
  "options": [
   "Root servers",
   "Local DNS servers",
   "Authoritative servers",
   "TLD servers"
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
  "q": "Which transport-layer protocol and default server port does HTTP use?",
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
  "q": "In a UDP server written in Python, which socket method receives a datagram and also returns the sender's IP address and port number?",
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
  "q": "In a Python TCP server program, what does serverSocket.accept() return when a client connects?",
  "options": [
   "A UDP socket used to reply to the client",
   "A new socket (connectionSocket) dedicated to that client, together with the client's address",
   "The same welcoming socket, now bound to the client's port",
   "The first message sent by the client and the client's address"
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
  "q": "HTTP is described as a stateless protocol because:",
  "options": [
   "it does not encrypt messages exchanged between client and server",
   "the TCP connection is always closed after each response",
   "the server maintains no information about the past requests of its clients",
   "it runs over UDP, which keeps no connection state"
  ],
  "answer": 2,
  "explain": "Server không lưu thông tin về các request trước. Muốn nhớ trạng thái phải dùng cookies. \"it does not encrypt messages exchanged between client and server\": mã hóa là việc của HTTPS/TLS. \"the TCP connection is always closed after each response\": persistent HTTP vẫn giữ connection mở mà vẫn stateless. \"it runs over UDP, which keeps no connection state\": HTTP chạy trên TCP.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 12)",
  "confidence": "derived"
 },
 {
  "id": "u2-013",
  "chapter": "application",
  "set": "u-ch2",
  "q": "When Alice sends an e-mail to Bob, between which two entities does the SMTP transfer across the Internet normally take place directly?",
  "options": [
   "Bob's mail server and Bob's user agent",
   "Alice's mail server and Bob's mail server",
   "Alice's mail server and a root DNS server",
   "Alice's user agent and Bob's user agent"
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
  "q": "Which statement correctly describes a difference between TCP and UDP socket programming?",
  "options": [
   "A TCP client must establish a connection with the server through a handshake before sending data",
   "A UDP server needs a welcoming socket and a separate connection socket for each client",
   "A UDP client must perform a handshake with the server before sending data",
   "A TCP client must explicitly attach the destination address to every packet it sends"
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
  "q": "A Web cache sends a conditional GET containing an If-Modified-Since header. If the object has not been modified since that date, the origin server replies with:",
  "options": [
   "404 Not Found",
   "200 OK with the object in the entity body",
   "301 Moved Permanently",
   "304 Not Modified with an empty entity body"
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
  "q": "In a typical DNS resolution, the query from the requesting host to its local DNS server is ____, while the queries from the local DNS server to the root, TLD and authoritative servers are ____.",
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
  "q": "In a DNS resource record (Name, Value, Type, TTL) with Type=NS, the Value field is:",
  "options": [
   "the canonical hostname for the alias hostname in Name",
   "the IP address of the host named in Name",
   "the canonical name of a mail server for the domain in Name",
   "the hostname of an authoritative DNS server that knows how to obtain IP addresses for hosts in the domain"
  ],
  "answer": 3,
  "explain": "Ví dụ: (foo.com, dns.foo.com, NS). \"the canonical hostname for the alias hostname in Name\": CNAME. \"the IP address of the host named in Name\": A. \"the canonical name of a mail server for the domain in Name\": MX.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 17)",
  "confidence": "derived"
 },
 {
  "id": "u2-018",
  "chapter": "application",
  "set": "u-ch2",
  "q": "Which of the following is a capability provided by IMAP?",
  "options": [
   "Encoding binary attachments into 7-bit ASCII",
   "Transferring mail from the sender's mail server to the recipient's mail server",
   "Keeping messages on the mail server so that the same mailbox can be accessed and kept in sync from multiple devices",
   "Translating hostnames into IP addresses for mail servers"
  ],
  "answer": 2,
  "explain": "IMAP giữ thư trên server và đồng bộ trạng thái giữa nhiều thiết bị. \"Encoding binary attachments into 7-bit ASCII\": MIME. \"Transferring mail from the sender's mail server to the recipient's mail server\": SMTP. \"Translating hostnames into IP addresses for mail servers\": DNS.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 18)",
  "confidence": "derived"
 },
 {
  "id": "u2-019",
  "chapter": "application",
  "set": "u-ch2",
  "q": "What is the basic purpose of a Content Distribution Network (CDN)?",
  "options": [
   "To translate hostnames into IP addresses for Web browsers",
   "To replace TCP with a faster transport protocol for video streaming",
   "To encrypt all traffic between Web browsers and origin servers",
   "To store copies of content on geographically distributed servers and direct each user request to a suitable nearby server"
  ],
  "answer": 3,
  "explain": "CDN lưu bản sao nội dung ở nhiều nơi và chuyển request tới server gần nhất, nhờ đó giảm độ trễ và giảm tải cho origin server (ví dụ Netflix, Akamai). \"To translate hostnames into IP addresses for Web browsers\": DNS. \"To replace TCP with a faster transport protocol for video streaming\": CDN không thay thế TCP. \"To encrypt all traffic between Web browsers and origin servers\": TLS/HTTPS.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 19)",
  "confidence": "derived"
 },
 {
  "id": "u2-020",
  "chapter": "application",
  "set": "u-ch2",
  "q": "In the client-server architecture, which statement is TRUE?",
  "options": [
   "Each client must also act as a server for other clients",
   "Clients communicate directly with each other without going through a server",
   "The server must initiate communication by contacting each client first",
   "The server is an always-on host with a fixed, well-known IP address that services requests from many clients"
  ],
  "answer": 3,
  "explain": "\"Each client must also act as a server for other clients\" / \"Clients communicate directly with each other without going through a server\": đặc điểm của kiến trúc P2P. \"The server must initiate communication by contacting each client first\": ngược lại, client luôn là bên khởi tạo liên lạc.",
  "source": "user:Mang_May_Tinh_Chuong2_20_cau.md (Câu 20)",
  "confidence": "derived"
 },
 {
  "id": "u3-001",
  "chapter": "transport",
  "set": "u-ch3",
  "q": "In the end-to-end approach to congestion control, which TCP traditionally takes:",
  "options": [
   "routers send explicit rate values to senders",
   "receivers deliberately drop packets to signal congestion",
   "routers reserve bandwidth for each connection",
   "the network layer provides no explicit support, and end systems infer congestion from observed behavior such as packet loss and delay"
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
  "q": "Which of the following services is provided by NEITHER TCP nor UDP in the Internet?",
  "options": [
   "Guarantees on throughput or delay",
   "Process-to-process data delivery",
   "Error checking of segments",
   "Multiplexing and demultiplexing"
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
  "q": "As the arrival rate of packets at a router approaches the capacity of the outgoing link:",
  "options": [
   "very large queuing delays are experienced",
   "packet loss becomes impossible",
   "throughput increases without bound",
   "queuing delay decreases to zero"
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
  "q": "If a UDP receiver detects an error in a received segment using the checksum, what does UDP do?",
  "options": [
   "It discards the segment (or passes it to the application with a warning); UDP itself does nothing to recover from the error",
   "It sends a NAK to ask the sender to retransmit the segment",
   "It corrects the bit errors using the checksum",
   "It sends an ACK with the expected sequence number"
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
  "q": "Host A sends a 500,000-byte file to Host B over TCP with an MSS of 1,000 bytes, and the first byte of the data stream is numbered 0. What is the sequence number of the second segment?",
  "options": [
   "1",
   "1,000",
   "999",
   "1,001"
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
  "q": "In the network-assisted approach to congestion control:",
  "options": [
   "the receiver advertises its free buffer space to the sender",
   "routers provide explicit feedback about the congestion state of the network to the sender and/or receiver (for example, ECN bits)",
   "senders rely only on timeouts to detect congestion",
   "end systems never receive information about congestion"
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
  "q": "Which statement about UDP is TRUE?",
  "options": [
   "UDP performs a handshake before sending data",
   "UDP reduces its sending rate when the network is congested",
   "UDP retransmits lost segments",
   "UDP is connectionless: there is no handshaking, and each segment is handled independently of the others"
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
  "q": "What is the main difference between flow control and congestion control in TCP?",
  "options": [
   "Flow control prevents the sender from overflowing the receiver's buffer, while congestion control throttles the sender because of congestion in the network",
   "Flow control is performed by routers, while congestion control is performed by the receiver",
   "Flow control is used only by UDP",
   "There is no difference; both terms mean the same thing"
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
  "q": "TCP's reliable data transfer service ensures that the data stream a process reads from its TCP receive buffer is:",
  "options": [
   "delivered at a guaranteed throughput",
   "encrypted end to end",
   "delivered within a bounded delay",
   "uncorrupted, without gaps, without duplication, and in sequence"
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
  "q": "TCP is said to use cumulative acknowledgments because:",
  "options": [
   "the sender waits for ACKs from every router on the path",
   "each byte is acknowledged with a separate ACK",
   "an acknowledgment number acknowledges all bytes up to, but not including, that number",
   "the receiver acknowledges only out-of-order segments"
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
  "q": "Multiplexing at the sending host refers to:",
  "options": [
   "gathering data chunks from different sockets, encapsulating each with header information to create segments, and passing the segments to the network layer",
   "combining several IP datagrams into one link-layer frame",
   "splitting one segment into several IP datagrams",
   "delivering the data in a received segment to the correct socket"
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
  "q": "Which application-layer protocol typically runs over UDP?",
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
  "q": "A TCP receiver has RcvBuffer = 4,096 bytes, LastByteRcvd = 3,000 and LastByteRead = 1,000. What is the value of rwnd?",
  "options": [
   "4,096 bytes",
   "1,096 bytes",
   "2,000 bytes",
   "2,096 bytes"
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
  "q": "Why does UDP provide a checksum even though many link-layer protocols also perform error checking?",
  "options": [
   "Because there is no guarantee that every link provides error checking, and bit errors may also occur while a segment is stored in a router's memory",
   "Because UDP segments are always encrypted",
   "Because the checksum is used to select the destination port",
   "Because UDP must correct errors by itself"
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
  "q": "When a TCP sender's timer expires, the sender:",
  "options": [
   "retransmits all unacknowledged segments",
   "closes the connection",
   "halves the receive window",
   "retransmits the segment that caused the timeout and restarts the timer"
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
  "q": "In TCP, the Maximum Segment Size (MSS) is:",
  "options": [
   "the maximum size of the TCP header",
   "the maximum amount of application-layer data in a segment, not including headers",
   "the maximum size of an IP datagram including all headers",
   "the size of the receive buffer"
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
  "q": "What is the main purpose of the source port number in a UDP segment?",
  "options": [
   "It specifies the sequence number of the first byte",
   "It serves as part of a \"return address\" so the receiving process can send a reply",
   "It is used to compute the segment length",
   "It identifies the destination process"
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
  "q": "To close a TCP connection, the client sends a segment with:",
  "options": [
   "the URG bit set to 1",
   "the SYN bit set to 1",
   "the RST bit set to 0",
   "the FIN bit set to 1"
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
  "q": "How many segments are exchanged between client and server to establish a TCP connection?",
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
  "q": "The Length field in the UDP header specifies:",
  "options": [
   "the length of the payload only",
   "the number of segments sent by the application",
   "the number of bytes in the UDP segment, including the header and the data",
   "the length of the entire IP datagram"
  ],
  "answer": 2,
  "explain": "Trường Length của UDP là số byte của cả segment UDP, gồm header 8 byte và phần dữ liệu.",
  "source": "user:Chapter 3 Quiz - 20 questions (answers).pdf (Question 20)",
  "confidence": "derived"
 }
]
);
