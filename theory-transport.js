window.THEORY = window.THEORY || [];
window.THEORY.push({"chapter":"transport","title":"Chương 3: Tầng vận chuyển","sections":[
{"h":"1. Dịch vụ tầng vận chuyển, multiplexing/demultiplexing","body":[
"Tầng mạng: truyền thông logic giữa <b>các host</b>. Tầng vận chuyển: truyền thông logic giữa <b>các tiến trình</b> (qua socket + số cổng).",
"<b>Multiplexing</b> (bên gửi): gom dữ liệu từ nhiều socket, thêm header vận chuyển. <b>Demultiplexing</b> (bên nhận): dùng header để đưa segment đến đúng socket.",
"<b>UDP</b>: socket xác định bởi <b>cổng đích</b> (chỉ 1 giá trị); các datagram khác IP/cổng nguồn nhưng cùng cổng đích vào cùng một socket.",
"<b>TCP</b>: socket xác định bởi <b>bộ 4</b> (IP nguồn, cổng nguồn, IP đích, cổng đích); server có thể có nhiều socket kết nối cùng cổng 80.",
"Cả TCP và UDP <b>không</b> đảm bảo độ trễ hay băng thông."
],"formula":false},
{"h":"2. UDP","body":[
"Dịch vụ best-effort, 'no frills': segment có thể mất, đến sai thứ tự. <b>Không</b> bắt tay, không giữ trạng thái kết nối, header nhỏ (8 byte), không điều khiển tắc nghẽn.",
"Header UDP gồm 4 trường 16 bit: <code>source port</code>, <code>dest port</code>, <code>length</code> (tính cả header), <code>checksum</code>.",
"Dùng cho: DNS, SNMP, streaming/thoại/video thời gian thực, HTTP/3 (QUIC chạy trên UDP; độ tin cậy được thêm ở tầng ứng dụng).",
"So sánh nhanh: TCP header &ge; 20 byte, UDP header = 8 byte."
],"formula":false},
{"h":"3. Checksum Internet (UDP/TCP)","body":[
"<b>Bên gửi</b>: coi nội dung segment (gồm header và địa chỉ IP) là dãy số 16 bit &rarr; <b>cộng</b> tất cả; nếu có carry ra khỏi bit 16 thì <b>cộng vòng</b> (wraparound) carry đó vào kết quả &rarr; lấy <b>bù một</b> (đảo bit) của tổng &rarr; ghi vào trường checksum.",
"<b>Bên nhận</b>: cộng tất cả các từ <i>kể cả checksum</i>; nếu kết quả là <code>1111111111111111</code> thì không phát hiện lỗi, ngược lại có lỗi.",
"Ví dụ: <code>1011011010101101 + 1100100101110110 = 1 1000000000100011</code> &rarr; cộng vòng: <code>1000000000100100</code> &rarr; bù một: <code>0111111111011011</code>.",
"Chỉ <b>phát hiện</b>, không sửa lỗi; yếu: lật 2 bit ngược chiều ở cùng vị trí của hai từ thì tổng không đổi."
],"formula":true},
{"h":"4. Truyền dữ liệu tin cậy (rdt) và hiệu suất","body":[
"<b>rdt1.0</b>: kênh hoàn toàn tin cậy. <b>rdt2.0</b>: kênh lỗi bit &rarr; checksum + ACK/NAK + truyền lại (stop-and-wait). Lỗi: ACK/NAK có thể hỏng.",
"<b>rdt2.1</b>: thêm <b>số thứ tự</b> (0/1 là đủ cho stop-and-wait) để bỏ gói trùng. <b>rdt2.2</b>: bỏ NAK, dùng ACK kèm số thứ tự; ACK trùng = NAK (TCP làm vậy).",
"<b>rdt3.0</b>: kênh vừa lỗi vừa mất gói &rarr; thêm <b>timer</b>; hết giờ chưa có ACK thì truyền lại.",
"Hiệu suất stop-and-wait: <code>D_trans = L/R</code>; <code>U_sender = (L/R) / (RTT + L/R)</code>. Ví dụ R=1 Gbps, L=8000 bit, RTT=30 ms: U = 0,008/30,008 &asymp; 0,00027.",
"<b>Pipelining</b> với N gói trong cửa sổ: <code>U = N·(L/R) / (RTT + L/R)</code> &rarr; tăng N lần. N để U&asymp;100%: <code>N &asymp; (RTT + L/R) / (L/R)</code>."
],"formula":true},
{"h":"5. Go-Back-N và Selective Repeat","body":[
"<b>GBN</b>: cửa sổ N; <b>ACK tích lũy</b> ACK(n) xác nhận mọi gói đến n; <b>một timer</b> cho gói cũ nhất; timeout(n) &rarr; gửi lại n và <b>mọi</b> gói cao hơn trong cửa sổ. Bên nhận chỉ cần nhớ gói mong đợi; gói sai thứ tự bị bỏ (hoặc đệm) và re-ACK gói đúng thứ tự cuối.",
"<b>SR</b>: ACK <b>riêng từng gói</b>; bên nhận <b>đệm</b> gói sai thứ tự; mỗi gói chưa ACK có <b>timer riêng</b>; chỉ gửi lại gói bị mất.",
"Ràng buộc SR: kích thước cửa sổ &le; <b>một nửa</b> không gian số thứ tự (ví dụ N=4 cần &ge; 8 giá trị = 3 bit). GBN: N &le; 2<sup>k</sup> &minus; 1.",
"Ví dụ: gửi gói 0..4, mất gói 1: timeout &rarr; GBN gửi lại 1,2,3,4 (4 gói); SR chỉ gửi lại gói 1."
],"formula":false},
{"h":"6. TCP: segment, số thứ tự và ACK","body":[
"TCP: point-to-point, full duplex, dòng byte tin cậy có thứ tự (không có ranh giới thông điệp), hướng kết nối, có pipelining, flow control và congestion control.",
"<b>Seq</b> = số thứ tự (trong dòng byte) của <b>byte đầu tiên</b> của dữ liệu trong segment. <b>ACK number</b> = số thứ tự của <b>byte kế tiếp</b> mong nhận (ACK tích lũy).",
"Nhận segment <code>Seq=s</code> mang <code>n</code> byte đúng thứ tự &rarr; <code>ACK = s + n</code>. Segment đến sai thứ tự (có khoảng trống) &rarr; <b>ACK trùng</b> (duplicate ACK) với số byte còn thiếu.",
"Ví dụ: Seq=92 (8 byte) &rarr; ACK=100; Seq=100 (20 byte) &rarr; ACK=120. Telnet: A gửi Seq=42, ACK=79 (1 byte) &rarr; B trả Seq=79, ACK=43.",
"Cờ/trường quan trọng: <code>SYN</code>, <code>FIN</code>, <code>RST</code> (quản lý kết nối), <code>ACK</code> (trường ACK number hợp lệ), <code>rwnd</code> (flow control), <code>C,E</code> (thông báo tắc nghẽn), header length.",
"Delayed ACK: nhận segment đúng thứ tự, không có ACK chờ &rarr; đợi tối đa 500 ms rồi ACK; có khoảng trống &rarr; gửi ngay ACK trùng."
],"formula":true},
{"h":"7. Ước lượng RTT và timeout","body":[
"<code>EstimatedRTT = (1 &minus; &alpha;)·EstimatedRTT + &alpha;·SampleRTT</code>, &alpha; = 0,125 (EWMA).",
"<code>DevRTT = (1 &minus; &beta;)·DevRTT + &beta;·|SampleRTT &minus; EstimatedRTT|</code>, &beta; = 0,25.",
"<code>TimeoutInterval = EstimatedRTT + 4·DevRTT</code>.",
"Ví dụ: Est=80, Sample=120 &rarr; Est = 0,875·80 + 0,125·120 = 85. Est=100, Dev=10, Sample=120 &rarr; Dev = 0,75·10 + 0,25·20 = 12,5 &rarr; Timeout = 100 + 4·12,5 = 150.",
"SampleRTT <b>bỏ qua</b> segment truyền lại. Sau mỗi timeout, TimeoutInterval được <b>nhân đôi</b>. Timeout quá ngắn &rarr; truyền lại thừa; quá dài &rarr; phản ứng chậm."
],"formula":true},
{"h":"8. Truyền tin cậy trong TCP và điều khiển lưu lượng","body":[
"<b>Timeout</b>: chỉ truyền lại segment chưa ACK có Seq nhỏ nhất, khởi động lại timer (khác GBN).",
"<b>Fast retransmit</b>: nhận <b>3 ACK trùng</b> (tức 4 ACK cùng số) &rarr; truyền lại ngay, không chờ timeout. Ví dụ: mất segment Seq=100, các segment 200, 300, 400 sinh 3 ACK trùng ACK=100.",
"<b>Flow control</b>: bên nhận thông báo <code>rwnd = RcvBuffer &minus; (LastByteRcvd &minus; LastByteRead)</code>; bên gửi giữ <code>LastByteSent &minus; LastByteAcked &le; rwnd</code>.",
"Flow control: một bên gửi quá nhanh so với <i>một bên nhận</i>. Congestion control: nhiều bên gửi quá nhanh so với <i>mạng</i>.",
"Tổng hợp: <code>LastByteSent &minus; LastByteAcked &le; min{cwnd, rwnd}</code>."
],"formula":false},
{"h":"9. Quản lý kết nối TCP","body":[
"<b>Bắt tay 3 bước</b>: (1) client &rarr; <code>SYN=1, Seq=x</code>; (2) server &rarr; <code>SYN=1, ACK=1, Seq=y, ACKnum=x+1</code> (SYNACK); (3) client &rarr; <code>ACK=1, ACKnum=y+1</code> (có thể mang dữ liệu, Seq=x+1).",
"SYN và FIN mỗi cái <b>tiêu tốn 1 số thứ tự</b>. Ví dụ x=1000, y=5000: SYNACK = (Seq 5000, ACK 1001); 300 byte dữ liệu đầu tiên của client: Seq=1001, server ACK = 1301.",
"Vì sao không dùng 2 bước: trễ/mất/truyền lại &rarr; kết nối nửa mở (half-open) hoặc nhận dữ liệu trùng.",
"<b>Đóng kết nối</b>: mỗi bên gửi <code>FIN=1</code> và nhận ACK (ACKnum = Seq của FIN + 1); bên chủ động đóng ở trạng thái <b>TIME_WAIT</b> khoảng 2×MSL trước khi CLOSED."
],"formula":false},
{"h":"10. Điều khiển tắc nghẽn của TCP","body":[
"Tắc nghẽn: quá nhiều nguồn gửi quá nhanh &rarr; trễ hàng đợi lớn, mất gói. Chi phí: truyền lại, bản sao thừa, băng thông thượng nguồn lãng phí; thông lượng không vượt dung lượng liên kết.",
"Giới hạn <code>LastByteSent &minus; LastByteAcked &lt; cwnd</code>; tốc độ &asymp; <code>cwnd / RTT</code>.",
"<b>Slow start</b>: cwnd = 1 MSS, gấp đôi mỗi RTT (+1 MSS mỗi ACK) cho đến khi cwnd &ge; ssthresh (hoặc có mất gói). Ví dụ 1&rarr;2&rarr;4&rarr;8&rarr;16&rarr;32: 5 RTT.",
"<b>Congestion avoidance</b> (AI): tăng <b>1 MSS mỗi RTT</b> (mỗi ACK cộng MSS·MSS/cwnd). <b>Multiplicative decrease</b>: chia đôi khi mất gói.",
"<b>Timeout</b> (Tahoe, và Reno): <code>ssthresh = cwnd/2; cwnd = 1 MSS</code> &rarr; slow start. <b>3 ACK trùng</b>: Tahoe đặt cwnd = 1 MSS; <b>Reno</b>: <code>ssthresh = cwnd/2; cwnd = ssthresh + 3</code> &rarr; fast recovery, rồi cwnd = ssthresh khi có ACK mới.",
"Ví dụ cwnd=16, timeout: ssthresh=8, cwnd=1 &rarr; 1,2,4,8,9,10,... Từ cwnd=1 với ssthresh=16, tới cwnd=20 cần 4 + 4 = 8 RTT.",
"Thông lượng trung bình: <code>3/4·W / RTT</code> (W = cửa sổ lúc mất gói). Mathis: <code>1,22·MSS / (RTT·&radic;L)</code>.",
"Công bằng: K kết nối cùng nút cổ chai R &rarr; R/K mỗi kết nối (cùng RTT, ở congestion avoidance). Công bằng tính theo <i>kết nối</i> nên mở nhiều kết nối song song chiếm nhiều băng thông hơn; ứng dụng UDP không bị TCP hạn chế.",
"Khác: CUBIC (mặc định Linux), delay-based (BBR), ECN (router đánh dấu IP, đích đặt bit ECE trong ACK), QUIC (HTTP/3 trên UDP)."
],"formula":true}
]});
