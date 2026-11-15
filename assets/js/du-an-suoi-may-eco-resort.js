/* ==========================================================
   Suối Mây Eco Resort – dữ liệu, hiển thị và tương tác
   ========================================================== */

/* ================= DỮ LIỆU ================= */

// Số liệu nổi bật (có hiệu ứng đếm số)
const stats = [
  { value: 120, suffix: " ha", label: "Tổng diện tích dự án" },
  { value: 70, suffix: "%", label: "Mật độ cây xanh & mặt nước" },
  { value: 186, suffix: "", label: "Biệt thự, bungalow, căn hộ" },
  { value: 30, suffix: "+", label: "Tiện ích nội khu" },
];

// Điểm nổi bật của dự án
const highlights = [
  { icon: "🏞️", title: "Vị trí cao nguyên đắt giá", desc: "Nằm bên suối Đam B'ri, cách trung tâm Bảo Lộc 12 km, cách sân bay Liên Khương 90 phút." },
  { icon: "🌲", title: "Sinh thái nguyên bản", desc: "Giữ lại 4.500 cây thông bản địa, xử lý nước thải tuần hoàn, 100% đèn chiếu sáng bằng năng lượng mặt trời." },
  { icon: "📈", title: "Đầu tư sinh lời ổn định", desc: "Sổ hồng lâu dài, cam kết lợi nhuận 8%/năm trong 5 năm, mỗi năm được nghỉ miễn phí 15 đêm." },
];

// Tiện ích nội khu
const features = [
  { icon: "🏊", title: "Hồ bơi vô cực", desc: "Hồ bơi nước ấm 800 m² nhìn thẳng ra thung lũng và biển mây buổi sớm.", img: "1582719508461-905c673771fd" },
  { icon: "🥾", title: "Đường mòn rừng thông", desc: "5 km đường đi bộ, đạp xe xuyên rừng, có trạm nghỉ và biển chỉ dẫn thực vật.", img: "1441974231531-c6227db76b6e" },
  { icon: "🌿", title: "Spa thảo mộc", desc: "Liệu trình xông lá, ngâm chân thảo dược và trị liệu đá nóng theo phong cách bản địa.", img: "1544161515-4ab6ce6db874" },
  { icon: "🧘", title: "Sân yoga & thiền", desc: "Sàn gỗ ngoài trời đón bình minh, lớp yoga và thiền miễn phí mỗi sáng cho cư dân.", img: "1506126613408-eca07ce68773" },
  { icon: "🍽️", title: "Nhà hàng từ nông trại", desc: "Rau, trà và cà phê trồng ngay trong khu nông trại hữu cơ 6 ha của dự án.", img: "1414235077428-338989a2e8c0" },
  { icon: "🛶", title: "Hồ cảnh quan", desc: "Hồ nước 4 ha cho chèo kayak, câu cá và cắm trại bên bờ vào cuối tuần.", img: "1501785888041-af3ef285b470" },
  { icon: "☁️", title: "Đồi săn mây", desc: "Đài quan sát trên đồi chè cao 950 m, điểm ngắm bình minh và biển mây đẹp nhất vùng.", img: "1470071459604-3b5ec3a7fe05" },
  { icon: "🏡", title: "Câu lạc bộ cư dân", desc: "Khu sinh hoạt chung, phòng đọc, khu vui chơi trẻ em và dịch vụ quản gia 24/7.", img: "1571896349842-33c89424de2d" },
];

// Loại sản phẩm dùng cho tab lọc
const productTypes = [
  { key: "all", label: "Tất cả" },
  { key: "biet-thu", label: "Biệt thự" },
  { key: "bungalow", label: "Bungalow" },
  { key: "can-ho", label: "Căn hộ khách sạn" },
];

// Sản phẩm & bảng giá (giá tính bằng tỷ đồng)
const products = [
  { id: "bt-suoi", type: "biet-thu", name: "Biệt thự ven suối 4PN", land: 600, area: 280, beds: 4, price: 18.5, left: 4, tag: "Bán chạy", desc: "Hồ bơi riêng, sân vườn hướng suối, phòng khách thông tầng.", img: "1571896349842-33c89424de2d" },
  { id: "bt-doi", type: "biet-thu", name: "Biệt thự đồi thông 3PN", land: 450, area: 210, beds: 3, price: 12.5, left: 6, tag: "", desc: "Kiến trúc gỗ – đá tự nhiên, ban công rộng nhìn ra rừng thông.", img: "1449158743715-0a90ebb6d2d8" },
  { id: "bg-rung", type: "bungalow", name: "Bungalow rừng 1PN", land: 180, area: 65, beds: 1, price: 2.9, left: 5, tag: "Giá tốt", desc: "Thiết kế nhà sàn gỗ, phù hợp nghỉ dưỡng cặp đôi và cho thuê ngắn ngày.", img: "1587061949409-02df41d5e562" },
  { id: "bg-ho", type: "bungalow", name: "Bungalow ven hồ 2PN", land: 260, area: 95, beds: 2, price: 4.6, left: 3, tag: "", desc: "Bến thuyền riêng, hiên ngoài trời sát mặt hồ cảnh quan.", img: "1501785888041-af3ef285b470" },
  { id: "ch-1pn", type: "can-ho", name: "Căn hộ khách sạn 1PN", land: 0, area: 48, beds: 1, price: 3.2, left: 4, tag: "", desc: "Nội thất 5 sao bàn giao sẵn, vận hành cho thuê bởi đơn vị quốc tế.", img: "1520250497591-112f2f40a3f4" },
  { id: "ch-2pn", type: "can-ho", name: "Căn hộ khách sạn 2PN", land: 0, area: 76, beds: 2, price: 4.9, left: 2, tag: "Sắp hết", desc: "Căn góc tầng cao, ban công đôi nhìn hồ bơi vô cực và thung lũng.", img: "1582719508461-905c673771fd" },
];

