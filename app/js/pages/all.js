import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

window.refreshScroll = function () {
  ScrollTrigger.refresh(true);
};

export const PageAll = () => {
  const matchMedia = gsap.matchMedia();

  matchMedia.add(`(min-width: 1200px)`, () => {
    // investor
    if (document.querySelector(`.investor`)) {
      gsap.fromTo(`.investor-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.investor`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      if (document.querySelector(`.investor-terms`)) {
        gsap.fromTo(`.investor-terms`, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: `.investor`,
            start: `top 60%`,
          },
          y: 0,
          opacity: 1,
        });

        gsap.from(`.investor-terms__count span`, {
          textContent: 0,
          duration: 2,
          snap: { textContent: 1 },
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: `.investor`,
            start: `top center`,
          },
        });
      }

      document.querySelectorAll(`.investor-links__item`).forEach((element) => {
        gsap.fromTo(element, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: element,
            start: `top 120%`,
            end: `top center`,
            scrub: 1,
          },
          y: 0,
          opacity: 1,
        });
      });
    }

    // privileges
    if (document.querySelector(`.privileges`)) {
      gsap.fromTo(`.privileges-header`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.privileges`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      gsap.fromTo(`.privileges-list__item`, {
        scale: 0.8,
        opacity: 0,
      }, {
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.privileges`,
          start: `top 70%`,
        },
        scale: 1,
        opacity: 1,
      });

      document.querySelectorAll(`.privileges-list__percent span`).forEach((element) => {
        gsap.from(element, {
          textContent: element.dataset.count,
          duration: 1.2,
          snap: { textContent: 1 },
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: `.privileges`,
            start: `top 70%`,
          },
        });
      });
    }

    if (document.querySelector(`.privileges-inner`)) {
      gsap.fromTo(`.privileges-header`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.privileges-inner`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      document.querySelectorAll(`.privileges-list__item`).forEach((element) => {
        gsap.fromTo(element, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: element,
            start: `top 120%`,
            end: `top center`,
            scrub: 1,
          },
          y: 0,
          opacity: 1,
        });
      });
    }

    // geography
    if (document.querySelector(`.geography`)) {
      gsap.fromTo(`.geography-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.geography`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      gsap.fromTo(`.geography-info`, {
        scale: 0.8,
        opacity: 0,
      }, {
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.geography`,
          start: `top 70%`,
        },
        scale: 1,
        opacity: 1,
      });

      gsap.fromTo(`.geography-roads`, {
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: `.geography`,
          start: `top bottom`,
          end: `top center`,
          scrub: 1,
        },
        opacity: 1,
      });

      gsap.fromTo(`.geography-line`, {
        strokeDashoffset: -1500,
      }, {
        duration: 3,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.geography`,
          start: `top center`,
        },
        strokeDashoffset: 0,
      });

      gsap.to(`.geography-circle, .geography-zone`, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.geography`,
          start: `top center`,
        },
        strokeDashoffset: 0,
      });

      gsap.to(`.geography-dot, .geography-pin, .geography-text`, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.geography`,
          start: `top center`,
        },
        opacity: 1,
      });

      document.querySelectorAll(`.geography-info`).forEach((element) => {
        const id = element.dataset.id;

        element.addEventListener(`mouseover`, function () {
          document.querySelector(`.geography-circle--${id}`).classList.add(`active`);
        });

        element.addEventListener(`mouseout`, function () {
          document.querySelector(`.geography-circle--${id}`).classList.remove(`active`);
        });
      });
    }

    // development
    if (document.querySelector(`.development`)) {
      gsap.fromTo(`.development-header, .development-inner`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.development`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      if (document.querySelector(`.development-line svg`)) {
        gsap.fromTo(`.development-line svg`, {
          strokeDashoffset: -1900,
        }, {
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: `.development`,
            start: `top 80%`,
            end: `bottom 20%`,
            scrub: 1,
          },
          strokeDashoffset: 0,
        });
      }

      if (document.querySelector(`.development-plate`)) {
        gsap.to(`.development-plate`, {
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: `.development`,
            start: `top center`,
            end: `bottom top`,
            scrub: 1,
          },
          motionPath: {
            path: [
              {x: `0vw`, y: `0vh`, rotate: -35},
              {x: `-20vw`, y: `50vh`, rotate: -35},
              {x: `-50vw`, y: `80vh`, rotate: 35},
              {x: `-40vw`, y: `100vh`, rotate: -20},
              {x: `-70vw`, y: `150vh`, rotate: 15},
            ],
          },
        });
      }
    }

    // news
    if (document.querySelector(`.news`)) {
      gsap.fromTo(`.news-header, .news-inner`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.news`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });
    }

    if (document.querySelector(`.news-list__item:not(.news-slider-item)`)) {
      document.querySelectorAll(`.news-list__item:not(.news-slider-item)`).forEach((element) => {
        gsap.fromTo(element, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: element,
            start: `top 120%`,
            end: `top center`,
            scrub: 1,
          },
          y: 0,
          opacity: 1,
        });
      });
    }

    // infrastructure
    if (document.querySelector(`.infrastructure`)) {
      gsap.fromTo(`.infrastructure-header, .infrastructure-inner`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.infrastructure`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });
    }

    // city
    if (document.querySelector(`.city`)) {
      gsap.fromTo(`.city-content`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.city`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      gsap.fromTo(`.city-image`, {
        scale: 0.8,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.city`,
          start: `top 70%`,
        },
        scale: 1,
        opacity: 1,
      });
    }

    // steps
    if (document.querySelector(`.steps`)) {
      gsap.fromTo(`.steps-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.steps`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      gsap.to(`.steps-list__item`, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.steps`,
          start: `top center`,
          toggleClass: `visible`,
        },
      });
    }

    // docs
    if (document.querySelector(`.docs`)) {
      gsap.fromTo(`.docs-header`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.docs`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      gsap.fromTo(`.docs-list__item`, {
        scale: 0.8,
        opacity: 0,
      }, {
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.docs`,
          start: `top 70%`,
        },
        scale: 1,
        opacity: 1,
      });
    }

    // principles
    if (document.querySelector(`.principles`)) {
      gsap.fromTo(`.principles-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.principles`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      document.querySelectorAll(`.principles-list__item`).forEach((element) => {
        gsap.fromTo(element, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: element,
            start: `top 120%`,
            end: `top center`,
            scrub: 1,
          },
          y: 0,
          opacity: 1,
        });
      });
    }

    // scene
    if (document.querySelector(`.scene`)) {
      gsap.fromTo(`.scene-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.scene`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      gsap.to(`.scene`, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.scene`,
          start: `top 40%`,
          toggleClass: `animate`,
        },
      });
    }

    // graph
    if (document.querySelector(`.graph`)) {
      gsap.fromTo(`.graph-header, .graph-info`, {
        x: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.graph`,
          start: `top 70%`,
        },
        x: 0,
        opacity: 1,
      });

      gsap.fromTo(`.graph-canvas__circle`, {
        strokeDashoffset: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.graph`,
          start: `top center`,
        },
        strokeDashoffset: -500,
      });

      gsap.fromTo(`.graph-canvas__text`, {
        opacity: 0,
      }, {
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.graph`,
          start: `top center`,
        },
        opacity: 1,
      });
    }

    // tables
    if (document.querySelector(`.tables`)) {
      gsap.fromTo(`.tables-header`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.tables`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });

      document.querySelectorAll(`.tables-details`).forEach((element) => {
        element.querySelector(`.tables-opener`).addEventListener(`click`, function () {
          if (this.classList.contains(`open`)) {
            this.classList.remove(`open`);
            element.querySelector(`.tables-body`).classList.remove(`open`);
          } else {
            this.classList.add(`open`);
            element.querySelector(`.tables-body`).classList.add(`open`);
          }

          refreshScroll();
        });

        gsap.fromTo(element, {
          y: `100px`,
          opacity: 0,
        }, {
          duration: 1,
          scrollTrigger: {
            toggleActions: `play pause resume reverse`,
            trigger: element,
            start: `top 120%`,
            end: `top center`,
            scrub: 1,
          },
          y: 0,
          opacity: 1,
        });
      });
    }

    // feedback
    if (document.querySelector(`.feedback`)) {
      gsap.fromTo(`.feedback-header, .feedback-inner`, {
        y: `100px`,
        opacity: 0,
      }, {
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          toggleActions: `play pause resume reverse`,
          trigger: `.feedback`,
          start: `top 70%`,
        },
        y: 0,
        opacity: 1,
      });
    }
  });
};
