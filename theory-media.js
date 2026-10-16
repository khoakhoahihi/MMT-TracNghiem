window.THEORY = window.THEORY || [];
window.THEORY.push({"chapter":"media","title":"Chương 6: Phương tiện truyền dẫn & mạng không dây","sections":[
{"h":"1. Phân loại phương tiện truyền dẫn","body":[
"<b>Có dẫn hướng (guided)</b>: sóng tín hiệu được dẫn dọc theo vật dẫn rắn — cáp xoắn đôi, cáp đồng trục, cáp quang.",
"<b>Không dẫn hướng (unguided)</b>: sóng lan truyền trong không khí / ngoài không gian — kênh radio mặt đất, kênh radio vệ tinh, Wi-Fi.",
"Mỗi cặp gửi–nhận dọc đường đi của một bit có thể dùng phương tiện khác nhau; chi phí lắp đặt (nhân công) thường lớn hơn chi phí vật liệu cáp."],"formula":false},
{"h":"2. Cáp xoắn đôi (UTP/STP) và cáp đồng trục","body":[
"<b>Cáp xoắn đôi</b>: rẻ nhất, thông dụng nhất. Hai sợi đồng ~1 mm bọc cách điện, <i>xoắn vào nhau để giảm nhiễu điện từ</i> giữa các cặp gần nhau. Một cặp = một liên kết.",
"<b>UTP</b> (Unshielded): không có lớp bọc chống nhiễu, dùng cho LAN. <b>STP</b> (Shielded): có thêm lớp bọc kim loại chống nhiễu, đắt hơn.",
"Giáo trình: UTP loại 5 đạt 1 Gbps trong vòng <b>100 m</b>; LAN dùng cáp xoắn đôi hiện nay từ 10 Mbps đến 1 Gbps (Kurose: tới 10 Gbps; Cat 6a đạt 10 Gbps trong 100 m).",
"<b>Cáp đồng trục</b>: hai dây dẫn đồng <i>đồng tâm</i> (concentric), cách điện và bao bọc đặc biệt; tốc độ cao hơn xoắn đôi; phổ biến trong <b>truyền hình cáp</b> và cable modem; dùng được như phương tiện dùng chung."],"formula":false},
{"h":"3. Cáp quang (fiber optics)","body":[
"Sợi thủy tinh mỏng, mềm truyền <b>xung ánh sáng</b> (mỗi xung = 1 bit); tốc độ hàng chục đến hàng trăm Gbps.",
"<b>Ưu điểm</b>: miễn nhiễm điện từ, suy hao rất thấp trên hàng trăm km, khó nghe trộm → ưu chuộng cho đường dài, xuyên đại dương, mạng xương sống.",
"<b>Nhược điểm</b>: thiết bị quang (bộ phát, bộ thu, bộ chuyển mạch) đắt → ít dùng cho LAN/nhà.",
"<b>Single-mode</b>: lõi rất nhỏ (~9 µm), dùng laser, đi xa hàng chục km. <b>Multi-mode</b>: lõi lớn (50/62,5 µm), dùng LED, đi ngắn (tòa nhà, khuôn viên), rẻ hơn.",
"Chuẩn OC-n: tốc độ = <code>n × 51,8 Mbps</code> (OC-1 … OC-768); ví dụ OC-3 ≈ 155,4 Mbps."],"formula":false},
{"h":"4. Bảng tóm tắt các loại cáp","body":[
"<b>Cat 3</b> — 10 Mbps (10BASE-T), 100 m<br><b>Cat 5</b> — 100 Mbps, 100 m<br><b>Cat 5e</b> — 1 Gbps, 100 m<br><b>Cat 6</b> — 1 Gbps / 10 Gbps (≤ 55 m)<br><b>Cat 6a</b> — 10 Gbps, 100 m",
"<b>Cáp đồng trục</b> — truyền hình cáp, tốc độ cao hơn xoắn đôi, chống nhiễu tốt hơn UTP",
"<b>Cáp quang multi-mode</b> — vài trăm m đến vài km; <b>single-mode</b> — hàng chục km, miễn nhiễu điện từ, đắt nhất",
"Thứ tự chung: <i>chi phí</i> UTP &lt; đồng trục &lt; quang; <i>khoảng cách / tốc độ / chống nhiễu</i> UTP &lt; đồng trục &lt; quang. Mọi đoạn UTP Ethernet tối đa <b>100 m</b>."],"formula":true},
{"h":"5. Đấu cáp UTP: RJ-45, T568A/B, thẳng vs chéo","body":[
"<b>RJ-45</b>: đầu nối 8 chân cho cáp UTP Ethernet (RJ-11 là điện thoại, BNC là đồng trục, SC/ST/LC là cáp quang).",
"<b>T568B</b>: 1 trắng-cam, 2 cam, 3 trắng-xanh lá, 4 xanh dương, 5 trắng-xanh dương, 6 xanh lá, 7 trắng-nâu, 8 nâu. <b>T568A</b>: hoán đổi cặp cam và xanh lá (chân 1 trắng-xanh lá, 2 xanh lá, 3 trắng-cam, 6 cam).",
"<b>Cáp thẳng (straight-through)</b>: hai đầu cùng chuẩn (cùng T568B) → nối thiết bị <i>khác loại</i>: PC–Switch, Router–Switch, PC–Hub, PC–AP.",
"<b>Cáp chéo (crossover)</b>: một đầu T568A, đầu kia T568B (hoán đổi cặp phát chân 1,2 ↔ cặp thu chân 3,6) → nối thiết bị <i>cùng loại</i>: PC–PC, Switch–Switch, Hub–Hub, Router–PC. Thiết bị hiện đại có Auto-MDIX nên dùng cáp nào cũng được.",
"10/100BASE-T dùng 2 cặp (chân 1,2,3,6); 1000BASE-T dùng cả 4 cặp."],"formula":false},
{"h":"6. Đặc tính liên kết không dây & phân loại mạng không dây","body":[
"So với có dây: (1) <b>suy giảm cường độ</b> tín hiệu theo khoảng cách/vật cản; (2) <b>nhiễu</b> từ nguồn cùng băng tần (điện thoại không dây 2,4 GHz, lò vi sóng) và nhiễu điện từ; (3) <b>lan truyền đa đường</b> (multipath). → lỗi bit cao hơn nên 802.11 dùng CRC mạnh + ACK/truyền lại ở tầng liên kết.",
"<b>SNR</b> (dB) càng lớn thì bên nhận càng dễ tách tín hiệu; cùng điều chế, SNR cao → BER giảm; điều chế tốc độ cao (QAM) cần SNR lớn hơn (BPSK chịu nhiễu tốt nhưng chậm). Wi-Fi/4G/WiMAX tự chọn điều chế theo SNR (rate adaptation).",
"<b>Hidden terminal</b>: A và C không nghe nhau nhưng cùng gửi cho B → đụng độ tại B.",
"Bốn loại mạng: <b>single-hop có hạ tầng</b> (Wi-Fi có AP, WiMAX, cellular) · <b>single-hop không hạ tầng</b> (Bluetooth, 802.11 ad hoc) · <b>multi-hop có hạ tầng</b> (mesh, sensor) · <b>multi-hop không hạ tầng</b> (MANET).",
"Kênh radio: cục bộ (vài chục–vài trăm m, WLAN) và khu vực rộng (hàng chục km, mạng tế bào). Vệ tinh địa tĩnh ở độ cao <b>36.000 km</b> (vài trăm Mbps); vệ tinh tầm thấp ở gần Trái Đất hơn."],"formula":false},
{"h":"7. Wi-Fi 802.11: chuẩn và băng tần","body":[
"<b>802.11b</b> — 2,4 GHz — 11 Mbps<br><b>802.11a</b> — 5 GHz — 54 Mbps<br><b>802.11g</b> — 2,4 GHz — 54 Mbps (tương thích b)<br><b>802.11n</b> (Wi-Fi 4) — 2,4 và 5 GHz — đến ~600 Mbps (MIMO)<br><b>802.11ac</b> (Wi-Fi 5) — chỉ 5 GHz — hàng Gbps<br><b>802.11ax</b> (Wi-Fi 6) — 2,4 và 5 GHz — nhiều Gbps",
"Băng 2,4 GHz (2,4–2,485 GHz, không cần cấp phép) dễ nhiễu (lò vi sóng, Bluetooth, điện thoại không dây), tầm xa hơn. Băng 5 GHz (5,1–5,8 GHz) ít nhiễu, tốc độ cao nhưng <b>tầm ngắn hơn</b>, chịu ảnh hưởng đa đường nhiều hơn.",
"Băng 2,4 GHz chia <b>11 kênh</b> chồng lấn một phần; bộ ba kênh không chồng lấn duy nhất: <b>1, 6, 11</b>.",
"Các chuẩn đều dùng <b>CSMA/CA</b>, cùng khuôn dạng khung, tương thích ngược; n/ac/ax dùng MIMO."],"formula":true},
{"h":"8. Kiến trúc 802.11, CSMA/CA, RTS/CTS","body":[
"<b>BSS</b> (Basic Service Set): 1 AP + các wireless host. AP nối switch/router ra Internet. <b>ESS</b>: nhiều BSS nối qua mạng có dây, cùng SSID, cho phép chuyển vùng (roaming, host giữ IP trong cùng subnet).",
"<b>SSID</b>: tên mạng do quản trị gán cho AP. AP gửi <b>beacon</b> đều đặn (chứa SSID + MAC của AP). Dò sóng <i>bị động</i> = nghe beacon; <i>chủ động</i> = host gửi Probe Request, AP trả Probe Response; sau đó Association Request/Response, có thể xác thực qua RADIUS/DIAMETER.",
"<b>CSMA/CA</b>: nghe kênh; rảnh trong DIFS → gửi ngay; bận → đợi hết, chờ DIFS, sinh <b>backoff</b> ngẫu nhiên và giảm dần khi kênh rảnh; backoff = 0 thì gửi. Nhận đúng → chờ <b>SIFS</b> rồi gửi <b>ACK</b>; không có ACK → backoff lại và truyền lại.",
"Khác Ethernet: không phát hiện đụng độ (phần cứng vừa gửi vừa nghe quá đắt, và nút ẩn); đã gửi là gửi hết khung; dùng ACK ở tầng liên kết vì lỗi cao; CA nghĩa là cố tránh, không loại bỏ hoàn toàn đụng độ.",
"<b>RTS/CTS</b>: nút gửi RTS (có thời lượng cần dùng), AP trả CTS cho mọi nút → các nút khác hoãn truyền. Giảm nút ẩn nhưng tốn độ trễ/băng thông nên chỉ dùng cho khung lớn hơn ngưỡng.",
"Khung 802.11 có <b>4 địa chỉ MAC</b> (6 byte), payload tối đa 2312 byte, CRC 4 byte; ba địa chỉ đầu: nhận, gửi, MAC của router."],"formula":false},
{"h":"9. Bluetooth, mạng tế bào (4G/5G) và bảo mật Wi-Fi","body":[
"<b>Bluetooth</b>: WPAN/piconet, tầm vài chục m, công suất thấp, băng 2,4 GHz ISM, nhảy tần (FHSS) trên 79 kênh, khe 625 µs, tối đa 8 thiết bị hoạt động, đến ~3 Mbps; mạng ad hoc (không AP).",
"<b>Mạng tế bào</b> (cellular): trạm gốc (base station) phủ vài chục km; 4G LTE là mạng chuyển gói IP; <b>5G NR</b> dự kiến ~10× tốc độ đỉnh, ~10× giảm trễ, ~100× dung lượng so với 4G, lớp vật lý không tương thích ngược với 4G.",
"<b>Bảo mật Wi-Fi (tăng dần)</b>: <b>WEP</b> (lỗi thời, bẻ được ngay) &lt; <b>WPA</b> (2003, TKIP vá tạm) &lt; <b>WPA2</b> (bắt buộc AES, bắt tay 4 bước) &lt; <b>WPA3</b> (mới nhất, SAE chống đoán mật khẩu offline).",
"<b>MAC filtering</b> và <b>ẩn SSID</b> chỉ là lớp phụ, không an toàn (MAC/SSID gửi rõ, dễ giả mạo). <b>WPS PIN</b> dễ bị brute-force → nên tắt. Doanh nghiệp: WPA2/WPA3-Enterprise (802.1X + RADIUS)."],"formula":true}
]});
