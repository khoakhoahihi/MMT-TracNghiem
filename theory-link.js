window.THEORY = window.THEORY || [];
window.THEORY.push({
 "chapter": "link",
 "title": "Chương 5: Tầng liên kết dữ liệu",
 "sections": [
  {
   "h": "Dịch vụ của tầng liên kết dữ liệu",
   "body": [
    "<b>Nhiệm vụ:</b> chuyển datagram từ một nút sang nút <i>kề</i> vật lý qua một liên kết. PDU của tầng này là <b>frame</b> (header + trailer bọc datagram).",
    "• <b>Đóng khung, truy cập kênh</b>: địa chỉ <b>MAC</b> trong header frame xác định nguồn/đích (khác địa chỉ IP).",
    "• <b>Truyền tin cậy giữa hai nút kề</b>: <i>không bắt buộc</i>, ít dùng trên liên kết ít lỗi (Ethernet), cần cho wireless.",
    "• <b>Điều khiển luồng</b>, <b>phát hiện lỗi</b> (do nhiễu, suy hao), <b>sửa lỗi</b> (FEC: bên nhận tự sửa, không cần gửi lại), half-duplex/full-duplex.",
    "• Cài đặt trong <b>NIC</b> (phần cứng + phần mềm + firmware) ở mọi host."
   ],
   "formula": false
  },
  {
   "h": "Phát hiện và sửa lỗi: parity, 2D parity",
   "body": [
    "<b>Single-bit parity</b>: thêm 1 bit sao cho tổng số bit 1 là chẵn (even) hoặc lẻ (odd). Phát hiện được số <i>lẻ</i> bit lỗi; <b>không</b> phát hiện được lỗi 2 bit (số chẵn bit lỗi). Không sửa được.",
    "<b>2D parity</b>: parity cho từng hàng và từng cột (+ 1 bit parity cho hàng parity). 1 bit lỗi làm đúng <b>1 hàng và 1 cột</b> sai → giao điểm là bit lỗi: <b>phát hiện và sửa được lỗi 1 bit</b>; phát hiện (không sửa) mọi lỗi 2 bit.",
    "Nếu chỉ <i>một cột</i> sai mà không hàng nào sai (hoặc ngược lại) thì lỗi nằm ở chính bit parity của cột (hàng) đó.",
    "<b>CRC</b> mạnh hơn checksum và được cài bằng phần cứng ở tầng liên kết; <b>Internet checksum</b> đơn giản, cài bằng phần mềm ở tầng giao vận."
   ],
   "formula": false
  },
  {
   "h": "Hamming code (cách làm theo đề thi)",
   "body": [
    "<b>Số bit kiểm tra r</b>: nhỏ nhất thỏa <code>2^r ≥ m + r + 1</code> (m = số bit dữ liệu). Đề thi M = 12 vị trí = 8 bit dữ liệu + 4 bit kiểm tra.",
    "<b>1) Đánh số vị trí</b> 1…M từ trái sang phải (như đề). Bit kiểm tra ở các vị trí là lũy thừa của 2: <code>1, 2, 4, 8</code>. Bit dữ liệu điền lần lượt vào các vị trí còn lại: 3, 5, 6, 7, 9, 10, 11, 12.",
    "<b>2) Nhóm phụ trách</b> (bit k bật trong số nhị phân của vị trí): <code>p1: 1,3,5,7,9,11</code> · <code>p2: 2,3,6,7,10,11</code> · <code>p4: 4,5,6,7,12</code> · <code>p8: 8,9,10,11,12</code>.",
    "<b>3) Tính bit kiểm tra</b>: chọn p sao cho nhóm của nó có tổng số bit 1 <b>chẵn</b> (mô hình parity chẵn) hoặc <b>lẻ</b> (parity lẻ).",
    "Ví dụ: dữ liệu 11001010 (chẵn) → p1=0, p2=0, p4=1, p8=0 → từ mã <code>0011 1000 1010</code>.",
    "<b>4) Tìm lỗi ở bên nhận</b>: kiểm tra lại từng nhóm. Nhóm nào sai (chẵn: tổng lẻ; lẻ: tổng chẵn) thì cộng giá trị p của nhóm đó. <b>Vị trí lỗi = tổng các p sai</b>; = 0 nghĩa là không lỗi. Đảo bit ở vị trí đó để sửa.",
    "Ví dụ: nhận 0011 1100 1010 (chẵn): nhóm p2 và p4 sai → vị trí 2 + 4 = <b>6</b>."
   ],
   "formula": true
  },
  {
   "h": "CRC (Cyclic Redundancy Check)",
   "body": [
    "Cho D (m bit dữ liệu) và generator G có <b>r + 1 bit</b>. Cần chọn R dài <b>r bit</b> sao cho &lt;D,R&gt; chia hết cho G (phép mod-2, cộng/trừ = XOR).",
    "<b>1)</b> Nối r bit 0 vào cuối D (nghĩa là D·2^r).",
    "<b>2)</b> Chia D·2^r cho G theo kiểu chia nhị phân dùng <b>XOR</b>: mỗi bước, nếu bit đầu là 1 thì XOR với G, nếu 0 thì dịch tiếp.",
    "<b>3)</b> Phần dư r bit chính là <b>R</b>; bên gửi truyền D theo sau bởi R.",
    "<b>4)</b> Bên nhận chia (D, R) cho G: dư <b>0</b> → không phát hiện lỗi; dư ≠ 0 → có lỗi (frame bị loại).",
    "Ví dụ (slide): D = 101110, G = 1001 (r = 3) → R = <code>011</code>, truyền 101110011.",
    "CRC phát hiện mọi lỗi burst ngắn hơn r + 1 bit; dùng trong Ethernet và 802.11."
   ],
   "formula": true
  },
  {
   "h": "Internet checksum",
   "body": [
    "<b>Bên gửi</b>: chia dữ liệu thành các từ 16 bit → <b>cộng</b> tất cả; nếu tràn quá 16 bit thì <b>cộng bit nhớ vào bit thấp nhất</b> (end-around carry) → lấy <b>bù 1</b> (đảo mọi bit) → đó là checksum.",
    "<b>Bên nhận</b>: cộng mọi từ <i>kể cả</i> checksum (cùng cách quay vòng nhớ). Kết quả toàn bit 1 (<code>0xFFFF</code>) → chưa phát hiện lỗi; khác → có lỗi.",
    "Ví dụ: 0x4A3F + 0xB5D2 = 0x10011 → quay vòng: 0x0011 + 1 = 0x0012 → bù 1: <code>0xFFED</code>.",
    "Checksum yếu hơn CRC; tầng giao vận (phần mềm) dùng checksum, tầng liên kết (phần cứng NIC) dùng CRC."
   ],
   "formula": true
  },
  {
   "h": "Giao thức đa truy cập (multiple access)",
   "body": [
    "Kênh quảng bá dùng chung: hai nút phát cùng lúc → <b>va chạm</b>. Giao thức lý tưởng cho kênh R: 1 nút → R; M nút → R/M mỗi nút; phân tán; đơn giản.",
    "<b>Chia kênh (channel partitioning)</b>: TDMA (mỗi nút 1 slot cố định/vòng), FDMA (mỗi nút 1 dải tần). Không va chạm, công bằng khi tải cao nhưng <i>tải thấp thì kém</i>: nút duy nhất chỉ được R/N, slot/dải tần rảnh bị bỏ phí.",
    "<b>Truy cập ngẫu nhiên (random access)</b>: gửi ngay ở tốc độ R, chấp nhận va chạm rồi phục hồi.",
    "• <b>Slotted ALOHA</b>: slot bằng nhau, nút đồng bộ, chỉ phát ở đầu slot; va chạm → phát lại với xác suất p. Hiệu suất N·p·(1−p)^(N−1), cực đại <b>1/e ≈ 37%</b> (≈ 37% slot trống, 26% va chạm).",
    "• <b>Pure ALOHA</b>: không slot, không đồng bộ; xác suất thành công p(1−p)^(2(N−1)); cực đại <b>1/(2e) ≈ 18%</b>.",
    "• <b>CSMA</b>: nghe trước khi nói (kênh rảnh thì gửi cả khung, bận thì hoãn); vẫn va chạm do <i>độ trễ lan truyền</i>. <b>CSMA/CD</b> (có dây): phát hiện va chạm và hủy truyền; <b>CSMA/CA</b> (802.11): tránh va chạm vì CD khó ở wireless.",
    "<b>Luân phiên (taking turns)</b>: <b>polling</b> (nút chủ hỏi vòng; overhead, độ trễ, chủ là single point of failure), <b>token passing</b> (token vòng quanh; mất token là điểm lỗi)."
   ],
   "formula": false
  },
  {
   "h": "CSMA/CD của Ethernet",
   "body": [
    "<b>Thuật toán</b>: (1) tạo frame; (2) nghe kênh: rảnh → bắt đầu gửi, bận → chờ đến khi rảnh; (3) gửi hết không va chạm → xong; (4) phát hiện va chạm khi đang gửi → <b>hủy, gửi tín hiệu jam</b>; (5) <b>binary exponential backoff</b>.",
    "<b>Backoff</b>: sau lần va chạm thứ m, chọn ngẫu nhiên K ∈ <code>{0, 1, …, 2^m − 1}</code> rồi chờ <code>K × 512 bit time</code> (giáo trình: m tối đa 10), quay lại bước 2. Va chạm càng nhiều, khoảng chờ càng dài.",
    "Ví dụ: lần 1 → K ∈ {0,1}; lần 2 → {0..3}; lần 3 → {0..7}. 100 Mbps: 512 bit time = 5,12 µs; 10 Mbps: 51,2 µs.",
    "<b>Hiệu suất</b> ≈ <code>1 / (1 + 5·t_prop / t_trans)</code> → tiến tới 1 khi t_prop → 0 hoặc t_trans → ∞.",
    "Switch hiện đại + full-duplex: mỗi cổng là một collision domain riêng, thực tế không còn va chạm."
   ],
   "formula": true
  },
  {
   "h": "Địa chỉ MAC và ARP",
   "body": [
    "<b>MAC</b>: 48 bit, thường viết 12 hex (<code>1A-2F-BB-76-09-AD</code>), gắn trong NIC, do IEEE cấp phát, <i>phẳng</i> nên mang đi mạng khác vẫn giữ. Dùng <i>cục bộ</i> để đưa frame giữa hai giao diện cùng mạng con. Broadcast: <code>FF-FF-FF-FF-FF-FF</code>. IP (32 bit) phụ thuộc subnet, dùng để định tuyến.",
    "<b>ARP</b> ánh xạ IP → MAC trong cùng mạng con. Mỗi host/router có <b>bảng ARP</b> dòng &lt;IP; MAC; TTL&gt; (TTL ≈ 20 phút).",
    "<b>Quy trình</b>: A chưa có MAC của B → A gửi <b>ARP query broadcast</b> (MAC đích FF-FF-FF-FF-FF-FF, chứa IP của B) → mọi nút nhận, <b>chỉ B</b> trả <b>ARP reply unicast</b> (chứa MAC của B) → A lưu vào bảng ARP.",
    "<b>Gửi sang mạng con khác</b>: A đặt IP đích = IP của B nhưng <b>MAC đích = MAC của router (gateway)</b> (lấy bằng ARP). Router bỏ frame, tra bảng định tuyến, tạo frame mới ở chặng sau: MAC nguồn = giao diện ra của router, MAC đích = MAC của B. <i>IP nguồn/đích giữ nguyên, MAC đổi theo từng chặng.</i>"
   ],
   "formula": false
  },
  {
   "h": "Ethernet và cấu trúc frame",
   "body": [
    "Công nghệ LAN có dây thống trị; hiện nay dùng <b>switched star</b> (mỗi cổng switch chạy Ethernet riêng, không va chạm). Bus/hub cũ: mọi nút chung một collision domain. MAC protocol: unslotted CSMA/CD + binary backoff.",
    "<b>Ethernet: không kết nối, không tin cậy</b> — không handshake, bên nhận không ACK/NAK; mất dữ liệu chỉ được phục hồi nếu tầng trên (TCP) truyền lại.",
    "<b>Frame</b>: Preamble (8 byte: 7 × 10101010 + 10101011, đồng bộ đồng hồ) | MAC đích (6) | MAC nguồn (6) | Type (2, để demux lên giao thức tầng trên, thường IP) | Data (46–1500) | CRC (4).",
    "<b>MTU = 1500 byte</b>; datagram lớn hơn phải phân mảnh; nhỏ hơn 46 byte được độn thêm. Frame nhỏ nhất (không tính preamble) = 6+6+2+46+4 = <b>64 byte</b>. CRC sai → frame bị bỏ.",
    "NIC chỉ nhận frame nếu MAC đích khớp MAC của mình hoặc là broadcast; ngược lại bỏ."
   ],
   "formula": false
  },
  {
   "h": "Thiết bị mạng và switch tự học",
   "body": [
    "<b>Bảng đối chiếu thiết bị</b> (quy ước đề thi: mỗi cổng switch/bridge/router = 1 collision domain; hub/repeater cộng gộp):<br>• <b>Repeater</b>: tầng 1 (khuếch đại/tái tạo tín hiệu) — KHÔNG chia collision domain, KHÔNG chia broadcast domain.<br>• <b>Hub</b>: tầng 1 (lặp bit ra mọi cổng) — KHÔNG chia collision, KHÔNG chia broadcast.<br>• <b>Bridge</b>: tầng 2 (theo MAC) — chia collision domain (mỗi cổng 1), KHÔNG chia broadcast.<br>• <b>Switch L2</b>: tầng 2 (theo MAC) — chia collision domain (mỗi cổng 1), KHÔNG chia broadcast (trừ khi cấu hình VLAN).<br>• <b>Router</b>: tầng 3 (theo IP) — chia collision domain và <b>chia broadcast domain</b> (mỗi cổng 1 broadcast domain).",
    "<b>Switch</b> là store-and-forward, trong suốt với host, plug-and-play, full-duplex. Bảng switch: &lt;MAC; cổng; TTL&gt;.",
    "<b>Khi nhận frame trên cổng i:</b><br>1) <b>Học</b>: ghi (MAC nguồn → cổng i) vào bảng.<br>2) Tra bảng bằng MAC đích:<br>&nbsp;• có entry, đích ở cổng j ≠ i → chuyển <b>chỉ ra cổng j</b>;<br>&nbsp;• có entry, đích ở chính cổng i → <b>loại bỏ</b> (filter);<br>&nbsp;• không có entry (hoặc broadcast) → <b>flood</b> ra mọi cổng trừ cổng i.",
    "Nhiều switch nối nhau vẫn học theo đúng cách đó. Switch so với router: cả hai store-and-forward; switch lớp 2 (MAC, tự học), router lớp 3 (IP, bảng định tuyến)."
   ],
   "formula": true
  },
  {
   "h": "Collision domain, broadcast domain và VLAN",
   "body": [
    "<b>Collision domain</b>: vùng mà hai nút phát cùng lúc sẽ va chạm. <b>Broadcast domain</b>: vùng mà frame broadcast (ARP, DHCP…) lan tới.",
    "<b>Cách đếm trên sơ đồ</b>:<br>• <b>Collision domain</b> = số đoạn cáp/liên kết sau khi <i>gộp</i> mọi đoạn gắn vào cùng một hub/repeater làm một. Mỗi cổng switch/bridge/router (và liên kết point-to-point tới nó) tách riêng. Ví dụ: 1 hub nối 4 PC + 1 switch cạnh 2 PC → 1 (hub, 4 PC và cáp lên switch) + 2 = <b>3</b>.<br>• <b>Broadcast domain</b> = số vùng sau khi <i>cắt tại các router</i>; switch/bridge/hub/repeater không cắt. Mỗi cổng router thuộc về vùng của mạng nó nối vào; một liên kết router–router trực tiếp tự thành 1 vùng.",
    "Mẹo: vẽ vòng tròn nét đứt quanh mỗi collision domain, vòng nét liền quanh mỗi broadcast domain (như đề thi). Với mạng nối thành chuỗi/cây, số broadcast domain thường bằng số router + 1.",
    "<b>VLAN (port-based)</b>: chia các cổng của một switch vật lý thành nhiều switch ảo; mỗi VLAN là <b>một broadcast domain riêng</b> (cô lập lưu lượng, tăng bảo mật/hiệu năng). Chuyển dữ liệu giữa VLAN phải qua <b>router/thiết bị tầng 3</b>.",
    "<b>Trunk port</b> mang frame của nhiều VLAN giữa các switch; <b>802.1Q</b> thêm tag (TPID 0x8100 + 3 bit ưu tiên + <b>VLAN ID 12 bit</b>) và tính lại CRC. MPLS: chuyển tiếp theo nhãn cố định thay vì longest-prefix matching."
   ],
   "formula": false
  }
 ]
});
