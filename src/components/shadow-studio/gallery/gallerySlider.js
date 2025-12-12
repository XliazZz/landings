import KeenSlider from "keen-slider";

let sliderInstance;
let allSlidesCache = [];
let sliderElement;
let progressBar;
let leftArrow;
let rightArrow;
let swipeHint;

function updateProgress(instance) {
  if (!progressBar) return;
  const progress = instance.track.details.progress;
  const width = Math.min(Math.max(progress * 100, 0), 100);
  progressBar.style.width = `${width}%`;
}

function updateNavigation(instance) {
  const progress = instance.track.details.progress;

  const currentLeft = document.getElementById("arrow-left");
  const currentRight = document.getElementById("arrow-right");

  if (currentLeft) {
    if (progress <= 0.01) {
      currentLeft.classList.add("opacity-0", "pointer-events-none");
    } else {
      currentLeft.classList.remove("opacity-0", "pointer-events-none");
    }
  }

  if (currentRight) {
    if (progress >= 0.99) {
      currentRight.classList.add("opacity-0", "pointer-events-none");
    } else {
      currentRight.classList.remove("opacity-0", "pointer-events-none");
    }
  }
}

export function initSlider() {
  if (!sliderElement) {
    sliderElement = document.getElementById("keen-slider");
    progressBar = document.getElementById("progress-bar");
    leftArrow = document.getElementById("arrow-left");
    rightArrow = document.getElementById("arrow-right");
    swipeHint = document.getElementById('swipe-hint');
  }

  if (!sliderElement) return;

  if (allSlidesCache.length === 0) {
    allSlidesCache = Array.from(sliderElement.children);
  }

  sliderInstance = new KeenSlider(sliderElement, {
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 32 },
      },
    },
    created(s) {
      sliderElement.style.opacity = "1";
      updateNavigation(s);
      updateProgress(s);
    },
    slideChanged(s) {
      updateNavigation(s);
      if (swipeHint && s.track.details.rel > 0) {
          swipeHint.classList.add('opacity-0');
          setTimeout(() => {
              swipeHint.style.display = 'none';
          }, 1000); 
      }
    },
    detailsChanged(s) {
      updateProgress(s);
      updateNavigation(s);
    },
  });

  const newLeft = leftArrow.cloneNode(true);
  const newRight = rightArrow.cloneNode(true);
  leftArrow.parentNode.replaceChild(newLeft, leftArrow);
  rightArrow.parentNode.replaceChild(newRight, rightArrow);
  const currentLeft = document.getElementById("arrow-left");
  const currentRight = document.getElementById("arrow-right");

  currentLeft?.addEventListener("click", () => sliderInstance.prev());
  currentRight?.addEventListener("click", () => sliderInstance.next());
}


document.addEventListener("filter-gallery", (e) => {
  const category = e.detail.category;

  if (!sliderInstance || !sliderElement) return;

  sliderInstance.destroy();
  sliderElement.innerHTML = "";

  const filteredSlides = allSlidesCache.filter((slide) => {
    const slideCat = slide.getAttribute("data-category");
    return category === "all" || slideCat === category;
  });
  if (filteredSlides.length > 0) {
    filteredSlides.forEach((slide) => sliderElement.appendChild(slide));

    if (progressBar) {
      progressBar.style.width = "0%";
      progressBar.style.transition = "none";
      setTimeout(() => {
        progressBar.style.transition = "";
      }, 50);
    }

    initSlider();
  }
});

initSlider();

document.addEventListener("astro:page-load", () => {
  allSlidesCache = [];
  if (sliderInstance) sliderInstance.destroy();
  initSlider();
});