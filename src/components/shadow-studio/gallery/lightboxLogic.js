export function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxArtist = document.getElementById("lightbox-artist");
  const closeBtn = document.getElementById("lightbox-close");

  if (
    !lightbox ||
    !lightboxImg ||
    !lightboxTitle ||
    !lightboxArtist ||
    !lightboxContent ||
    !closeBtn
  ) {
    console.error("Lightbox initialization failed: missing required elements.");
    return;
  }

  const imgElement = lightboxImg;

  window.openLightbox = (src, title, artist) => {
    imgElement.src = src;
    lightboxTitle.textContent = title;
    lightboxArtist.textContent = artist;

    lightbox.classList.remove("hidden");
    lightboxContent.classList.add("is-opening");

    requestAnimationFrame(() => {
      lightbox.classList.remove("opacity-0");
      lightbox.setAttribute("aria-hidden", "false");
    });
    document.body.style.overflow = "hidden"; 
  };

  const closeLightbox = () => {
    lightbox.classList.add("opacity-0");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxContent.classList.remove("is-opening");

    setTimeout(() => {
      lightbox.classList.add("hidden");
      imgElement.src = ""; 
    }, 500);
    document.body.style.overflow = ""; 
  };
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
}