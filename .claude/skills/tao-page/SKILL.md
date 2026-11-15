---
name: tao-page
description: Tạo một trang web tĩnh hoàn chỉnh (HTML + CSS + JS thuần), responsive, gồm banner, thông tin nổi bật, tiện ích/giá trị, kêu gọi hành động/liên hệ và các tương tác JS cơ bản. Dùng khi người dùng gõ /tao-page (kèm mô tả trang cần tạo) hoặc yêu cầu "tạo trang", "tạo landing page", "tạo page mới".
argument-hint: "[mô tả trang cần tạo, vd: trang giới thiệu dự án căn hộ Vinhomes Q9]"
---

# /tao-page – Tạo trang web hoàn chỉnh

Yêu cầu của người dùng: **$ARGUMENTS**

Nếu phần yêu cầu trống, hỏi ngắn gọn một câu: "Bạn muốn tạo trang về chủ đề gì?" rồi mới làm. Nếu đã có mô tả thì làm luôn, tự chọn các chi tiết hợp lý (tên, nội dung mẫu, màu chủ đạo) theo đúng chủ đề.

Luôn tuân thủ `.claude/CLAUDE.md` của dự án (tiếng Việt có dấu, HTML/CSS/JS thuần, không framework, không bước build, không `var`, biến CSS trong `:root`, 3 mốc responsive…).

## 1. Cấu trúc file cần tạo

Đặt `<slug>` là tên trang không dấu, viết thường, nối bằng gạch ngang (vd. `du-an-sunrise-city`). Tạo **3 file riêng**:

```
pages/<slug>.html          # Nội dung trang (chỉ HTML, không CSS/JS nội tuyến)
assets/css/<slug>.css      # Toàn bộ style của trang
assets/js/<slug>.js        # Dữ liệu + hiển thị + tương tác
```

- Trong HTML dùng đường dẫn tương đối: `../assets/css/<slug>.css`, `../assets/js/<slug>.js` (thẻ `<script defer>`).
- Ảnh trên máy (nếu có) để trong `assets/images/`, tên không dấu, gạch ngang.
- Nếu file trùng tên đã tồn tại: **hỏi người dùng** trước khi ghi đè, hoặc thêm hậu tố `-2`.
- Không sửa `index.html`, `batdongsan.html` hay file có sẵn khác, trừ khi người dùng yêu cầu.
- Nếu người dùng yêu cầu gắn link từ trang chủ: **thêm vào dữ liệu**, không viết thẳng HTML. Ví dụ trang dự án thì thêm phần tử vào mảng `projects` trong `index.html` với `url: "pages/<slug>.html"` (và `img` nếu cần). Thẻ dự án (`renderProjects()`) và menu con "Dự án" (`renderProjectMenu()`) sẽ tự hiện link.

## 2. Bố cục bắt buộc (theo thứ tự)

1. **Header** – logo/tên thương hiệu, menu neo tới các phần (`#gioi-thieu`, `#noi-bat`, `#tien-ich`, `#lien-he`), nút menu hamburger trên điện thoại; header dính (`position: sticky`) và đổi nền khi cuộn.
   - **Bắt buộc có mục "Trang chủ"** là mục **đầu tiên** của menu: `<a href="../index.html" class="nav-home">🏠 Trang chủ</a>`. Mục này **luôn hiển thị** ở mọi bề rộng màn hình (không được ẩn trên máy tính), có vạch ngăn tách khỏi các mục neo; trong menu hamburger nằm trên cùng.
2. **Banner giới thiệu (hero)** – tiêu đề lớn, mô tả ngắn, 1–2 nút kêu gọi hành động, ảnh nền hoặc gradient có lớp phủ để chữ dễ đọc.
3. **Thông tin nổi bật** – dải số liệu (3–4 chỉ số có hiệu ứng đếm số) và/hoặc các thẻ điểm nổi bật phù hợp chủ đề.
4. **Tiện ích / Giá trị** – lưới thẻ (icon + tiêu đề + mô tả), 4–8 mục.
5. **Phần bổ sung phù hợp chủ đề** (chọn 1–2, tuỳ nội dung): bảng giá/gói dịch vụ, thư viện ảnh, quy trình các bước, đánh giá khách hàng, FAQ dạng accordion.
6. **Kêu gọi hành động / Liên hệ** – khối CTA nổi bật + form liên hệ (họ tên, số điện thoại, email, nội dung/nhu cầu) và thông tin liên hệ (địa chỉ, hotline, email).
7. **Footer** – thông tin thương hiệu, liên kết nhanh (mục đầu tiên là "Trang chủ" → `../index.html`), bản quyền (năm tự cập nhật bằng JS).
8. **Nút "lên đầu trang"** hiện khi cuộn xuống.

Nội dung viết bằng tiếng Việt có dấu, cụ thể và đúng chủ đề người dùng yêu cầu – không dùng "Lorem ipsum".

## 3. Quy tắc HTML

