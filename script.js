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

// Lazy-load video: file video baru dipasang ke <source>
// ketika elemen mendekati viewport. Ini membantu menghemat bandwidth.
const lazyVideos = document.querySelectorAll(".lazy-video");

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const video = entry.target;
    const source = video.querySelector("source");
    const src = video.dataset.src;

    if (src && source && !source.src) {
      source.src = src;
      video.load();
    }

    observer.unobserve(video);
  });
}, {
  rootMargin: "300px 0px",
  threshold: 0.01
});

lazyVideos.forEach(video => videoObserver.observe(video));

// Animasi elemen ketika masuk layar
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
