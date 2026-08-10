/* =========================================================
   SCRIPT.JS
   KOS-KOSAN PONDOK LABU
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     PENGATURAN WHATSAPP
     ======================================================= */

  const nomorWhatsApp = "6281382319039";

  const pesanWhatsApp =
    "Halo, saya tertarik dengan properti kos-kosan 7 kamar + rumah tinggal 4 kamar di Pondok Labu, Cilandak, Jakarta Selatan. Saya ingin mendapatkan informasi lebih lengkap dan jadwal survey.";

  const linkWhatsApp =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    encodeURIComponent(pesanWhatsApp);


  /* =======================================================
     TOMBOL WHATSAPP
     ======================================================= */

  const waButton = document.getElementById("waButton");
  const stickyWa = document.getElementById("stickyWa");

  if (waButton) {
    waButton.href = linkWhatsApp;
  }

  if (stickyWa) {
    stickyWa.href = linkWhatsApp;
  }


  /* =======================================================
     LAZY LOAD YOUTUBE
     
     YouTube tidak langsung dimuat ketika halaman dibuka.
     Iframe baru dibuat setelah thumbnail diklik.
     ======================================================= */

  const youtubeButtons =
    document.querySelectorAll(".youtube-lazy");

  youtubeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const videoId = button.dataset.videoId;

      if (!videoId) {
        console.warn("ID video YouTube tidak ditemukan.");
        return;
      }

      const iframe = document.createElement("iframe");

      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1&rel=0&modestbranding=1";

      iframe.title =
        "Video properti Kos-Kosan Pondok Labu";

      iframe.loading = "lazy";

      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

      iframe.allowFullscreen = true;

      iframe.style.width = "100%";
      iframe.style.aspectRatio = "16 / 9";
      iframe.style.height = "auto";
      iframe.style.display = "block";
      iframe.style.border = "0";

      button.replaceWith(iframe);

    }, {
      once: true
    });

  });


  /* =======================================================
     ANIMASI REVEAL SAAT SCROLL
     ======================================================= */

  const animatedElements =
    document.querySelectorAll(
      ".detail-card, " +
      ".gallery > div, " +
      ".benefit-list div, " +
      ".video-card"
    );


  /* Tambahkan class awal */
  animatedElements.forEach(function (element) {
    element.classList.add("js-reveal");
  });


  /* =======================================================
     INTERSECTION OBSERVER
     ======================================================= */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries, observerInstance) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


    animatedElements.forEach(function (element) {
      observer.observe(element);
    });


  } else {

    /* Fallback browser lama */

    animatedElements.forEach(function (element) {
      element.classList.add("visible");
    });

  }


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

      link.addEventListener("click", function (event) {

        const targetId =
          link.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =======================================================
     LOG
     ======================================================= */

  console.log(
    "Kos-Kosan Pondok Labu website berhasil dimuat."
  );

});