- `<!DOCTYPE html>`, `<html lang="vi">`, `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<title>` và `<meta name="description">` đúng chủ đề.
- Dùng thẻ ngữ nghĩa: `header`, `nav`, `main`, `section` (có `id`), `article`, `footer`.
- Mỗi trang chỉ một `<h1>` (trong banner); các phần dùng `<h2>`.
- Ảnh: class `.ph` trong khung `.thumb`, luôn có `alt`, `loading="lazy"`, `onerror="this.remove()"` (khung có nền gradient dự phòng). Ảnh Unsplash: kiểm tra link trả HTTP 200 trước khi dùng (vd. `curl -sI`).
- Icon: dùng emoji hoặc SVG nội tuyến, không thêm thư viện icon.
- Khả năng truy cập: nút hamburger có `aria-label` và `aria-expanded`; form có `<label>` cho từng ô.

## 4. Quy tắc CSS

- Khai báo biến trong `:root`: `--primary`, `--primary-dark`, `--accent`, `--text`, `--muted`, `--line`, `--bg`, `--bg-soft`, `--white`, `--radius`, `--shadow`, `--shadow-lg`, `--container`, `--transition`. Mọi màu/bo góc/đổ bóng phía dưới đều dùng biến.
- Chọn bảng màu hợp chủ đề (vd. bất động sản: xanh ngọc/xanh dương; ẩm thực: đỏ/cam; spa: hồng/be).
- Font: font hệ thống (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`) – không bắt buộc Google Fonts.
- Bố cục bằng Flexbox/Grid; lưới thẻ dùng `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`.
- Responsive theo 3 mốc `@media (max-width: 1024px)`, `860px`, `540px`. Ở 860px menu chuyển sang hamburger; ở 540px giảm cỡ chữ, các cột về 1 cột. **Không để trang cuộn ngang** (`img { max-width: 100% }`, tránh độ rộng cố định).
- Cỡ chữ tiêu đề dùng `clamp()`.
- `html { scroll-behavior: smooth }` và `scroll-margin-top` cho các `section` để không bị header che.
- Hiệu ứng: hover cho nút/thẻ, class `.reveal` / `.reveal.show` cho hiệu ứng hiện dần khi cuộn.
- Tôn trọng `@media (prefers-reduced-motion: reduce)` – tắt animation.
- Tên class viết thường, nối gạch ngang (`hero-title`, `feature-card`).

## 5. Quy tắc JavaScript (`assets/js/<slug>.js`)

- Chỉ `const`/`let`, arrow function, không `var`. Chú thích bằng tiếng Việt.
- Thứ tự trong file:
  1. **Dữ liệu**: các mảng/đối tượng (vd. `features`, `stats`, `plans`, `faqs`, `testimonials`).
  2. **Tiện ích**: `const $ = (s, el = document) => el.querySelector(s);`, `const $$ = (s, el = document) => [...el.querySelectorAll(s)];`, `toast(msg)`.
  3. **Hàm hiển thị**: `renderFeatures()`, `renderStats()`… sinh HTML bằng template string từ dữ liệu – không viết cứng các thẻ lặp lại trong HTML.
  4. **Tương tác** và **khởi tạo** trong `document.addEventListener('DOMContentLoaded', …)`.
- Tương tác cơ bản cần có:
  - Bật/tắt menu hamburger (cập nhật `aria-expanded`, đóng menu khi bấm link).
  - Header đổi kiểu khi cuộn; tô sáng mục menu đang xem (IntersectionObserver).
  - Hiệu ứng `.reveal` khi cuộn tới (IntersectionObserver).
  - Đếm số tăng dần cho phần số liệu khi xuất hiện (`requestAnimationFrame`).
  - Kiểm tra form liên hệ: bắt buộc họ tên, số điện thoại Việt Nam hợp lệ (`/^(0|\+84)\d{9}$/`), email đúng định dạng nếu có; hiện lỗi ngay dưới ô; gửi thành công thì `toast()` báo và `reset()` form (không gửi lên server).
  - Nút lên đầu trang.
  - Tương tác của phần bổ sung (accordion FAQ, chuyển tab bảng giá, slider đánh giá…) nếu có.
  - Năm hiện tại ở footer.
- Không thêm thư viện ngoài.

## 6. Kiểm tra sau khi tạo

1. Kiểm tra cú pháp JS: `node --check assets/js/<slug>.js`.
2. Rà lại: đường dẫn CSS/JS trong HTML đúng; các `id` mà JS dùng có tồn tại trong HTML; mọi `href="#..."` trỏ tới section có thật; có link `../index.html` ở menu (mục đầu tiên, không bị ẩn trên máy tính) và ở footer.
3. Kiểm tra ảnh online (nếu dùng) trả HTTP 200.

## 7. Báo cáo cho người dùng

Trả lời ngắn gọn bằng tiếng Việt:
- Danh sách 3 file đã tạo (dạng link markdown, đường dẫn tương đối).
- Các phần có trên trang và các tương tác JS.
- Cách xem: mở `pages/<slug>.html` trực tiếp bằng trình duyệt.
- Gợi ý 1–2 hướng mở rộng (nếu hợp lý).
