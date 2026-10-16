window.QUESTIONS.push(...
[
{
"id": "nw-001",
"chapter": "network",
"q": "Địa chỉ mạng (network address) của máy 192.168.10.77/26 là gì?",
"options": [
"192.168.10.0",
"192.168.10.76",
"192.168.10.64",
"192.168.10.128"
],
"answer": 2,
"explain": "/26 có block size 64 (255.255.255.192): 77 nằm trong khối 64–127 nên địa chỉ mạng là 192.168.10.64 và broadcast là 192.168.10.127.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-002",
"chapter": "network",
"q": "Địa chỉ broadcast của mạng chứa máy 172.16.45.200/20 là gì?",
"options": [
"172.16.45.255",
"172.16.255.255",
"172.16.47.255",
"172.16.47.254"
],
"answer": 2,
"explain": "/20 có block size 16 ở octet thứ 3: 45 nằm trong khối 32–47 nên mạng là 172.16.32.0 và broadcast là 172.16.47.255.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-003",
"chapter": "network",
"q": "Subnet mask 255.255.255.224 cho bao nhiêu địa chỉ host khả dụng trong mỗi mạng con?",
"options": [
"30",
"32",
"28",
"62"
],
"answer": 0,
"explain": "255.255.255.224 là /27, còn 5 bit host nên 2^5 − 2 = 30 địa chỉ (trừ địa chỉ mạng và broadcast).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-004",
"chapter": "network",
"q": "Mạng cần 1000 host. Subnet mask nào là phù hợp nhất (đủ địa chỉ và tiết kiệm nhất)?",
"options": [
"255.255.254.0 (/23)",
"255.255.255.0 (/24)",
"255.255.248.0 (/21)",
"255.255.252.0 (/22)"
],
"answer": 3,
"explain": "Cần 2^h − 2 ≥ 1000 nên h = 10 bit host, prefix = 32 − 10 = /22 (1022 host). /23 chỉ có 510 host; /21 đủ nhưng lãng phí (2046 host).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-005",
"chapter": "network",
"q": "Mạng con cần phục vụ 50 host. Subnet mask nào dưới đây là phù hợp nhất (tiết kiệm nhất)?",
"options": [
"255.255.255.224",
"255.255.255.128",
"255.255.255.240",
"255.255.255.192"
],
"answer": 3,
"explain": "2^6 − 2 = 62 ≥ 50 nên cần 6 bit host, tức /26 = 255.255.255.192; /27 chỉ có 30 host, /25 có 126 host (lãng phí).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-006",
"chapter": "network",
"q": "Máy có địa chỉ 192.168.5.200 với subnet mask 255.255.255.192. Địa chỉ host đầu tiên (first usable) của mạng con này là gì?",
"options": [
"192.168.5.192",
"192.168.5.1",
"192.168.5.193",
"192.168.5.201"
],
"answer": 2,
"explain": "Block size 64: 200 nằm trong khối 192–255, mạng là 192.168.5.192, nên host đầu tiên là 192.168.5.193.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-007",
"chapter": "network",
"q": "Địa chỉ host cuối cùng (last usable) trong mạng chứa 192.168.5.100/28 là gì?",
"options": [
"192.168.5.110",
"192.168.5.111",
"192.168.5.126",
"192.168.5.255"
],
"answer": 0,
"explain": "/28 có block size 16: 100 thuộc khối 96–111 nên mạng 192.168.5.96, broadcast .111, host cuối là 192.168.5.110.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-008",
"chapter": "network",
"q": "Với subnet mask 255.255.255.224, cặp địa chỉ nào dưới đây nằm trong CÙNG một mạng con?",
"options": [
"192.168.1.30 và 192.168.1.33",
"192.168.1.31 và 192.168.1.32",
"192.168.1.62 và 192.168.1.64",
"192.168.1.40 và 192.168.1.60"
],
"answer": 3,
"explain": "/27 có block size 32: 40 và 60 cùng thuộc khối 32–63. Các cặp còn lại nằm ở hai khối khác nhau (0–31|32–63, 0–31|32–63, 32–63|64–95).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-009",
"chapter": "network",
"q": "Mượn 3 bit từ phần host của mạng 192.168.1.0/24 để chia mạng con. Kết quả là bao nhiêu mạng con và bao nhiêu host khả dụng mỗi mạng con?",
"options": [
"6 mạng con, 30 host mỗi mạng",
"8 mạng con, 30 host mỗi mạng",
"8 mạng con, 32 host mỗi mạng",
"8 mạng con, 62 host mỗi mạng"
],
"answer": 1,
"explain": "Mượn 3 bit thì có 2^3 = 8 mạng con, prefix mới là /27 nên còn 5 bit host: 2^5 − 2 = 30 host mỗi mạng.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-010",
"chapter": "network",
"q": "Chia mạng 172.16.0.0/16 thành các mạng con bằng nhau, dùng số bit mượn ÍT NHẤT mà vẫn có ít nhất 100 mạng con. Prefix mới là gì?",
"options": [
"/22",
"/24",
"/23",
"/20"
],
"answer": 2,
"explain": "2^6 = 64 < 100 nhưng 2^7 = 128 ≥ 100 nên mượn 7 bit: 16 + 7 = /23 (mỗi mạng 2^9 − 2 = 510 host).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-011",
"chapter": "network",
"q": "Chia mạng 192.168.1.0/24 thành các mạng con /27. Mạng con thứ ba (đếm từ mạng con thứ nhất 192.168.1.0/27) có địa chỉ mạng là gì?",
"options": [
"192.168.1.96/27",
"192.168.1.32/27",
"192.168.1.64/27",
"192.168.1.128/27"
],
"answer": 2,
"explain": "Block size /27 là 32: các mạng con lần lượt là .0, .32, .64, .96, … nên mạng con thứ ba là 192.168.1.64/27.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-012",
"chapter": "network",
"q": "Với subnet mask 255.255.255.192, địa chỉ nào dưới đây là một địa chỉ mạng (network address) hợp lệ?",
"options": [
"192.168.1.100",
"192.168.1.130",
"192.168.1.255",
"192.168.1.192"
],
"answer": 3,
"explain": "Địa chỉ mạng phải là bội của block size 64 ở octet cuối: 192 = 3×64 hợp lệ; 100 và 130 không chia hết cho 64, còn 255 là broadcast của mạng .192/26.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-013",
"chapter": "network",
"q": "Với prefix /28, địa chỉ nào dưới đây là một địa chỉ broadcast hợp lệ của một mạng con?",
"options": [
"10.1.1.48",
"10.1.1.47",
"10.1.1.40",
"10.1.1.32"
],
"answer": 1,
"explain": "Block size 16: broadcast có dạng 16k − 1; 47 = 3×16 − 1 là broadcast của mạng 10.1.1.32/28. 32 và 48 là địa chỉ mạng, 40 là host.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-014",
"chapter": "network",
"q": "Trong mạng 192.168.1.64/26, địa chỉ nào dưới đây có thể gán cho một máy (host) hợp lệ?",
"options": [
"192.168.1.63",
"192.168.1.64",
"192.168.1.100",
"192.168.1.127"
],
"answer": 2,
"explain": "Mạng 192.168.1.64/26 có dải 64–127: .64 là địa chỉ mạng, .127 là broadcast, .63 thuộc mạng khác; chỉ .100 là host hợp lệ.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-015",
"chapter": "network",
"q": "Máy 192.168.1.130/26 cần một default gateway (router) nằm cùng mạng con. Địa chỉ nào dưới đây dùng được cho cổng của router?",
"options": [
"192.168.1.127",
"192.168.1.191",
"192.168.1.129",
"192.168.1.193"
],
"answer": 2,
"explain": "Mạng của máy là 192.168.1.128/26 (host .129–.190, broadcast .191). Chỉ .129 là host hợp lệ; .127 và .193 thuộc mạng khác, .191 là broadcast.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-016",
"chapter": "network",
"q": "Cho khối địa chỉ 200.23.16.0/23 (ví dụ trong slide về CIDR). Địa chỉ broadcast của mạng này là gì?",
"options": [
"200.23.17.255",
"200.23.16.255",
"200.23.18.0",
"200.23.17.254"
],
"answer": 0,
"explain": "/23 gồm 2 mạng /24 liên tiếp: 200.23.16.0–200.23.17.255, nên broadcast là 200.23.17.255 (không phải .16.255).",
"source": "slide:Chapter_4_v8.0.pdf p.50",
"confidence": "verified"
},
{
"id": "nw-017",
"chapter": "network",
"q": "Theo ví dụ trong slide, ISP có khối 200.23.16.0/20 và cấp cho 8 tổ chức, mỗi tổ chức một khối /23 liên tiếp (Organization 0 nhận 200.23.16.0/23). Organization 3 nhận khối nào?",
"options": [
"200.23.19.0/23",
"200.23.22.0/23",
"200.23.24.0/23",
"200.23.22.0/22"
],
"answer": 1,
"explain": "Mỗi /23 chiếm 2 giá trị ở octet thứ 3 nên Org 0 = .16, Org 1 = .18, Org 2 = .20, Org 3 = .22 → 200.23.22.0/23 (Org 7 = 200.23.30.0/23 như slide).",
"source": "slide:Chapter_4_v8.0.pdf p.58",
"confidence": "verified"
},
{
"id": "nw-018",
"chapter": "network",
"q": "Router cần gộp (tổng hợp tuyến) bốn mạng 172.16.16.0/24, 172.16.17.0/24, 172.16.18.0/24 và 172.16.19.0/24 thành một prefix duy nhất chứa đúng bốn mạng đó. Prefix đó là gì?",
"options": [
"172.16.16.0/22",
"172.16.16.0/23",
"172.16.16.0/21",
"172.16.0.0/20"
],
"answer": 0,
"explain": "4 mạng /24 liên tiếp (16–19) bắt đầu ở bội của 4 nên gộp được thành /22 (24 − 2). /23 chỉ chứa 2 mạng, /21 và /20 chứa nhiều hơn 4 mạng.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-019",
"chapter": "network",
"q": "Hai mạng 192.168.1.0/24 và 192.168.2.0/24 có thể gộp thành MỘT prefix chứa đúng hai mạng này không?",
"options": [
"Có, gộp thành 192.168.1.0/23 vì hai mạng /24 liên tiếp luôn gộp được",
"Có, gộp thành 192.168.0.0/23 vì cả 192.168.1.x và 192.168.2.x đều thuộc khối này",
"Có, gộp thành 192.168.0.0/22 và khối này không chứa thêm mạng nào khác ngoài hai mạng đó",
"Không, vì hai mạng nằm ở hai khối /23 căn biên khác nhau (192.168.0.0/23 và 192.168.2.0/23)"
],
"answer": 3,
"explain": "Khối /23 phải bắt đầu ở bội của 2 ở octet thứ 3 (…0.0, …2.0). Hai mạng này nằm ở hai khối /23 khác nhau; /22 (192.168.0.0/22) sẽ chứa thêm 192.168.0.0/24 và 192.168.3.0/24.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-020",
"chapter": "network",
"q": "Một mạng /24 được chia thành các mạng /30 để nối điểm–điểm giữa các router. Có bao nhiêu mạng /30?",
"options": [
"64",
"62",
"128",
"32"
],
"answer": 0,
"explain": "Mỗi /30 có 4 địa chỉ (2^2), mà /24 có 256 địa chỉ nên 256 / 4 = 64 mạng /30 (mỗi mạng có 2 host khả dụng).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-021",
"chapter": "network",
"q": "Địa chỉ mạng của máy 192.168.100.200/21 là gì?",
"options": [
"192.168.100.0",
"192.168.104.0",
"192.168.96.0",
"192.168.64.0"
],
"answer": 2,
"explain": "/21 có block size 8 ở octet thứ 3: 100 nằm trong khối 96–103 nên mạng là 192.168.96.0 (broadcast 192.168.103.255).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-022",
"chapter": "network",
"q": "Địa chỉ mạng của máy 130.50.15.6/20 là gì?",
"options": [
"130.50.15.0",
"130.50.0.0",
"130.50.8.0",
"130.50.16.0"
],
"answer": 1,
"explain": "/20 có block size 16 ở octet thứ 3: 15 thuộc khối 0–15 nên địa chỉ mạng là 130.50.0.0 (broadcast 130.50.15.255).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-023",
"chapter": "network",
"q": "Subnet mask 255.255.248.0 tương ứng với prefix nào?",
"options": [
"/20",
"/22",
"/21",
"/19"
],
"answer": 2,
"explain": "255.255 = 16 bit; 248 = 11111000 = 5 bit → 16 + 5 = /21.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-024",
"chapter": "network",
"q": "Máy 10.1.200.5 có subnet mask 255.255.192.0. Địa chỉ mạng của nó là gì?",
"options": [
"10.1.200.0",
"10.1.128.0",
"10.1.0.0",
"10.1.192.0"
],
"answer": 3,
"explain": "Thực hiện AND với mask: octet thứ 3 là 200 AND 192 = 192 (11001000 & 11000000), các octet sau bằng 0 → 10.1.192.0.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-025",
"chapter": "network",
"q": "VLSM: cho mạng 192.168.10.0/24, cần 3 mạng con cho 100 host, 50 host và 20 host. Cấp phát liên tiếp từ khối lớn đến nhỏ (bắt đầu từ 192.168.10.0). Mạng con 50 host có địa chỉ mạng là gì?",
"options": [
"192.168.10.64/26",
"192.168.10.128/25",
"192.168.10.192/26",
"192.168.10.128/26"
],
"answer": 3,
"explain": "100 host cần /25 (126 host) chiếm .0–.127; mạng 50 host cần /26 (62 host) bắt đầu ngay sau đó: 192.168.10.128/26 (.128–.191).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-026",
"chapter": "network",
"q": "Tiếp tục bài VLSM trên (192.168.10.0/24, các mạng 100, 50, 20 host cấp liên tiếp từ khối lớn đến nhỏ, không để trống). Mạng con 20 host có địa chỉ mạng là gì?",
"options": [
"192.168.10.192/26",
"192.168.10.192/27",
"192.168.10.160/27",
"192.168.10.224/27"
],
"answer": 1,
"explain": "20 host cần /27 (30 host, block 32). Hai khối trước chiếm .0–.191 nên khối kế tiếp bắt đầu ở 192.168.10.192/27 (.192–.223).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-027",
"chapter": "network",
"q": "VLSM: cần các mạng con lần lượt cho 60, 28, 10 và 2 host. Prefix nhỏ nhất đủ dùng cho từng mạng (theo thứ tự trên) là?",
"options": [
"/26, /27, /27, /30",
"/26, /27, /28, /30",
"/25, /27, /28, /30",
"/26, /28, /28, /30"
],
"answer": 1,
"explain": "60 host → 6 bit host (62) → /26; 28 host → 5 bit (30) → /27; 10 host → 4 bit (14) → /28; 2 host → 2 bit (2) → /30.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-028",
"chapter": "network",
"q": "Có thể chia mạng 192.168.1.0/24 thành 3 mạng con cho 100 host, 100 host và 60 host (VLSM) không?",
"options": [
"Có, dùng ba mạng con /25, /25 và /26 nối tiếp nhau trong cùng mạng /24",
"Không, vì cần 128 + 128 + 64 = 320 địa chỉ, vượt quá 256 của /24",
"Có, vì tổng số host cần là 260, xấp xỉ 256 nên làm tròn xuống được",
"Có, vì VLSM cho phép các mạng con vượt quá kích thước của mạng /24 ban đầu"
],
"answer": 1,
"explain": "100 host cần /25 (128 địa chỉ), 60 host cần /26 (64 địa chỉ): 128 + 128 + 64 = 320 > 256 nên không thể nằm trong một /24.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-029",
"chapter": "network",
"q": "VLSM: cần mạng con cho 100, 50, 20 và 2 host (mỗi mạng dùng khối nhỏ nhất đủ dùng, tính cả địa chỉ mạng và broadcast). Tổng số địa chỉ tối thiểu phải dành ra là bao nhiêu?",
"options": [
"228 địa chỉ",
"172 địa chỉ",
"256 địa chỉ",
"224 địa chỉ"
],
"answer": 0,
"explain": "Khối: 100 → 128, 50 → 64, 20 → 32, 2 → 4. Tổng = 128 + 64 + 32 + 4 = 228 (không phải 100+50+20+2 = 172).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-030",
"chapter": "network",
"q": "Bảng chuyển tiếp của router: 200.23.16.0/21 → cổng 0; 200.23.24.0/24 → cổng 1; 200.23.24.0/21 → cổng 2; còn lại → cổng 3. Gói tin có địa chỉ đích 200.23.24.170 được chuyển ra cổng nào?",
"options": [
"Cổng 0",
"Cổng 2",
"Cổng 3",
"Cổng 1"
],
"answer": 3,
"explain": "200.23.24.170 khớp cả 200.23.24.0/24 (24 bit) và 200.23.24.0/21 (21 bit); theo longest prefix match chọn entry dài nhất nên ra cổng 1.",
"source": "slide:Chapter_4_v8.0.pdf p.18",
"confidence": "verified"
},
{
"id": "nw-031",
"chapter": "network",
"q": "Bảng chuyển tiếp của router: 200.23.16.0/21 → cổng 0; 200.23.24.0/24 → cổng 1; 200.23.24.0/21 → cổng 2; còn lại → cổng 3. Gói tin có địa chỉ đích 200.23.30.5 được chuyển ra cổng nào?",
"options": [
"Cổng 0",
"Cổng 1",
"Cổng 2",
"Cổng 3"
],
"answer": 2,
"explain": "200.23.30.5 nằm trong 200.23.24.0/21 (dải 24–31) nhưng không thuộc 200.23.24.0/24 và không thuộc 200.23.16.0/21 (16–23) nên chỉ khớp entry cổng 2.",
"source": "slide:Chapter_4_v8.0.pdf p.18",
"confidence": "verified"
},
{
"id": "nw-032",
"chapter": "network",
"q": "Bảng định tuyến: 0.0.0.0/0 → R1; 10.0.0.0/8 → R2; 10.1.0.0/16 → R3; 10.1.2.0/24 → R4. Gói tin đến địa chỉ 10.1.3.9 sẽ được chuyển cho router nào?",
"options": [
"R1",
"R2",
"R4",
"R3"
],
"answer": 3,
"explain": "10.1.3.9 khớp 0.0.0.0/0, 10.0.0.0/8 và 10.1.0.0/16 nhưng không khớp 10.1.2.0/24. Trong các entry khớp, /16 dài nhất nên chọn R3.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-033",
"chapter": "network",
"q": "Bảng định tuyến: 192.168.0.0/16 → A; 192.168.1.0/24 → B; 192.168.1.128/25 → C; 0.0.0.0/0 → D. Gói tin đến 192.168.1.100 được chuyển tới đâu?",
"options": [
"A",
"C",
"D",
"B"
],
"answer": 3,
"explain": "192.168.1.128/25 chỉ phủ .128–.255 nên không chứa .100. Entry dài nhất còn khớp là 192.168.1.0/24 → B.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-034",
"chapter": "network",
"q": "Hai entry trong bảng chuyển tiếp cùng khớp địa chỉ đích của một gói tin. Router sẽ chọn entry nào?",
"options": [
"Entry có prefix ngắn nhất",
"Entry xuất hiện đầu tiên trong bảng",
"Entry có prefix khớp dài nhất (longest prefix match)",
"Entry có địa chỉ mạng nhỏ nhất"
],
"answer": 2,
"explain": "Quy tắc chuyển tiếp theo đích: dùng prefix địa chỉ dài nhất khớp với địa chỉ đích (thường thực hiện bằng TCAM).",
"source": "slide:Chapter_4_v8.0.pdf p.18",
"confidence": "verified"
},
{
"id": "nw-035",
"chapter": "network",
"q": "Tổ chức 1 (200.23.18.0/23) chuyển từ Fly-By-Night-ISP (quảng bá 200.23.16.0/20) sang ISPs-R-Us, và ISPs-R-Us quảng bá thêm 200.23.18.0/23. Vì sao gói tin tới tổ chức 1 vẫn đi đúng vào ISPs-R-Us?",
"options": [
"Vì ISPs-R-Us có băng thông lớn hơn Fly-By-Night-ISP nên luôn được ưu tiên",
"Vì /23 là prefix ngắn hơn nên được router ưu tiên hơn /20",
"Vì router luôn chọn tuyến được quảng bá sau cùng cho cùng một đích",
"Vì /23 dài hơn /20 nên longest prefix match chọn tuyến cụ thể hơn"
],
"answer": 3,
"explain": "Internet vẫn thấy 200.23.16.0/20 qua ISP cũ, nhưng 200.23.18.0/23 (more specific) khớp dài hơn nên gói tới tổ chức 1 được chuyển qua ISP mới.",
"source": "slide:Chapter_4_v8.0.pdf p.60",
"confidence": "verified"
},
{
"id": "nw-036",
"chapter": "network",
"q": "Một datagram IP dài 4000 byte (header 20 byte) đi qua liên kết có MTU = 1500 byte. Mảnh thứ 3 (cuối) có giá trị fragment offset và tổng độ dài (length) là bao nhiêu?",
"options": [
"offset = 2960, length = 1040",
"offset = 370, length = 1040",
"offset = 370, length = 1020",
"offset = 360, length = 1040"
],
"answer": 1,
"explain": "Dữ liệu 3980 byte, mỗi mảnh tối đa 1480 byte dữ liệu: 1480 + 1480 + 1020. Offset mảnh 3 = 2960/8 = 370; length = 1020 + 20 = 1040 (đúng như slide: 0, 185, 370).",
"source": "slide:Chapter_4_v8.0.pdf p.101",
"confidence": "verified"
},
{
"id": "nw-037",
"chapter": "network",
"q": "Một datagram IP dài 5000 byte (header 20 byte, không có options) cần truyền qua liên kết có MTU = 1500 byte. Datagram sẽ bị chia thành bao nhiêu mảnh?",
"options": [
"3",
"5",
"2",
"4"
],
"answer": 3,
"explain": "Dữ liệu 4980 byte, mỗi mảnh chứa tối đa 1480 byte: 1480 + 1480 + 1480 + 540 → 4 mảnh (mảnh cuối dài 560 byte kể cả header, offset 555).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-038",
"chapter": "network",
"q": "Một datagram IP dài 3000 byte (header 20 byte) đi qua liên kết có MTU = 1000 byte. Giá trị fragment offset của mảnh cuối cùng là bao nhiêu?",
"options": [
"2928",
"375",
"366",
"245"
],
"answer": 2,
"explain": "Dữ liệu 2980 byte; dữ liệu mỗi mảnh phải là bội của 8 và ≤ 980 nên là 976 byte. Mảnh cuối bắt đầu ở byte 3×976 = 2928 → offset = 2928/8 = 366 (length 72).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-039",
"chapter": "network",
"q": "Chọn phát biểu ĐÚNG về phân mảnh (fragmentation) IPv4.",
"options": [
"Router kế tiếp trên đường đi sẽ tập hợp lại các mảnh trước khi chuyển tiếp",
"Các mảnh chỉ được tập hợp lại tại máy đích; offset đo bằng đơn vị 8 byte",
"Trường fragment offset được tính theo đơn vị byte, không phải đơn vị 8 byte",
"Cờ MF (more fragments) của mảnh cuối cùng bằng 1 để báo hết datagram"
],
"answer": 1,
"explain": "Datagram bị chia nhỏ trong mạng và chỉ tập hợp tại đích, nhận diện bằng identifier; offset = (byte)/8 và mảnh cuối có cờ MF = 0.",
"source": "slide:Chapter_4_v8.0.pdf p.100",
"confidence": "verified"
},
{
"id": "nw-040",
"chapter": "network",
"q": "NAT router (địa chỉ public 203.0.113.5) có bảng dịch: (203.0.113.5, 5002) ↔ (192.168.1.20, 4000). Một datagram từ Internet đến với đích 203.0.113.5:5002. NAT sẽ làm gì?",
"options": [
"Chuyển tiếp nguyên vẹn vào mạng nội bộ với đích 203.0.113.5:5002",
"Đổi đích thành 192.168.1.20:4000 rồi chuyển vào mạng nội bộ",
"Đổi đích thành 192.168.1.20:5002",
"Loại bỏ gói tin vì địa chỉ private không được nhận gói từ ngoài"
],
"answer": 1,
"explain": "Với datagram đến, NAT thay (NAT IP, port mới) ở trường đích bằng cặp (IP, port) tương ứng lưu trong bảng NAT: 192.168.1.20:4000.",
"source": "slide:Chapter_4_v8.0.pdf p.66",
"confidence": "verified"
},
{
"id": "nw-041",
"chapter": "network",
"q": "Máy 192.168.1.10 (cổng nguồn 51000) gửi gói tới 93.184.216.34:443 qua NAT router có địa chỉ public 203.0.113.5. NAT chọn cổng mới 6001. Gói tin ra Internet có (địa chỉ nguồn, cổng nguồn) là gì?",
"options": [
"192.168.1.10:6001",
"203.0.113.5:6001",
"203.0.113.5:51000",
"93.184.216.34:6001"
],
"answer": 1,
"explain": "NAT thay (IP nguồn, cổng nguồn) của gói đi ra thành (IP NAT, cổng mới) = 203.0.113.5:6001 và lưu cặp này vào bảng; địa chỉ đích không đổi.",
"source": "slide:Chapter_4_v8.0.pdf p.66",
"confidence": "verified"
},
{
"id": "nw-042",
"chapter": "network",
"q": "Địa chỉ nào sau đây là địa chỉ private (không định tuyến trên Internet công cộng)?",
"options": [
"172.32.0.1",
"192.169.1.1",
"172.31.255.254",
"11.0.0.1"
],
"answer": 2,
"explain": "Dải private là 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255) và 192.168.0.0/16. 172.31.255.254 nằm trong /12; 172.32.x và 192.169.x nằm ngoài.",
"source": "slide:Chapter_4_v8.0.pdf p.65",
"confidence": "verified"
},
{
"id": "nw-043",
"chapter": "network",
"q": "Chọn phát biểu ĐÚNG về NAT (theo slide).",
"options": [
"NAT làm tăng tổng số địa chỉ IPv4 public có trên Internet",
"Máy bên ngoài có thể chủ động kết nối vào server private sau NAT mà không cần cấu hình thêm",
"NAT vi phạm nguyên tắc end-to-end vì thiết bị tầng mạng sửa số hiệu cổng",
"NAT chỉ hoạt động được với UDP và không dùng được với TCP"
],
"answer": 2,
"explain": "Slide nêu NAT gây tranh cãi: router chỉ nên xử lý đến tầng 3, vi phạm end-to-end (sửa port), có vấn đề NAT traversal; nhưng vẫn dùng rộng rãi (nhà, 4G/5G).",
"source": "slide:Chapter_4_v8.0.pdf p.68",
"confidence": "verified"
},
{
"id": "nw-044",
"chapter": "network",
"q": "Mạng gồm các router u, v, w, x, y, z với chi phí liên kết: u–v = 2, u–x = 1, u–w = 5, v–x = 2, v–w = 3, x–w = 3, x–y = 1, w–y = 1, w–z = 5, y–z = 2. Dùng thuật toán Dijkstra từ u, chi phí đường đi ngắn nhất từ u đến z là bao nhiêu?",
"options": [
"5",
"6",
"7",
"4"
],
"answer": 3,
"explain": "Đường ngắn nhất là u → x → y → z = 1 + 1 + 2 = 4. Các đường khác lớn hơn: u–x–w–z = 9, u–v–w–z = 10, u–w–z = 10.",
"source": "slide:Chapter_5_v8.0.pdf p.14",
"confidence": "verified"
},
{
"id": "nw-045",
"chapter": "network",
"q": "Mạng gồm các router u, v, w, x, y, z với chi phí liên kết: u–v = 2, u–x = 1, u–w = 5, v–x = 2, v–w = 3, x–w = 3, x–y = 1, w–y = 1, w–z = 5, y–z = 2. Trong bảng chuyển tiếp của u, để đến đích w thì u gửi gói qua liên kết nào?",
"options": [
"(u, v)",
"(u, x)",
"(u, w)",
"(u, y)"
],
"answer": 1,
"explain": "Đường ngắn nhất tới w là u → x → y → w = 1 + 1 + 1 = 3 (< 5 của liên kết trực tiếp u–w) nên next hop là x, tức liên kết (u, x). Lưu ý u không có liên kết trực tiếp tới y.",
"source": "slide:Chapter_5_v8.0.pdf p.15",
"confidence": "verified"
},
{
"id": "nw-046",
"chapter": "network",
"q": "Mạng gồm các router u, v, w, x, y, z với chi phí liên kết: u–v = 2, u–x = 1, u–w = 5, v–x = 2, v–w = 3, x–w = 3, x–y = 1, w–y = 1, w–z = 5, y–z = 2. Dijkstra từ u: sau khi thêm x vào N' (N' = {u, x}) và cập nhật các láng giềng của x, giá trị D(w) và D(y) là?",
"options": [
"D(w) = 5 (qua u), D(y) = 2 (qua x)",
"D(w) = 4 (qua x), D(y) = 2 (qua x)",
"D(w) = 4 (qua x), D(y) = ∞",
"D(w) = 3 (qua y), D(y) = 2 (qua x)"
],
"answer": 1,
"explain": "D(w) = min(5, D(x) + c(x,w)) = min(5, 1 + 3) = 4; D(y) = D(x) + c(x,y) = 1 + 1 = 2. Chỉ sau khi thêm y vào N' thì D(w) mới giảm xuống 3.",
"source": "slide:Chapter_5_v8.0.pdf p.14",
"confidence": "verified"
},
{
"id": "nw-047",
"chapter": "network",
"q": "Mạng gồm các nút A–F với chi phí: A–B = 4, A–C = 2, B–C = 1, B–D = 5, C–D = 8, C–E = 10, D–E = 2, D–F = 6, E–F = 3. Chi phí đường đi ngắn nhất từ A đến F là bao nhiêu?",
"options": [
"13",
"15",
"16",
"14"
],
"answer": 0,
"explain": "Đường tốt nhất là A → C → B → D → E → F = 2 + 1 + 5 + 2 + 3 = 13. Các đường ít chặng hơn đắt hơn: A–C–E–F = 15, A–C–D–F = 16, A–B–D–F = 15.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-048",
"chapter": "network",
"q": "Bellman-Ford tại nút u: c(u,v) = 2, c(u,x) = 1, c(u,w) = 5; các láng giềng báo Dv(z) = 6, Dx(z) = 4, Dw(z) = 1. Giá trị Du(z) và next hop là?",
"options": [
"Du(z) = 5, next hop = x",
"Du(z) = 6, next hop = w",
"Du(z) = 8, next hop = v",
"Du(z) = 4, next hop = x"
],
"answer": 0,
"explain": "Du(z) = min{2 + 6, 1 + 4, 5 + 1} = min{8, 5, 6} = 5, đạt được qua láng giềng x nên next hop là x (ví dụ tương tự slide).",
"source": "slide:Chapter_5_v8.0.pdf p.21",
"confidence": "verified"
},
{
"id": "nw-049",
"chapter": "network",
"q": "Phương pháp distance vector: x có c(x,y) = 2, c(x,z) = 7; y báo Dy(z) = 1 và z báo Dz(z) = 0. Dx(z) mới bằng bao nhiêu?",
"options": [
"3",
"7",
"2",
"1"
],
"answer": 0,
"explain": "Dx(z) = min{c(x,y) + Dy(z), c(x,z) + Dz(z)} = min{2 + 1, 7 + 0} = 3 (đi qua y), đúng như ví dụ trong slide.",
"source": "slide:Chapter_5_v8.0.pdf p.106",
"confidence": "verified"
},
{
"id": "nw-050",
"chapter": "network",
"q": "Distance vector: c(x,y) = 3, c(x,z) = 8, y báo Dy(z) = 2 và z báo Dz(z) = 0. Dx(z) mới bằng bao nhiêu?",
"options": [
"8",
"3",
"2",
"5"
],
"answer": 3,
"explain": "Dx(z) = min{3 + 2, 8 + 0} = min{5, 8} = 5 (next hop là y).",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-051",
"chapter": "network",
"q": "Count-to-infinity: x–y có chi phí 4 → 60, y–z = 1, z–x = 50, và z báo Dz(x) = 5 (đường z→y→x). Ngay sau khi y phát hiện chi phí y–x tăng lên 60, y tính Dy(x) mới bằng bao nhiêu?",
"options": [
"6",
"60",
"5",
"51"
],
"answer": 0,
"explain": "y tính Dy(x) = min{c(y,x) + 0, c(y,z) + Dz(x)} = min{60, 1 + 5} = 6 (đi qua z), nhưng đường của z lại đi qua y nên vòng lặp cứ tăng dần: 'bad news travels slow'.",
"source": "slide:Chapter_5_v8.0.pdf p.39",
"confidence": "verified"
},
{
"id": "nw-052",
"chapter": "network",
"q": "Giao thức RIP (Routing Information Protocol) gửi bản tin distance vector định kỳ sau khoảng bao lâu?",
"options": [
"5 giây",
"30 giây",
"10 giây",
"180 giây"
],
"answer": 1,
"explain": "Slide mô tả RIP là DV cổ điển, các DV được trao đổi mỗi 30 giây.",
"source": "slide:Chapter_5_v8.0.pdf p.46",
"confidence": "verified"
},
{
"id": "nw-053",
"chapter": "network",
"q": "RIP dùng số bước nhảy (hop count) làm metric. Giá trị hop count tối đa hợp lệ của một tuyến trong RIP là bao nhiêu?",
"options": [
"16 (hop count = 17 mới nghĩa là không tới được)",
"30 (bằng chu kỳ cập nhật 30 giây)",
"15 (hop count = 16 nghĩa là không tới được)",
"255 (như trường TTL của IP)"
],
"answer": 2,
"explain": "RIP giới hạn đường kính mạng: tối đa 15 hop, hop count = 16 biểu diễn 'infinity' để chặn vòng lặp count-to-infinity.",
"source": "RFC 2453 (kiến thức chuẩn, không có trong slide)",
"confidence": "derived"
},
{
"id": "nw-054",
"chapter": "network",
"q": "Chọn phát biểu ĐÚNG khi so sánh thuật toán link-state (LS) và distance vector (DV).",
"options": [
"DV: một router quảng bá sai đường chi phí thấp có thể gây black-holing, lỗi lan qua các router khác",
"DV cần mỗi router biết toàn bộ topo mạng, còn LS chỉ cần biết chi phí tới láng giềng",
"LS có thể bị count-to-infinity còn DV thì không bao giờ bị vòng lặp",
"Cả hai thuật toán đều hội tụ đúng sau n vòng lặp trên mọi loại mạng"
],
"answer": 0,
"explain": "LS: toàn bộ topo (global), Dijkstra, có thể dao động; DV: phân tán, chỉ trao đổi với láng giềng, có thể gây vòng lặp/count-to-infinity và lỗi lan truyền.",
"source": "slide:Chapter_5_v8.0.pdf p.40",
"confidence": "verified"
},
{
"id": "nw-055",
"chapter": "network",
"q": "Chọn phát biểu ĐÚNG về OSPF.",
"options": [
"OSPF là giao thức distance vector dùng thuật toán Bellman-Ford để tính đường",
"OSPF là link-state: router flood LSA trong AS (trực tiếp trên IP) và dùng Dijkstra",
"OSPF là giao thức liên miền (inter-AS) chạy trên kết nối TCP giữa các peer",
"OSPF chỉ quảng bá thông tin tới láng giềng trực tiếp và không flood trong AS"
],
"answer": 1,
"explain": "Slide: OSPF 'classic link-state', LSA được flood tới mọi router trong AS, trực tiếp trên IP; mỗi router có toàn bộ topo và chạy Dijkstra; có cấu trúc 2 mức area/backbone.",
"source": "slide:Chapter_5_v8.0.pdf p.47",
"confidence": "verified"
},
{
"id": "nw-056",
"chapter": "network",
"q": "OSPF phân cấp hai mức gồm những thành phần nào?",
"options": [
"Các AS và các ISP; boundary router của mỗi AS chạy BGP để tóm tắt tuyến",
"Các area cục bộ và backbone; area border router tóm tắt khoảng cách của area",
"Các subnet và các VLAN; switch tầng 2 ở mỗi mức tóm tắt tuyến",
"Mạng nội bộ và mạng ngoài; NAT router ở biên tóm tắt tuyến"
],
"answer": 1,
"explain": "Link-state advertisement chỉ được flood trong một area hoặc backbone; mỗi node biết chi tiết topo area của mình và chỉ biết hướng tới đích ở area khác.",
"source": "slide:Chapter_5_v8.0.pdf p.48",
"confidence": "verified"
},
{
"id": "nw-057",
"chapter": "network",
"q": "Bộ giao thức định tuyến nào dưới đây gồm TOÀN giao thức dùng trong định tuyến nội miền (intra-AS)?",
"options": [
"RIP, EIGRP, OSPF",
"RIP, OSPF, BGP",
"BGP, EIGRP, OSPF",
"RIP, BGP, EIGRP"
],
"answer": 0,
"explain": "Slide liệt kê các giao thức intra-AS phổ biến: RIP, EIGRP, OSPF (và IS-IS); BGP là giao thức inter-AS de facto.",
"source": "slide:Chapter_5_v8.0.pdf p.46",
"confidence": "verified"
},
{
"id": "nw-058",
"chapter": "network",
"q": "BGP là giao thức định tuyến liên miền (inter-AS). Hai router BGP (peer) trao đổi các thông điệp BGP qua giao thức vận chuyển nào?",
"options": [
"UDP",
"Trực tiếp trên IP (không qua tầng giao vận)",
"ICMP",
"TCP (kết nối bán cố định)"
],
"answer": 3,
"explain": "Slide: BGP session là 2 router peer trao đổi thông điệp BGP qua kết nối TCP bán thường trực; BGP là giao thức 'path vector'. (OSPF mới chạy trực tiếp trên IP.)",
"source": "slide:Chapter_5_v8.0.pdf p.52",
"confidence": "verified"
},
{
"id": "nw-059",
"chapter": "network",
"q": "Khi một router BGP biết nhiều tuyến tới cùng một đích, tiêu chí ĐẦU TIÊN dùng để chọn tuyến là gì?",
"options": [
"AS-PATH ngắn nhất",
"Router NEXT-HOP gần nhất (hot potato)",
"RTT thấp nhất đo được",
"Giá trị local preference (quyết định theo chính sách)"
],
"answer": 3,
"explain": "Thứ tự chọn: (1) local preference – chính sách, (2) AS-PATH ngắn nhất, (3) NEXT-HOP gần nhất (hot potato), (4) các tiêu chí bổ sung.",
"source": "slide:Chapter_5_v8.0.pdf p.63",
"confidence": "verified"
},
{
"id": "nw-060",
"chapter": "network",
"q": "Trong 'hot potato routing' của BGP, router chọn gateway nào để ra khỏi AS?",
"options": [
"Gateway dẫn tới AS-PATH ngắn nhất tới đích",
"Gateway có băng thông ra ngoài lớn nhất trong AS",
"Gateway ở xa nhất để cân bằng tải trong AS",
"Gateway có chi phí nội miền thấp nhất, bất kể chi phí liên miền sau đó"
],
"answer": 3,
"explain": "Hot potato: đẩy gói ra khỏi AS càng sớm càng tốt – chọn gateway có chi phí OSPF/nội miền nhỏ nhất, không quan tâm chi phí liên miền (ví dụ 2d chọn 2a dù qua nhiều AS hơn).",
"source": "slide:Chapter_5_v8.0.pdf p.60",
"confidence": "verified"
},
{
"id": "nw-061",
"chapter": "network",
"q": "Trong định tuyến liên AS bằng BGP, yếu tố nào được ưu tiên hơn cả hiệu năng?",
"options": [
"Số hop ngắn nhất",
"Độ trễ thấp nhất",
"Chi phí OSPF nhỏ nhất",
"Chính sách (policy) của quản trị viên mỗi AS"
],
"answer": 3,
"explain": "Slide so sánh: intra-AS có một quản trị viên nên tập trung hiệu năng; inter-AS thì policy chi phối hiệu năng (cùng với yêu cầu về quy mô).",
"source": "slide:Chapter_5_v8.0.pdf p.59",
"confidence": "verified"
},
{
"id": "nw-062",
"chapter": "network",
"q": "Trong BGP, thuộc tính AS-PATH của một tuyến cho biết điều gì?",
"options": [
"Danh sách các AS mà bản quảng bá prefix đó đã đi qua",
"Danh sách router nội bộ phải đi qua để tới đích",
"Tổng chi phí OSPF tới đích",
"Địa chỉ IP của router kế tiếp trong AS"
],
"answer": 0,
"explain": "Tuyến BGP gồm prefix + thuộc tính; AS-PATH là danh sách các AS mà quảng bá đã qua (dùng để chống vòng lặp, chọn đường), NEXT-HOP chỉ router kế tiếp.",
"source": "slide:Chapter_5_v8.0.pdf p.53",
"confidence": "verified"
},
{
"id": "nw-063",
"chapter": "network",
"q": "Trong BGP, eBGP và iBGP khác nhau như thế nào?",
"options": [
"eBGP học prefix từ AS láng giềng; iBGP lan truyền thông tin đó trong AS",
"eBGP chạy bên trong một AS còn iBGP chạy giữa các AS với nhau",
"eBGP dùng UDP còn iBGP dùng TCP để trao đổi thông điệp",
"eBGP tính đường bằng Dijkstra còn iBGP tính bằng Bellman-Ford"
],
"answer": 0,
"explain": "Gateway router chạy cả eBGP (giữa các AS) và iBGP (trong AS) để mọi router của AS biết cách ra tới prefix ngoài.",
"source": "slide:Chapter_5_v8.0.pdf p.50",
"confidence": "verified"
},
{
"id": "nw-064",
"chapter": "network",
"q": "Địa chỉ IP nào sau đây là địa chỉ multicast?",
"options": [
"192.168.0.5",
"224.0.0.5",
"127.0.0.5",
"169.254.0.5"
],
"answer": 1,
"explain": "Dải multicast (lớp D) là 224.0.0.0 – 239.255.255.255 nên 224.0.0.5 là multicast; 127.x là loopback, 169.254.x là link-local, 192.168.x là private.",
"source": "RFC 5771 (kiến thức chuẩn, không có trong slide)",
"confidence": "derived"
},
{
"id": "nw-065",
"chapter": "network",
"q": "Địa chỉ 169.254.10.20 (thường tự gán khi máy không nhận được địa chỉ từ DHCP server) thuộc loại địa chỉ nào?",
"options": [
"Link-local (APIPA), chỉ dùng trong mạng cục bộ",
"Public (định tuyến toàn cầu)",
"Multicast",
"Loopback"
],
"answer": 0,
"explain": "Dải 169.254.0.0/16 là địa chỉ link-local tự cấu hình; không định tuyến ra ngoài mạng nội bộ.",
"source": "RFC 3927 (kiến thức chuẩn, không có trong slide)",
"confidence": "derived"
},
{
"id": "nw-066",
"chapter": "network",
"q": "Theo cách chia lớp địa chỉ IPv4 (classful), lớp B có octet đầu tiên nằm trong khoảng nào?",
"options": [
"128 – 191",
"1 – 126",
"192 – 223",
"224 – 239"
],
"answer": 0,
"explain": "Lớp A: 1–126 (/8), lớp B: 128–191 (/16), lớp C: 192–223 (/24), lớp D: 224–239 (multicast), lớp E: 240–255; 127 dành cho loopback.",
"source": "kurose p.337–338 (classful 8/16/24 bit); dải octet: kiến thức chuẩn",
"confidence": "derived"
},
{
"id": "nw-067",
"chapter": "network",
"q": "Datagram IP có địa chỉ đích 255.255.255.255 sẽ được chuyển tới đâu?",
"options": [
"Tất cả các máy trên toàn Internet, vì router luôn chuyển tiếp broadcast",
"Chỉ router mặc định (default gateway) của mạng người gửi",
"Tất cả các máy trong cùng mạng con của người gửi",
"Chỉ các máy có cùng prefix /8 với người gửi"
],
"answer": 2,
"explain": "255.255.255.255 là địa chỉ broadcast giới hạn: được gửi tới mọi máy trong cùng subnet; router tùy chọn nhưng thường không chuyển tiếp sang subnet lân cận.",
"source": "kurose p.340",
"confidence": "verified"
},
{
"id": "nw-068",
"chapter": "network",
"q": "Vì sao router phải tính lại và ghi lại header checksum của datagram IPv4 ở MỖI chặng?",
"options": [
"Vì router đổi địa chỉ IP nguồn",
"Vì checksum bao phủ cả phần dữ liệu và dữ liệu bị đổi",
"Vì trường TTL (và có thể cả options) bị thay đổi khi đi qua router",
"Vì mỗi router dùng thuật toán checksum khác nhau"
],
"answer": 2,
"explain": "Checksum của IPv4 chỉ bao phủ header; TTL giảm 1 ở mỗi router nên checksum phải được tính lại. (IPv6 bỏ checksum để xử lý nhanh hơn.)",
"source": "kurose p.333",
"confidence": "verified"
},
{
"id": "nw-069",
"chapter": "network",
"q": "Overhead tối thiểu của TCP + IP (không có options) trên mỗi gói tin là bao nhiêu byte?",
"options": [
"40 byte (20 TCP + 20 IP)",
"20 byte",
"28 byte",
"60 byte"
],
"answer": 0,
"explain": "Header IP tối thiểu 20 byte + header TCP tối thiểu 20 byte = 40 byte overhead (chưa kể overhead tầng ứng dụng).",
"source": "slide:Chapter_4_v8.0.pdf p.43",
"confidence": "verified"
},
{
"id": "nw-070",
"chapter": "network",
"q": "Trường nào có trong header IPv4 nhưng đã bị loại bỏ khỏi header IPv6?",
"options": [
"Hop limit (tương đương TTL)",
"Source address",
"Header checksum",
"Next header (giao thức tầng trên)"
],
"answer": 2,
"explain": "Slide: so với IPv4, IPv6 bỏ checksum (để router xử lý nhanh), bỏ fragmentation/reassembly và bỏ options trong header chính; hop limit vẫn còn.",
"source": "slide:Chapter_4_v8.0.pdf p.70",
"confidence": "verified"
},
{
"id": "nw-071",
"chapter": "network",
"q": "Header cơ bản của IPv6 có độ dài cố định bao nhiêu byte?",
"options": [
"40 byte",
"20 byte",
"60 byte",
"128 byte"
],
"answer": 0,
"explain": "IPv6 dùng header cố định 40 byte (địa chỉ nguồn/đích mỗi cái 128 bit = 16 byte) để tăng tốc xử lý.",
"source": "slide:Chapter_4_v8.0.pdf p.69",
"confidence": "verified"
},
{
"id": "nw-072",
"chapter": "network",
"q": "Chọn mô tả ĐÚNG về kỹ thuật tunneling khi chuyển đổi từ IPv4 sang IPv6.",
"options": [
"Router IPv4 cắt địa chỉ IPv6 xuống còn 32 bit để có thể chuyển tiếp được",
"Mọi router phải được nâng cấp lên IPv6 cùng một ngày (flag day) rồi mới tunneling",
"Datagram IPv6 được đóng gói làm payload của datagram IPv4 giữa hai router IPv6/v4",
"Header IPv4 được đặt vào bên trong payload của datagram IPv6 giữa hai router"
],
"answer": 2,
"explain": "Tunneling: 'packet within a packet' – IPv6 datagram làm payload của IPv4 datagram giữa các router IPv4; cách này tránh 'flag day' vì không thể nâng cấp mọi router cùng lúc.",
"source": "slide:Chapter_4_v8.0.pdf p.71",
"confidence": "verified"
},
{
"id": "nw-073",
"chapter": "network",
"q": "Dạng viết rút gọn hợp lệ của địa chỉ IPv6 2001:0db8:0000:0000:0000:0000:0000:0001 là?",
"options": [
"2001::db8::1",
"2001:db8:0:0:1",
"2001:db8::1",
"2001:db8:::1"
],
"answer": 2,
"explain": "Bỏ số 0 đứng đầu mỗi nhóm và thay MỘT dãy nhóm 0 liên tiếp bằng '::' → 2001:db8::1. '::' chỉ được dùng một lần; 2001:db8:0:0:1 chỉ có 5 nhóm nên không đủ 8 nhóm.",
"source": "computed",
"confidence": "verified"
},
{
"id": "nw-074",
"chapter": "network",
"q": "Trong traceroute, khi gói có TTL hết hạn tại router thứ n, router đó gửi về nguồn thông điệp ICMP nào?",
"options": [
"Type 3, code 3 (port unreachable)",
"Type 11, code 0 (TTL expired)",
"Type 8, code 0 (echo request)",
"Type 0, code 0 (echo reply)"
],
"answer": 1,
"explain": "Nguồn gửi các gói UDP với TTL = 1, 2, 3, … Router thứ n loại gói và gửi ICMP type 11 code 0, qua đó nguồn biết tên/IP router và RTT.",
"source": "slide:Chapter_5_v8.0.pdf p.89",
"confidence": "verified"
},
{
"id": "nw-075",
"chapter": "network",
"q": "Traceroute dừng khi nào?",
"options": [
"Khi nhận được ICMP echo reply từ router đầu tiên trên đường đi",
"Khi đích trả ICMP 'port unreachable' (type 3, code 3) cho gói UDP",
"Khi giá trị TTL của gói thăm dò đạt tới 255",
"Khi router cuối cùng trên đường gửi ICMP type 11 về nguồn"
],
"answer": 1,
"explain": "Gói UDP cuối cùng tới được đích; đích không có ứng dụng ở cổng đó nên trả ICMP type 3 code 3 và nguồn dừng.",
"source": "slide:Chapter_5_v8.0.pdf p.89",
"confidence": "verified"
},
{
"id": "nw-076",
"chapter": "network",
"q": "Trong kiến trúc SDN, bảng chuyển tiếp (flow table) của các switch được tính toán ở đâu?",
"options": [
"Ở từng router bằng thuật toán định tuyến chạy phân tán trong control plane",
"Ở các máy đầu cuối của người dùng, rồi gửi kèm theo mỗi gói tin",
"Ở chính các switch, tự học bằng cách quan sát lưu lượng đi qua",
"Ở một controller từ xa, rồi cài đặt vào các switch"
],
"answer": 3,
"explain": "SDN tách control plane khỏi data plane: remote controller tính và cài đặt bảng forwarding; switch chỉ thực hiện generalized forwarding (match+action).",
"source": "slide:Chapter_4_v8.0.pdf p.8",
"confidence": "verified"
},
{
"id": "nw-077",
"chapter": "network",
"q": "Một entry trong flow table của OpenFlow dùng để chặn (không chuyển tiếp) mọi gói tin gửi tới cổng TCP 22 (ssh) có hành động (action) nào?",
"options": [
"Drop",
"Forward ra cổng 22",
"Modify header",
"Chuyển tới controller rồi tự chuyển tiếp"
],
"answer": 0,
"explain": "Ví dụ firewall trong slide: match TCP dst port = 22, các trường khác là wildcard (*), action = drop.",
"source": "slide:Chapter_4_v8.0.pdf p.82",
"confidence": "verified"
},
{
"id": "nw-078",
"chapter": "network",
"q": "Trong trừu tượng match+action, thiết bị nào match theo địa chỉ MAC đích và có action là forward hoặc flood?",
"options": [
"Router",
"Switch (tầng liên kết)",
"Firewall",
"NAT"
],
"answer": 1,
"explain": "Router: match prefix IP đích dài nhất → forward; Switch: match MAC đích → forward/flood; Firewall: match IP + cổng TCP/UDP → permit/deny; NAT: match IP+cổng → rewrite.",
"source": "slide:Chapter_4_v8.0.pdf p.84",
"confidence": "verified"
},
{
"id": "nw-079",
"chapter": "network",
"q": "Thông điệp OpenFlow nào do switch gửi LÊN controller?",
"options": [
"modify-state (thêm/xóa/sửa flow entry)",
"packet-in (chuyển một gói tin cho controller)",
"packet-out (controller gửi gói ra một cổng của switch)",
"features (controller hỏi tính năng switch)"
],
"answer": 1,
"explain": "Controller→switch: features, configure, modify-state, packet-out. Switch→controller (bất đồng bộ): packet-in, flow-removed, port status.",
"source": "slide:Chapter_5_v8.0.pdf p.80",
"confidence": "verified"
},
{
"id": "nw-080",
"chapter": "network",
"q": "Phát biểu nào đúng về sự khác nhau giữa 'forwarding' và 'routing'?",
"options": [
"Forwarding: chuyển gói từ cổng vào sang cổng ra của router; routing: xác định đường đi nguồn–đích",
"Forwarding xác định toàn bộ đường đi nguồn–đích, routing chỉ xử lý bên trong một router",
"Cả forwarding và routing đều là chức năng của control plane toàn mạng",
"Routing thực hiện bằng phần cứng ở cấp nano giây, còn forwarding bằng phần mềm"
],
"answer": 0,
"explain": "Forwarding (data plane) là chức năng cục bộ theo từng router, nano giây, phần cứng; routing (control plane) là logic toàn mạng, phần mềm, cỡ mili giây (thuật toán định tuyến).",
"source": "slide:Chapter_4_v8.0.pdf p.5",
"confidence": "verified"
},
{
"id": "nw-081",
"chapter": "network",
"q": "Head-of-the-Line (HOL) blocking trong router là hiện tượng nào?",
"options": [
"Gói đầu hàng đợi cổng vào bị chặn nên các gói phía sau cũng không đi tiếp được",
"Gói bị loại do bộ đệm ở cổng ra đã đầy khi tốc độ đến vượt tốc độ đường ra",
"Gói bị loại do header checksum không khớp sau khi TTL bị giảm",
"Hai gói cùng được gửi vào một cổng ra gây ra va chạm (collision) trên cáp"
],
"answer": 0,
"explain": "Nếu switch fabric chậm hơn tổng các cổng vào, gói ở đầu hàng đợi đang chờ cổng ra bận sẽ chặn các gói sau nó dù cổng ra của chúng rảnh.",
"source": "slide:Chapter_4_v8.0.pdf p.29",
"confidence": "verified"
},
{
"id": "nw-082",
"chapter": "network",
"q": "Mô hình dịch vụ 'best effort' của tầng mạng Internet đảm bảo điều gì?",
"options": [
"Đảm bảo các gói tới đích đúng theo thứ tự đã gửi",
"Đảm bảo băng thông tối thiểu cho mỗi luồng dữ liệu",
"Đảm bảo độ trễ tối đa cho dữ liệu thời gian thực",
"Không đảm bảo việc gói tới đích, thứ tự, thời gian và băng thông"
],
"answer": 3,
"explain": "Bảng service model trong slide: Internet best effort không bảo đảm băng thông, mất mát, thứ tự và thời gian (khác ATM CBR/ABR hay Intserv/Diffserv).",
"source": "slide:Chapter_4_v8.0.pdf p.10",
"confidence": "verified"
}
]
);