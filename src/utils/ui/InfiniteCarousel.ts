interface CarouselOptions {
  baseSpeed?: number;
  friction?: number;
  dragPower?: number;
}

export class InfiniteCarousel {
  private track: HTMLElement;
  private options: Required<CarouselOptions>;
  
  private isDown: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private scrollLeft: number = 0;
  private velocity: number = 0;
  private animationId: number | null = null;
  private lastPageX: number = 0;

  constructor(element: HTMLElement, options: CarouselOptions = {}) {
    this.track = element;
    this.options = {
      baseSpeed: 0.8,
      friction: 0.95,
      dragPower: 1.5,
      ...options,
    };
    
    this.velocity = this.options.baseSpeed;

    this.init();
  }

  private init() {
    this.track.scrollLeft = this.track.scrollWidth / 3;
    this.animate();
    this.addMouseEvents();
    this.addTouchEvents();
  }

  private animate = () => {
    if (!this.isDown) {
      if (Math.abs(this.velocity) > this.options.baseSpeed) {
        this.velocity *= this.options.friction;
        
        if (Math.abs(this.velocity) < this.options.baseSpeed + 0.1 && this.velocity > 0) {
             this.velocity = this.options.baseSpeed;
        }
      } else {
        if(this.velocity < this.options.baseSpeed) this.velocity = this.options.baseSpeed; 
      }
      
      this.track.scrollLeft += this.velocity;
    }
    
    this.checkInfiniteLoop();
    this.animationId = requestAnimationFrame(this.animate);
  };

  private checkInfiniteLoop() {
    const oneSetWidth = this.track.scrollWidth / 3;

    if (this.track.scrollLeft >= oneSetWidth * 2) {
      this.track.scrollLeft -= oneSetWidth;
    } else if (this.track.scrollLeft <= 0) {
      this.track.scrollLeft += oneSetWidth;
    }
  }

  private addMouseEvents() {
    this.track.addEventListener("mousedown", (e) => {
      this.isDown = true;
      this.track.classList.add("active:cursor-grabbing");
      this.startX = e.pageX - this.track.offsetLeft;
      this.scrollLeft = this.track.scrollLeft;
      this.lastPageX = e.pageX;
      this.velocity = 0;
    });

    const stopDragging = () => {
      this.isDown = false;
      this.track.classList.remove("active:cursor-grabbing");
    };

    this.track.addEventListener("mouseleave", stopDragging);
    this.track.addEventListener("mouseup", stopDragging);

    this.track.addEventListener("mousemove", (e) => {
      if (!this.isDown) return;
      e.preventDefault();
      
      const x = e.pageX - this.track.offsetLeft;
      const delta = (e.pageX - this.lastPageX) * this.options.dragPower;
      this.lastPageX = e.pageX;

      this.velocity = -delta;
      
      this.track.scrollLeft = this.scrollLeft - (x - this.startX) * this.options.dragPower;
    });
  }

  private addTouchEvents() {
    this.track.addEventListener("touchstart", (e) => {
      this.isDown = true;
      this.startX = e.touches[0].pageX - this.track.offsetLeft;
      this.startY = e.touches[0].pageY;
      this.scrollLeft = this.track.scrollLeft;
      this.lastPageX = e.touches[0].pageX;
      this.velocity = 0;
    }, { passive: true });

    this.track.addEventListener("touchend", () => {
      this.isDown = false;
    });

    this.track.addEventListener("touchmove", (e) => {
      if (!this.isDown) return;

      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      
      const xDiff = Math.abs(x - (this.startX + this.track.offsetLeft));
      const yDiff = Math.abs(y - this.startY);

      if (xDiff > yDiff) {
        e.preventDefault(); 
        
        const currentX = e.touches[0].pageX;
        const delta = (currentX - this.lastPageX) * this.options.dragPower;
        this.lastPageX = currentX;

        this.velocity = -delta;
        
        const walk = (x - this.track.offsetLeft - this.startX) * this.options.dragPower;
        this.track.scrollLeft = this.scrollLeft - walk;
      }
    }, { passive: false });
  }

  public destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}