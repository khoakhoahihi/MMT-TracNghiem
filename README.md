# Ôn trắc nghiệm Mạng máy tính (CSC10008)

Chạy cục bộ, không cần cài gì: bấm đúp `chay.bat` (hoặc mở `index.html` bằng trình duyệt).

- Đề: giữa kỳ 2024-25 thật, theo chương, câu chưa chắc, ôn câu sai, đề ngẫu nhiên 70 câu.
- Chế độ Luyện tập (hiện đáp án ngay) hoặc Thi (đếm ngược, chấm khi nộp bài).
- Phím tắt: 1-4 hoặc A-D chọn đáp án, ←/→ đổi câu, Enter câu sau, E bật/tắt lời giải.
- Tiến độ và lịch sử lưu trong localStorage của trình duyệt (khóa `mmt.v2`).

Thêm câu hỏi: tạo/sửa `q-<chương>.js` dạng `window.QUESTIONS.push(...[ {id, chapter, q, options, answer, explain, source, confidence}, ... ]);`
(chapter: overview|application|transport|network|link|media). Bài giảng: `theory-<chương>.js` đẩy vào `window.THEORY`.
Kiểm tra dữ liệu: `python -I -X utf8 check.py`.
