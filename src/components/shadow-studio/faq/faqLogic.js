export function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggle = item.querySelector(".faq-toggle");
    
    toggle?.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("is-open")) {
          otherItem.classList.remove("is-open");
          const otherToggle = otherItem.querySelector(".faq-toggle");
          otherToggle?.setAttribute("aria-expanded", "false");
        }
      });

      const isOpen = item.classList.contains("is-open");

      if (isOpen) {
        item.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal-element");
  revealElements.forEach((el) => observer.observe(el));
}