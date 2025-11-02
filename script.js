//感谢Copilot为本js文件Debug
class TextSlider {
    constructor(containerId, texts, options = {}) {
      this.container = document.getElementById(containerId);
      this.texts = texts;
      this.currentIndex = 0;
      this.duration = options.duration || 3000;
      this.animationSpeed = options.animationSpeed || 500;
      this.isAnimating = false;
      
      this.initStyles();
      this.render();
      this.start();
    }
  
    initStyles() {
      const style = document.createElement('style');
      style.textContent = `
        .text-slider-container {
          position: relative;
          height: 60px;
          overflow: hidden;
        }
        .text-slide {/* 文字样式 */
          display: flex;
          position: absolute;
          width: 100%;
          padding: 15px;
          font-size: 19px;
          transition: transform ${this.animationSpeed}ms ease-out, opacity ${this.animationSpeed}ms ease-out;
          transform: translateY(100%);
          opacity: 0;
        }
        .text-slide::before {
          display: block;
          content: "";
          width: 8px;
          height: 8px;
          background-color: #e50914;
          margin-top: 10px;
          margin-left: 5px;
          margin-right: 8px;
        }
        .text-slide.active {
          transform: translateY(0);
          opacity: 1;
        }
        .text-slide.next {
          transform: translateY(-100%);
        }
      `;
      document.head.appendChild(style);
    }
  
    render() {
      this.container.innerHTML = '';
      this.container.classList.add('text-slider-container');
      
      this.texts.forEach((text, index) => {
        const slide = document.createElement('div');
        slide.className = `text-slide ${index === 0 ? 'active' : ''}`;
        slide.textContent = text;
        this.container.appendChild(slide);
      });
      
      this.slides = this.container.querySelectorAll('.text-slide');
    }
  
    slideToNext() {
        if (this.isAnimating) return;
        this.isAnimating = true;
      
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.classList.add('next'); 
        currentSlide.classList.remove('active');
      
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        const nextSlide = this.slides[this.currentIndex];
        nextSlide.classList.add('active'); 
      
        setTimeout(() => {
          currentSlide.classList.remove('next'); 
          this.isAnimating = false;
        }, this.animationSpeed);
    }
  
    start() {
      this.interval = setInterval(() => {
        this.slideToNext();
      }, this.duration);
    }
  
    stop() {
      clearInterval(this.interval);
    }
  }
  
  const slider = new TextSlider('slider-container', [
    'Latest Update :',
    '修改了主页背景图(.esi)',
    '添加了特殊日期庆祝页面',
  ], {
    duration: 4500,  // 切换间隔(ms)
    animationSpeed: 500  // 动画速度(ms)

  });
