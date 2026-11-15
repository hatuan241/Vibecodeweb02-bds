# Dự án: Website bất động sản (VibecodeWeb – Buổi 1)

Trang web tĩnh giới thiệu, tìm kiếm, mua bán và cho thuê nhà đất. Chỉ dùng HTML, CSS và JavaScript thuần: không framework, không bước build, mở trực tiếp file `.html` bằng trình duyệt là chạy.

## Cấu trúc thư mục

```
Buoi 1/
├── .claude/
│   └── CLAUDE.md        # Quy tắc và kiến trúc dự án (file này)
├── index.html           # Trang chủ chính – thương hiệu "GATA", tông xanh ngọc
├── batdongsan.html      # Bản landing page thứ hai – "Mái Nhà Việt", tông đỏ
├── pages/               # Các trang con (chi tiết tin, đăng tin, liên hệ…)
├── assets/
│   ├── css/             # File CSS dùng chung (vd. style.css)
│   ├── js/              # File JavaScript dùng chung (vd. main.js)
│   └── images/          # Ảnh, logo, icon lưu trên máy
├── data/                # Dữ liệu mẫu dạng JSON (tin đăng, dự án, khu vực)
├── docs/                # Tài liệu, ghi chú, đề bài
└── BTVN/                # Bài tập về nhà (website Pizza Lửa Hồng) – dự án riêng, đã có cấu trúc riêng
```

> Hiện tại `index.html` và `batdongsan.html` vẫn để CSS trong thẻ `<style>` và JS trong thẻ `<script>` ngay trong file. Khi tách ra thì chuyển sang `assets/css/` và `assets/js/`, và chỉ làm khi người dùng yêu cầu.

## Kiến trúc trang `index.html`

- **Thứ tự các phần:** header (menu dạng dropdown) → hero kèm khung tìm kiếm (tab Bán / Thuê / Dự án) → `#listings` (lưới tin đăng) → `#projects` (dự án, cuộn ngang) → khu vực theo thành phố → `#news` → `#tools` → CTA → footer.
- **Dữ liệu** nằm trong các mảng JS ở đầu thẻ `<script>`:
  - `listings`: tin đăng, gồm các trường `id, type ("ban"|"thue"), cat, title, price, area, city, district, days, photos, vip`.
    - Giá bán tính bằng **triệu** (1000 = 1 tỷ). Giá thuê tính bằng **triệu/tháng**.
  - `projects`: dự án. `locations`: khu vực (có `img`). `priceOptions`: mức giá theo tab.
  - `catPhotos`, `projectPhotos`: mã ảnh Unsplash theo loại bất động sản.
- **Hiển thị:** các hàm `renderListings()`, `renderProjects()` và `renderLocations()` sinh HTML bằng template string. Lọc và sắp xếp nằm trong `getFiltered()`, trạng thái nằm trong `state` (`type`, `shown`).
- **Tiện ích:** `$()` (querySelector), `formatPrice()`, `toast()`, `imgTag()`, `photoUrl()`.

## Quy tắc

### Chung
- Toàn bộ nội dung hiển thị và chú thích code viết bằng **tiếng Việt có dấu**. File lưu dạng UTF-8 và khai báo `<html lang="vi">`.
- Không thêm thư viện hay framework khi chưa được yêu cầu.
- Sửa đúng phần được yêu cầu, không tự ý đổi cấu trúc hay di chuyển file.

### HTML / CSS
- Màu sắc, bo góc và đổ bóng lấy từ biến CSS trong `:root` (`--primary`, `--accent`, `--text`, `--muted`, `--line`, `--bg`, `--radius`, `--shadow`…). Không viết thẳng mã màu mới khi đã có biến phù hợp.
- Giao diện responsive theo 3 mốc: `1024px`, `860px`, `540px`. Ở bề rộng điện thoại không được để trang cuộn ngang.
- Tên class viết thường và nối bằng gạch ngang (`card-body`, `search-panel`).

### Hình ảnh
- Ảnh dùng class `.ph`, nằm trong khung `.thumb` hoặc `.loc` (`object-fit: cover`). Luôn có `alt`, `loading="lazy"` và `onerror="this.remove()"` để khi ảnh lỗi thì hiện lại nền gradient.
- Ảnh online lấy từ Unsplash qua `photoUrl(id, width)`. Trước khi thêm mã ảnh mới, kiểm tra link trả về HTTP 200 và nội dung ảnh đúng chủ đề.
- Ảnh lưu trên máy để trong `assets/images/`, đặt tên không dấu, viết thường, nối bằng gạch ngang (vd. `can-ho-quan-7.jpg`).

### JavaScript
- Dùng `const`/`let` và arrow function. Không dùng `var`.
- Dữ liệu tách riêng khỏi phần hiển thị: muốn thêm tin đăng thì thêm vào mảng dữ liệu, không viết thẳng HTML.
- Sau khi sửa JS, kiểm tra cú pháp (vd. tách phần script ra rồi chạy `node --check`).
