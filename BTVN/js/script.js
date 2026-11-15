// ===== Thanh điều hướng: tô sáng trang hiện tại + nút menu trên điện thoại =====
document.addEventListener("DOMContentLoaded", () => {
  const here = location.href.split(/[?#]/)[0].replace(/\/$/, "/index.html");
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.href === here) link.classList.add("active");
  });

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  // Năm hiện tại ở footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ===== Giỏ hàng đơn giản (lưu trong trình duyệt) =====
  const pill = document.querySelector(".cart-pill");
  const getCart = () => {
    try { return JSON.parse(localStorage.getItem("pizzaCart")) || []; }
    catch { return []; }
  };
  const saveCart = (cart) => {
    try { localStorage.setItem("pizzaCart", JSON.stringify(cart)); } catch {}
  };
  const renderCart = () => {
    if (!pill) return;
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.price, 0);
    pill.querySelector(".count").textContent = cart.length;
    pill.querySelector(".total").textContent = total.toLocaleString("vi-VN") + "đ";
    pill.classList.toggle("show", cart.length > 0);
  };

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cart = getCart();
      cart.push({ name: btn.dataset.name, price: Number(btn.dataset.price) });
      saveCart(cart);
      renderCart();
      btn.textContent = "✓";
      setTimeout(() => (btn.textContent = "+"), 800);
    });
  });
  renderCart();

  // ===== Bộ lọc trang Menu =====
  document.querySelectorAll(".filter").forEach((f) => {
    f.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
      f.classList.add("active");
      const cat = f.dataset.cat;
      document.querySelectorAll(".grid .card").forEach((card) => {
        card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });

  // ===== Form đặt bàn =====
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const msg = document.querySelector(".form-msg");
      msg.textContent = `Cảm ơn ${name || "bạn"}! Chúng tôi sẽ gọi lại xác nhận trong ít phút. 🍕`;
      msg.classList.add("show");
      form.reset();
    });
  }
});
