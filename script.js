// ===============================
// PENGATURAN WEBSITE
// ===============================
// Ganti nomor berikut dengan nomor WhatsApp penjual.
// Format: kode negara + nomor, tanpa tanda +, spasi, atau 0 di depan.
// Contoh Indonesia: 628123456789
const nomorWhatsApp = "628123456789";

const pesanWhatsApp =
  "Halo, saya tertarik dengan properti kos-kosan 7 kamar + rumah tinggal 4 kamar di Pondok Labu, Cilandak, Jakarta Selatan. Saya ingin mendapatkan informasi lebih lengkap dan jadwal survey.";

const linkWhatsApp =
  "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(pesanWhatsApp);

document.getElementById("waButton").href = linkWhatsApp;
document.getElementById("stickyWa").href = linkWhatsApp;

// Animasi sederhana ketika elemen masuk layar
const cards = document.querySelectorAll(".detail-card, .gallery > div, .benefit-list div");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card) => {
  card.classList.add("reveal");
  observer.observe(card);
});
