window.THEORY = window.THEORY || [];
window.THEORY.push({
 "chapter": "network",
 "title": "Chương 4: Tầng mạng",
 "sections": [
  {
   "h": "1. Router: data plane, control plane, forwarding",
   "body": [
    "<b>Forwarding</b> (data plane): chuyển gói từ cổng vào sang cổng ra thích hợp của <i>một</i> router, bằng phần cứng, cỡ nano giây. <b>Routing</b> (control plane): xác định đường đi của gói từ nguồn tới đích (thuật toán định tuyến), phần mềm, cỡ mili giây.",
    "Hai cách tổ chức control plane: <b>per-router</b> (truyền thống: OSPF, BGP chạy trong từng router) và <b>SDN</b> (controller từ xa tính bảng và cài vào switch).",
    "Router gồm: cổng vào (line termination, link layer, tra bảng + chuyển tiếp) → <b>switching fabric</b> (bộ nhớ, bus, mạng liên kết/crossbar) → cổng ra (bộ đệm + scheduling). Hàng đợi có thể xảy ra ở cổng vào (<b>HOL blocking</b>) và cổng ra (tràn bộ đệm thì mất gói).",
    "<b>Longest prefix matching</b>: nhiều entry cùng khớp thì chọn entry có prefix dài nhất (thường dùng TCAM). Ví dụ <code>10.0.0.0/8</code>, <code>10.1.0.0/16</code>, <code>0.0.0.0/0</code>: đích 10.1.3.9 → /16.",
    "Mô hình dịch vụ của Internet là <b>best effort</b>: không đảm bảo giao nhận, thứ tự, thời gian, băng thông.",
    "Scheduling ở cổng ra: FCFS, priority, round robin, <b>weighted fair queueing</b> (WFQ, đảm bảo băng thông tối thiểu theo lớp)."
   ],
   "formula": false
  },
  {
   "h": "2. Địa chỉ IPv4, CIDR và cách tính nhanh",
   "body": [
    "IPv4 = 32 bit gắn với <b>interface</b> (không phải với host). Dạng a.b.c.d/x: <b>x = số bit phần mạng</b> (CIDR, độ dài tùy ý). Phần còn lại 32 − x là phần host.",
    "<b>Subnet</b>: nhóm interface liên lạc được với nhau mà không qua router; cùng các bit mạng cao. Mạng 200.23.16.0/20 có thể chia thành 8 mạng /23 (200.23.16.0, .18.0, ... .30.0).",
    "<b>Cách tính nhanh</b> (xét octet có giá trị mask khác 0/255):<br>1) Block size = 256 − giá trị mask ở octet đó (hoặc 2^(số bit host trong octet)).<br>2) Địa chỉ mạng = bội của block size lớn nhất ≤ giá trị octet của host.<br>3) Broadcast = địa chỉ mạng kế tiếp − 1 (các bit host đều bằng 1).<br>4) Dải host = (mạng + 1) … (broadcast − 1).",
    "Ví dụ: <code>192.168.10.77/26</code>: block 64 → mạng 192.168.10.64, broadcast 192.168.10.127, host .65–.126 (62 host).",
    "<b>Hai IP cùng subnet</b> ⇔ (IP₁ AND mask) = (IP₂ AND mask). <b>Mượn k bit</b> từ phần host: được 2^k mạng con, prefix tăng thêm k.",
    "<b>Route aggregation</b>: gộp các prefix liên tiếp, căn biên (ví dụ 172.16.16.0/24 … 172.16.19.0/24 → <code>172.16.16.0/22</code>). Hai /24 liên tiếp chỉ gộp được thành /23 nếu octet thứ 3 của mạng đầu là số chẵn."
   ],
   "formula": false
  },
  {
   "h": "3. Bảng tra nhanh subnet mask (/8 → /30)",
   "body": [
    "Quy tắc: số host khả dụng = <b>2^h − 2</b> (h = số bit host = 32 − prefix; trừ địa chỉ mạng và broadcast). Giá trị octet của mask: 128, 192, 224, 240, 248, 252, 254, 255 ứng với 1,2,3,4,5,6,7,8 bit mạng trong octet.",
    "<code>/8</code> — 255.0.0.0 — 24 bit host — <b>16.777.214</b> host — block 256 (cả octet)",
    "<code>/9</code> — 255.128.0.0 — 23 bit host — <b>8.388.606</b> host — block 128 ở octet thứ 2",
    "<code>/10</code> — 255.192.0.0 — 22 bit host — <b>4.194.302</b> host — block 64 ở octet thứ 2",
    "<code>/11</code> — 255.224.0.0 — 21 bit host — <b>2.097.150</b> host — block 32 ở octet thứ 2",
    "<code>/12</code> — 255.240.0.0 — 20 bit host — <b>1.048.574</b> host — block 16 ở octet thứ 2",
    "<code>/13</code> — 255.248.0.0 — 19 bit host — <b>524.286</b> host — block 8 ở octet thứ 2",
    "<code>/14</code> — 255.252.0.0 — 18 bit host — <b>262.142</b> host — block 4 ở octet thứ 2",
    "<code>/15</code> — 255.254.0.0 — 17 bit host — <b>131.070</b> host — block 2 ở octet thứ 2",
    "<code>/16</code> — 255.255.0.0 — 16 bit host — <b>65.534</b> host — block 256 (cả octet)",
    "<code>/17</code> — 255.255.128.0 — 15 bit host — <b>32.766</b> host — block 128 ở octet thứ 3",
    "<code>/18</code> — 255.255.192.0 — 14 bit host — <b>16.382</b> host — block 64 ở octet thứ 3",
    "<code>/19</code> — 255.255.224.0 — 13 bit host — <b>8.190</b> host — block 32 ở octet thứ 3",
    "<code>/20</code> — 255.255.240.0 — 12 bit host — <b>4.094</b> host — block 16 ở octet thứ 3",
    "<code>/21</code> — 255.255.248.0 — 11 bit host — <b>2.046</b> host — block 8 ở octet thứ 3",
    "<code>/22</code> — 255.255.252.0 — 10 bit host — <b>1.022</b> host — block 4 ở octet thứ 3",
    "<code>/23</code> — 255.255.254.0 — 9 bit host — <b>510</b> host — block 2 ở octet thứ 3",
    "<code>/24</code> — 255.255.255.0 — 8 bit host — <b>254</b> host — block 256 (cả octet)",
    "<code>/25</code> — 255.255.255.128 — 7 bit host — <b>126</b> host — block 128 ở octet thứ 4",
    "<code>/26</code> — 255.255.255.192 — 6 bit host — <b>62</b> host — block 64 ở octet thứ 4",
    "<code>/27</code> — 255.255.255.224 — 5 bit host — <b>30</b> host — block 32 ở octet thứ 4",
    "<code>/28</code> — 255.255.255.240 — 4 bit host — <b>14</b> host — block 16 ở octet thứ 4",
    "<code>/29</code> — 255.255.255.248 — 3 bit host — <b>6</b> host — block 8 ở octet thứ 4",
    "<code>/30</code> — 255.255.255.252 — 2 bit host — <b>2</b> host — block 4 ở octet thứ 4",
    "Chọn mask cho N host: tìm h nhỏ nhất sao cho 2^h − 2 ≥ N rồi prefix = 32 − h (50 host → h=6 → /26; 1000 host → h=10 → /22)."
   ],
   "formula": true
  },
  {
   "h": "4. Địa chỉ private và địa chỉ đặc biệt",
   "body": [
    "<b>Private (RFC 1918)</b>, không định tuyến trên Internet, dùng sau NAT:<br><code>10.0.0.0/8</code> (10.0.0.0 – 10.255.255.255)<br><code>172.16.0.0/12</code> (172.16.0.0 – <b>172.31.255.255</b>; 172.32.x là public)<br><code>192.168.0.0/16</code> (192.168.0.0 – 192.168.255.255)",
    "<b>Loopback</b>: <code>127.0.0.0/8</code> (thường dùng 127.0.0.1). <b>Link-local/APIPA</b>: <code>169.254.0.0/16</code> (tự gán khi không có DHCP). <b>Multicast</b>: <code>224.0.0.0/4</code> (224.0.0.0 – 239.255.255.255). <b>Broadcast giới hạn</b>: <code>255.255.255.255</code> (mọi máy trong subnet, router thường không chuyển tiếp). <code>0.0.0.0</code>: 'chưa biết/mọi địa chỉ'; <code>0.0.0.0/0</code> = default route.",
    "Trong một mạng: <b>địa chỉ đầu</b> (host bits = 0) là địa chỉ mạng, <b>địa chỉ cuối</b> (host bits = 1) là broadcast — hai địa chỉ này không gán cho host.",
    "IPv6: loopback <code>::1</code>, link-local <code>fe80::/10</code>, multicast <code>ff00::/8</code>."
   ],
   "formula": true
  },
  {
   "h": "5. Lớp địa chỉ A / B / C / D / E (classful)",
   "body": [
    "<b>Lớp A</b>: octet đầu 1 – 126, mask mặc định <code>255.0.0.0</code> (/8), bit đầu 0.<br><b>Lớp B</b>: 128 – 191, mask <code>255.255.0.0</code> (/16), bit đầu 10.<br><b>Lớp C</b>: 192 – 223, mask <code>255.255.255.0</code> (/24), bit đầu 110.<br><b>Lớp D</b>: 224 – 239 (multicast), bit đầu 1110.<br><b>Lớp E</b>: 240 – 255 (dự trữ). <code>127.x.x.x</code> là loopback.",
    "Trước CIDR, phần mạng chỉ có độ dài 8, 16 hoặc 24 bit. Lớp C chỉ có 254 host (quá nhỏ), lớp B có 65.534 host (quá lớn) → lãng phí địa chỉ, nên CIDR ra đời.",
    "Ví dụ: 10.x → A; 172.20.x → B; 192.168.x → C; 224.0.0.5 → D (multicast)."
   ],
   "formula": true
  },
  {
   "h": "6. Các bước làm VLSM",
   "body": [
    "Cho một khối (ví dụ 192.168.10.0/24) và yêu cầu số host của từng mạng (ví dụ 100, 50, 20, 2):",
    "<b>Bước 1.</b> Sắp xếp yêu cầu từ <b>lớn đến nhỏ</b>.<br><b>Bước 2.</b> Với mỗi mạng, tìm h nhỏ nhất sao cho 2^h − 2 ≥ số host; prefix = 32 − h; kích thước khối = 2^h.<br><b>Bước 3.</b> Cấp khối lớn nhất ở địa chỉ thấp nhất của khối cha; khối tiếp theo bắt đầu ngay sau broadcast của khối trước (địa chỉ mạng luôn là bội của kích thước khối).<br><b>Bước 4.</b> Mạng nối điểm–điểm giữa 2 router dùng <code>/30</code> (2 host).<br><b>Bước 5.</b> Kiểm tra tổng kích thước các khối ≤ kích thước khối cha, nếu vượt thì không đủ chỗ.",
    "Ví dụ: 100 → /25 (192.168.10.0–.127); 50 → /26 (192.168.10.128–.191); 20 → /27 (192.168.10.192–.223); 2 → /30 (192.168.10.224–.227). Tổng 128 + 64 + 32 + 4 = 228 ≤ 256.",
    "Lưu ý: tính tổng theo <b>kích thước khối</b> (128, 64, 32, 4), không cộng thẳng số host (172)."
   ],
   "formula": true
  },
  {
   "h": "7. Datagram IPv4, phân mảnh và ICMP",
   "body": [
    "Header IPv4 tối thiểu 20 byte: version, header length, type of service, total length (16 bit, tối đa 65.535 byte), identifier + flags + fragment offset (phân mảnh), <b>TTL</b>, upper-layer protocol, <b>header checksum</b> (tính lại ở mỗi router vì TTL đổi), source/destination IP, options. TCP + IP tối thiểu = 40 byte overhead.",
    "<b>Phân mảnh</b>: liên kết có MTU nhỏ hơn datagram thì datagram bị chia; <b>chỉ tập hợp lại ở máy đích</b>. Mỗi mảnh: cùng identifier; <b>offset = (số byte dữ liệu đứng trước)/8</b>; cờ MF = 1 trừ mảnh cuối (MF = 0). Dữ liệu mỗi mảnh ≤ MTU − 20 và là bội của 8.",
    "Ví dụ: 4000 byte, MTU 1500: dữ liệu 3980 → 1480 + 1480 + 1020 → length 1500, 1500, 1040; offset 0, 185, 370 (2960/8).",
    "<b>ICMP</b> (nằm 'trên' IP, mang trong datagram IP): báo lỗi (unreachable...) và echo. Type/code: 0/0 echo reply, 8/0 echo request (ping), 3/x dest unreachable (3/3 port unreachable), <b>11/0 TTL expired</b>. <b>Traceroute</b>: gửi UDP với TTL = 1, 2, ...; router thứ n trả ICMP 11/0; đích trả ICMP 3/3 thì dừng."
   ],
   "formula": false
  },
  {
   "h": "8. NAT và IPv6",
   "body": [
    "<b>NAT</b>: mạng nội bộ dùng địa chỉ private, mọi gói ra ngoài có cùng IP public nhưng khác số cổng. Gói đi ra: thay (IP nguồn, cổng) bằng (IP NAT, cổng mới) và <b>lưu vào bảng NAT</b>; gói về: tra bảng đổi lại (IP NAT, cổng mới) → (IP nội bộ, cổng). Ví dụ slide: 10.0.0.1:3345 ↔ 138.76.29.7:5001.",
    "Ưu: chỉ cần 1 IP public, đổi ISP/địa chỉ nội bộ không ảnh hưởng, thiết bị bên trong không bị truy cập trực tiếp. Nhược: bị cho là vi phạm end-to-end (sửa số cổng ở tầng mạng), khó cho máy ngoài kết nối vào máy sau NAT (NAT traversal).",
    "<b>IPv6</b>: địa chỉ <b>128 bit</b> (8 nhóm hex 16 bit), header cố định <b>40 byte</b>; so với IPv4 <b>bỏ</b> checksum, <b>bỏ</b> phân mảnh/tập hợp tại router, <b>bỏ</b> options trong header chính. Có flow label, hop limit (thay TTL).",
    "Rút gọn: bỏ số 0 đầu nhóm, thay <b>một</b> dãy nhóm 0 liên tiếp bằng '::' (chỉ một lần): 2001:0db8:0000:0000:0000:0000:0000:0001 → <code>2001:db8::1</code>.",
    "<b>Tunneling</b> (chuyển đổi IPv4 → IPv6): datagram IPv6 được đóng gói làm payload của datagram IPv4 giữa hai router IPv6/v4 ('packet within a packet'); không cần 'flag day'."
   ],
   "formula": false
  },
  {
   "h": "9. Định tuyến link-state: thuật toán Dijkstra",
   "body": [
    "<b>Link-state (LS)</b>: mọi router biết toàn bộ topo và chi phí (nhờ link-state broadcast); tính đường ngắn nhất từ một nguồn tới mọi nút bằng Dijkstra. Ký hiệu: <code>c(x,y)</code> chi phí liên kết, <code>D(v)</code> chi phí hiện tại nhỏ nhất từ nguồn tới v, <code>p(v)</code> nút đứng trước v, <code>N'</code> tập nút đã biết đường ngắn nhất.",
    "<b>Khởi tạo</b>: N' = {u}; với mọi v: D(v) = c(u,v) nếu v kề u, ngược lại ∞.<br><b>Lặp</b> đến khi N' chứa mọi nút:<br>1) Chọn w ∉ N' có D(w) <b>nhỏ nhất</b>, thêm w vào N'.<br>2) Với mọi v kề w và v ∉ N': <code>D(v) = min( D(v), D(w) + c(w,v) )</code> (ghi lại p(v) nếu giảm).<br><b>Kết quả</b>: truy vết p(·) để có cây đường ngắn nhất → bảng chuyển tiếp (next hop = nút đầu tiên trên đường đi).",
    "Ví dụ slide (u,v,w,x,y,z): u–v 2, u–x 1, u–w 5, v–x 2, v–w 3, x–w 3, x–y 1, w–y 1, w–z 5, y–z 2. Thứ tự thêm: u, x, y, v, w, z. Kết quả: D(v)=2, D(x)=1, D(y)=2, D(w)=3, D(z)=4; mọi đích (trừ v) đi qua x.",
    "Độ phức tạp cơ bản O(n²); message O(n²). Có thể dao động tuyến nếu chi phí phụ thuộc lưu lượng. Mỗi router chỉ tự tính bảng của mình."
   ],
   "formula": true
  },
  {
   "h": "10. Định tuyến distance vector: Bellman-Ford",
   "body": [
    "<b>Phương trình Bellman-Ford</b>: <code>D_x(y) = min_v { c(x,v) + D_v(y) }</code>, lấy min trên mọi <b>láng giềng v</b> của x. Láng giềng đạt min là <b>next hop</b>.",
    "Ví dụ slide: D_v(z) = 5, D_x(z) = 3, D_w(z) = 3, c(u,v) = 2, c(u,x) = 1, c(u,w) = 5 ⇒ D_u(z) = min{2+5, 1+3, 5+3} = <b>4</b>, next hop = x.",
    "<b>Thuật toán</b>: mỗi node định kỳ gửi vector D của mình cho láng giềng; khi nhận vector mới thì tính lại D_x(y) ← min_v {c(x,v) + D_v(y)} với mọi y; nếu vector của mình đổi thì báo láng giềng. Bất đồng bộ, phân tán, tự dừng.",
    "<b>Ví dụ x,y,z</b>: c(x,y)=2, c(x,z)=7, c(y,z)=1 ⇒ D_x(z) = min{2+1, 7+0} = 3.",
    "Tin tốt lan nhanh; <b>tin xấu lan chậm (count-to-infinity)</b>: khi chi phí x–y tăng 4 → 60, y chọn đường qua z (1+5 = 6) rồi hai bên tăng dần. DV có thể gây vòng lặp; router quảng bá sai chi phí thấp gây black-holing.",
    "So sánh: LS = toàn cục, O(n²), có thể dao động; DV = phân tán, chỉ trao đổi với láng giềng, thời gian hội tụ thay đổi, có thể lặp/count-to-infinity."
   ],
   "formula": true
  },
  {
   "h": "11. RIP, OSPF, BGP và SDN",
   "body": [
    "<b>AS (autonomous system)</b>: nhóm router cùng quản trị. <b>Intra-AS</b> (nội miền): RIP, EIGRP, OSPF (IS-IS giống OSPF); <b>Inter-AS</b>: <b>BGP</b>. Inter-AS ưu tiên <b>chính sách</b> (policy), intra-AS ưu tiên hiệu năng; phân cấp giúp mở rộng quy mô.",
    "<b>RIP</b>: distance vector cổ điển, metric là số hop, gửi DV mỗi <b>30 giây</b>, tối đa <b>15 hop</b> (16 = vô cùng).",
    "<b>OSPF</b>: link-state, mỗi router flood LSA tới cả AS (trực tiếp trên IP, không qua TCP/UDP), dùng Dijkstra, có xác thực; phân cấp 2 mức (area + backbone), area border router tóm tắt tuyến.",
    "<b>BGP</b>: 'path vector'; peer trao đổi thông điệp qua <b>TCP</b> (OPEN, UPDATE, KEEPALIVE, NOTIFICATION). eBGP học tuyến từ AS láng giềng; iBGP truyền trong AS. Tuyến = prefix + thuộc tính (<b>AS-PATH</b>, <b>NEXT-HOP</b>). Chọn tuyến theo thứ tự: <b>local preference</b> → AS-PATH ngắn nhất → NEXT-HOP gần nhất (<b>hot potato</b>: chọn gateway có chi phí nội miền thấp nhất) → tiêu chí khác.",
    "<b>SDN</b>: control plane tách khỏi data plane, controller từ xa (logic tập trung) tính và cài flow table. Switch dùng <b>generalized forwarding</b> 'match + action' (OpenFlow). Mỗi flow entry: match (header fields link/network/transport) + action (forward, drop, modify, gửi controller) + priority + counters. OpenFlow là <b>southbound API</b>, chạy trên TCP; thông điệp: controller→switch (features, configure, modify-state, packet-out), switch→controller (packet-in, flow-removed, port status).",
    "match+action thống nhất thiết bị: router (prefix IP đích → forward), switch (MAC đích → forward/flood), firewall (IP + cổng → permit/drop), NAT (IP + cổng → rewrite)."
   ],
   "formula": false
  }
 ]
});
