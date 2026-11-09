window.QUESTIONS.push(...
[
 {
  "id": "ai-001",
  "chapter": "network",
  "q": "Địa chỉ IP thường được biểu diễn dưới dạng ký hiệu nào để con người dễ đọc?",
  "options": [
   "Hexadecimal (Thập lục phân)",
   "Dotted-decimal (Thập phân có dấu chấm)",
   "Binary (Nhị phân)",
   "Base64"
  ],
  "answer": 1,
  "explain": "Địa chỉ IPv4 thường viết dạng thập phân có dấu chấm (dotted-decimal): mỗi byte viết thành một số thập phân, ngăn cách bằng dấu chấm, ví dụ 193.32.216.9.",
  "source": "user:0 - all in one.docx (set 1, Câu 2)",
  "confidence": "derived"
 },
 {
  "id": "ai-002",
  "chapter": "network",
  "q": "Trong ký hiệu CIDR a.b.c.d/x, giá trị x đại diện cho điều gì?",
  "options": [
   "Số lượng host trong mạng",
   "Số bit của phần mạng (prefix)",
   "Số bit của phần host",
   "Số lượng router trong mạng"
  ],
  "answer": 1,
  "explain": "Trong dạng a.b.c.d/x, x là độ dài phần mạng (prefix): x bit cao nhất xác định mạng, 32 - x bit còn lại là phần host.",
  "source": "user:0 - all in one.docx (set 1, Câu 3)",
  "confidence": "derived"
 },
 {
  "id": "ai-003",
  "chapter": "network",
  "q": "Tổ chức nào có thẩm quyền cao nhất trong việc quản lý không gian địa chỉ IP toàn cầu?",
  "options": [
   "IEEE",
   "IETF",
   "ICANN",
   "W3C"
  ],
  "answer": 2,
  "explain": "ICANN cấp phát các khối địa chỉ IP (qua các registry khu vực) và quản lý hệ thống tên miền gốc, nên là tổ chức có thẩm quyền cao nhất về không gian địa chỉ toàn cầu.",
  "source": "user:0 - all in one.docx (set 1, Câu 5); slide Chapter_4 p.62",
  "confidence": "verified"
 },
 {
  "id": "ai-004",
  "chapter": "network",
  "q": "Địa chỉ IPv6 có độ dài bao nhiêu bit?",
  "options": [
   "32 bit",
   "64 bit",
   "128 bit",
   "256 bit"
  ],
  "answer": 2,
  "explain": "IPv6 mở rộng địa chỉ từ 32 bit lên 128 bit (header IPv6 có địa chỉ nguồn và đích mỗi trường 128 bit).",
  "source": "user:0 - all in one.docx (set 1, Câu 8); slide Chapter_4 p.70",
  "confidence": "verified"
 },
 {
  "id": "ai-005",
  "chapter": "network",
  "q": "Ranh giới giữa host (hoặc router) và liên kết vật lý (physical link) được gọi là gì?",
  "options": [
   "Subnet",
   "Interface (Giao diện)",
   "Gateway",
   "Switch"
  ],
  "answer": 1,
  "explain": "Interface là ranh giới giữa host/router và liên kết vật lý. Router có nhiều interface, mỗi interface có một địa chỉ IP riêng.",
  "source": "user:0 - all in one.docx (set 1, Câu 9)",
  "confidence": "derived"
 },
 {
  "id": "ai-006",
  "chapter": "network",
  "q": "Trước khi có CIDR, địa chỉ IP được phân loại theo các lớp (classful addressing). Lớp nào sau đây hỗ trợ số lượng host lớn nhất (lên tới hơn 16 triệu host)?",
  "options": [
   "Lớp A (/8)",
   "Lớp B (/16)",
   "Lớp C (/24)",
   "Lớp D"
  ],
  "answer": 0,
  "explain": "Lớp A dùng /8, còn 24 bit cho host: 2^24 - 2 = 16.777.214 host, nhiều hơn lớp B (/16: 65.534) và lớp C (/24: 254). Lớp D dành cho multicast, không chia host.",
  "source": "user:0 - all in one.docx (set 1, Câu 10)",
  "confidence": "verified"
 },
 {
  "id": "ai-007",
  "chapter": "network",
  "q": "Một subnet (mạng con) được định nghĩa như thế nào trong thuật ngữ IP?",
  "options": [
   "Là một mạng riêng biệt kết nối các thiết bị có cùng phần prefix địa chỉ IP mà không cần router can thiệp",
   "Là tập hợp các thiết bị có cùng địa chỉ MAC",
   "Là một mạng chỉ bao gồm các router",
   "Là tập hợp tất cả các thiết bị kết nối vào Internet toàn cầu"
  ],
  "answer": 0,
  "explain": "Subnet là tập các interface có cùng phần prefix địa chỉ IP và có thể liên lạc trực tiếp với nhau mà không cần router chen giữa.",
  "source": "user:0 - all in one.docx (set 1, Câu 11); slide Chapter_4 p.48",
  "confidence": "verified"
 },
 {
  "id": "ai-008",
  "chapter": "network",
  "q": "Lợi ích chính của việc sử dụng CIDR (Classless Interdomain Routing) so với phân lớp địa chỉ truyền thống là gì?",
  "options": [
   "Tăng kích thước tiêu đề gói tin IP",
   "Cho phép sử dụng địa chỉ IPv6 trên hạ tầng IPv4",
   "Loại bỏ hoàn toàn nhu cầu sử dụng Subnet Mask",
   "Giảm sự cạn kiệt địa chỉ IP và giảm kích thước bảng định tuyến thông qua việc tổng hợp địa chỉ (address aggregation)"
  ],
  "answer": 3,
  "explain": "CIDR cho phép độ dài phần mạng tùy ý nên cấp phát linh hoạt, bớt lãng phí so với lớp A/B/C, và cho phép tổng hợp tuyến (address aggregation) để bảng định tuyến nhỏ lại.",
  "source": "user:0 - all in one.docx (set 1, Câu 13); slide Chapter_4 p.58",
  "confidence": "verified"
 },
 {
  "id": "ai-009",
  "chapter": "network",
  "q": "Để xác định số lượng subnet trong một hệ thống mạng gồm nhiều router và host, ta sử dụng quy tắc nào?",
  "options": [
   "Đếm số lượng router",
   "Đếm số lượng switch",
   "Tách từng giao diện khỏi host hoặc router, tạo thành các đảo mạng cô lập; mỗi đảo là một subnet",
   "Đếm số lượng đường dây cáp kết nối"
  ],
  "answer": 2,
  "explain": "Cách đếm subnet: tách (detach) từng interface khỏi host hoặc router, tạo thành các 'đảo' mạng cô lập; mỗi đảo là một subnet.",
  "source": "user:0 - all in one.docx (set 1, Câu 14); slide Chapter_4 p.48",
  "confidence": "verified"
 },
 {
  "id": "ai-010",
  "chapter": "network",
  "q": "Thiết bị nào đóng vai trò là \"default gateway\" (cổng mặc định) trong cấu hình mạng của một host?",
  "options": [
   "Switch kết nối trực tiếp với host",
   "Router đầu tiên mà host kết nối đến để đi ra khỏi subnet của nó",
   "DNS Server cục bộ",
   "DHCP Server"
  ],
  "answer": 1,
  "explain": "Default gateway là router đầu tiên (first-hop router) mà host gửi gói tới khi địa chỉ đích nằm ngoài subnet của nó; DHCP cũng cấp địa chỉ này cho client.",
  "source": "user:0 - all in one.docx (set 1, Câu 16); slide Chapter_4 p.55",
  "confidence": "verified"
 },
 {
  "id": "ai-011",
  "chapter": "network",
  "q": "Địa chỉ IP 192.168.1.0/24 và 192.168.1.255/24 (trong trường hợp thông thường) không được gán cho một host cụ thể vì lý do gì?",
  "options": [
   "192.168.1.0 là địa chỉ mạng (network address) và 192.168.1.255 là địa chỉ quảng bá (broadcast address) của subnet đó",
   "Chúng là địa chỉ dành riêng cho Router",
   "Chúng là các địa chỉ IPv6",
   "Chúng thuộc về lớp A nên không dùng cho mạng nhỏ"
  ],
  "answer": 0,
  "explain": "Trong mỗi subnet, địa chỉ đầu (phần host toàn bit 0) là địa chỉ mạng, địa chỉ cuối (toàn bit 1) là broadcast nên không gán cho host. Với 192.168.1.0/24: .0 là mạng, .255 là broadcast.",
  "source": "user:0 - all in one.docx (set 1, Câu 18)",
  "confidence": "derived"
 },
 {
  "id": "ai-012",
  "chapter": "network",
  "q": "Một host có địa chỉ IP 223.1.1.2 và subnet mask /24. Host này muốn gửi dữ liệu đến 223.1.1.3. Thiết bị trung gian nào là bắt buộc phải có để truyền gói tin này?",
  "options": [
   "Router",
   "DHCP Server",
   "NAT Router",
   "Switch (hoặc Hub)"
  ],
  "answer": 3,
  "explain": "223.1.1.2 và 223.1.1.3 cùng subnet 223.1.1.0/24 (kiểm tra bằng script) nên giao tiếp trực tiếp ở tầng liên kết qua switch hoặc hub, không cần router.",
  "source": "user:0 - all in one.docx (set 1, Câu 23); slide Chapter_4 p.48",
  "confidence": "verified"
 },
 {
  "id": "ai-013",
  "chapter": "network",
  "q": "Xét một Router có 3 interface kết nối tới 3 mạng LAN và 3 interface kết nối trực tiếp (point-to-point) tới 3 Router khác. Tổng số subnet trong hệ thống này (chỉ tính xung quanh Router đó) là bao nhiêu?",
  "options": [
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 3,
  "explain": "3 interface LAN tạo 3 subnet; mỗi liên kết điểm-điểm giữa hai router là một subnet riêng nên thêm 3 nữa. Tổng 3 + 3 = 6 subnet.",
  "source": "user:0 - all in one.docx (set 1, Câu 24); slide Chapter_4 p.48",
  "confidence": "verified"
 },
 {
  "id": "ai-014",
  "chapter": "network",
  "q": "Địa chỉ nào sau đây thuộc về subnet 128.119.40.128/26?",
  "options": [
   "128.119.40.127",
   "128.119.40.191",
   "128.119.40.192",
   "128.119.40.64"
  ],
  "answer": 1,
  "explain": "/26 có khối 64 địa chỉ nên 128.119.40.128/26 chạy từ .128 đến .191 (kiểm tra bằng script). Địa chỉ .191 là broadcast nhưng vẫn thuộc subnet; .64 và .127 thuộc subnet trước, .192 thuộc subnet sau.",
  "source": "user:0 - all in one.docx (set 1, Câu 26)",
  "confidence": "verified"
 },
 {
  "id": "ai-015",
  "chapter": "network",
  "q": "Nếu một ISP có khối địa chỉ 192.168.0.0/16 và muốn quảng bá (aggregate) hai khối con 192.168.0.0/24 và 192.168.1.0/24 thành một tuyến duy nhất ra Internet, địa chỉ quảng bá đó sẽ là gì?",
  "options": [
   "192.168.0.0/23",
   "192.168.0.0/22",
   "192.168.0.0/24",
   "192.168.0.0/25"
  ],
  "answer": 0,
  "explain": "192.168.0.0/24 và 192.168.1.0/24 chỉ khác nhau ở bit thứ 24 (0 và 1), 23 bit đầu giống hệt nên gộp được thành 192.168.0.0/23 (kiểm tra bằng script).",
  "source": "user:0 - all in one.docx (set 1, Câu 29)",
  "confidence": "verified"
 },
 {
  "id": "ai-016",
  "chapter": "network",
  "q": "Máy tính A có địa chỉ IP 172.16.45.14 và subnet mask /30 (255.255.255.252). Điều nào sau đây là đúng về địa chỉ này?",
  "options": [
   "Đây là địa chỉ mạng (Network Address)",
   "Đây là địa chỉ quảng bá (Broadcast Address)",
   "Đây là một địa chỉ host hợp lệ có thể gán cho giao diện mạng",
   "Đây là địa chỉ thuộc lớp C"
  ],
  "answer": 2,
  "explain": "/30 chia khối 4 địa chỉ; mạng chứa 172.16.45.14 là 172.16.45.12/30 (host .13 và .14, broadcast .15) nên .14 là địa chỉ host hợp lệ (kiểm tra bằng script).",
  "source": "user:0 - all in one.docx (set 1, Câu 32)",
  "confidence": "verified"
 },
 {
  "id": "ai-017",
  "chapter": "network",
  "q": "Trong mô hình NAT, nếu hai máy tính trong cùng một mạng nội bộ (LAN) cố gắng truy cập cùng một Web server bên ngoài Internet và vô tình chọn cùng một source port (ví dụ: 3345), Router NAT sẽ xử lý tình huống này như thế nào?",
  "options": [
   "Router sẽ hủy gói tin thứ hai vì trùng port",
   "Router yêu cầu máy tính thứ hai đổi IP",
   "Router NAT không thể xử lý trường hợp này",
   "Router sẽ gán cho mỗi kết nối một source port mới khác nhau trên địa chỉ IP WAN của nó để phân biệt hai phiên làm việc"
  ],
  "answer": 3,
  "explain": "Router NAT phân biệt phiên bằng bảng ánh xạ (IP LAN, port LAN) <-> (IP WAN, port WAN mới). Nếu hai máy trùng source port, router gán cho mỗi kết nối một port WAN khác nhau để biết gói phản hồi thuộc máy nào.",
  "source": "user:0 - all in one.docx (set 1, Câu 38); slide Chapter_4 p.64",
  "confidence": "verified"
 },
 {
  "id": "ai-018",
  "chapter": "network",
  "q": "Trong tiêu đề IPv4, trường Time-to-Live (TTL) có giá trị ban đầu là 64. Gói tin đi qua 4 router trước khi đến đích. Tại đích, giá trị TTL còn lại là bao nhiêu (giả sử không có router nào giữ gói tin quá 1 giây)?",
  "options": [
   "64",
   "60",
   "59",
   "0"
  ],
  "answer": 1,
  "explain": "Mỗi router giảm TTL đi 1: qua 4 router thì TTL còn 64 - 4 = 60 tại đích.",
  "source": "user:0 - all in one.docx (set 1, Câu 43); slide Chapter_4 p.43",
  "confidence": "verified"
 },
 {
  "id": "ai-019",
  "chapter": "network",
  "q": "Với địa chỉ IPv6 2001:0db8:0000:0000:0000:0000:1428:57ab, cách viết rút gọn hợp lệ và ngắn nhất là gì?",
  "options": [
   "2001:db8::1428:57ab",
   "2001:db8:0:0:0:0:1428:57ab",
   "2001:db8::0::1428:57ab",
   "2001:db8:0:0::1428:57ab"
  ],
  "answer": 0,
  "explain": "Bỏ các số 0 đứng đầu mỗi nhóm (0db8 -> db8) rồi thay chuỗi nhóm 0 liên tiếp dài nhất bằng '::' (chỉ dùng một lần): 2001:db8::1428:57ab (đối chiếu bằng thư viện ipaddress).",
  "source": "user:0 - all in one.docx (set 1, Câu 49)",
  "confidence": "verified"
 },
 {
  "id": "ai-020",
  "chapter": "network",
  "q": "Một router có 5 cổng interface kết nối với 5 mạng LAN khác nhau và 2 cổng serial kết nối WAN tới 2 router khác. Router này cần tối thiểu bao nhiêu địa chỉ IP để gán cho các interface của chính nó hoạt động định tuyến?",
  "options": [
   "1",
   "5",
   "7",
   "0 (Router hoạt động ở lớp 2 nên không cần IP)"
  ],
  "answer": 2,
  "explain": "Mỗi interface của router nối vào một mạng riêng nên cần một địa chỉ IP thuộc mạng đó: 5 cổng LAN + 2 cổng serial = 7 địa chỉ IP.",
  "source": "user:0 - all in one.docx (set 1, Câu 50)",
  "confidence": "derived"
 },
 {
  "id": "ai-021",
  "chapter": "transport",
  "q": "Cờ (Flag) nào trong tiêu đề TCP được sử dụng để bắt đầu thiết lập kết nối?",
  "options": [
   "FIN",
   "RST",
   "PSH",
   "SYN"
  ],
  "answer": 3,
  "explain": "Cờ SYN được đặt bằng 1 trong segment đầu tiên của bắt tay 3 bước để yêu cầu thiết lập kết nối và đồng bộ số thứ tự ban đầu.",
  "source": "user:0 - all in one.docx (set 2, Câu 10); slide Chapter_3 p.101",
  "confidence": "verified"
 },
 {
  "id": "ai-022",
  "chapter": "transport",
  "q": "Để ngắt kết nối TCP một cách bình thường, cờ nào được sử dụng?",
  "options": [
   "SYN",
   "URG",
   "FIN",
   "RST"
  ],
  "answer": 2,
  "explain": "Cờ FIN báo bên gửi không còn dữ liệu và muốn đóng kết nối một cách bình thường (êm đẹp), khác với RST là hủy kết nối đột ngột.",
  "source": "user:0 - all in one.docx (set 2, Câu 11); slide Chapter_3 p.147",
  "confidence": "verified"
 },
 {
  "id": "ai-023",
  "chapter": "transport",
  "q": "\"Piggybacking\" trong TCP nghĩa là gì?",
  "options": [
   "Gửi nhiều bản sao của cùng một gói tin",
   "Gửi dữ liệu ACK kèm (cõng) trên một segment chứa dữ liệu từ chiều ngược lại",
   "Nén dữ liệu để giảm kích thước",
   "Chia nhỏ gói tin IP"
  ],
  "answer": 1,
  "explain": "Piggybacking: ACK của chiều này được gắn vào header của segment dữ liệu đang gửi theo chiều ngược lại, nhờ đó không cần một segment ACK riêng.",
  "source": "user:0 - all in one.docx (set 2, Câu 14)",
  "confidence": "derived"
 },
 {
  "id": "ai-024",
  "chapter": "transport",
  "q": "Tấn công SYN Flood khai thác điểm yếu nào của quá trình bắt tay TCP?",
  "options": [
   "Việc server cấp phát tài nguyên sau khi nhận SYN nhưng không bao giờ nhận được ACK cuối cùng từ client",
   "Bước gửi FIN",
   "Việc tính toán Checksum",
   "Cơ chế Fast Retransmit"
  ],
  "answer": 0,
  "explain": "Kẻ tấn công gửi hàng loạt SYN (thường giả địa chỉ nguồn) rồi không gửi ACK cuối; server giữ tài nguyên cho các kết nối bán mở cho tới khi cạn, nên không phục vụ được người dùng thật.",
  "source": "user:0 - all in one.docx (set 2, Câu 29)",
  "confidence": "derived"
 },
 {
  "id": "ai-025",
  "chapter": "transport",
  "q": "Nguyên lý \"AIMD\" (Tăng cộng, Giảm nhân) trong TCP Congestion Control tạo ra biểu đồ thông lượng có hình dạng gì?",
  "options": [
   "Đường thẳng đứng",
   "Đường nằm ngang",
   "Hình sin",
   "Hình răng cưa (Saw tooth)"
  ],
  "answer": 3,
  "explain": "AIMD tăng tuyến tính 1 MSS mỗi RTT rồi giảm một nửa khi mất gói, tạo đồ thị tốc độ gửi hình răng cưa (sawtooth).",
  "source": "user:0 - all in one.docx (set 2, Câu 30); slide Chapter_3 p.119",
  "confidence": "verified"
 },
 {
  "id": "ai-026",
  "chapter": "transport",
  "q": "Thông tin nào sau đây KHÔNG có trong một TCP segment?",
  "options": [
   "Source Port & Destination Port",
   "Sequence Number",
   "IP Address của nguồn và đích",
   "Checksum"
  ],
  "answer": 2,
  "explain": "Header TCP chỉ có cổng nguồn/đích, số thứ tự, số ACK, cờ, rwnd, checksum... Địa chỉ IP nằm trong header IP của tầng mạng, không nằm trong header TCP.",
  "source": "user:0 - all in one.docx (set 2, Câu 31); slide Chapter_3 p.78",
  "confidence": "verified"
 },
 {
  "id": "ai-027",
  "chapter": "transport",
  "q": "Tại sao TCP được gọi là cung cấp dịch vụ \"Byte stream\" (luồng byte)?",
  "options": [
   "Vì nó đóng gói dữ liệu thành các khối cố định 100 byte",
   "Vì nó không bảo tồn ranh giới các thông điệp (message boundaries) của ứng dụng; dữ liệu được xem như một chuỗi byte liên tục",
   "Vì nó chỉ truyền được văn bản ASCII",
   "Vì nó sử dụng UDP bên dưới"
  ],
  "answer": 1,
  "explain": "TCP cung cấp luồng byte tin cậy, đúng thứ tự và không có ranh giới thông điệp; ứng dụng phải tự đánh dấu ranh giới nếu cần.",
  "source": "user:0 - all in one.docx (set 2, Câu 32); slide Chapter_3 p.77",
  "confidence": "verified"
 },
 {
  "id": "ai-028",
  "chapter": "transport",
  "q": "Khi một host nhận được TCP segment với cờ RST (Reset) được bật, điều đó có nghĩa là gì?",
  "options": [
   "Bên gửi thông báo rằng không có socket nào lắng nghe trên cổng đích đó hoặc từ chối kết nối",
   "Bên gửi muốn bắt đầu kết nối",
   "Bên gửi muốn ngắt kết nối một cách êm đẹp (graceful)",
   "Bên gửi đang yêu cầu truyền lại dữ liệu"
  ],
  "answer": 0,
  "explain": "Cờ RST dùng để reset kết nối: gửi khi segment đến một cổng không có socket nào đang lắng nghe, hoặc khi hủy/từ chối kết nối đột ngột.",
  "source": "user:0 - all in one.docx (set 2, Câu 37); slide Chapter_3 p.78",
  "confidence": "derived"
 },
 {
  "id": "ai-029",
  "chapter": "transport",
  "q": "Tại sao trong mạng có độ trễ cao và băng thông lớn, TCP Reno lại hoạt động kém hiệu quả?",
  "options": [
   "Vì TCP Reno không có Checksum",
   "Vì TCP Reno sử dụng UDP",
   "Vì TCP Reno không hỗ trợ số thứ tự lớn",
   "Vì nó tăng cwnd quá chậm (tuyến tính) trong giai đoạn tránh tắc nghẽn và giảm quá mạnh khi mất gói"
  ],
  "answer": 3,
  "explain": "Trên đường truyền có tích băng thông-trễ lớn, cwnd phải rất lớn mới lấp đầy đường ống, nhưng Reno chỉ tăng 1 MSS mỗi RTT và cắt đôi khi mất gói nên rất lâu mới hồi phục; TCP CUBIC ra đời để khắc phục.",
  "source": "user:0 - all in one.docx (set 2, Câu 40); slide Chapter_3 p.149",
  "confidence": "verified"
 },
 {
  "id": "ai-030",
  "chapter": "transport",
  "q": "Một ứng dụng gửi một thông điệp ngắn 10 byte qua UDP. Sau đó, nó gửi tiếp một thông điệp khác cũng 10 byte. Nếu cả hai gói tin đều đến đích thành công, ứng dụng nhận sẽ đọc dữ liệu như thế nào?",
  "options": [
   "Đọc được một luồng liên tục 20 byte trong một lần gọi hàm nhận",
   "Đọc được hai thông điệp riêng biệt 10 byte trong hai lần gọi hàm nhận, ranh giới thông điệp được bảo toàn",
   "Phải chờ cho đến khi bộ đệm đầy mới đọc được",
   "Dữ liệu có thể bị trộn lẫn thứ tự các byte bên trong mỗi thông điệp"
  ],
  "answer": 1,
  "explain": "UDP hướng thông điệp: mỗi lần gửi là một datagram riêng và bên nhận đọc ra từng datagram nguyên vẹn, còn TCP là luồng byte không giữ ranh giới.",
  "source": "user:0 - all in one.docx (set 3, Câu 1); slide Chapter_2 p.102; Chapter_3 p.77",
  "confidence": "verified"
 },
 {
  "id": "ai-031",
  "chapter": "transport",
  "q": "Trong giao thức TCP, giả sử Host A gửi liên tiếp 2 phân đoạn (segment) cho Host B. Phân đoạn 1 có Seq=92, dài 8 byte. Phân đoạn 2 có Seq=100, dài 20 byte. Giả sử phân đoạn 1 đến đích trước, B gửi ACK. Sau đó phân đoạn 2 đến đích, B gửi ACK tiếp. Nếu ACK cho phân đoạn 1 bị mất trên đường truyền về A, nhưng ACK cho phân đoạn 2 (ACK=120) về đến A trước khi hết thời gian chờ (timeout), thì A sẽ xử lý như thế nào?",
  "options": [
   "A sẽ truyền lại phân đoạn 1 vì không nhận được ACK của nó",
   "A sẽ truyền lại cả phân đoạn 1 và 2",
   "A không truyền lại phân đoạn nào cả vì ACK=120 là xác nhận tích lũy, ngầm định đã nhận được phân đoạn 1",
   "A gửi một thông điệp hỏi lại trạng thái của phân đoạn 1"
  ],
  "answer": 2,
  "explain": "ACK của TCP là tích lũy: ACK = 120 nghĩa là đã nhận đủ mọi byte đến 119, nên segment 1 (Seq 92-99) cũng được xác nhận ngầm; bên gửi không cần truyền lại segment nào.",
  "source": "user:0 - all in one.docx (set 3, Câu 3)",
  "confidence": "derived"
 },
 {
  "id": "ai-032",
  "chapter": "transport",
  "q": "Trong quá trình thiết lập kết nối TCP (3-way handshake), tại sao bên gửi (Client) và bên nhận (Server) lại phải chọn số thứ tự khởi tạo (Initial Sequence Number - ISN) một cách ngẫu nhiên thay vì luôn bắt đầu từ 0 hoặc 1?",
  "options": [
   "Để tránh nhầm lẫn với các phân đoạn cũ còn tồn tại trên mạng từ một kết nối trước đó giữa cùng cặp cổng IP/Port",
   "Để tăng tốc độ thiết lập kết nối",
   "Để tiết kiệm băng thông header",
   "Để đồng bộ hóa đồng hồ giữa hai máy"
  ],
  "answer": 0,
  "explain": "Chọn ISN ngẫu nhiên để segment cũ còn trôi trên mạng từ kết nối trước (cùng cặp IP/cổng) không bị nhầm là hợp lệ trong kết nối mới, đồng thời gây khó cho kẻ tấn công đoán số thứ tự.",
  "source": "user:0 - all in one.docx (set 3, Câu 7)",
  "confidence": "derived"
 },
 {
  "id": "ai-033",
  "chapter": "transport",
  "q": "Khi một router bị quá tải và bắt đầu thả gói (drop packets), cơ chế ECN (Explicit Congestion Notification) giúp cải thiện hiệu năng TCP như thế nào so với TCP truyền thống?",
  "options": [
   "Nó cho phép router gửi lại gói tin bị mất thay cho sender",
   "Nó tăng kích thước bộ đệm của router một cách tự động",
   "Nó chuyển kết nối sang sử dụng UDP để tránh tắc nghẽn",
   "Nó báo hiệu cho sender giảm tốc độ (cwnd) trước khi gói tin thực sự bị mất, giúp tránh việc phải truyền lại và tránh timeout"
  ],
  "answer": 3,
  "explain": "Với ECN, router đánh dấu bit trong header IP khi hàng đợi sắp đầy; bên nhận báo lại cho bên gửi (cờ ECE trong ACK) để bên gửi giảm tốc độ trước khi có gói bị mất.",
  "source": "user:0 - all in one.docx (set 3, Câu 13); slide Chapter_3 p.131",
  "confidence": "verified"
 },
 {
  "id": "ai-034",
  "chapter": "transport",
  "q": "Tại sao trong giao thức Go-Back-N, kích thước cửa sổ gửi N phải nhỏ hơn 2^k (với k là số bit của trường số thứ tự), trong khi ở Selective Repeat, kích thước cửa sổ phải nhỏ hơn hoặc bằng 2^(k-1)?",
  "options": [
   "Vì GBN phức tạp hơn SR nên cần cửa sổ nhỏ hơn",
   "Để tránh sự nhầm lẫn giữa gói tin mới và bản truyền lại của gói tin cũ khi ACK bị mất và cửa sổ trượt đi",
   "Để tiết kiệm bộ nhớ đệm tại bên gửi",
   "Vì GBN sử dụng ACK tích lũy còn SR thì không"
  ],
  "answer": 1,
  "explain": "Nếu cửa sổ quá lớn so với không gian số thứ tự, khi ACK bị mất và bên gửi truyền lại gói cũ, bên nhận không phân biệt được bản truyền lại với gói mới có cùng số thứ tự (bài toán 'dilemma' của Selective Repeat).",
  "source": "user:0 - all in one.docx (set 3, Câu 14); slide Chapter_3 p.74-75",
  "confidence": "verified"
 },
 {
  "id": "ai-035",
  "chapter": "transport",
  "q": "Nếu rwnd (cửa sổ nhận) của bên nhận giảm xuống 0, bên gửi sẽ khởi động bộ đếm thời gian bền vững (persist timer) và gửi các gói tin thăm dò (probe packets) có kích thước 1 byte. Mục đích của hành động này là gì?",
  "options": [
   "Để buộc bên nhận phải gửi ACK chứa giá trị rwnd mới khi bộ đệm có chỗ trống, tránh tình trạng tắc nghẽn (deadlock) khi thông báo mở lại cửa sổ bị mất",
   "Để duy trì kết nối không bị timeout ngắt quãng",
   "Để kiểm tra xem bên nhận có bị sập nguồn không",
   "Để tăng dần cửa sổ tắc nghẽn cwnd"
  ],
  "answer": 0,
  "explain": "Nếu thông báo mở lại cửa sổ (rwnd > 0) bị mất, bên gửi chờ mãi còn bên nhận chờ dữ liệu (deadlock). Segment thăm dò 1 byte buộc bên nhận trả ACK kèm rwnd hiện tại.",
  "source": "user:0 - all in one.docx (set 3, Câu 20)",
  "confidence": "derived"
 },
 {
  "id": "ai-036",
  "chapter": "transport",
  "q": "Xét giao thức TCP CUBIC. Khi mạng ổn định và không có mất gói, hàm tăng trưởng của cwnd có dạng hình gì để tiếp cận điểm bão hòa băng thông trước đó (Wmax)?",
  "options": [
   "Tăng tuyến tính liên tục",
   "Tăng hàm mũ liên tục",
   "Hàm bậc 3: Tăng nhanh khi xa Wmax, chậm lại khi gần Wmax, và tăng nhanh trở lại khi vượt qua Wmax",
   "Hình răng cưa đều đặn"
  ],
  "answer": 2,
  "explain": "CUBIC dùng hàm bậc ba: tăng nhanh khi còn xa Wmax, chậm lại và gần như phẳng khi tới sát Wmax, rồi lại tăng nhanh khi vượt qua Wmax để dò băng thông mới.",
  "source": "user:0 - all in one.docx (set 3, Câu 21); slide Chapter_3 p.125-126",
  "confidence": "verified"
 },
 {
  "id": "ai-037",
  "chapter": "transport",
  "q": "Trong môi trường mạng không dây (Wireless) có tỷ lệ lỗi bit cao ngẫu nhiên (không do tắc nghẽn), TCP truyền thống (như Reno) thường hoạt động kém hiệu quả vì:",
  "options": [
   "TCP header quá lớn làm tốn băng thông vô tuyến",
   "Wireless không hỗ trợ bắt tay 3 bước",
   "Wireless có RTT quá ngắn làm TCP không kịp phản ứng",
   "TCP nhầm lẫn việc mất gói do lỗi đường truyền là do tắc nghẽn, dẫn đến giảm oan cwnd và tốc độ truyền"
  ],
  "answer": 3,
  "explain": "Trên mạng không dây, mất gói thường do nhiễu chứ không do tắc nghẽn, nhưng TCP cổ điển vẫn coi là tắc nghẽn và giảm cwnd, làm thông lượng giảm không cần thiết.",
  "source": "user:0 - all in one.docx (set 3, Câu 24); slide Chapter_3 p.136",
  "confidence": "verified"
 },
 {
  "id": "ai-038",
  "chapter": "transport",
  "q": "Giao thức QUIC (nền tảng của HTTP/3) cải thiện vấn đề \"Head-of-Line (HOL) blocking\" của TCP như thế nào khi truyền nhiều luồng dữ liệu (streams)?",
  "options": [
   "QUIC sử dụng TCP nhưng tăng kích thước cửa sổ",
   "QUIC chạy trên UDP và xử lý tin cậy riêng cho từng luồng (stream); mất gói ở luồng này không làm dừng việc xử lý dữ liệu ở luồng khác",
   "QUIC loại bỏ hoàn toàn việc kiểm soát tắc nghẽn",
   "QUIC sử dụng nhiều kết nối TCP song song mặc định"
  ],
  "answer": 1,
  "explain": "QUIC chạy trên UDP và đảm bảo tin cậy riêng cho từng stream, nên mất gói ở stream này không chặn việc giao dữ liệu của stream khác (không có HOL blocking giữa các stream).",
  "source": "user:0 - all in one.docx (set 3, Câu 26); slide Chapter_3 p.140",
  "confidence": "verified"
 },
 {
  "id": "ai-039",
  "chapter": "transport",
  "q": "Khi đóng kết nối TCP, tại sao bên chủ động đóng (gửi FIN trước) lại phải chuyển sang trạng thái TIME_WAIT và chờ một khoảng thời gian (thường là 2*MSL) trước khi thực sự đóng hẳn?",
  "options": [
   "Để đảm bảo bên kia nhận được ACK cuối cùng; nếu ACK này mất, bên kia sẽ gửi lại FIN và bên này cần còn sống để gửi lại ACK",
   "Để chờ hệ điều hành giải phóng bộ nhớ",
   "Để chờ người dùng xác nhận đóng",
   "Để đảm bảo không còn dữ liệu nào trong bộ đệm gửi"
  ],
  "answer": 0,
  "explain": "Bên đóng chủ động chờ khoảng 2*MSL sau khi gửi ACK cuối: nếu ACK này mất, bên kia gửi lại FIN và bên này vẫn còn để trả lời lại ACK; đồng thời các segment cũ trên mạng hết hạn.",
  "source": "user:0 - all in one.docx (set 3, Câu 27); slide Chapter_3 p.147 (2*MSL)",
  "confidence": "derived"
 },
 {
  "id": "ai-040",
  "chapter": "transport",
  "q": "Giả sử hai kết nối TCP (Flow 1 và Flow 2) cùng chia sẻ một đường truyền nghẽn. Flow 1 có RTT = 10ms, Flow 2 có RTT = 100ms. Theo lý thuyết về TCP Reno, điều gì sẽ xảy ra về mặt băng thông?",
  "options": [
   "Hai Flow chia sẻ công bằng băng thông",
   "Flow 2 sẽ chiếm nhiều băng thông hơn vì nó ổn định hơn",
   "Flow 1 sẽ chiếm nhiều băng thông hơn vì nó tăng cwnd nhanh hơn (chu kỳ update ngắn hơn)",
   "Router sẽ ưu tiên Flow 2"
  ],
  "answer": 2,
  "explain": "Thông lượng TCP tỉ lệ nghịch với RTT: luồng RTT 10 ms nhận ACK và tăng cwnd nhanh hơn luồng RTT 100 ms nên chiếm phần băng thông lớn hơn tại nút cổ chai.",
  "source": "user:0 - all in one.docx (set 3, Câu 29)",
  "confidence": "derived"
 },
 {
  "id": "ai-041",
  "chapter": "transport",
  "q": "Trong tính toán Checksum của TCP/UDP, tại sao lại cần thêm một \"Pseudo-header\" (chứa IP nguồn, IP đích, giao thức...) vào để tính toán cùng?",
  "options": [
   "Để tăng độ dài gói tin cho đủ kích thước tối thiểu",
   "Để mã hóa dữ liệu",
   "Đây là lỗi thiết kế của giao thức cũ",
   "Để phát hiện trường hợp gói tin được chuyển đến sai địa chỉ IP đích hoặc sai giao thức, dù dữ liệu bên trong không hỏng"
  ],
  "answer": 3,
  "explain": "Pseudo-header (IP nguồn, IP đích, giao thức, độ dài) được đưa vào tính checksum để phát hiện segment bị giao nhầm địa chỉ IP hoặc giao thức, dù nội dung bên trong không hỏng.",
  "source": "user:0 - all in one.docx (set 3, Câu 31)",
  "confidence": "derived"
 },
 {
  "id": "ai-042",
  "chapter": "transport",
  "q": "Tại sao TCP sử dụng cơ chế \"Self-clocking\" (Tự định nhịp) thông qua ACK?",
  "options": [
   "Để đồng bộ đồng hồ hệ thống giữa Client và Server",
   "Vì sự xuất hiện của ACK tại bên gửi phản ánh đúng tốc độ mà gói tin thoát ra khỏi đường truyền (tốc độ nhận của bên kia), giúp bên gửi bơm gói mới vào mạng một cách nhịp nhàng",
   "Để giảm tải cho CPU tính toán Timer",
   "Để đo độ trễ đường truyền chính xác tuyệt đối"
  ],
  "answer": 1,
  "explain": "ACK trở về phản ánh tốc độ gói rời khỏi mạng và tốc độ nhận của bên kia; bên gửi chỉ đưa gói mới vào khi nhận ACK nên tự điều nhịp theo năng lực mạng (self-clocking).",
  "source": "user:0 - all in one.docx (set 3, Câu 33)",
  "confidence": "derived"
 },
 {
  "id": "ai-043",
  "chapter": "transport",
  "q": "Trong tấn công \"Connection Hijacking\" hoặc giả mạo IP (Spoofing), tại sao kẻ tấn công khó có thể giả mạo một kết nối TCP đang hoạt động nếu không nghe lén được đường truyền?",
  "options": [
   "Vì không đoán được số thứ tự (Sequence Number) hiện tại mà hai bên đang trao đổi để tạo ra gói tin hợp lệ nằm trong cửa sổ nhận",
   "Vì không biết địa chỉ MAC của đích",
   "Vì TCP có mã hóa mặc định",
   "Vì Port nguồn thay đổi liên tục"
  ],
  "answer": 0,
  "explain": "Để chèn segment giả vào một kết nối đang chạy, kẻ tấn công phải đoán được số thứ tự (32 bit) nằm trong cửa sổ nhận hiện tại; nếu không nghe lén được đường truyền thì rất khó.",
  "source": "user:0 - all in one.docx (set 3, Câu 37)",
  "confidence": "derived"
 },
 {
  "id": "ai-044",
  "chapter": "transport",
  "q": "Khi mạng xảy ra tắc nghẽn, tại sao việc TCP giảm tốc độ gửi (ví dụ: AIMD) lại được coi là hành động \"tử tế\" (cooperative) cần thiết cho sự ổn định của Internet?",
  "options": [
   "Để tiết kiệm điện năng cho Router",
   "Để nhường băng thông cho các ứng dụng trả phí",
   "Để ngăn chặn hiện tượng \"Congestion Collapse\" (Sụp đổ do tắc nghẽn), nơi mà đường truyền đầy ắp các gói tin bị drop và truyền lại, khiến thông lượng hữu ích giảm về 0",
   "Để tăng tốc độ xử lý của CPU"
  ],
  "answer": 2,
  "explain": "Nếu mọi nguồn không giảm tốc khi mất gói, các bản truyền lại làm hàng đợi càng đầy, càng nhiều gói bị loại, thông lượng hữu ích tụt về gần 0 (congestion collapse). AIMD của TCP giúp tránh điều đó.",
  "source": "user:0 - all in one.docx (set 3, Câu 39); slide Chapter_3 p.113-116",
  "confidence": "derived"
 },
 {
  "id": "ai-045",
  "chapter": "network",
  "q": "Chức năng chính của lớp mạng (network layer) là gì?",
  "options": [
   "Cung cấp giao tiếp giữa các tiến trình (process-to-process)",
   "Cung cấp giao tiếp giữa người dùng với người dùng",
   "Cung cấp giao tiếp vật lý qua dây dẫn",
   "Cung cấp giao tiếp giữa các máy chủ (host-to-host)"
  ],
  "answer": 3,
  "explain": "Tầng mạng cung cấp truyền thông giữa các host (host-to-host); tầng giao vận cung cấp truyền thông giữa các tiến trình (process-to-process).",
  "source": "user:0 - all in one.docx (set 4, Câu 1); slide Chapter_3 p.5-6",
  "confidence": "verified"
 },
 {
  "id": "ai-046",
  "chapter": "network",
  "q": "Trong kiến trúc router, thành phần nào kết nối các cổng đầu vào với các cổng đầu ra?",
  "options": [
   "Bộ xử lý định tuyến (Routing processor)",
   "Kết cấu chuyển mạch (Switching fabric)",
   "Bộ đệm đầu ra (Output buffer)",
   "Bảng chuyển tiếp (Forwarding table)"
  ],
  "answer": 1,
  "explain": "Switching fabric (kết cấu chuyển mạch) là phần bên trong router nối các cổng vào với cổng ra, chuyển datagram từ cổng vào sang đúng cổng ra.",
  "source": "user:0 - all in one.docx (set 4, Câu 3); slide Chapter_4 p.23",
  "confidence": "verified"
 },
 {
  "id": "ai-047",
  "chapter": "network",
  "q": "Ba kỹ thuật chuyển mạch chính bên trong router là gì?",
  "options": [
   "Memory, Bus, Crossbar",
   "Star, Bus, Ring",
   "Ethernet, WiFi, Fiber",
   "TCP, UDP, IP"
  ],
  "answer": 0,
  "explain": "Ba kiểu chuyển mạch trong router: qua bộ nhớ (memory), qua bus, và qua mạng kết nối như crossbar.",
  "source": "user:0 - all in one.docx (set 4, Câu 11); slide Chapter_4 p.25-27",
  "confidence": "verified"
 },
 {
  "id": "ai-048",
  "chapter": "network",
  "q": "Trường nào trong tiêu đề IPv4 giúp ngăn chặn gói tin lặp vô hạn trong mạng?",
  "options": [
   "Checksum",
   "Protocol",
   "Time-to-live (TTL)",
   "Version"
  ],
  "answer": 2,
  "explain": "TTL giảm 1 sau mỗi router; khi về 0 datagram bị hủy, nhờ đó gói không lưu thông vô hạn khi có vòng lặp định tuyến.",
  "source": "user:0 - all in one.docx (set 4, Câu 13); slide Chapter_4 p.43",
  "confidence": "verified"
 },
 {
  "id": "ai-049",
  "chapter": "network",
  "q": "Khái niệm \"Generalized Forwarding\" (Chuyển tiếp tổng quát) dựa trên mô hình nào?",
  "options": [
   "Destination-based forwarding (Dựa trên địa chỉ đích)",
   "Store-and-forward (Lưu trữ và chuyển tiếp)",
   "Circuit switching (Chuyển mạch kênh)",
   "Match-plus-action (Khớp và hành động)"
  ],
  "answer": 3,
  "explain": "Chuyển tiếp tổng quát dựa trên trừu tượng match+action: so khớp các trường header rồi thực hiện hành động (forward, drop, sửa header...).",
  "source": "user:0 - all in one.docx (set 4, Câu 23); slide Chapter_4 p.15-16, 84",
  "confidence": "verified"
 },
 {
  "id": "ai-050",
  "chapter": "network",
  "q": "Thiết bị nào thực hiện các chức năng ngoài việc chuyển tiếp IP tiêu chuẩn (như tường lửa, cân bằng tải)?",
  "options": [
   "Middleboxes",
   "Repeater",
   "Hub",
   "Modem"
  ],
  "answer": 0,
  "explain": "Middlebox là thiết bị trung gian thực hiện chức năng ngoài chuyển tiếp IP chuẩn, như NAT, firewall, cân bằng tải, cache.",
  "source": "user:0 - all in one.docx (set 4, Câu 26); slide Chapter_4 p.90",
  "confidence": "verified"
 },
 {
  "id": "ai-051",
  "chapter": "network",
  "q": "Nguyên tắc lập lịch nào phục vụ các gói tin theo đúng thứ tự chúng đến?",
  "options": [
   "Priority Queuing",
   "Round Robin",
   "FIFO (First-In-First-Out)",
   "Weighted Fair Queuing (WFQ)"
  ],
  "answer": 2,
  "explain": "FIFO (còn gọi FCFS) truyền các gói theo đúng thứ tự đến cổng ra.",
  "source": "user:0 - all in one.docx (set 4, Câu 27); slide Chapter_4 p.34",
  "confidence": "verified"
 },
 {
  "id": "ai-052",
  "chapter": "network",
  "q": "Thuật ngữ \"Bufferbloat\" đề cập đến vấn đề gì?",
  "options": [
   "Bộ nhớ đệm quá nhỏ gây mất gói",
   "Độ trễ dài liên tục do bộ đệm quá lớn và luôn đầy",
   "Tốc độ chuyển mạch quá nhanh",
   "Lỗi phần cứng router"
  ],
  "answer": 1,
  "explain": "Bufferbloat: bộ đệm quá lớn luôn gần đầy nên hàng đợi dài liên tục, độ trễ xếp hàng rất cao dù mạng không mất gói.",
  "source": "user:0 - all in one.docx (set 4, Câu 28)",
  "confidence": "derived"
 },
 {
  "id": "ai-053",
  "chapter": "network",
  "q": "Trường \"Protocol\" trong tiêu đề IPv4 có tác dụng gì?",
  "options": [
   "Xác định phiên bản IP",
   "Đếm số bước nhảy (hop)",
   "Kiểm tra lỗi tiêu đề",
   "Xác định giao thức lớp vận chuyển (ví dụ: TCP hoặc UDP) cho phần dữ liệu"
  ],
  "answer": 3,
  "explain": "Trường Protocol cho biết giao thức tầng trên nhận phần payload (ví dụ TCP = 6, UDP = 17) để demultiplex tại máy đích.",
  "source": "user:0 - all in one.docx (set 4, Câu 29); slide Chapter_4 p.43",
  "confidence": "verified"
 },
 {
  "id": "ai-054",
  "chapter": "network",
  "q": "Tại sao các router hiện đại thường lưu một bản sao của bảng chuyển tiếp (shadow copy) tại mỗi cổng đầu vào (input port)?",
  "options": [
   "Để dự phòng trong trường hợp bộ xử lý định tuyến trung tâm bị hỏng",
   "Để cho phép quyết định chuyển tiếp được thực hiện cục bộ tại mỗi cổng, tránh gây thắt cổ chai tại bộ xử lý trung tâm",
   "Để tăng dung lượng bộ nhớ lưu trữ của router",
   "Để router có thể thực hiện chức năng tường lửa tốt hơn"
  ],
  "answer": 1,
  "explain": "Mỗi cổng vào giữ bản sao bảng chuyển tiếp để tra cứu và quyết định cổng ra ngay tại chỗ (chuyển mạch phi tập trung), tránh dồn mọi gói về bộ xử lý định tuyến trung tâm gây nghẽn.",
  "source": "user:0 - all in one.docx (set 5, Câu 1); slide Chapter_4 p.15-16",
  "confidence": "verified"
 },
 {
  "id": "ai-055",
  "chapter": "network",
  "q": "Sự khác biệt cơ bản về khung thời gian hoạt động giữa chức năng \"Forwarding\" (Chuyển tiếp) và \"Routing\" (Định tuyến) là gì?",
  "options": [
   "Forwarding diễn ra trong vài nano giây (thời gian thực), Routing diễn ra trong vài giây (thời gian dài hơn)",
   "Forwarding diễn ra trong vài giây, Routing diễn ra trong vài nano giây",
   "Cả hai đều diễn ra trong thời gian thực như nhau",
   "Routing diễn ra nhanh hơn Forwarding vì nó được thực hiện bằng phần mềm"
  ],
  "answer": 0,
  "explain": "Forwarding là thao tác cục bộ cho từng gói, làm bằng phần cứng, cỡ nano giây; routing là tính toán trên phạm vi toàn mạng, thường bằng phần mềm, cỡ giây.",
  "source": "user:0 - all in one.docx (set 5, Câu 2); slide Chapter_4 p.14",
  "confidence": "verified"
 },
 {
  "id": "ai-056",
  "chapter": "network",
  "q": "Trong kỹ thuật chuyển mạch \"Crossbar\" (Thanh chéo), lợi thế lớn nhất so với chuyển mạch qua \"Bus\" là gì?",
  "options": [
   "Crossbar rẻ tiền hơn và dễ thiết kế hơn",
   "Crossbar không bao giờ gây ra hiện tượng mất gói tin",
   "Crossbar cho phép gửi song song nhiều gói tin từ các cổng vào khác nhau đến các cổng ra khác nhau cùng một lúc",
   "Crossbar sử dụng bộ nhớ dùng chung nên tiết kiệm tài nguyên"
  ],
  "answer": 2,
  "explain": "Bus dùng chung chỉ chuyển một gói tại một thời điểm; crossbar cho phép nhiều gói đi song song miễn là không tranh cùng cổng vào/ra.",
  "source": "user:0 - all in one.docx (set 5, Câu 3); slide Chapter_4 p.26-27",
  "confidence": "verified"
 },
 {
  "id": "ai-057",
  "chapter": "network",
  "q": "Tại sao việc phân mảnh (fragmentation) gói tin lại được coi là một gánh nặng và đã bị loại bỏ khỏi các router trong IPv6?",
  "options": [
   "Vì nó làm tăng nguy cơ mất gói tin do tắc nghẽn",
   "Vì router phải lưu trữ trạng thái của các mảnh, tốn bộ nhớ",
   "Vì IPv6 có kích thước tiêu đề nhỏ hơn nên không cần phân mảnh",
   "Vì việc phân mảnh và lắp ghép lại tốn nhiều tài nguyên xử lý, làm chậm tốc độ chuyển tiếp tại router"
  ],
  "answer": 3,
  "explain": "Phân mảnh và ghép mảnh tốn tài nguyên xử lý nên IPv6 bỏ chúng khỏi router (chỉ host nguồn phân mảnh), giúp chuyển tiếp nhanh hơn.",
  "source": "user:0 - all in one.docx (set 5, Câu 7); slide Chapter_4 p.70",
  "confidence": "verified"
 },
 {
  "id": "ai-058",
  "chapter": "network",
  "q": "Điểm khác biệt chính giữa cơ chế lập lịch \"Priority Queuing\" (Hàng đợi ưu tiên) và \"Round Robin\" (Quay vòng) là gì?",
  "options": [
   "Priority Queuing luôn phục vụ gói tin lớp ưu tiên cao nhất trước, có thể khiến lớp thấp bị đói (starvation); Round Robin phục vụ luân phiên các lớp",
   "Priority Queuing phục vụ luân phiên, Round Robin phục vụ theo thứ tự đến trước",
   "Priority Queuing chỉ dùng cho gói tin TCP, Round Robin dùng cho UDP",
   "Round Robin đảm bảo độ trễ thấp nhất cho tất cả các gói tin"
  ],
  "answer": 0,
  "explain": "Priority queuing luôn phục vụ lớp ưu tiên cao nhất đang có gói nên lớp thấp có thể bị đói; Round Robin quay vòng giữa các lớp nên công bằng hơn.",
  "source": "user:0 - all in one.docx (set 5, Câu 13); slide Chapter_4 p.35-36",
  "confidence": "verified"
 },
 {
  "id": "ai-059",
  "chapter": "network",
  "q": "Nguyên lý hoạt động của \"Weighted Fair Queuing\" (WFQ) đảm bảo điều gì cho các luồng dữ liệu?",
  "options": [
   "Đảm bảo luồng nào đến trước được phục vụ trước hoàn toàn",
   "Đảm bảo mỗi luồng (class) nhận được một phần băng thông tối thiểu dựa trên trọng số (weight) của nó khi mạng bị tắc nghẽn",
   "Đảm bảo tất cả các luồng đều có băng thông bằng nhau tuyệt đối",
   "Đảm bảo luồng ưu tiên cao chiếm toàn bộ băng thông"
  ],
  "answer": 1,
  "explain": "WFQ là Round Robin có trọng số: mỗi lớp được đảm bảo một tỉ lệ băng thông tối thiểu tương ứng trọng số của nó khi có tranh chấp.",
  "source": "user:0 - all in one.docx (set 5, Câu 17); slide Chapter_4 p.37",
  "confidence": "verified"
 },
 {
  "id": "ai-060",
  "chapter": "network",
  "q": "Tại sao giao thức TCP/IP lại thực hiện kiểm tra lỗi (checksum) ở cả lớp vận chuyển và lớp mạng (đối với IPv4)?",
  "options": [
   "Vì hai lớp này luôn nằm trên cùng một thiết bị phần cứng",
   "Để tăng gấp đôi độ tin cậy của dữ liệu",
   "Vì lớp mạng (IP) chỉ kiểm tra lỗi phần tiêu đề, trong khi lớp vận chuyển kiểm tra lỗi toàn bộ segment; ngoài ra, IP có thể chở dữ liệu không phải TCP/UDP",
   "Đây là một sự dư thừa không cần thiết và đã bị loại bỏ hoàn toàn"
  ],
  "answer": 2,
  "explain": "Checksum IPv4 chỉ bảo vệ header IP; checksum TCP/UDP bảo vệ cả header lẫn dữ liệu của segment (và IP còn chở được giao thức không có checksum riêng), nên hai tầng kiểm tra độc lập.",
  "source": "user:0 - all in one.docx (set 5, Câu 18)",
  "confidence": "derived"
 },
 {
  "id": "ai-061",
  "chapter": "network",
  "q": "Khái niệm \"Match-plus-Action\" (Khớp và Hành động) trong chuyển tiếp tổng quát cho phép thiết bị mạng thực hiện chức năng của thiết bị nào sau đây, ngoài chức năng của router?",
  "options": [
   "Chỉ Router",
   "Chỉ Switch lớp 2",
   "Chỉ Load Balancer",
   "Router, Switch, Firewall, và NAT"
  ],
  "answer": 3,
  "explain": "Match+action tổng quát hóa nhiều thiết bị: router (khớp IP đích), switch (khớp MAC), firewall (khớp IP/cổng, cho phép hay chặn) và NAT (khớp địa chỉ+cổng rồi ghi đè).",
  "source": "user:0 - all in one.docx (set 5, Câu 19); slide Chapter_4 p.84",
  "confidence": "verified"
 },
 {
  "id": "ai-062",
  "chapter": "network",
  "q": "IPv6 sử dụng \"Flow Label\" (Nhãn luồng) nhằm mục đích gì?",
  "options": [
   "Để thay thế địa chỉ IP đích",
   "Để định danh các gói tin thuộc cùng một luồng (flow) cần được xử lý đặc biệt (như QoS, thời gian thực) mà không cần router phải phân tích sâu vào các tiêu đề lớp trên",
   "Để kiểm tra lỗi dữ liệu",
   "Để phân mảnh gói tin"
  ],
  "answer": 1,
  "explain": "Flow label trong IPv6 đánh dấu các datagram thuộc cùng một luồng cần xử lý đặc biệt (ví dụ thời gian thực) mà router không cần soi sâu vào header tầng trên.",
  "source": "user:0 - all in one.docx (set 5, Câu 22); slide Chapter_4 p.70",
  "confidence": "verified"
 },
 {
  "id": "ai-063",
  "chapter": "network",
  "q": "Tại sao \"Chuyển mạch qua bộ nhớ\" (Switching via memory) thường có tốc độ chậm hơn \"Chuyển mạch qua Bus\" hoặc \"Crossbar\"?",
  "options": [
   "Vì nó yêu cầu sự can thiệp trực tiếp của CPU hoặc bộ xử lý trung tâm để sao chép gói tin vào và ra khỏi bộ nhớ hệ thống",
   "Vì bộ nhớ RAM chậm hơn dây dẫn",
   "Vì nó không hỗ trợ bộ đệm đầu vào",
   "Vì nó chỉ xử lý được các gói tin IPv4"
  ],
  "answer": 0,
  "explain": "Ở chuyển mạch qua bộ nhớ, gói được CPU chép vào bộ nhớ rồi chép ra, mỗi datagram băng qua bus hai lần nên tốc độ bị giới hạn bởi băng thông bộ nhớ.",
  "source": "user:0 - all in one.docx (set 5, Câu 24); slide Chapter_4 p.25",
  "confidence": "verified"
 },
 {
  "id": "ai-064",
  "chapter": "network",
  "q": "Trong mạng SDN, tại sao việc tách biệt \"Control Plane\" (Mặt phẳng điều khiển) và \"Data Plane\" (Mặt phẳng dữ liệu) lại quan trọng?",
  "options": [
   "Để giảm chi phí phần cứng router",
   "Để loại bỏ hoàn toàn nhu cầu sử dụng các giao thức định tuyến như OSPF",
   "Để cho phép quản lý mạng tập trung, linh hoạt và có thể lập trình được, thay vì cấu hình thủ công từng thiết bị phân tán",
   "Để tăng tốc độ truyền tín hiệu điện"
  ],
  "answer": 2,
  "explain": "Tách mặt phẳng điều khiển khỏi thiết bị cho phép quản lý tập trung bằng phần mềm có thể lập trình, tránh cấu hình sai từng router riêng lẻ.",
  "source": "user:0 - all in one.docx (set 5, Câu 25); slide Chapter_5 p.68",
  "confidence": "verified"
 },
 {
  "id": "ai-065",
  "chapter": "network",
  "q": "Một router có bảng chuyển tiếp (khớp tiền tố dài nhất):\n- 11001000 00010111 00010*** (21 bit đầu) -> Interface 0\n- 11001000 00010111 00011000 (24 bit đầu) -> Interface 1\n- 11001000 00010111 00011*** (21 bit đầu) -> Interface 2\n- Otherwise -> Interface 3\nGói tin có địa chỉ đích 11001000 00010111 00010110 10100001 sẽ được chuyển đến cổng nào?",
  "options": [
   "Interface 1",
   "Interface 2",
   "Interface 3",
   "Interface 0"
  ],
  "answer": 3,
  "explain": "Địa chỉ đích có 21 bit đầu là 11001000 00010111 00010 nên chỉ khớp mục đầu; mục có 24 bit (...00011000) và mục 21 bit (...00011) đều không khớp (kiểm tra bằng script) nên ra Interface 0.",
  "source": "user:0 - all in one.docx (set 6, Câu 1); slide Chapter_4 p.18-21",
  "confidence": "verified"
 },
 {
  "id": "ai-066",
  "chapter": "network",
  "q": "Một router có bảng chuyển tiếp (khớp tiền tố dài nhất):\n- 11001000 00010111 00010*** (21 bit đầu) -> Interface 0\n- 11001000 00010111 00011000 (24 bit đầu) -> Interface 1\n- 11001000 00010111 00011*** (21 bit đầu) -> Interface 2\n- Otherwise -> Interface 3\nGói tin có địa chỉ đích 11001000 00010111 00011000 10101010 sẽ được chuyển đến cổng nào?",
  "options": [
   "Interface 0",
   "Interface 1",
   "Interface 2",
   "Interface 3"
  ],
  "answer": 1,
  "explain": "Địa chỉ đích khớp mục 24 bit (...00011000) và mục 21 bit (...00011); mục ...00010 không khớp. Theo longest prefix matching, mục 24 bit dài hơn nên chọn Interface 1 (kiểm tra bằng script).",
  "source": "user:0 - all in one.docx (set 6, Câu 2); slide Chapter_4 p.18-21",
  "confidence": "verified"
 },
 {
  "id": "ai-067",
  "chapter": "network",
  "q": "Một liên kết có tốc độ R = 1 Gbps và RTT trung bình 200 ms. Theo quy tắc ngón tay cái cổ điển B = RTT x C, kích thước bộ đệm cần thiết kế cho router là bao nhiêu?",
  "options": [
   "200 Mbits",
   "2 Gbits",
   "200 Mbytes",
   "1 Gbits"
  ],
  "answer": 0,
  "explain": "Quy tắc cổ điển B = RTT x C = 0,2 s x 10^9 bit/s = 2 x 10^8 bit = 200 Mbit.",
  "source": "user:0 - all in one.docx (set 6, Câu 4); slide Chapter_4 p.32",
  "confidence": "verified"
 },
 {
  "id": "ai-068",
  "chapter": "network",
  "q": "Router dùng kỹ thuật chuyển mạch qua bộ nhớ (switching via memory). Băng thông bộ nhớ ghi/đọc tối đa là B gói tin/giây. Thông lượng chuyển tiếp tổng cộng cực đại của router là bao nhiêu?",
  "options": [
   "B",
   "2B",
   "B/2",
   "B/4"
  ],
  "answer": 2,
  "explain": "Mỗi datagram phải được ghi vào bộ nhớ rồi đọc ra, tức dùng hai lần băng thông bộ nhớ, nên thông lượng chuyển tiếp tối đa chỉ còn B/2.",
  "source": "user:0 - all in one.docx (set 6, Câu 5); slide Chapter_4 p.25",
  "confidence": "verified"
 },
 {
  "id": "ai-069",
  "chapter": "network",
  "q": "Một router có N cổng vào và N cổng ra, tốc độ đường truyền mỗi cổng là R_line. Để không bao giờ xảy ra hàng đợi tại cổng vào (input queuing), tốc độ của kết cấu chuyển mạch (R_switch) phải tối thiểu là bao nhiêu?",
  "options": [
   "R_line",
   "R_line / N",
   "2 x R_line",
   "N x R_line"
  ],
  "answer": 3,
  "explain": "Trường hợp xấu nhất là cả N cổng vào cùng có gói tại một thời điểm; để không xếp hàng ở cổng vào, fabric phải chuyển được N x tốc độ đường truyền.",
  "source": "user:0 - all in one.docx (set 6, Câu 8); slide Chapter_4 p.23",
  "confidence": "verified"
 },
 {
  "id": "ai-070",
  "chapter": "network",
  "q": "Một gói tin IPv6 được gửi từ Node A đến Node F thông qua một đường hầm (tunnel) IPv4. Đường hầm này nối giữa Router B (IPv4/IPv6 dual-stack) và Router E (IPv4/IPv6 dual-stack). Khi gói tin đang di chuyển trong đường hầm (từ B đến E), trường \"Protocol\" trong tiêu đề IPv4 bao bên ngoài sẽ có giá trị là bao nhiêu (theo RFC)?",
  "options": [
   "6 (TCP)",
   "17 (UDP)",
   "41 (IPv6)",
   "1 (ICMP)"
  ],
  "answer": 2,
  "explain": "Datagram IPv6 được đóng gói làm payload của datagram IPv4; trường Protocol của header IPv4 bên ngoài mang giá trị 41 (IPv6 encapsulation).",
  "source": "user:0 - all in one.docx (set 6, Câu 9); slide Chapter_4 p.71-74",
  "confidence": "derived"
 },
 {
  "id": "ai-071",
  "chapter": "network",
  "q": "Trong bộ lập lịch Weighted Fair Queuing (WFQ) có 3 luồng với trọng số w1 = 2, w2 = 1, w3 = 1. Tổng băng thông liên kết là R. Khi cả ba luồng đều có dữ liệu để gửi, luồng 1 được đảm bảo thông lượng tối thiểu là bao nhiêu?",
  "options": [
   "0,25R",
   "0,33R",
   "0,5R",
   "0,75R"
  ],
  "answer": 2,
  "explain": "Tổng trọng số 2 + 1 + 1 = 4; luồng 1 được đảm bảo R x 2/4 = 0,5R.",
  "source": "user:0 - all in one.docx (set 6, Câu 10); slide Chapter_4 p.37",
  "confidence": "verified"
 },
 {
  "id": "ai-072",
  "chapter": "network",
  "q": "Một ứng dụng gửi các đoạn dữ liệu (chunk) 40 byte. Mỗi đoạn được đóng gói vào một segment TCP (tiêu đề 20 byte), sau đó vào một datagram IPv4 (tiêu đề 20 byte). Tỷ lệ phần trăm dữ liệu hữu ích (overhead efficiency) trong mỗi datagram truyền đi là bao nhiêu?",
  "options": [
   "33.3%",
   "50%",
   "66.6%",
   "40%"
  ],
  "answer": 1,
  "explain": "Mỗi datagram dài 40 (dữ liệu) + 20 (TCP) + 20 (IP) = 80 byte, trong đó dữ liệu hữu ích 40 byte nên hiệu suất 40/80 = 50%.",
  "source": "user:0 - all in one.docx (set 6, Câu 11); slide Chapter_4 p.43",
  "confidence": "verified"
 },
 {
  "id": "ai-073",
  "chapter": "network",
  "q": "Router A nhận một gói tin có TTL = 1. Router A cần chuyển tiếp gói tin này đến Router B. Hành động của Router A là gì?",
  "options": [
   "Giảm TTL xuống 0, hủy gói tin và gửi thông báo ICMP \"Time Exceeded\" về nguồn",
   "Chuyển tiếp gói tin đến B và giữ nguyên TTL = 1",
   "Giảm TTL xuống 0 và chuyển tiếp gói tin đến B để B xử lý",
   "Reset TTL về 64 và chuyển tiếp"
  ],
  "answer": 0,
  "explain": "Router giảm TTL; khi TTL về 0 nó hủy datagram và gửi ICMP type 11 (TTL expired) về nguồn, nên gói có TTL = 1 không được chuyển tiếp tiếp.",
  "source": "user:0 - all in one.docx (set 6, Câu 13); slide Chapter_4 p.43; Chapter_5 p.88",
  "confidence": "verified"
 },
 {
  "id": "ai-074",
  "chapter": "network",
  "q": "Một người dùng phàn nàn rằng khi chơi game online thì độ trễ rất cao (lag), mặc dù tốc độ tải file lớn vẫn nhanh. Nguyên nhân có thể là do router nhà mạng có bộ đệm quá lớn (Bufferbloat). Giải pháp kỹ thuật nào sau đây giúp khắc phục vấn đề này?",
  "options": [
   "Tăng kích thước bộ đệm lên gấp đôi",
   "Chuyển từ cáp quang sang cáp đồng",
   "Tắt tính năng NAT trên router",
   "Sử dụng cơ chế quản lý hàng đợi chủ động (AQM) như RED hoặc CoDel"
  ],
  "answer": 3,
  "explain": "AQM (RED, CoDel) đánh dấu hoặc loại gói sớm khi hàng đợi bắt đầu dài nên giữ độ trễ hàng đợi thấp; tăng bộ đệm chỉ làm bufferbloat tệ hơn.",
  "source": "user:0 - all in one.docx (set 6, Câu 18); slide Chapter_4 p.33",
  "confidence": "derived"
 },
 {
  "id": "ai-075",
  "chapter": "network",
  "q": "Bạn muốn chia lưu lượng Web (cổng 80) từ Host A đến đích D ra hai đường khác nhau bằng bảng flow của OpenFlow. Việc này không làm được với định tuyến IP truyền thống vì:",
  "options": [
   "IP truyền thống chỉ dựa vào địa chỉ đích để chuyển tiếp",
   "IP truyền thống không hỗ trợ giao thức TCP",
   "OpenFlow chạy chậm hơn IP truyền thống",
   "IP truyền thống yêu cầu cấu hình thủ công"
  ],
  "answer": 0,
  "explain": "Định tuyến IP truyền thống chỉ dựa vào địa chỉ đích nên mọi gói cùng đích đi cùng một đường; OpenFlow có thể khớp thêm cổng TCP/UDP... nên tách riêng lưu lượng web sang đường khác.",
  "source": "user:0 - all in one.docx (set 6, Câu 19); slide Chapter_4 p.84",
  "confidence": "verified"
 },
 {
  "id": "ai-076",
  "chapter": "network",
  "q": "Một router có 4 liên kết đầu vào. Giả sử tất cả các gói tin đến đều cùng kích thước và cùng đích đến một cổng ra duy nhất. Nếu tốc độ chuyển mạch (Switch fabric speed) nhanh gấp 4 lần tốc độ đường truyền (Line speed). Hiện tượng gì sẽ xảy ra tại cổng ra?",
  "options": [
   "Không có hàng đợi (No queuing)",
   "Hàng đợi cổng ra (Output queuing) sẽ hình thành vì nhiều gói tin đến cổng ra cùng lúc",
   "Mất gói do HOL blocking tại cổng vào",
   "Router sẽ ngừng hoạt động do quá tải"
  ],
  "answer": 1,
  "explain": "Dù fabric nhanh, liên kết ra chỉ truyền được 1 gói tại một thời điểm; nếu 4 gói cùng đến một cổng ra thì các gói còn lại phải xếp hàng tại cổng ra (output queuing).",
  "source": "user:0 - all in one.docx (set 6, Câu 22); slide Chapter_4 p.30",
  "confidence": "verified"
 },
 {
  "id": "ai-077",
  "chapter": "network",
  "q": "Trong bảng NAT (Translation Table), mục nhập nào sau đây là cần thiết để hỗ trợ một máy chủ Web chạy trên cổng 8080 trong mạng LAN (IP: 10.0.0.5) có thể truy cập được từ Internet qua IP công khai 203.0.113.10?",
  "options": [
   "Dynamic NAT entry",
   "DHCP binding",
   "Static NAT entry (Port Forwarding): 203.0.113.10:80 -> 10.0.0.5:8080",
   "ARP entry"
  ],
  "answer": 2,
  "explain": "Muốn máy chủ trong LAN truy cập được từ Internet cần mục NAT tĩnh (port forwarding): gói tới 203.0.113.10:80 được dịch thành 10.0.0.5:8080. Mục động chỉ sinh ra khi host trong LAN chủ động kết nối ra ngoài.",
  "source": "user:0 - all in one.docx (set 6, Câu 23)",
  "confidence": "derived"
 },
 {
  "id": "ai-078",
  "chapter": "network",
  "q": "Khi sử dụng thuật toán \"Random Early Detection\" (RED) trong quản lý hàng đợi router, router sẽ làm gì khi kích thước hàng đợi trung bình nằm giữa ngưỡng min và max?",
  "options": [
   "Hủy tất cả các gói tin đến",
   "Chấp nhận tất cả gói tin nhưng đánh dấu ECN",
   "Gửi tín hiệu tạm dừng (Pause frame) về nguồn",
   "Hủy gói tin đến với một xác suất nhất định (xác suất tăng dần)"
  ],
  "answer": 3,
  "explain": "RED: hàng đợi trung bình dưới ngưỡng min thì chấp nhận mọi gói; giữa min và max loại ngẫu nhiên gói đến với xác suất tăng dần; trên max loại hết.",
  "source": "user:0 - all in one.docx (set 6, Câu 24); slide Chapter_4 p.33",
  "confidence": "derived"
 },
 {
  "id": "ai-079",
  "chapter": "network",
  "q": "Tại sao các router trục Internet (Backbone routers) thường sử dụng bộ nhớ TCAM (Ternary Content Addressable Memory) cho bảng chuyển tiếp?",
  "options": [
   "Vì TCAM rẻ hơn DRAM",
   "Vì TCAM cho phép tìm kiếm \"khớp tiền tố dài nhất\" chỉ trong một chu kỳ đồng hồ (constant time)",
   "Vì TCAM có dung lượng lưu trữ lớn hơn ổ cứng SSD",
   "Vì TCAM tiêu thụ ít điện năng nhất"
  ],
  "answer": 1,
  "explain": "TCAM tra cứu song song và trả kết quả trong một chu kỳ đồng hồ bất kể kích thước bảng, nên phù hợp cho longest prefix matching ở router tốc độ cao.",
  "source": "user:0 - all in one.docx (set 6, Câu 26); slide Chapter_4 p.22",
  "confidence": "verified"
 },
 {
  "id": "ai-080",
  "chapter": "network",
  "q": "Máy tính A đang ở mạng 10.1.0.0/24, muốn gửi dữ liệu cho máy B ở mạng 10.2.0.0/24. Nếu mạng không có Router (chỉ có Switch lớp 2 nối 2 mạng này), điều gì sẽ xảy ra?",
  "options": [
   "Máy A không gửi được vì nó nhận thấy B nằm khác mạng (dựa trên Subnet mask) và cần Gateway để chuyển tiếp, nhưng không tìm thấy Gateway",
   "Máy A gửi được dữ liệu bình thường",
   "Switch sẽ tự động thực hiện chức năng định tuyến",
   "Máy A sẽ broadcast dữ liệu ra toàn mạng"
  ],
  "answer": 0,
  "explain": "A so subnet mask và thấy B ở mạng khác, nên phải gửi qua default gateway; switch lớp 2 không định tuyến nên không có gateway thì A không gửi được.",
  "source": "user:0 - all in one.docx (set 6, Câu 27)",
  "confidence": "derived"
 },
 {
  "id": "ai-081",
  "chapter": "network",
  "q": "Một cuộc tấn công từ chối dịch vụ (DoS) dạng \"SYN Flood\" tấn công vào một Web Server. Nếu bạn có một thiết bị SDN Controller, bạn có thể cài đặt quy tắc nào xuống các switch biên để giảm thiểu tấn công này một cách hiệu quả nhất?",
  "options": [
   "Chặn tất cả gói tin đến Web Server",
   "Chuyển hướng lưu lượng Web sang cổng 21 (FTP)",
   "Giới hạn tốc độ (Rate limiting) các gói tin TCP có cờ SYN hướng đến IP của Web Server",
   "Chặn tất cả lưu lượng UDP"
  ],
  "answer": 2,
  "explain": "SDN controller có cái nhìn toàn cục và lập trình được: có thể cài rule giới hạn tốc độ (rate limiting) các gói TCP SYN hướng tới web server tại switch biên để giảm SYN flood mà không chặn người dùng hợp lệ.",
  "source": "user:0 - all in one.docx (set 6, Câu 29)",
  "confidence": "derived"
 },
 {
  "id": "ai-082",
  "chapter": "network",
  "q": "Có hai phương pháp tiếp cận chính để xây dựng mặt phẳng điều khiển lớp mạng là gì?",
  "options": [
   "Điều khiển tĩnh và Điều khiển động",
   "Điều khiển nội miền và Điều khiển liên miền",
   "Điều khiển bằng phần cứng và Điều khiển bằng phần mềm",
   "Điều khiển theo từng router (Per-router control) và Điều khiển tập trung logic (Logically centralized control)"
  ],
  "answer": 3,
  "explain": "Hai cách tổ chức mặt phẳng điều khiển: per-router control (truyền thống, thuật toán chạy trên từng router) và logically centralized control (SDN).",
  "source": "user:0 - all in one.docx (set 7, Câu 2); slide Chapter_5 p.4",
  "confidence": "verified"
 },
 {
  "id": "ai-083",
  "chapter": "network",
  "q": "Độ phức tạp tính toán trong trường hợp xấu nhất của thuật toán Dijkstra với n nút là bao nhiêu?",
  "options": [
   "O(n)",
   "O(n log n)",
   "O(n^2)",
   "O(n^3)"
  ],
  "answer": 2,
  "explain": "Cài đặt cơ bản của Dijkstra với n nút cần tới n(n+1)/2 phép so sánh, tức độ phức tạp O(n^2).",
  "source": "user:0 - all in one.docx (set 7, Câu 7); slide Chapter_5 p.17",
  "confidence": "verified"
 },
 {
  "id": "ai-084",
  "chapter": "network",
  "q": "Phương trình Bellman-Ford là nền tảng của loại thuật toán định tuyến nào?",
  "options": [
   "Link-State (LS)",
   "Distance-Vector (DV)",
   "OSPF",
   "Hierarchical Routing"
  ],
  "answer": 1,
  "explain": "Phương trình Bellman-Ford Dx(y) = min_v {c(x,v) + Dv(y)} là cơ sở của thuật toán distance vector.",
  "source": "user:0 - all in one.docx (set 7, Câu 8); slide Chapter_5 p.22",
  "confidence": "verified"
 },
 {
  "id": "ai-085",
  "chapter": "network",
  "q": "Trong thuật toán Distance-Vector, khi nào một nút gửi thông điệp cập nhật cho hàng xóm?",
  "options": [
   "Khi nó thấy chi phí liên kết trực tiếp thay đổi hoặc nhận được cập nhật từ hàng xóm làm thay đổi đường đi ngắn nhất của nó",
   "Chỉ khi nó nhận được yêu cầu từ hàng xóm",
   "Theo chu kỳ cố định (ví dụ 30 giây một lần)",
   "Chỉ khi router khởi động lại"
  ],
  "answer": 0,
  "explain": "Distance vector lặp, bất đồng bộ: một nút chỉ gửi cập nhật khi chi phí liên kết trực tiếp thay đổi hoặc khi cập nhật từ láng giềng làm đổi vector khoảng cách của nó.",
  "source": "user:0 - all in one.docx (set 7, Câu 9); slide Chapter_5 p.23",
  "confidence": "verified"
 },
 {
  "id": "ai-086",
  "chapter": "network",
  "q": "AS là viết tắt của thuật ngữ gì trong định tuyến Internet?",
  "options": [
   "Automated System",
   "Access Server",
   "Area Service",
   "Autonomous System (Hệ thống tự trị)"
  ],
  "answer": 3,
  "explain": "AS (Autonomous System) là hệ thống tự trị: nhóm router cùng thuộc một miền quản trị.",
  "source": "user:0 - all in one.docx (set 7, Câu 12); slide Chapter_5 p.43",
  "confidence": "verified"
 },
 {
  "id": "ai-087",
  "chapter": "network",
  "q": "BGP hoạt động dựa trên giao thức vận chuyển nào và cổng số mấy?",
  "options": [
   "UDP cổng 520",
   "TCP cổng 179",
   "UDP cổng 179",
   "IP protocol 89"
  ],
  "answer": 1,
  "explain": "Các router BGP trao đổi thông điệp qua kết nối TCP bán cố định, cổng 179.",
  "source": "user:0 - all in one.docx (set 7, Câu 17); slide Chapter_5 p.56",
  "confidence": "derived"
 },
 {
  "id": "ai-088",
  "chapter": "network",
  "q": "Hai thuộc tính quan trọng nhất của một tuyến đường (route) trong BGP là gì?",
  "options": [
   "AS-PATH và NEXT-HOP",
   "Metric và Bandwidth",
   "Delay và Load",
   "TTL và Checksum"
  ],
  "answer": 0,
  "explain": "Hai thuộc tính quan trọng của tuyến BGP: AS-PATH (danh sách các AS mà thông báo đã đi qua) và NEXT-HOP (router biên chỉ ra bước nhảy kế tiếp).",
  "source": "user:0 - all in one.docx (set 7, Câu 19); slide Chapter_5 p.53",
  "confidence": "verified"
 },
 {
  "id": "ai-089",
  "chapter": "network",
  "q": "Giao thức nào thường được sử dụng để giao tiếp giữa SDN Controller và các Packet Switch (giao diện phía Nam)?",
  "options": [
   "BGP",
   "OSPF",
   "OpenFlow",
   "HTTP"
  ],
  "answer": 2,
  "explain": "OpenFlow là giao thức tiêu chuẩn ở giao diện phía Nam (southbound) giữa SDN controller và các switch.",
  "source": "user:0 - all in one.docx (set 7, Câu 22); slide Chapter_5 p.75, 78",
  "confidence": "verified"
 },
 {
  "id": "ai-090",
  "chapter": "network",
  "q": "Chức năng của \"Northbound API\" (Giao diện phía Bắc) trong SDN Controller là gì?",
  "options": [
   "Giao tiếp với các thiết bị chuyển mạch",
   "Giao tiếp với người dùng cuối",
   "Giao tiếp với các Controller khác",
   "Giao tiếp với các ứng dụng điều khiển mạng (Network-control applications)"
  ],
  "answer": 3,
  "explain": "Northbound API cho phép các ứng dụng điều khiển mạng (định tuyến, firewall, cân bằng tải) tương tác với controller để đọc/ghi trạng thái mạng.",
  "source": "user:0 - all in one.docx (set 7, Câu 23); slide Chapter_5 p.75",
  "confidence": "verified"
 },
 {
  "id": "ai-091",
  "chapter": "network",
  "q": "SDN Controller duy trì thông tin gì?",
  "options": [
   "Chỉ thông tin về các luồng dữ liệu",
   "Trạng thái toàn mạng (Network-wide state management layer) như topo mạng, trạng thái liên kết, thông tin host",
   "Chỉ địa chỉ MAC của các thiết bị",
   "Các file log của hệ điều hành"
  ],
  "answer": 1,
  "explain": "Controller duy trì lớp quản lý trạng thái toàn mạng: thông tin liên kết, switch, host, thống kê và bảng flow, tạo thành 'network graph' cho các ứng dụng.",
  "source": "user:0 - all in one.docx (set 7, Câu 24); slide Chapter_5 p.75-77",
  "confidence": "verified"
 },
 {
  "id": "ai-092",
  "chapter": "network",
  "q": "OpenFlow hoạt động trên giao thức vận chuyển nào và cổng mặc định là bao nhiêu?",
  "options": [
   "TCP cổng 6653",
   "UDP cổng 6653",
   "TCP cổng 80",
   "UDP cổng 161"
  ],
  "answer": 0,
  "explain": "OpenFlow dùng TCP (có thể mã hóa) giữa controller và switch; cổng mặc định chính thức là 6653.",
  "source": "user:0 - all in one.docx (set 7, Câu 25); slide Chapter_5 p.78",
  "confidence": "derived"
 },
 {
  "id": "ai-093",
  "chapter": "network",
  "q": "Thông điệp nào của OpenFlow được Controller gửi để cài đặt hoặc sửa đổi quy tắc trong bảng luồng (Flow table) của switch?",
  "options": [
   "Packet-in",
   "Port-status",
   "Modify-State",
   "Features-Request"
  ],
  "answer": 2,
  "explain": "Controller dùng thông điệp modify-state để thêm, xóa hoặc sửa các entry trong bảng flow của switch.",
  "source": "user:0 - all in one.docx (set 7, Câu 26); slide Chapter_5 p.79",
  "confidence": "verified"
 },
 {
  "id": "ai-094",
  "chapter": "network",
  "q": "Thông điệp ICMP được đóng gói (encapsulated) bên trong loại gói tin nào?",
  "options": [
   "UDP segment",
   "TCP segment",
   "Ethernet frame",
   "IP datagram"
  ],
  "answer": 3,
  "explain": "Thông điệp ICMP được mang trong payload của IP datagram (ICMP nằm 'trên' IP về mặt kiến trúc nhưng được đóng gói trong IP).",
  "source": "user:0 - all in one.docx (set 7, Câu 28); slide Chapter_5 p.88",
  "confidence": "verified"
 },
 {
  "id": "ai-095",
  "chapter": "network",
  "q": "Lệnh ping sử dụng loại thông điệp ICMP nào?",
  "options": [
   "Echo request và Echo reply",
   "Destination unreachable",
   "TTL expired",
   "Source quench"
  ],
  "answer": 0,
  "explain": "Ping dùng ICMP echo request (type 8) và nhận lại echo reply (type 0).",
  "source": "user:0 - all in one.docx (set 7, Câu 29); slide Chapter_5 p.88",
  "confidence": "verified"
 },
 {
  "id": "ai-096",
  "chapter": "network",
  "q": "SNMP là giao thức được sử dụng để làm gì?",
  "options": [
   "Định tuyến gói tin",
   "Quản lý mạng (giám sát, cấu hình thiết bị)",
   "Truyền file",
   "Phân giải tên miền"
  ],
  "answer": 1,
  "explain": "SNMP là giao thức quản lý mạng: giám sát và cấu hình thiết bị thông qua các đối tượng MIB.",
  "source": "user:0 - all in one.docx (set 7, Câu 31); slide Chapter_5 p.93-95",
  "confidence": "verified"
 },
 {
  "id": "ai-097",
  "chapter": "network",
  "q": "Trong kiến trúc quản lý mạng, phần mềm chạy trên thiết bị được quản lý (managed device) gọi là gì?",
  "options": [
   "Managing Server",
   "Controller",
   "Network Management Agent (Agent)",
   "Client"
  ],
  "answer": 2,
  "explain": "Agent là tiến trình chạy trên thiết bị được quản lý, trả lời yêu cầu của managing server và gửi trap khi có sự kiện.",
  "source": "user:0 - all in one.docx (set 7, Câu 32); slide Chapter_5 p.94",
  "confidence": "verified"
 },
 {
  "id": "ai-098",
  "chapter": "network",
  "q": "MIB là viết tắt của từ gì trong quản lý mạng?",
  "options": [
   "Main Internet Backbone",
   "Managed Interface Block",
   "Message Information Bit",
   "Management Information Base"
  ],
  "answer": 3,
  "explain": "MIB là Management Information Base: tập các đối tượng dữ liệu (trạng thái, cấu hình, thống kê) của thiết bị được quản lý.",
  "source": "user:0 - all in one.docx (set 7, Câu 33); slide Chapter_5 p.93",
  "confidence": "verified"
 },
 {
  "id": "ai-099",
  "chapter": "network",
  "q": "Thông điệp SNMP nào được Agent gửi một cách chủ động (không cần yêu cầu) để thông báo cho Manager về một sự kiện ngoại lệ?",
  "options": [
   "GetRequest",
   "SetRequest",
   "Trap",
   "Response"
  ],
  "answer": 2,
  "explain": "Trap là thông điệp agent chủ động gửi cho manager để báo một sự kiện ngoại lệ, không cần được hỏi.",
  "source": "user:0 - all in one.docx (set 7, Câu 34); slide Chapter_5 p.95",
  "confidence": "verified"
 },
 {
  "id": "ai-100",
  "chapter": "transport",
  "q": "Giao thức SNMP thường sử dụng giao thức vận chuyển nào?",
  "options": [
   "TCP",
   "UDP",
   "SCTP",
   "ICMP"
  ],
  "answer": 1,
  "explain": "SNMP chạy trên UDP (giao thức nhẹ, không cần thiết lập kết nối) vì chỉ trao đổi các yêu cầu/đáp ứng ngắn.",
  "source": "user:0 - all in one.docx (set 7, Câu 35); slide Chapter_3 p.25",
  "confidence": "verified"
 },
 {
  "id": "ai-101",
  "chapter": "network",
  "q": "Giao thức NETCONF sử dụng định dạng dữ liệu nào để mã hóa thông điệp?",
  "options": [
   "XML",
   "JSON",
   "Binary",
   "ASN.1"
  ],
  "answer": 0,
  "explain": "Thông điệp NETCONF được mã hóa bằng XML và truyền như lời gọi thủ tục từ xa (RPC).",
  "source": "user:0 - all in one.docx (set 7, Câu 36); slide Chapter_5 p.98",
  "confidence": "verified"
 },
 {
  "id": "ai-102",
  "chapter": "network",
  "q": "YANG là gì trong ngữ cảnh của NETCONF?",
  "options": [
   "Một giao thức vận chuyển",
   "Một loại thiết bị chuyển mạch",
   "Một thuật toán mã hóa",
   "Một ngôn ngữ mô hình hóa dữ liệu (data modeling language)"
  ],
  "answer": 3,
  "explain": "YANG là ngôn ngữ mô hình hóa dữ liệu (data modeling language) mô tả cấu trúc, cú pháp, ngữ nghĩa và ràng buộc của dữ liệu cấu hình/trạng thái dùng với NETCONF.",
  "source": "user:0 - all in one.docx (set 7, Câu 37); slide Chapter_5 p.93, 102",
  "confidence": "verified"
 },
 {
  "id": "ai-103",
  "chapter": "network",
  "q": "NETCONF chạy trên giao thức vận chuyển bảo mật nào?",
  "options": [
   "UDP",
   "TLS over TCP (hoặc SSH)",
   "Plaintext TCP",
   "HTTP"
  ],
  "answer": 1,
  "explain": "NETCONF cần kênh tin cậy và bảo mật nên chạy trên giao thức vận chuyển an toàn như TLS qua TCP (hoặc SSH), không dùng UDP hay TCP thuần.",
  "source": "user:0 - all in one.docx (set 7, Câu 38); slide Chapter_5 p.98",
  "confidence": "verified"
 },
 {
  "id": "ai-104",
  "chapter": "network",
  "q": "Trong BGP, thuộc tính nào được sử dụng để phát hiện và ngăn chặn vòng lặp định tuyến (routing loop)?",
  "options": [
   "AS-PATH",
   "NEXT-HOP",
   "Local Preference",
   "MED"
  ],
  "answer": 0,
  "explain": "AS-PATH liệt kê các AS mà thông báo đã đi qua; router thấy AS của chính mình trong danh sách thì loại thông báo đó, tránh vòng lặp định tuyến.",
  "source": "user:0 - all in one.docx (set 7, Câu 40); slide Chapter_5 p.53",
  "confidence": "derived"
 },
 {
  "id": "ai-105",
  "chapter": "network",
  "q": "Sự khác biệt chính về thông tin đầu vào giữa thuật toán định tuyến Link-State (LS) và Distance-Vector (DV) là gì?",
  "options": [
   "LS chỉ cần thông tin từ hàng xóm; DV cần bản đồ toàn mạng",
   "LS sử dụng thông tin định tuyến tĩnh; DV sử dụng thông tin động",
   "LS cần thông tin toàn cục về tất cả các liên kết và chi phí; DV chỉ cần thông tin từ các hàng xóm trực tiếp",
   "LS không sử dụng chi phí liên kết; DV sử dụng chi phí dựa trên độ trễ"
  ],
  "answer": 2,
  "explain": "Link-state cần bản đồ toàn mạng (topology và chi phí mọi liên kết); distance vector chỉ cần vector khoảng cách từ các láng giềng trực tiếp.",
  "source": "user:0 - all in one.docx (set 8, Câu 2); slide Chapter_5 p.12, 22-23",
  "confidence": "verified"
 },
 {
  "id": "ai-106",
  "chapter": "network",
  "q": "Tại sao thuật toán Distance-Vector lại dễ gặp phải vấn đề \"đếm đến vô cùng\" (count-to-infinity)?",
  "options": [
   "Vì thuật toán này hội tụ quá nhanh khiến bộ đếm bị tràn",
   "Vì mỗi router giữ một bản sao của toàn bộ cấu trúc mạng",
   "Vì thuật toán sử dụng quá nhiều băng thông để quảng bá",
   "Vì \"tin xấu\" (chi phí liên kết tăng hoặc đứt liên kết) lan truyền chậm qua mạng do sự phụ thuộc vào các bản cập nhật lặp đi lặp lại giữa các hàng xóm"
  ],
  "answer": 3,
  "explain": "Trong distance vector, tin tốt lan nhanh nhưng tin xấu (chi phí tăng, liên kết đứt) lan rất chậm do các router cứ cập nhật qua lại cho nhau, làm chi phí tăng dần tới vô cùng (count-to-infinity).",
  "source": "user:0 - all in one.docx (set 8, Câu 3)",
  "confidence": "derived"
 },
 {
  "id": "ai-107",
  "chapter": "network",
  "q": "Trong thuật toán Link-State, tại sao hiện tượng dao động (oscillations) có thể xảy ra nếu chi phí liên kết phụ thuộc vào lưu lượng (load-sensitive)?",
  "options": [
   "Vì các router không đồng bộ hóa đồng hồ",
   "Vì khi một đường đi trở nên tắc nghẽn (chi phí cao), tất cả các router đồng loạt chuyển hướng sang đường khác, làm đường mới tắc nghẽn và chu kỳ lặp lại",
   "Vì thuật toán Dijkstra không tìm ra được đường đi ngắn nhất chính xác",
   "Vì gói tin Link-State quảng bá bị mất trong mạng"
  ],
  "answer": 1,
  "explain": "Nếu chi phí liên kết phụ thuộc lưu lượng, khi một đường tắc mọi router cùng chuyển sang đường khác làm đường kia tắc, rồi lại quay về, gây dao động liên tục.",
  "source": "user:0 - all in one.docx (set 8, Câu 4)",
  "confidence": "derived"
 },
 {
  "id": "ai-108",
  "chapter": "network",
  "q": "Kỹ thuật \"Poisoned Reverse\" giúp giải quyết vấn đề lặp vòng trong Distance-Vector như thế nào?",
  "options": [
   "Bằng cách quảng bá chi phí vô cùng (vô cùng) đến một hàng xóm cho một đích đến, nếu ta đang dùng chính hàng xóm đó để đi đến đích",
   "Bằng cách gửi một gói tin độc để hủy router bị lỗi",
   "Bằng cách đảo ngược hướng của tất cả các liên kết trong mạng",
   "Bằng cách yêu cầu router khởi động lại khi phát hiện vòng lặp"
  ],
  "answer": 0,
  "explain": "Poisoned reverse: nếu Z định tuyến tới X qua láng giềng Y thì Z quảng bá cho Y rằng khoảng cách của Z tới X là vô cùng, nhờ đó Y không chọn đường vòng qua Z (phá vòng lặp hai nút).",
  "source": "user:0 - all in one.docx (set 8, Câu 5)",
  "confidence": "derived"
 },
 {
  "id": "ai-109",
  "chapter": "network",
  "q": "Một thách thức lớn đối với kiến trúc SDN điều khiển tập trung (logically centralized) là gì?",
  "options": [
   "Khó khăn trong việc lập trình ứng dụng",
   "Không thể hỗ trợ các giao thức định tuyến cũ như OSPF",
   "Khả năng mở rộng (scalability) và điểm lỗi đơn lẻ (single point of failure) nếu Controller bị quá tải hoặc gặp sự cố",
   "Chi phí phần cứng switch đắt hơn router truyền thống"
  ],
  "answer": 2,
  "explain": "Kiến trúc điều khiển tập trung dồn mọi quyết định về controller nên đối mặt với khả năng mở rộng và điểm lỗi duy nhất; thực tế phải dùng cụm controller phân tán.",
  "source": "user:0 - all in one.docx (set 8, Câu 15); slide Chapter_5 p.85",
  "confidence": "derived"
 },
 {
  "id": "ai-110",
  "chapter": "network",
  "q": "Sự khác biệt chính về mục đích sử dụng giữa SNMP và NETCONF là gì?",
  "options": [
   "SNMP dùng cho router; NETCONF dùng cho switch",
   "SNMP là giao thức độc quyền; NETCONF là mã nguồn mở",
   "SNMP chạy trên XML; NETCONF chạy trên ASN.1",
   "SNMP chủ yếu dùng để giám sát (monitoring); NETCONF chủ yếu dùng để cấu hình (configuration) thiết bị"
  ],
  "answer": 3,
  "explain": "SNMP/MIB chủ yếu dùng để truy vấn, giám sát trạng thái thiết bị; NETCONF/YANG nhấn mạnh quản lý cấu hình đa thiết bị, trừu tượng và toàn mạng.",
  "source": "user:0 - all in one.docx (set 8, Câu 19); slide Chapter_5 p.92-93",
  "confidence": "verified"
 },
 {
  "id": "ai-111",
  "chapter": "network",
  "q": "Tại sao NETCONF lại hỗ trợ tính năng \"giao dịch nguyên tử\" (atomic transaction) trên nhiều thiết bị?",
  "options": [
   "Để tăng tốc độ truyền dữ liệu",
   "Để đảm bảo rằng một cấu hình mạng phức tạp được áp dụng thành công trên tất cả thiết bị hoặc không áp dụng trên thiết bị nào cả, tránh trạng thái mạng không nhất quán",
   "Để tiết kiệm bộ nhớ lưu trữ trên Controller",
   "Để cho phép nhiều quản trị viên cùng cấu hình một lúc"
  ],
  "answer": 1,
  "explain": "NETCONF hỗ trợ atomic commit trên nhiều thiết bị (có rollback khi lỗi) nên cấu hình mạng được áp dụng trọn vẹn hoặc không áp dụng, tránh trạng thái mạng không nhất quán.",
  "source": "user:0 - all in one.docx (set 8, Câu 20); slide Chapter_5 p.98, 100",
  "confidence": "verified"
 },
 {
  "id": "ai-112",
  "chapter": "network",
  "q": "OSPF sử dụng cơ chế nào để đảm bảo thông tin Link-State là tin cậy và bảo mật?",
  "options": [
   "Hỗ trợ xác thực (ví dụ: MD5) giữa các router để ngăn chặn việc tiêm nhiễm thông tin định tuyến giả mạo",
   "Sử dụng checksum 16-bit",
   "Mã hóa toàn bộ gói tin bằng AES",
   "Chỉ chạy trên mạng cáp quang"
  ],
  "answer": 0,
  "explain": "Các thông điệp OSPF có thể được xác thực (ví dụ MD5) để ngăn kẻ xấu chèn thông tin định tuyến giả.",
  "source": "user:0 - all in one.docx (set 8, Câu 24); slide Chapter_5 p.47",
  "confidence": "verified"
 },
 {
  "id": "ai-113",
  "chapter": "network",
  "q": "Tại sao các nhà cung cấp nội dung (CDN) lại sử dụng IP-Anycast kết hợp với BGP?",
  "options": [
   "Để tăng dung lượng lưu trữ của server",
   "Để ẩn địa chỉ IP thật của server khỏi hacker",
   "Để gán cùng một địa chỉ IP cho nhiều server ở các vị trí địa lý khác nhau, giúp BGP tự động định tuyến người dùng đến server gần nhất (về mặt mạng)",
   "Để đảm bảo tất cả người dùng đều truy cập vào một server duy nhất tại Mỹ"
  ],
  "answer": 2,
  "explain": "IP anycast: nhiều server ở các nơi cùng quảng bá một địa chỉ/prefix bằng BGP; mỗi người dùng được định tuyến tới điểm quảng bá gần nhất (theo tiêu chí chọn tuyến BGP).",
  "source": "user:0 - all in one.docx (set 8, Câu 25)",
  "confidence": "derived"
 },
 {
  "id": "ai-114",
  "chapter": "network",
  "q": "Tại sao thông điệp ICMP \"Source Quench\" (Type 4) hiện nay ít được sử dụng?",
  "options": [
   "Vì nó gây ra quá nhiều lỗi mạng",
   "Vì các router hiện đại không còn bị tắc nghẽn",
   "Vì ICMP không còn được hỗ trợ trên IPv6",
   "Vì cơ chế kiểm soát tắc nghẽn của TCP tại lớp vận chuyển hoạt động hiệu quả hơn và không cần sự can thiệp từ lớp mạng"
  ],
  "answer": 3,
  "explain": "Source quench (ICMP type 4) hầu như không dùng vì điều khiển tắc nghẽn được TCP ở đầu cuối đảm nhiệm hiệu quả hơn; thêm thông báo lúc mạng đang nghẽn chỉ tốn thêm băng thông.",
  "source": "user:0 - all in one.docx (set 8, Câu 27); slide Chapter_5 p.88",
  "confidence": "derived"
 },
 {
  "id": "ai-115",
  "chapter": "network",
  "q": "Tại sao OSPF lại hội tụ (convergence) nhanh hơn RIP (một giao thức Distance-Vector)?",
  "options": [
   "Vì OSPF sử dụng UDP",
   "Vì trong OSPF, thay đổi trạng thái liên kết được quảng bá ngay lập tức tới toàn mạng (flooding) và các router tính toán lại đường đi độc lập, tránh được hiện tượng đếm đến vô cùng",
   "Vì OSPF có khoảng thời gian cập nhật định kỳ ngắn hơn",
   "Vì OSPF chỉ định tuyến trong các mạng nhỏ"
  ],
  "answer": 1,
  "explain": "OSPF (link-state) flood ngay thay đổi trạng thái liên kết tới toàn vùng và mỗi router tự chạy lại Dijkstra, nên hội tụ nhanh và không bị count-to-infinity như RIP.",
  "source": "user:0 - all in one.docx (set 8, Câu 29)",
  "confidence": "derived"
 },
 {
  "id": "ai-116",
  "chapter": "network",
  "q": "Khi một liên kết giữa hai router OSPF bị đứt, điều gì xảy ra tiếp theo?",
  "options": [
   "Các router liên quan ngay lập tức gửi thông báo cập nhật Link-State (LSA) lan truyền ra toàn vùng, kích hoạt việc tính toán lại đường đi Dijkstra tại các router khác",
   "Các router chờ 30 phút để cập nhật định kỳ",
   "Mạng ngừng hoạt động cho đến khi quản trị viên can thiệp",
   "Router chuyển sang giao thức RIP"
  ],
  "answer": 0,
  "explain": "Khi liên kết đứt, router liên quan flood thông báo trạng thái liên kết (LSA) ra cả vùng; mọi router chạy lại Dijkstra để tính đường mới.",
  "source": "user:0 - all in one.docx (set 8, Câu 34); slide Chapter_5 p.47",
  "confidence": "verified"
 },
 {
  "id": "ai-117",
  "chapter": "network",
  "q": "Thông điệp port-status trong OpenFlow giúp controller làm gì?",
  "options": [
   "Đổi số cổng của dịch vụ Web",
   "Kiểm tra xem cổng có bị virus không",
   "Biết khi nào một cổng của switch lên (up) hoặc xuống (down) để cập nhật topo mạng và tính lại đường đi nếu cần",
   "Tắt nguồn thiết bị từ xa"
  ],
  "answer": 2,
  "explain": "Port-status là thông điệp switch gửi lên controller khi trạng thái cổng thay đổi (up/down), giúp controller cập nhật topo và tính lại đường đi.",
  "source": "user:0 - all in one.docx (set 8, Câu 37); slide Chapter_5 p.80-81",
  "confidence": "verified"
 },
 {
  "id": "ai-118",
  "chapter": "network",
  "q": "Trong cấu trúc phân cấp của OSPF, vai trò của \"Area Border Router\" (ABR) là gì?",
  "options": [
   "Kết nối AS với Internet bên ngoài",
   "Chạy giao thức BGP",
   "Cấp phát địa chỉ IP cho các host trong vùng",
   "Kết nối các vùng thường (Areas) với vùng xương sống (Backbone), chịu trách nhiệm tóm tắt thông tin định tuyến giữa các vùng"
  ],
  "answer": 3,
  "explain": "ABR (area border router) nằm ở biên giữa các area, nối area với vùng backbone và tóm tắt thông tin khoảng cách của area mình để quảng bá vào backbone.",
  "source": "user:0 - all in one.docx (set 8, Câu 39); slide Chapter_5 p.48",
  "confidence": "verified"
 },
 {
  "id": "ai-119",
  "chapter": "network",
  "q": "Trong cấu hình \"Hot Potato Routing\" (Định tuyến khoai tây nóng), Router 1A trong AS1 học được hai đường để đến đích ngoài mạng (Prefix P). Đường 1: Qua Gateway 1B (chi phí nội miền OSPF đến 1B là 10). Đường 2: Qua Gateway 1C (chi phí nội miền OSPF đến 1C là 5). Cả hai đường đều có Local Preference và độ dài AS-PATH bằng nhau. Router 1A sẽ làm gì?",
  "options": [
   "Chọn đường qua Gateway 1B vì chi phí cao hơn nghĩa là băng thông tốt hơn",
   "Chọn đường qua Gateway 1C vì chi phí nội miền thấp hơn",
   "Chọn ngẫu nhiên để cân bằng tải",
   "Giữ gói tin lại chờ Router biên quyết định"
  ],
  "answer": 1,
  "explain": "Khi local preference và AS-PATH ngang nhau, BGP dùng hot potato: chọn gateway có chi phí nội miền nhỏ nhất. Chi phí đến 1C là 5 < 10 đến 1B nên chọn 1C.",
  "source": "user:0 - all in one.docx (set 9, Câu 5); slide Chapter_5 p.63",
  "confidence": "verified"
 },
 {
  "id": "ai-120",
  "chapter": "network",
  "q": "Một nhà quản trị muốn dùng BGP để thực hiện chính sách: không cho phép lưu lượng trung chuyển (transit) đi qua AS của mình. AS này kết nối với hai nhà cung cấp lớn là ISP A và ISP B. Cần cấu hình BGP như thế nào?",
  "options": [
   "Chỉ quảng bá các prefix thuộc sở hữu của chính AS mình cho cả hai ISP, không quảng bá lại tuyến học được từ ISP này sang ISP kia",
   "Không quảng bá bất kỳ tuyến đường nào cho cả hai ISP",
   "Đặt thuộc tính AS-PATH dài vô tận",
   "Sử dụng OSPF thay vì BGP"
  ],
  "answer": 0,
  "explain": "Muốn không làm transit, AS chỉ quảng bá các prefix của chính mình cho cả hai ISP và không quảng bá lại các tuyến học từ ISP này sang ISP kia.",
  "source": "user:0 - all in one.docx (set 9, Câu 10)",
  "confidence": "derived"
 },
 {
  "id": "ai-121",
  "chapter": "network",
  "q": "Trong thuật toán Link-State (Dijkstra), nếu có N nút. Tại bước lặp thứ k (với k < N), thuật toán đã xác định được đường đi ngắn nhất đến bao nhiêu đích?",
  "options": [
   "Tất cả N đích",
   "N - k đích",
   "k đích",
   "Chỉ các hàng xóm trực tiếp"
  ],
  "answer": 2,
  "explain": "Dijkstra lặp: sau k lần lặp, nút nguồn đã biết đường đi chi phí thấp nhất tới k nút đích.",
  "source": "user:0 - all in one.docx (set 9, Câu 11); slide Chapter_5 p.12",
  "confidence": "verified"
 },
 {
  "id": "ai-122",
  "chapter": "network",
  "q": "Doanh nghiệp X có mạng nội bộ sử dụng OSPF. X muốn kết nối với Internet thông qua ISP Y. Tại router biên kết nối X và Y, giao thức nào sẽ được chạy để trao đổi thông tin định tuyến với ISP Y, và giao thức nào chạy để định tuyến bên trong X?",
  "options": [
   "BGP với Y; BGP bên trong X",
   "OSPF với Y; OSPF bên trong X",
   "iBGP với Y; RIP bên trong X",
   "eBGP với Y; OSPF bên trong X"
  ],
  "answer": 3,
  "explain": "Giữa doanh nghiệp và ISP dùng giao thức liên miền BGP (eBGP); bên trong doanh nghiệp dùng giao thức nội miền như OSPF.",
  "source": "user:0 - all in one.docx (set 9, Câu 14); slide Chapter_5 p.46-50",
  "confidence": "derived"
 },
 {
  "id": "ai-123",
  "chapter": "network",
  "q": "Trong mạng SDN OpenFlow, Controller muốn biết thống kê số lượng gói tin đã đi qua một cổng cụ thể của Switch S1. Controller sẽ gửi thông điệp nào?",
  "options": [
   "Packet-Out",
   "Read-State (hoặc Multipart Request trong các phiên bản mới)",
   "Modify-State",
   "Flow-Removed"
  ],
  "answer": 1,
  "explain": "Controller đọc thống kê/bộ đếm của switch bằng thông điệp read-state (các phiên bản OpenFlow mới dùng multipart request); modify-state để sửa flow, packet-out để gửi gói.",
  "source": "user:0 - all in one.docx (set 9, Câu 15); slide Chapter_5 p.77-79",
  "confidence": "verified"
 },
 {
  "id": "ai-124",
  "chapter": "network",
  "q": "Giả sử bạn đang thiết kế trọng số (weight) cho OSPF trong mạng của mình. Bạn muốn lưu lượng ưu tiên đi qua các đường truyền có băng thông cao. Nếu băng thông liên kết là BW, bạn nên đặt chi phí (cost) cho liên kết đó theo công thức nào?",
  "options": [
   "Cost = 1 (để đếm số hop)",
   "Cost = BW (băng thông càng cao, chi phí càng cao)",
   "Cost = Constant / BW (băng thông càng cao, chi phí càng thấp)",
   "Cost = Độ trễ của liên kết"
  ],
  "answer": 2,
  "explain": "Quản trị viên đặt trọng số liên kết OSPF; để lưu lượng ưu tiên đường băng thông cao thì chi phí phải giảm khi băng thông tăng, thường cost = băng thông tham chiếu / băng thông liên kết.",
  "source": "user:0 - all in one.docx (set 9, Câu 16); slide Chapter_5 p.47",
  "confidence": "derived"
 },
 {
  "id": "ai-125",
  "chapter": "network",
  "q": "Router A và Router B là hàng xóm eBGP. A học được tuyến đến đích Z từ B, rồi quảng bá tuyến này cho Router C (hàng xóm iBGP của A). Theo mặc định, thuộc tính NEXT-HOP trong thông báo gửi cho C là gì?",
  "options": [
   "Giữ nguyên địa chỉ IP của Router B (interface nối với A)",
   "Địa chỉ IP của chính Router A",
   "Địa chỉ IP của Router C",
   "Địa chỉ 0.0.0.0"
  ],
  "answer": 0,
  "explain": "Khi chuyển tuyến học qua eBGP vào iBGP, NEXT-HOP mặc định không đổi: vẫn là địa chỉ interface của router B để các router nội bộ biết điểm thoát đúng.",
  "source": "user:0 - all in one.docx (set 9, Câu 17)",
  "confidence": "derived"
 },
 {
  "id": "ai-126",
  "chapter": "link",
  "q": "Thiết bị nào sau đây là nơi chủ yếu triển khai các giao thức lớp liên kết trong một host?",
  "options": [
   "CPU",
   "Bộ nhớ RAM",
   "Ổ cứng",
   "Network Adapter (NIC)"
  ],
  "answer": 3,
  "explain": "Phần lớn chức năng tầng liên kết được cài đặt trong card mạng (network adapter, NIC), kết hợp phần cứng và phần mềm.",
  "source": "user:0 - all in one.docx (set 10, Câu 2)",
  "confidence": "derived"
 },
 {
  "id": "ai-127",
  "chapter": "link",
  "q": "Trong thuật ngữ lớp liên kết, các thiết bị chạy giao thức lớp liên kết (như host, router, switch, WiFi AP) được gọi chung là gì?",
  "options": [
   "Links",
   "Nodes",
   "Gateways",
   "Hubs"
  ],
  "answer": 1,
  "explain": "Trong thuật ngữ tầng liên kết, mọi thiết bị chạy giao thức tầng liên kết (host, router, switch, AP) gọi là node; các kênh nối các node kề nhau gọi là link.",
  "source": "user:0 - all in one.docx (set 10, Câu 3)",
  "confidence": "derived"
 },
 {
  "id": "ai-128",
  "chapter": "link",
  "q": "Dịch vụ nào của lớp liên kết giúp xác định ranh giới của gói tin bằng cách thêm các trường tiêu đề vào datagram?",
  "options": [
   "Framing",
   "Flow control",
   "Routing",
   "Encryption"
  ],
  "answer": 0,
  "explain": "Framing là đóng datagram vào frame, thêm header (và trailer) để xác định ranh giới gói và địa chỉ tầng liên kết.",
  "source": "user:0 - all in one.docx (set 10, Câu 4)",
  "confidence": "derived"
 },
 {
  "id": "ai-129",
  "chapter": "link",
  "q": "Có hai loại kênh lớp liên kết chính là gì?",
  "options": [
   "Kênh vật lý và kênh ảo",
   "Kênh TCP và kênh UDP",
   "Kênh quảng bá (broadcast) và kênh điểm-điểm (point-to-point)",
   "Kênh nội miền và kênh liên miền"
  ],
  "answer": 2,
  "explain": "Hai loại liên kết tầng liên kết: điểm-điểm (point-to-point, nối hai node) và quảng bá (broadcast, nhiều node dùng chung một môi trường truyền).",
  "source": "user:0 - all in one.docx (set 10, Câu 7)",
  "confidence": "derived"
 },
 {
  "id": "ai-130",
  "chapter": "link",
  "q": "Giao thức điều khiển việc truyền khung tin lên một kênh quảng bá chia sẻ được gọi là gì?",
  "options": [
   "Routing Protocol",
   "Address Resolution Protocol (ARP)",
   "Transport Protocol",
   "Medium Access Control (MAC) Protocol"
  ],
  "answer": 3,
  "explain": "Giao thức MAC (Medium Access Control) quy định các node điều phối việc truyền frame lên kênh quảng bá dùng chung để tránh hoặc xử lý đụng độ.",
  "source": "user:0 - all in one.docx (set 10, Câu 8)",
  "confidence": "derived"
 },
 {
  "id": "ai-131",
  "chapter": "link",
  "q": "Ba nhóm chính của giao thức đa truy cập (multiple access protocols) là gì?",
  "options": [
   "Phân chia kênh, Truy cập ngẫu nhiên, Lần lượt",
   "TCP, UDP, IP",
   "Ethernet, WiFi, Bluetooth",
   "Unicast, Multicast, Broadcast"
  ],
  "answer": 0,
  "explain": "Ba nhóm giao thức đa truy cập: chia kênh (channel partitioning), truy cập ngẫu nhiên (random access) và lần lượt (taking turns).",
  "source": "user:0 - all in one.docx (set 10, Câu 9); slide Chapter_6 p.20",
  "confidence": "verified"
 },
 {
  "id": "ai-132",
  "chapter": "link",
  "q": "Giao thức nào là ví dụ điển hình của phương pháp \"Taking-turns\" (Lần lượt) sử dụng token?",
  "options": [
   "Ethernet",
   "Slotted ALOHA",
   "Token Ring",
   "Pure ALOHA"
  ],
  "answer": 2,
  "explain": "Token ring (và polling) thuộc nhóm 'taking turns': node nào giữ thẻ bài (token) mới được truyền, token chuyển tuần tự giữa các node.",
  "source": "user:0 - all in one.docx (set 10, Câu 15); slide Chapter_6 p.38",
  "confidence": "verified"
 },
 {
  "id": "ai-133",
  "chapter": "link",
  "q": "ARP hoạt động trong phạm vi nào?",
  "options": [
   "Toàn bộ Internet",
   "Trong cùng một subnet (mạng con)",
   "Giữa hai quốc gia",
   "Chỉ trong một máy tính"
  ],
  "answer": 1,
  "explain": "ARP chỉ phân giải địa chỉ IP sang MAC cho các node trong cùng subnet (LAN); host ở subnet khác thì phải hỏi MAC của router mặc định.",
  "source": "user:0 - all in one.docx (set 10, Câu 20); slide Chapter_6 p.43",
  "confidence": "derived"
 },
 {
  "id": "ai-134",
  "chapter": "link",
  "q": "Cấu trúc liên kết (topology) phổ biến của Ethernet hiện đại sử dụng thiết bị trung tâm nào?",
  "options": [
   "Bus đồng trục",
   "Hub",
   "Repeater",
   "Switch"
  ],
  "answer": 3,
  "explain": "Ethernet hiện đại dùng topo hình sao với switch ở trung tâm, thay cho hub và bus đồng trục thời đầu.",
  "source": "user:0 - all in one.docx (set 10, Câu 21)",
  "confidence": "derived"
 },
 {
  "id": "ai-135",
  "chapter": "link",
  "q": "Trường \"Preamble\" trong khung Ethernet có chức năng gì?",
  "options": [
   "Chứa địa chỉ nguồn",
   "Đồng bộ hóa đồng hồ giữa bên gửi và bên nhận",
   "Kiểm tra lỗi CRC",
   "Xác định loại giao thức mạng"
  ],
  "answer": 1,
  "explain": "Preamble (7 byte 10101010 + 1 byte 10101011) dùng để đồng bộ tốc độ đồng hồ giữa bên nhận và bên gửi.",
  "source": "user:0 - all in one.docx (set 10, Câu 22); slide Chapter_6 p.56",
  "confidence": "verified"
 },
 {
  "id": "ai-136",
  "chapter": "link",
  "q": "Bảng chuyển tiếp của Switch (Switch table) chứa các thông tin gì?",
  "options": [
   "Địa chỉ MAC, Cổng ra (Interface), Thời gian (Time)",
   "Địa chỉ IP, Cổng ra, TTL",
   "Tên miền, Địa chỉ IP",
   "Địa chỉ MAC nguồn, Địa chỉ MAC đích"
  ],
  "answer": 0,
  "explain": "Mỗi dòng trong bảng chuyển tiếp của switch gồm: địa chỉ MAC của host, interface (cổng) để tới host đó, và thời gian (để xóa mục cũ).",
  "source": "user:0 - all in one.docx (set 10, Câu 27)",
  "confidence": "derived"
 },
 {
  "id": "ai-137",
  "chapter": "link",
  "q": "Tiêu đề MPLS nằm ở đâu trong gói tin?",
  "options": [
   "Trước tiêu đề lớp 2",
   "Bên trong phần dữ liệu của IP datagram",
   "Giữa tiêu đề lớp 2 và tiêu đề lớp 3",
   "Sau tiêu đề TCP"
  ],
  "answer": 2,
  "explain": "Header MPLS được chèn giữa header tầng liên kết và header IP, mang nhãn có độ dài cố định để router chuyển tiếp nhanh.",
  "source": "user:0 - all in one.docx (set 10, Câu 32); slide Chapter_6 p.80",
  "confidence": "derived"
 },
 {
  "id": "ai-138",
  "chapter": "link",
  "q": "Switch nằm ở đỉnh của mỗi rack chứa server trong trung tâm dữ liệu được gọi là gì?",
  "options": [
   "Border Router",
   "Core Switch",
   "Load Balancer",
   "Top of Rack (TOR) Switch"
  ],
  "answer": 3,
  "explain": "Mỗi rack server có một Top of Rack (TOR) switch nối các server blade trong rack với các switch tầng trên.",
  "source": "user:0 - all in one.docx (set 10, Câu 33); slide Chapter_6 p.88",
  "confidence": "verified"
 },
 {
  "id": "ai-139",
  "chapter": "link",
  "q": "Thiết bị nào trong trung tâm dữ liệu chịu trách nhiệm phân phối yêu cầu từ bên ngoài đến các server cụ thể?",
  "options": [
   "ARP Server",
   "Load Balancer",
   "DHCP Server",
   "DNS Server"
  ],
  "answer": 1,
  "explain": "Load balancer nhận yêu cầu từ ngoài rồi phân phối đến các server cụ thể trong trung tâm dữ liệu (định tuyến ở tầng ứng dụng).",
  "source": "user:0 - all in one.docx (set 10, Câu 34); slide Chapter_6 p.91",
  "confidence": "verified"
 },
 {
  "id": "ai-140",
  "chapter": "link",
  "q": "Tổ chức nào quản lý không gian địa chỉ MAC?",
  "options": [
   "IEEE",
   "IETF",
   "ICANN",
   "ISO"
  ],
  "answer": 0,
  "explain": "IEEE quản lý không gian địa chỉ MAC và cấp từng khối địa chỉ (tiền tố) cho nhà sản xuất card mạng.",
  "source": "user:0 - all in one.docx (set 10, Câu 39)",
  "confidence": "derived"
 },
 {
  "id": "ai-141",
  "chapter": "link",
  "q": "Tại sao giao thức lớp liên kết (như Ethernet) thường đặt phần phát hiện lỗi (CRC) ở phần cuối của khung tin (frame trailer) thay vì phần đầu?",
  "options": [
   "Để phù hợp với mô hình OSI",
   "Vì phần đầu đã chứa quá nhiều thông tin địa chỉ",
   "Để phần cứng bộ nhận có thể tính toán CRC song song trong khi các bit đang đến và so sánh ngay khi kết thúc khung tin, giảm độ trễ xử lý",
   "Để đảm bảo tính bảo mật của dữ liệu"
  ],
  "answer": 2,
  "explain": "Đặt CRC ở cuối frame (trailer) cho phép phần cứng tính CRC ngay khi các bit đi qua, rồi so sánh khi bit cuối cùng đến mà không phải đệm cả frame trước.",
  "source": "user:0 - all in one.docx (set 11, Câu 1)",
  "confidence": "derived"
 },
 {
  "id": "ai-142",
  "chapter": "link",
  "q": "Mục đích của thuật toán \"Binary Exponential Backoff\" trong Ethernet là gì?",
  "options": [
   "Để tăng tốc độ truyền dữ liệu sau mỗi lần gửi thành công",
   "Để đảm bảo tính công bằng tuyệt đối cho tất cả các node",
   "Để đồng bộ hóa đồng hồ giữa các node",
   "Để tự động điều chỉnh thời gian chờ dựa trên tải của mạng; chờ ngắn khi tải thấp và chờ dài hơn khi mạng tắc nghẽn (nhiều xung đột liên tiếp)"
  ],
  "answer": 3,
  "explain": "Backoff nhị phân mũ làm khoảng chờ ngẫu nhiên tăng gấp đôi sau mỗi lần đụng độ liên tiếp: chờ ngắn khi tải nhẹ, chờ dài hơn khi mạng bận để giảm đụng độ.",
  "source": "user:0 - all in one.docx (set 11, Câu 7)",
  "confidence": "derived"
 },
 {
  "id": "ai-143",
  "chapter": "link",
  "q": "Tại sao giao thức \"Taking-turns\" (như Token Ring) lại có hiệu suất tốt hơn giao thức truy cập ngẫu nhiên (như ALOHA) khi mạng chịu tải cao?",
  "options": [
   "Vì nó loại bỏ hoàn toàn các xung đột và khe thời gian trống, đảm bảo băng thông được chia đều cho các node có nhu cầu",
   "Vì nó cho phép các node truyền dữ liệu bất cứ lúc nào",
   "Vì nó không yêu cầu token điều khiển",
   "Vì nó sử dụng ít băng thông cho tiêu đề khung tin hơn"
  ],
  "answer": 0,
  "explain": "Giao thức taking-turns tránh đụng độ và không phí khe trống nên dùng kênh hiệu quả khi tải cao, trong khi truy cập ngẫu nhiên như ALOHA mất nhiều thời gian vì đụng độ.",
  "source": "user:0 - all in one.docx (set 11, Câu 8); slide Chapter_6 p.33",
  "confidence": "derived"
 },
 {
  "id": "ai-144",
  "chapter": "link",
  "q": "Tại sao địa chỉ MAC có cấu trúc phẳng (flat), trong khi địa chỉ IP có cấu trúc phân cấp (hierarchical)?",
  "options": [
   "Để tiết kiệm không gian lưu trữ trên card mạng",
   "Vì địa chỉ MAC gắn liền vĩnh viễn với phần cứng (tính di động cao), trong khi IP gắn liền với vị trí mạng (subnet) để phục vụ định tuyến hiệu quả",
   "Vì IEEE muốn quản lý địa chỉ MAC dễ dàng hơn",
   "Vì địa chỉ MAC chỉ dùng cho mạng nội bộ nhỏ"
  ],
  "answer": 1,
  "explain": "MAC gắn cố định với phần cứng nên phẳng và di động được; IP gắn với vị trí mạng (subnet) nên phân cấp để router tổng hợp và định tuyến hiệu quả.",
  "source": "user:0 - all in one.docx (set 11, Câu 10)",
  "confidence": "derived"
 },
 {
  "id": "ai-145",
  "chapter": "link",
  "q": "Tại sao Ethernet switch được coi là thiết bị \"trong suốt\" (transparent) đối với các host?",
  "options": [
   "Vì vỏ của switch thường được làm bằng nhựa trong suốt",
   "Vì switch không sử dụng điện năng",
   "Vì các host gửi khung tin trực tiếp đến địa chỉ MAC của đích mà không cần biết đến sự tồn tại của switch; switch tự động nhận, lọc và chuyển tiếp mà không thay đổi khung tin",
   "Vì switch không có địa chỉ MAC trên các cổng của nó để quản lý"
  ],
  "answer": 2,
  "explain": "Switch 'trong suốt' với host: host không biết switch tồn tại, không cần cấu hình; switch tự học, lọc và chuyển tiếp mà không sửa frame.",
  "source": "user:0 - all in one.docx (set 11, Câu 13); slide Chapter_6 p.61",
  "confidence": "verified"
 },
 {
  "id": "ai-146",
  "chapter": "link",
  "q": "Tại sao mạng Ethernet chuyển mạch (Switched Ethernet) lại không có xung đột (collision-free) so với Ethernet dùng Hub?",
  "options": [
   "Vì Switch sử dụng cáp quang",
   "Vì Switch chạy giao thức CSMA/CD nhanh hơn Hub",
   "Vì Switch cấm hai máy gửi tin cùng một lúc",
   "Vì Switch cô lập miền xung đột cho mỗi cổng và có bộ đệm để lưu khung tin; mỗi liên kết là điểm-điểm và hoạt động song công (full-duplex)"
  ],
  "answer": 3,
  "explain": "Mỗi cổng switch là một liên kết điểm-điểm full-duplex có bộ đệm, tức là một collision domain riêng, nên không còn đụng độ như khi nhiều máy dùng chung hub.",
  "source": "user:0 - all in one.docx (set 11, Câu 16)",
  "confidence": "derived"
 },
 {
  "id": "ai-147",
  "chapter": "link",
  "q": "Tại sao người ta sử dụng VLAN (Virtual LAN) thay vì kết nối vật lý các nhóm máy tính vào các switch riêng biệt hoàn toàn?",
  "options": [
   "Để tăng tốc độ mạng lên gấp đôi",
   "Để linh hoạt trong quản lý (nhóm người dùng theo logic thay vì vị trí vật lý), tiết kiệm phần cứng switch, và cô lập miền quảng bá (broadcast domain) hiệu quả",
   "Để loại bỏ hoàn toàn nhu cầu sử dụng Router",
   "Để thay đổi địa chỉ MAC của các máy tính"
  ],
  "answer": 1,
  "explain": "VLAN cho phép nhóm người dùng theo logic thay vì vị trí vật lý, tiết kiệm switch, cô lập broadcast domain và quản lý/di chuyển người dùng linh hoạt bằng cấu hình.",
  "source": "user:0 - all in one.docx (set 11, Câu 17); slide Chapter_6 p.75",
  "confidence": "derived"
 },
 {
  "id": "ai-148",
  "chapter": "link",
  "q": "Tại sao MPLS (Multiprotocol Label Switching) có thể chuyển tiếp gói tin nhanh hơn định tuyến IP truyền thống?",
  "options": [
   "Vì nhãn MPLS ngắn và cố định độ dài, cho phép tra cứu (lookup) chính xác và nhanh chóng thay vì phải tìm kiếm tiền tố dài nhất (longest prefix match) như IP",
   "Vì MPLS không sử dụng bộ đệm",
   "Vì MPLS bỏ qua bước kiểm tra lỗi",
   "Vì MPLS luôn chọn đường đi ngắn nhất"
  ],
  "answer": 0,
  "explain": "MPLS chuyển tiếp theo nhãn có độ dài cố định (tra bảng chính xác) thay vì phải tìm tiền tố khớp dài nhất, nên nhanh hơn định tuyến IP truyền thống.",
  "source": "user:0 - all in one.docx (set 11, Câu 19); slide Chapter_6 p.80",
  "confidence": "verified"
 },
 {
  "id": "ai-149",
  "chapter": "link",
  "q": "Tại sao cấu trúc mạng trung tâm dữ liệu phân cấp truyền thống lại gặp vấn đề về băng thông khi có nhiều lưu lượng \"East-West\" (giữa các server trong các rack khác nhau)?",
  "options": [
   "Vì các server có tốc độ mạng chậm",
   "Vì cáp kết nối quá dài",
   "Vì các liên kết ở tầng trên (Aggregation/Core switches) bị quá tải do hệ số dư thừa đăng ký (oversubscription) cao, tạo thành nút thắt cổ chai",
   "Vì giao thức Ethernet không hỗ trợ giao tiếp giữa các server"
  ],
  "answer": 2,
  "explain": "Trong cây phân cấp, lưu lượng giữa server ở các rack khác nhau phải lên tầng trên; các liên kết lên bị oversubscription (hệ số dư thừa đăng ký) cao nên thành nút cổ chai.",
  "source": "user:0 - all in one.docx (set 11, Câu 21); slide Chapter_6 p.90",
  "confidence": "derived"
 },
 {
  "id": "ai-150",
  "chapter": "link",
  "q": "Tại sao trong mạng DOCSIS (Internet truyền hình cáp), kênh đường lên (upstream) lại cần cơ chế yêu cầu/cấp phát (Request/Grant) phức tạp hơn kênh đường xuống (downstream)?",
  "options": [
   "Vì kênh đường lên có băng thông thấp hơn",
   "Vì modem cáp không có khả năng phát hiện xung đột",
   "Vì dữ liệu đường lên quan trọng hơn dữ liệu đường xuống",
   "Vì kênh đường lên là kênh chia sẻ đa truy cập (nhiều modem gửi về 1 CMTS), dễ gây xung đột; trong khi kênh đường xuống chỉ có 1 người gửi (CMTS) nên không có xung đột"
  ],
  "answer": 3,
  "explain": "Kênh lên của DOCSIS là kênh chia sẻ: nhiều modem tranh nhau gửi về CMTS nên cần cơ chế request/grant để cấp khe thời gian; kênh xuống chỉ có CMTS phát nên không đụng độ.",
  "source": "user:0 - all in one.docx (set 11, Câu 22); slide Chapter_6 p.36-37",
  "confidence": "verified"
 },
 {
  "id": "ai-151",
  "chapter": "link",
  "q": "Tại sao các giao thức lớp liên kết lại cung cấp dịch vụ \"Reliable Delivery\" (Giao vận tin cậy) chủ yếu trên các liên kết không dây (như WiFi) mà ít khi trên liên kết có dây (Ethernet)?",
  "options": [
   "Vì mạng không dây có tốc độ chậm hơn",
   "Vì tỷ lệ lỗi bit trên môi trường không dây cao hơn nhiều; sửa lỗi cục bộ tại lớp liên kết hiệu quả hơn là chờ truyền lại từ đầu cuối (TCP)",
   "Vì Ethernet không hỗ trợ cơ chế ACK",
   "Vì mạng không dây không hỗ trợ TCP"
  ],
  "answer": 1,
  "explain": "Liên kết không dây có tỉ lệ lỗi bit cao nên truyền tin cậy ngay ở tầng liên kết hiệu quả hơn là chờ TCP truyền lại từ đầu cuối; trên Ethernet lỗi hiếm nên ít dùng.",
  "source": "user:0 - all in one.docx (set 11, Câu 25); slide Chapter_6 p.6",
  "confidence": "verified"
 },
 {
  "id": "ai-152",
  "chapter": "link",
  "q": "Tại sao Ethernet cần quy định kích thước khung tin tối thiểu (46 byte dữ liệu + header/trailer = 64 byte)?",
  "options": [
   "Để đảm bảo khung tin đủ dài để bộ gửi có thể phát hiện xung đột trước khi truyền xong khung tin đó (liên quan đến RTT của đường dây)",
   "Để làm tròn số liệu cho dễ tính toán",
   "Để chứa đủ thông tin địa chỉ MAC",
   "Để tăng hiệu suất đường truyền"
  ],
  "answer": 0,
  "explain": "Frame tối thiểu 64 byte để thời gian phát lớn hơn thời gian tín hiệu đụng độ quay về, nhờ đó bên gửi vẫn đang truyền khi phát hiện được đụng độ (CSMA/CD).",
  "source": "user:0 - all in one.docx (set 11, Câu 26)",
  "confidence": "derived"
 },
 {
  "id": "ai-153",
  "chapter": "application",
  "q": "Trong bối cảnh Web Page Request, tại sao Laptop cần gửi DHCP Discover trước khi gửi DNS Query?",
  "options": [
   "Vì DNS server chỉ trả lời các máy có IP tĩnh",
   "Vì DHCP kiểm tra bảo mật cho Laptop",
   "Vì Laptop cần có địa chỉ IP, Subnet mask, Gateway và địa chỉ DNS Server (do DHCP cung cấp) trước khi có thể tạo và gửi bất kỳ gói tin IP nào",
   "Vì DNS Query được đóng gói bên trong DHCP packet"
  ],
  "answer": 2,
  "explain": "DNS query là gói IP nên laptop cần có địa chỉ IP, subnet mask, gateway và địa chỉ DNS server; những thông tin này lấy từ DHCP, vì vậy DHCP phải chạy trước.",
  "source": "user:0 - all in one.docx (set 11, Câu 27); slide Chapter_6 p.94-100",
  "confidence": "verified"
 },
 {
  "id": "ai-154",
  "chapter": "link",
  "q": "Tại sao ARP Table cần có thời gian sống (TTL) cho mỗi mục nhập?",
  "options": [
   "Để tiết kiệm bộ nhớ RAM",
   "Để bắt buộc người dùng đăng nhập lại",
   "Để ngăn chặn tấn công ARP spoofing",
   "Để cập nhật kịp thời các thay đổi trong mạng (ví dụ: một card mạng bị thay thế hoặc IP được gán lại cho máy khác) và loại bỏ các mục lỗi thời"
  ],
  "answer": 3,
  "explain": "Mạng thay đổi: card mạng thay mới hoặc IP cấp lại cho máy khác; TTL của mục ARP giúp xóa thông tin cũ để tránh gửi frame tới MAC lỗi thời.",
  "source": "user:0 - all in one.docx (set 11, Câu 29); slide Chapter_6 p.44",
  "confidence": "derived"
 },
 {
  "id": "ai-155",
  "chapter": "link",
  "q": "802.1Q VLAN tag được chèn vào vị trí nào trong khung Ethernet tiêu chuẩn?",
  "options": [
   "Cuối khung tin (Trailer)",
   "Trước Preamble",
   "Giữa địa chỉ MAC nguồn và trường Type/Length",
   "Bên trong phần Data"
  ],
  "answer": 2,
  "explain": "Tag 802.1Q (4 byte) được chèn vào ngay sau địa chỉ MAC nguồn và trước trường Type/Length của frame Ethernet.",
  "source": "user:0 - all in one.docx (set 11, Câu 30); slide Chapter_6 p.78",
  "confidence": "verified"
 },
 {
  "id": "ai-156",
  "chapter": "link",
  "q": "Tại sao mô hình \"Clos Network\" (mạng phân cấp kết nối dày đặc) lại được ưa chuộng trong các trung tâm dữ liệu hiện đại thay vì mô hình phân cấp truyền thống?",
  "options": [
   "Vì nó rẻ hơn",
   "Vì nó cung cấp nhiều đường đi song song (multipath) giữa bất kỳ cặp server nào, giúp tăng băng thông gộp (bisection bandwidth) và độ tin cậy",
   "Vì nó sử dụng ít switch hơn",
   "Vì nó tiêu thụ ít điện năng hơn"
  ],
  "answer": 1,
  "explain": "Mạng Clos (leaf-spine) tạo nhiều đường đi song song giữa mọi cặp server, tăng băng thông giữa các rack và độ tin cậy nhờ dự phòng.",
  "source": "user:0 - all in one.docx (set 11, Câu 31); slide Chapter_6 p.90",
  "confidence": "verified"
 },
 {
  "id": "ai-157",
  "chapter": "link",
  "q": "Tại sao một số giao thức lớp liên kết sử dụng \"Bit stuffing\" (chèn bit)?",
  "options": [
   "Để đảm bảo chuỗi cờ hiệu (flag) giới hạn khung tin (ví dụ: 01111110) không xuất hiện ngẫu nhiên trong phần dữ liệu, gây nhầm lẫn về ranh giới khung",
   "Để mã hóa dữ liệu",
   "Để làm tăng kích thước khung tin lên mức tối thiểu",
   "Để kiểm tra chẵn lẻ"
  ],
  "answer": 0,
  "explain": "Bit stuffing chèn thêm một bit (ví dụ chèn 0 sau năm bit 1 liên tiếp) vào dữ liệu để chuỗi cờ giới hạn frame (như 01111110) không xuất hiện trong dữ liệu gây nhầm ranh giới.",
  "source": "user:0 - all in one.docx (set 11, Câu 33)",
  "confidence": "derived"
 },
 {
  "id": "ai-158",
  "chapter": "link",
  "q": "Tại sao Switch có thể hỗ trợ các liên kết không đồng nhất (ví dụ: 10Mbps và 100Mbps) trên cùng một thiết bị, trong khi Hub thì không?",
  "options": [
   "Vì Switch sử dụng nguồn điện lớn hơn",
   "Vì Switch có nhiều cổng hơn",
   "Vì Hub chỉ hỗ trợ cáp đồng trục",
   "Vì Switch có bộ đệm để lưu trữ và chuyển tiếp (store-and-forward), cho phép khớp tốc độ giữa các cổng; Hub chỉ lặp lại tín hiệu điện ngay lập tức"
  ],
  "answer": 3,
  "explain": "Switch có bộ đệm và chuyển tiếp theo kiểu store-and-forward nên khớp được tốc độ giữa các cổng (ví dụ 10 và 100 Mbps); hub chỉ lặp tín hiệu nên các cổng phải cùng tốc độ.",
  "source": "user:0 - all in one.docx (set 11, Câu 34)",
  "confidence": "derived"
 },
 {
  "id": "ai-159",
  "chapter": "link",
  "q": "ARP Spoofing (ARP Poisoning) là kiểu tấn công gì?",
  "options": [
   "Tấn công từ chối dịch vụ (DoS)",
   "Kẻ tấn công gửi các thông điệp ARP giả mạo để liên kết địa chỉ MAC của mình với địa chỉ IP của một máy khác (thường là Gateway), nhằm nghe lén hoặc chặn dữ liệu",
   "Tấn công bẻ khóa mật khẩu wifi",
   "Tấn công tràn bộ đệm"
  ],
  "answer": 1,
  "explain": "ARP không có xác thực: kẻ tấn công gửi ARP giả để gắn MAC của mình với IP của máy khác (thường là gateway), từ đó nghe lén hoặc chặn dữ liệu (man-in-the-middle).",
  "source": "user:0 - all in one.docx (set 11, Câu 37)",
  "confidence": "derived"
 },
 {
  "id": "ai-160",
  "chapter": "link",
  "q": "Lợi ích của việc sử dụng MPLS cho Traffic Engineering (Kỹ thuật lưu lượng) là gì?",
  "options": [
   "Cho phép nhà mạng định tuyến lưu lượng qua các đường dẫn cụ thể (không nhất thiết là đường ngắn nhất theo IP) để tối ưu hóa tài nguyên mạng và đảm bảo QoS",
   "Cho phép người dùng tự chọn đường đi",
   "Giảm kích thước gói tin IP",
   "Loại bỏ nhu cầu sử dụng BGP"
  ],
  "answer": 0,
  "explain": "MPLS cho phép định tuyến lưu lượng theo đường định trước (không nhất thiết đường ngắn nhất theo IP) để cân bằng tải, tối ưu tài nguyên và đảm bảo QoS (traffic engineering).",
  "source": "user:0 - all in one.docx (set 11, Câu 39); slide Chapter_6 p.81",
  "confidence": "verified"
 },
 {
  "id": "ai-161",
  "chapter": "link",
  "q": "Một mạng LAN dùng một switch 24 cổng, mỗi cổng nối một thiết bị. Số collision domain là:",
  "options": [
   "1",
   "12",
   "23",
   "24"
  ],
  "answer": 3,
  "explain": "Mỗi cổng switch là một collision domain riêng nên switch 24 cổng có 24 collision domain (còn toàn LAN thường là một broadcast domain).",
  "source": "user:0 - all in one.docx (set 12, Câu 10)",
  "confidence": "derived"
 },
 {
  "id": "ai-162",
  "chapter": "network",
  "q": "Địa chỉ loopback thường dùng của IPv4 là:",
  "options": [
   "192.168.0.1",
   "255.255.255.0",
   "127.0.0.1",
   "0.0.0.0"
  ],
  "answer": 2,
  "explain": "Địa chỉ loopback của IPv4 nằm trong khối 127.0.0.0/8, thường dùng là 127.0.0.1, để máy tự gửi gói cho chính nó.",
  "source": "user:0 - all in one.docx (set 12, Câu 20)",
  "confidence": "derived"
 },
 {
  "id": "ai-163",
  "chapter": "network",
  "q": "Giao thức nào dùng để xác thực và mã hóa dữ liệu ở tầng mạng?",
  "options": [
   "SSL/TLS",
   "SSH",
   "HTTPS",
   "IPsec"
  ],
  "answer": 3,
  "explain": "IPsec cung cấp xác thực và mã hóa ở tầng mạng (cho từng gói IP); SSL/TLS và SSH hoạt động ở tầng cao hơn.",
  "source": "user:0 - all in one.docx (set 12, Câu 50)",
  "confidence": "derived"
 },
 {
  "id": "ai-164",
  "chapter": "network",
  "q": "Số host khả dụng (usable) của một subnet có n bit phần host được tính bằng công thức:",
  "options": [
   "2^n",
   "2^n - 2",
   "2^n + 2",
   "2^n - 1"
  ],
  "answer": 1,
  "explain": "Phần host có n bit cho 2^n địa chỉ, trừ địa chỉ mạng và broadcast nên số host dùng được là 2^n - 2.",
  "source": "user:0 - all in one.docx (set 12, Câu 56)",
  "confidence": "derived"
 },
 {
  "id": "ai-165",
  "chapter": "link",
  "q": "STP (Spanning Tree Protocol) dùng để:",
  "options": [
   "Chống loop L2",
   "Chống loop L3",
   "Chia VLAN",
   "Gán IP"
  ],
  "answer": 0,
  "explain": "STP (Spanning Tree Protocol) chặn các liên kết dư thừa để mạng chuyển mạch lớp 2 không bị vòng lặp (loop) và bão broadcast.",
  "source": "user:0 - all in one.docx (set 12, Câu 74)",
  "confidence": "derived"
 },
 {
  "id": "ai-166",
  "chapter": "application",
  "q": "HTTPS hoạt động trên cổng mặc định nào?",
  "options": [
   "80",
   "22",
   "443",
   "25"
  ],
  "answer": 2,
  "explain": "HTTPS (HTTP qua TLS) dùng cổng TCP 443 theo mặc định; HTTP dùng 80, SSH dùng 22, SMTP dùng 25.",
  "source": "user:0 - all in one.docx (set 12, Câu 76)",
  "confidence": "derived"
 },
 {
  "id": "ai-167",
  "chapter": "network",
  "q": "Một gói IP có cờ DF = 1 nghĩa là:",
  "options": [
   "Được phân mảnh",
   "Gói cuối cùng",
   "Gói đầu tiên",
   "Không được phân mảnh"
  ],
  "answer": 3,
  "explain": "Cờ DF (Don't Fragment) bằng 1 cấm router phân mảnh datagram; nếu gói quá lớn so với MTU thì bị hủy và router gửi ICMP báo lỗi.",
  "source": "user:0 - all in one.docx (set 12, Câu 82)",
  "confidence": "derived"
 },
 {
  "id": "ai-168",
  "chapter": "network",
  "q": "Thông điệp ICMP type 8 code 0 có nghĩa là:",
  "options": [
   "Echo request",
   "Echo reply",
   "Time exceeded",
   "Destination unreachable"
  ],
  "answer": 0,
  "explain": "ICMP type 8 code 0 là echo request (dùng bởi ping); echo reply là type 0, TTL expired là type 11, destination unreachable là type 3.",
  "source": "user:0 - all in one.docx (set 12, Câu 88); slide Chapter_5 p.88",
  "confidence": "verified"
 },
 {
  "id": "ai-169",
  "chapter": "link",
  "q": "Trong STP, switch được chọn làm root bridge là switch có:",
  "options": [
   "Priority cao nhất",
   "Priority thấp nhất",
   "MAC cao nhất",
   "MAC thấp nhất"
  ],
  "answer": 1,
  "explain": "Bridge/switch được chọn làm root bridge trong STP là thiết bị có bridge ID nhỏ nhất, tức priority thấp nhất (nếu bằng nhau thì xét MAC thấp nhất).",
  "source": "user:0 - all in one.docx (set 12, Câu 94)",
  "confidence": "derived"
 },
 {
  "id": "ai-170",
  "chapter": "application",
  "q": "Trong FTP chế độ active, kênh dữ liệu (data channel) phía server dùng cổng nào?",
  "options": [
   "20",
   "21",
   "22",
   "23"
  ],
  "answer": 0,
  "explain": "FTP dùng cổng 21 cho kết nối điều khiển; ở chế độ active, server mở kết nối dữ liệu từ cổng 20 tới client.",
  "source": "user:0 - all in one.docx (set 12, Câu 95)",
  "confidence": "derived"
 },
 {
  "id": "ai-171",
  "chapter": "application",
  "q": "Một máy trong LAN ping được 8.8.8.8 nhưng không truy cập được google.com. Nguyên nhân khả dĩ nhất là:",
  "options": [
   "DHCP lỗi",
   "Default gateway sai",
   "DNS không phân giải tên miền",
   "Subnet mask sai"
  ],
  "answer": 2,
  "explain": "Ping được 8.8.8.8 chứng tỏ kết nối IP ra Internet bình thường; không vào được google.com cho thấy lỗi phân giải tên (DNS).",
  "source": "user:0 - all in one.docx (set 12, Câu 102)",
  "confidence": "derived"
 },
 {
  "id": "ai-172",
  "chapter": "link",
  "q": "Kỹ thuật viên thấy đèn các cổng switch chớp liên tục bất thường, CPU switch tăng cao, toàn mạng chậm. Đây có thể là dấu hiệu của:",
  "options": [
   "Router loop",
   "ARP timeout",
   "DHCP starvation",
   "Broadcast storm"
  ],
  "answer": 3,
  "explain": "Đèn cổng chớp liên tục, CPU switch cao và toàn mạng chậm là triệu chứng của bão broadcast (broadcast storm), thường do vòng lặp lớp 2.",
  "source": "user:0 - all in one.docx (set 12, Câu 106)",
  "confidence": "derived"
 },
 {
  "id": "ai-173",
  "chapter": "media",
  "q": "Trong mạng không dây có nhiều thiết bị, tốc độ truy cập giảm đáng kể và phân tích cho thấy nhiều gói bị truyền lại (retransmit). Nguyên nhân khả dĩ nhất là:",
  "options": [
   "Nhiễu sóng hoặc khoảng cách xa AP",
   "DHCP lease time ngắn",
   "Sai subnet mask",
   "IP trùng"
  ],
  "answer": 0,
  "explain": "Nhiều gói phải truyền lại trong mạng không dây thường do nhiễu sóng hoặc thiết bị ở xa AP làm tỉ lệ lỗi bit tăng; sai subnet mask hay IP trùng gây mất kết nối chứ không gây retransmit hàng loạt.",
  "source": "user:0 - all in one.docx (set 12, Câu 107)",
  "confidence": "derived"
 },
 {
  "id": "ai-174",
  "chapter": "transport",
  "q": "Một công ty triển khai VoIP; khi gọi, âm thanh bị gián đoạn dù ping và thông lượng bình thường. Nguyên nhân khả dĩ nhất là:",
  "options": [
   "DNS lỗi",
   "Độ trễ và jitter cao",
   "Subnet mask sai",
   "NAT overload"
  ],
  "answer": 1,
  "explain": "VoIP rất nhạy với trễ và jitter; khi ping và thông lượng bình thường mà âm thanh vẫn đứt quãng thì nguyên nhân khả dĩ nhất là độ trễ biến thiên (jitter) cao.",
  "source": "user:0 - all in one.docx (set 12, Câu 108); slide Chapter_2 p.89-90",
  "confidence": "derived"
 },
 {
  "id": "ai-175",
  "chapter": "network",
  "q": "Nhiều người dùng báo Internet chậm khi tải file lớn; giám sát cho thấy băng thông WAN đạt 100%. Giải pháp hợp lý nhất là:",
  "options": [
   "Giảm DHCP lease time",
   "Tăng TTL",
   "Triển khai QoS ưu tiên lưu lượng quan trọng",
   "Chia subnet nhỏ hơn"
  ],
  "answer": 2,
  "explain": "Khi băng thông WAN bị dùng hết 100% bởi lưu lượng tải file lớn, giải pháp hợp lý là QoS để ưu tiên lưu lượng quan trọng; đổi DHCP lease, TTL hay chia subnet không giải quyết nghẽn đường WAN.",
  "source": "user:0 - all in one.docx (set 12, Câu 111)",
  "confidence": "derived"
 },
 {
  "id": "ai-176",
  "chapter": "network",
  "q": "Khi chạy traceroute, mọi hop đều trả về dấu '* * *'. Nguyên nhân khả dĩ nhất là:",
  "options": [
   "DNS lỗi",
   "DHCP lỗi",
   "Subnet mask sai",
   "Router chặn ICMP Time Exceeded"
  ],
  "answer": 3,
  "explain": "Traceroute dựa vào ICMP Time Exceeded do các router trả về; nếu router hoặc firewall chặn loại ICMP này thì mọi hop hiển thị '* * *'.",
  "source": "user:0 - all in one.docx (set 12, Câu 112)",
  "confidence": "derived"
 },
 {
  "id": "ai-177",
  "chapter": "network",
  "q": "Một server có IP tĩnh, gateway và subnet mask đúng, ping được gateway nhưng không ping được 8.8.8.8. Nguyên nhân khả dĩ nhất là:",
  "options": [
   "Router không có default route ra Internet",
   "DNS lỗi",
   "MTU mismatch",
   "Link cáp hỏng"
  ],
  "answer": 0,
  "explain": "Ping được gateway nhưng không ping được 8.8.8.8 cho thấy gói bị kẹt sau gateway, thường vì router không có default route ra Internet.",
  "source": "user:0 - all in one.docx (set 12, Câu 113)",
  "confidence": "derived"
 },
 {
  "id": "ai-178",
  "chapter": "transport",
  "q": "Khi bắt gói bằng Wireshark thấy gói SYN được gửi đi nhưng không có SYN-ACK trả về. Nguyên nhân khả dĩ nhất là:",
  "options": [
   "Sai subnet mask",
   "Port server bị chặn bởi firewall",
   "NAT lỗi",
   "DNS lỗi"
  ],
  "answer": 1,
  "explain": "Gói SYN gửi đi mà không có SYN-ACK trở về thường do port của server bị firewall chặn (hoặc server không phản hồi); sai subnet mask sẽ làm lỗi từ trước khi gửi.",
  "source": "user:0 - all in one.docx (set 12, Câu 114)",
  "confidence": "derived"
 },
 {
  "id": "ai-179",
  "chapter": "network",
  "q": "Với NAT overload (PAT), nhiều người dùng chia sẻ một IP public. Nếu bảng NAT đầy thì hậu quả là:",
  "options": [
   "Kết nối cũ bị reset",
   "Mạng LAN bị loop",
   "Kết nối mới bị từ chối",
   "Router tự khởi động lại"
  ],
  "answer": 2,
  "explain": "Khi bảng NAT (PAT) đầy, router không còn mục để ánh xạ phiên mới nên các kết nối mới bị từ chối/không thiết lập được; kết nối đang có vẫn hoạt động.",
  "source": "user:0 - all in one.docx (set 12, Câu 119)",
  "confidence": "derived"
 }
]
);