interface HeaderConfig {
  headerId: string;
  toggleBtnId: string;
  mobileMenuId: string;
  mobileLinksSelector: string;

  scrollThreshold?: number;
  onOpen?: (elements: HeaderElements) => void;
  onClose?: (elements: HeaderElements) => void;
}

interface HeaderElements {
  header: HTMLElement;
  btn: HTMLElement;
  menu: HTMLElement;
  links: NodeListOf<Element>;
  html: HTMLElement;
  body: HTMLElement;
}

export class HeaderController {
  private elements: HeaderElements | null = null;
  private config: HeaderConfig;
  private isOpen: boolean = false;

  constructor(config: HeaderConfig) {
    this.config = {
      scrollThreshold: 20,
      ...config,
    };
    this.init();
  }

  private init() {
    const header = document.getElementById(this.config.headerId);
    const btn = document.getElementById(this.config.toggleBtnId);
    const menu = document.getElementById(this.config.mobileMenuId);
    const links = document.querySelectorAll(this.config.mobileLinksSelector);
    const html = document.documentElement;
    const body = document.body;

    if (!header || !btn || !menu) {
      console.warn("HeaderController: Faltan elementos en el DOM");
      return;
    }

    this.elements = { header, btn, menu, links, html, body };

    window.addEventListener("scroll", this.handleScroll.bind(this), { passive: true });
    this.handleScroll();

    btn.addEventListener("click", this.toggleMenu.bind(this));
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.isOpen) this.toggleMenu();
      });
    });

    window.addEventListener("lenis-scroll-start", () => {
      if (this.isOpen) this.toggleMenu();
    });
  }

  private handleScroll() {
    if (!this.elements) return;
    const { header } = this.elements;
    
    if (window.scrollY > (this.config.scrollThreshold || 20)) {
      header.setAttribute("data-scrolled", "true");
    } else {
      header.setAttribute("data-scrolled", "false");
    }
  }

  public toggleMenu() {
    if (!this.elements) return;
    const { btn, menu, header, html, body } = this.elements;

    this.isOpen = !this.isOpen;

    btn.setAttribute("aria-expanded", String(this.isOpen));
    btn.setAttribute("data-state", this.isOpen ? "open" : "closed");
    header.setAttribute("data-menu-open", String(this.isOpen));

    if (this.isOpen) {
      menu.classList.remove("translate-x-full");
      menu.setAttribute("aria-hidden", "false");
      
      html.classList.add("overflow-hidden", "lenis-stopped");
      body.classList.add("overflow-hidden");

      if (this.config.onOpen) this.config.onOpen(this.elements);

    } else {
      menu.classList.add("translate-x-full");
      menu.setAttribute("aria-hidden", "true");
      
      html.classList.remove("overflow-hidden", "lenis-stopped");
      body.classList.remove("overflow-hidden");

      if (this.config.onClose) this.config.onClose(this.elements);
    }
  }
}