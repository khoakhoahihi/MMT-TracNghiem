window.THEORY = window.THEORY || [];
window.THEORY.push({"chapter":"overview","title":"Chương 1: Tổng quan mạng máy tính","sections":[
{"h":"1. Internet và giao thức","body":[
"<b>Internet</b> = “mạng của các mạng” (các ISP nối với nhau). Góc nhìn <i>nuts and bolts</i>: host (end system), packet switch (router, link-layer switch), liên kết (cáp đồng, cáp quang, vô tuyến). Góc nhìn <i>dịch vụ</i>: hạ tầng cung cấp dịch vụ cho ứng dụng phân tán.",
"<b>Giao thức (protocol)</b> định nghĩa <b>định dạng</b> và <b>thứ tự</b> thông điệp gửi/nhận giữa các thực thể mạng, cùng <b>hành động</b> khi gửi/nhận thông điệp.",
"Chuẩn Internet: <b>RFC</b> (Request for Comments), do <b>IETF</b> (Internet Engineering Task Force) phát triển."
],"formula":false},
{"h":"2. Network edge, access network, physical media","body":[
"<b>Network edge</b>: host (client, server – server thường nằm trong data center). <b>Access network</b>: nối end system với edge router. <b>Network core</b>: mạng lưới router nối nhau.",
"<b>DSL</b>: dùng đường dây điện thoại sẵn có, <b>dành riêng</b> tới central office (DSLAM). <b>Cáp (HFC – hybrid fiber coax)</b>: <b>dùng chung</b> với các hộ lân cận, <b>bất đối xứng</b> (downstream &gt; upstream), dùng FDM chia kênh video/data/điều khiển.",
"Mạng không dây: WLAN (WiFi 802.11, ~100 ft), cellular (4G/5G, hàng chục km). Mạng gia đình thường gộp modem, router, firewall, NAT, WiFi AP trong một hộp.",
"<b>Môi trường có dẫn (guided)</b>: cáp xoắn đôi (Cat 5: 100 Mbps/1 Gbps, Cat 6: 10 Gbps), cáp đồng trục (hai chiều, broadband), <b>cáp quang</b> (xung ánh sáng, tốc độ cao, ít lỗi, miễn nhiễm nhiễu điện từ). <b>Không dẫn (unguided)</b>: sóng vô tuyến (bị phản xạ, vật cản, nhiễu), vệ tinh (~270 ms trễ đầu–cuối)."
],"formula":false},
{"h":"3. Network core: chuyển mạch gói vs chuyển mạch kênh","body":[
"<b>Hai chức năng của network core</b>: <b>forwarding</b> = hành động <i>cục bộ</i> (chuyển gói từ cổng vào sang cổng ra theo forwarding table); <b>routing</b> = hành động <i>toàn cục</i> (thuật toán xác định đường nguồn–đích).",
"<b>Chuyển mạch gói</b>: chia thông điệp thành gói, mỗi gói truyền hết tốc độ liên kết, <b>store-and-forward</b> (router nhận đủ gói rồi mới chuyển tiếp). Chia sẻ tài nguyên, không cần call setup, hợp với dữ liệu <b>bùng phát (bursty)</b>; nhược điểm: tắc nghẽn, trễ hàng đợi, mất gói (tràn bộ đệm) nên cần giao thức tin cậy và điều khiển tắc nghẽn.",
"<b>Chuyển mạch kênh</b>: <b>đặt trước</b> tài nguyên đầu–cuối cho cuộc gọi, không chia sẻ (rảnh vẫn lãng phí), hiệu năng được đảm bảo, cần thiết lập cuộc gọi; dùng trong mạng điện thoại truyền thống. Chia kênh bằng <b>FDM</b> (mỗi cuộc gọi một dải tần hẹp, truyền liên tục) hoặc <b>TDM</b> (mỗi cuộc gọi các khe thời gian định kỳ, truyền ở tốc độ tối đa của cả băng tần trong khe của mình).",
"Ví dụ: liên kết 1 Gbps, mỗi người 100 Mb/s khi active, active 10% thời gian: chuyển mạch kênh phục vụ <b>10</b> người; chuyển mạch gói phục vụ 35 người mà xác suất &gt;10 người active cùng lúc &lt; 0,0004."
],"formula":false},
{"h":"4. Cấu trúc Internet (network of networks)","body":[
"Nối trực tiếp mọi cặp access ISP cần <b>O(N²)</b> kết nối nên không scale; thay bằng ISP trung chuyển (global/tier-1), <b>IXP</b> (điểm trao đổi, nơi các ISP cạnh tranh <b>peering</b>), ISP khu vực.",
"Ở “trung tâm”: ít ISP <b>tier-1</b> lớn (phủ quốc gia/quốc tế). <b>Mạng của content provider</b> (Google, Microsoft, Akamai...) nối data center riêng để đưa nội dung gần người dùng, thường bỏ qua tier-1 và ISP khu vực."
],"formula":false},
{"h":"5. Trễ, mất gói, thông lượng (công thức)","body":[
"<b>d_nodal = d_proc + d_queue + d_trans + d_prop</b>",
"<b>d_trans = L/R</b> (L: độ dài gói, bit; R: tốc độ liên kết, bps). Phụ thuộc L và R, không phụ thuộc khoảng cách. <b>Nhớ đổi byte sang bit (×8)</b>.",
"<b>d_prop = d/s</b> (d: độ dài liên kết, m; s ≈ 2×10^8 m/s). Phụ thuộc khoảng cách, không phụ thuộc L và R. <b>Nhớ đổi km sang m</b>.",
"<b>d_proc</b>: kiểm tra lỗi bit, chọn liên kết ra (thường &lt; ms). <b>d_queue</b>: chờ ở hàng đợi, <b>thay đổi theo từng gói</b>; gói thứ n của loạt n gói đến cùng lúc chờ (n−1)L/R.",
"<b>Store-and-forward</b>: qua N liên kết (N−1 router), bỏ qua d_prop: một gói tốn <b>N·L/R</b>. Thông điệp M bit cắt thành gói L bit (M/L gói): tổng = <b>(M/L + N − 1)·L/R</b>.",
"<b>Cường độ lưu lượng = La/R</b> (a: gói/giây): ≈ 0 trễ hàng đợi nhỏ; → 1 trễ lớn; &gt; 1 hàng đợi tăng vô hạn.",
"<b>Mất gói</b>: gói đến khi bộ đệm đầy bị bỏ; có thể được truyền lại bởi nút trước, bởi nguồn, hoặc không.",
"<b>Throughput</b> (bit/đơn vị thời gian): = min(R_1, ..., R_N) dọc đường đi; <b>bottleneck link</b> là liên kết giới hạn. Với 10 kết nối chia chung liên kết lõi R: <b>min(R_c, R_s, R/10)</b>. Thời gian tải file F bit ≈ F/throughput.",
"<b>Bandwidth</b> (bps) là khả năng tối đa; <b>throughput</b> là tốc độ thực tế đạt được."
],"formula":true},
{"h":"6. Phân tầng: TCP/IP và OSI","body":[
"<b>Vì sao phân tầng</b>: chia hệ thống phức tạp thành mô-đun; đổi cách cài đặt một tầng trong suốt với phần còn lại, dễ bảo trì, nâng cấp.",
"<b>Ngăn xếp Internet (5 tầng)</b>, từ trên xuống: Application, Transport, Network, Link, Physical.",
"<b>OSI (7 tầng)</b>, từ trên xuống: Application (7), Presentation (6), Session (5), Transport (4), Network (3), Data Link (2), Physical (1). Internet stack <b>không có</b> Presentation và Session; dịch vụ của chúng (mã hóa, nén, đồng bộ) nếu cần do <b>ứng dụng</b> tự làm."
],"formula":false},
{"h":"7. Bảng tầng – giao thức – PDU – thiết bị","body":[
"<b>Application</b> (OSI 5-6-7): HTTP, SMTP, IMAP, DNS, FTP – PDU: <b>message</b>.",
"<b>Transport</b> (OSI 4): TCP, UDP – PDU: <b>segment</b> (thêm header H_t) – truyền dữ liệu process-process.",
"<b>Network</b> (OSI 3): IP, giao thức định tuyến – PDU: <b>datagram</b> (thêm H_n) – định tuyến từ nguồn tới đích – thiết bị: <b>router</b> (tầng 1–3).",
"<b>Link</b> (OSI 2): Ethernet, 802.11 (WiFi), PPP – PDU: <b>frame</b> (thêm H_l) – truyền giữa các phần tử lân cận – thiết bị: <b>link-layer switch</b> (tầng 1–2, dùng địa chỉ MAC, không đọc IP).",
"<b>Physical</b> (OSI 1): truyền <b>bit</b> trên đường truyền – thiết bị: hub/repeater (lặp tín hiệu ra mọi cổng).",
"<b>Đóng gói (encapsulation)</b>: gửi xuống ngăn xếp, mỗi tầng thêm header của mình (H_t, rồi H_n, rồi H_l ngoài cùng); bên nhận gỡ dần ngược lại. <b>Host</b> cài đủ 5 tầng; router tầng 1–3; link-layer switch tầng 1–2."
],"formula":true},
{"h":"8. Topo mạng và thiết bị mạng (mức tổng quan)","body":[
"<b>Bus</b>: một cáp trục chung, rẻ, nhưng cáp trục hỏng ảnh hưởng toàn mạng, các máy dùng chung đường truyền.",
"<b>Star</b>: các máy nối vào thiết bị trung tâm (hub/switch); dễ mở rộng, hỏng một máy không ảnh hưởng mạng; điểm yếu: thiết bị trung tâm hỏng thì cả mạng ngừng.",
"<b>Ring</b>: các máy nối vòng, dữ liệu đi theo một chiều qua từng máy. <b>Mesh</b>: nhiều đường dự phòng, tin cậy cao nhưng đắt; full mesh n nút có <b>n(n−1)/2</b> liên kết.",
"<b>Hub</b>: Layer 1, lặp tín hiệu ra mọi cổng. <b>Switch</b>: Layer 2, nối các host trong cùng mạng, chuyển theo địa chỉ MAC. <b>Router</b>: Layer 3, nối các mạng với nhau, chuyển theo địa chỉ IP. <b>Firewall</b>: lọc/ngăn lưu lượng không mong muốn theo quy tắc (chủ yếu tầng Network/Transport). <b>Proxy</b>: đứng giữa client và server, caching, quản lý/lọc truy cập."
],"formula":false},
{"h":"9. An ninh mạng (giới thiệu)","body":[
"Internet ban đầu không thiết kế chú trọng bảo mật (tầm nhìn: người dùng tin cậy nhau, mạng trong suốt) nên giờ phải “chạy theo”; bảo mật liên quan mọi tầng.",
"<b>Malware</b>: <b>virus</b> (lây khi người dùng nhận và chạy đối tượng, ví dụ file đính kèm email), <b>worm</b> (lây khi nhận đối tượng thụ động rồi tự thực thi), <b>spyware</b> (ghi phím gõ, trang đã xem, gửi về nơi thu thập). Máy nhiễm có thể bị đưa vào <b>botnet</b>.",
"<b>DoS/DDoS</b>: làm cạn tài nguyên (server, băng thông) bằng lưu lượng rác, DDoS dùng nhiều máy trong botnet.",
"<b>Packet sniffing</b>: card mạng promiscuous ghi mọi gói đi qua môi trường quảng bá (Ethernet dùng chung, wireless); thụ động nên khó phát hiện; phòng thủ chủ yếu bằng mật mã hóa. Wireshark là một packet sniffer/analyzer.",
"<b>IP spoofing</b>: gửi gói có địa chỉ nguồn giả mạo để giả danh người khác."
],"formula":false}
]});