// Thư viện ảnh (size: "wide" | "tall" | "")
const gallery = [
  { img: "1520250497591-112f2f40a3f4", caption: "Hồ bơi trung tâm giữa rừng nhiệt đới", size: "wide" },
  { img: "1441974231531-c6227db76b6e", caption: "Đường mòn xuyên rừng thông", size: "tall" },
  { img: "1449158743715-0a90ebb6d2d8", caption: "Biệt thự gỗ đồi thông", size: "" },
  { img: "1506126613408-eca07ce68773", caption: "Sân yoga đón bình minh", size: "" },
  { img: "1470071459604-3b5ec3a7fe05", caption: "Đồi săn mây lúc hoàng hôn", size: "wide" },
  { img: "1582719508461-905c673771fd", caption: "Hồ bơi vô cực nhìn ra thung lũng", size: "" },
  { img: "1544161515-4ab6ce6db874", caption: "Spa thảo mộc", size: "" },
  { img: "1414235077428-338989a2e8c0", caption: "Nhà hàng từ nông trại", size: "wide" },
];

// Trạng thái trang
const state = { productType: "all", lightboxIndex: 0 };

/* ================= TIỆN ÍCH ================= */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const photoUrl = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;
const imgTag = (id, alt, w) => `<img class="ph" src="${photoUrl(id, w)}" alt="${alt}" loading="lazy" onerror="this.remove()">`;

// Định dạng giá: 12.5 -> "12,5 tỷ"
const formatPrice = (ty) => `${ty.toLocaleString("vi-VN")} tỷ`;

