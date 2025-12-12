export function setupGalleryFilter(navElement) {
  if (!navElement) return;

  const filterBtns = navElement.querySelectorAll(".filter-btn");
  const pill = navElement.querySelector("#filter-pill");

  function movePillTo(targetBtn) {
    if (!pill || !targetBtn || window.innerWidth < 768) return; 

    const width = targetBtn.offsetWidth;
    const left = targetBtn.offsetLeft;
    pill.style.width = `${width}px`;
    pill.style.transform = `translateX(${left}px)`;
    pill.style.opacity = '1';
  }

  const initialActive = navElement.querySelector(".active-filter");
  if (initialActive) {
    setTimeout(() => movePillTo(initialActive), 100);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (btn.classList.contains("active-filter")) return;

      movePillTo(btn);

      filterBtns.forEach((b) => {
        b.classList.remove("active-filter", "cursor-default", "text-aux-secondary", "md:text-primarybg");
        b.classList.add("text-gray-400", "hover:text-white", "cursor-pointer");
      });

      btn.classList.remove("text-gray-400", "hover:text-white", "cursor-pointer");
      btn.classList.add("text-aux-secondary", "md:text-primarybg", "active-filter", "cursor-default");

      btn.blur();

      const filterValue = btn.getAttribute("data-filter");
      const event = new CustomEvent("filter-gallery", {
        detail: { category: filterValue }
      });
      document.dispatchEvent(event);
    });
  });

  window.addEventListener('resize', () => {
    const active = navElement.querySelector(".active-filter");
    if (active) movePillTo(active);
  });
}