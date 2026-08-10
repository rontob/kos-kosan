// ===============================
// PENGATURAN WEBSITE
// ===============================
const nomorWhatsApp = "6281382319039";

const pesanWhatsApp =
  "Halo, saya tertarik dengan properti kos-kosan 7 kamar + rumah tinggal 4 kamar di Pondok Labu, Cilandak, Jakarta Selatan. Saya ingin mendapatkan informasi lebih lengkap dan jadwal survey.";

const linkWhatsApp =
  "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(pesanWhatsApp);

document.getElementById("waButton").href = linkWhatsApp;
document.getElementById("stickyWa").href = linkWhatsApp;

// Lazy-load YouTube:
// Thumbnail tidak memuat iframe YouTube.
// Iframe baru dibuat setelah pengguna menekan tombol play.
document.querySelectorAll(".youtube-lazy").forEach((button) => {
  button.addEventListener("click", () => {
    const videoId = button.dataset.videoId;
    const iframe = document.createElement("iframe");

    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(videoId) +
      "?autoplay=1&rel=0&modestbranding=1";

    iframe.title = "Video properti";
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    button.replaceWith(iframe);
  }, { once: true });
});

// Animasi elemen ketika masuk layar.
const cards = document.querySelectorAll(
  ".detail-card, .gallery > div, .benefit-list div, .video-card"
);

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