// Hiện thông báo nhỏ ở cuối màn hình
let toastTimer;
const toast = (msg) => {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= HIỂN THỊ ================= */

const renderStats = () => {
  $("#statList").innerHTML = stats.map((s) => `
    <div class="stat reveal">
      <div class="stat-value"><span class="count" data-target="${s.value}">0</span>${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join("");
};

const renderHighlights = () => {
  $("#highlightList").innerHTML = highlights.map((h) => `
    <article class="highlight reveal">
      <div class="highlight-icon" aria-hidden="true">${h.icon}</div>
      <div><h3>${h.title}</h3><p>${h.desc}</p></div>
    </article>`).join("");
};

const renderFeatures = () => {
  $("#featureList").innerHTML = features.map((f) => `
    <article class="feature-card reveal">
      <div class="thumb">${imgTag(f.img, f.title, 600)}</div>
      <div class="feature-body">
        <div class="feature-icon" aria-hidden="true">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    </article>`).join("");
};

const renderTabs = () => {
  $("#productTabs").innerHTML = productTypes.map((t) => `
    <button class="tab ${t.key === state.productType ? "active" : ""}" role="tab"
      aria-selected="${t.key === state.productType}" data-type="${t.key}">${t.label}</button>`).join("");
};

const renderProducts = () => {
  const list = state.productType === "all" ? products : products.filter((p) => p.type === state.productType);
  $("#productList").innerHTML = list.map((p) => `
    <article class="product-card">
      <div class="thumb">
        ${imgTag(p.img, p.name, 700)}
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="product-specs">
          ${p.land ? `<span>🌳 Đất ${p.land} m²</span>` : ""}
          <span>📐 Sàn ${p.area} m²</span>
          <span>🛏️ ${p.beds} phòng ngủ</span>
        </div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-foot">
          <div class="product-price"><small>Giá từ</small><strong>${formatPrice(p.price)}</strong></div>
          <button class="btn btn-primary btn-sm" data-product="${p.id}">Nhận báo giá</button>
        </div>
        <div class="product-left">🔥 Chỉ còn ${p.left} căn giai đoạn 1</div>
      </div>
    </article>`).join("");
};

const renderGallery = () => {
  $("#galleryList").innerHTML = gallery.map((g, i) => `
    <button class="gallery-item thumb ${g.size}" data-index="${i}" data-caption="${g.caption}" aria-label="Xem ảnh: ${g.caption}">
      ${imgTag(g.img, g.caption, 700)}
    </button>`).join("");
};

const renderProductOptions = () => {
  $("#fProduct").innerHTML = `<option value="">Chưa xác định – cần tư vấn thêm</option>` +
    products.map((p) => `<option value="${p.id}">${p.name} (từ ${formatPrice(p.price)})</option>`).join("");
};

/* ================= TƯƠNG TÁC ================= */

// Menu hamburger
const initMenu = () => {
  const burger = $("#burger");
  const nav = $("#mainNav");
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  };
  burger.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  // Bấm ra ngoài thì đóng menu
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) setOpen(false);
  });
};

// Header đổi kiểu và nút lên đầu trang khi cuộn
const initScroll = () => {
  const header = $("#siteHeader");
  const backTop = $("#backTop");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    backTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
};

// Tô sáng mục menu ứng với phần đang xem
const initActiveNav = () => {
  const links = $$(".nav-link");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => observer.observe(s));
};

// Hiện dần các khối .reveal khi cuộn tới
const initReveal = () => {
  const items = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("show"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  items.forEach((el) => observer.observe(el));
};

// Đếm số tăng dần khi phần số liệu xuất hiện
const animateCount = (el) => {
  const target = Number(el.dataset.target);
  if (reduceMotion) { el.textContent = target.toLocaleString("vi-VN"); return; }
  const duration = 1600;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // chậm dần về cuối
    el.textContent = Math.round(target * eased).toLocaleString("vi-VN");
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const initCounters = () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCount(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  $$(".count").forEach((el) => observer.observe(el));
};

// Tab lọc sản phẩm và nút "Nhận báo giá"
const initProducts = () => {
  $("#productTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn || btn.dataset.type === state.productType) return;
    state.productType = btn.dataset.type;
    renderTabs();
    renderProducts();
  });

  $("#productList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product]");
    if (!btn) return;
    $("#fProduct").value = btn.dataset.product;
    $("#lien-he").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(() => $("#fName").focus({ preventScroll: true }), 600);
    toast("Đã chọn sản phẩm, bạn điền thông tin để nhận báo giá nhé!");
  });
};

// Lightbox xem ảnh lớn
const initLightbox = () => {
  const box = $("#lightbox");
  const img = $("#lbImg");
  const caption = $("#lbCaption");

  const show = (i) => {
    state.lightboxIndex = (i + gallery.length) % gallery.length;
    const g = gallery[state.lightboxIndex];
    img.src = photoUrl(g.img, 1600);
    img.alt = g.caption;
    caption.textContent = `${g.caption} (${state.lightboxIndex + 1}/${gallery.length})`;
  };
  const open = (i) => {
    show(i);
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  };
  const close = () => {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  $("#galleryList").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) open(Number(item.dataset.index));
  });
  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", () => show(state.lightboxIndex - 1));
  $("#lbNext").addEventListener("click", () => show(state.lightboxIndex + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(state.lightboxIndex - 1);
    if (e.key === "ArrowRight") show(state.lightboxIndex + 1);
  });
};

// Kiểm tra và gửi form liên hệ (không gửi lên server)
const initForm = () => {
  const form = $("#contactForm");
  const phoneRe = /^(0|\+84)\d{9}$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const setError = (input, msg) => {
    const field = input.closest(".field");
    field.classList.toggle("invalid", Boolean(msg));
    $(".error-msg", field).textContent = msg;
  };

  const validators = {
    fName: (v) => (v.length < 2 ? "Vui lòng nhập họ và tên." : ""),
    fPhone: (v) => {
      if (!v) return "Vui lòng nhập số điện thoại.";
      return phoneRe.test(v.replace(/[\s.-]/g, "")) ? "" : "Số điện thoại chưa đúng (vd. 0912345678).";
    },
    fEmail: (v) => (v && !emailRe.test(v) ? "Email chưa đúng định dạng." : ""),
  };

  const check = (input) => {
    const msg = validators[input.id](input.value.trim());
    setError(input, msg);
    return !msg;
  };

  // Kiểm tra lại ngay khi người dùng sửa ô đang báo lỗi
  Object.keys(validators).forEach((id) => {
    const input = $(`#${id}`);
    input.addEventListener("blur", () => check(input));
    input.addEventListener("input", () => { if (input.closest(".field").classList.contains("invalid")) check(input); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = Object.keys(validators).map((id) => $(`#${id}`));
    const results = inputs.map(check);
    const firstInvalid = inputs[results.indexOf(false)];
    if (firstInvalid) { firstInvalid.focus(); return; }

    const name = $("#fName").value.trim();
    toast(`Cảm ơn ${name}! Chuyên viên Suối Mây sẽ liên hệ bạn trong 30 phút.`);
    form.reset();
  });
};

/* ================= KHỞI TẠO ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderHighlights();
  renderFeatures();
  renderTabs();
  renderProducts();
  renderGallery();
  renderProductOptions();

  initMenu();
  initScroll();
  initActiveNav();
  initReveal();
  initCounters();
  initProducts();
  initLightbox();
  initForm();

  $("#year").textContent = new Date().getFullYear();
});
