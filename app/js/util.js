export const Util = {
  ESC_KEY: 27,
  ACTIVE_CLASS: `open`,
  body: document.querySelector(`body`),

  ready: (fn) => {
    if (document.readyState !== `loading`) {
      fn();
    } else {
      document.addEventListener(`DOMContentLoaded`, fn);
    }
  },

  addClass: (el, className) => {
    el.classList.add(className);
  },

  removeClass: (el, className) => {
    el.classList.remove(className);
  },

  hasClass: (el, className) => {
    return el.classList.contains(className);
  },

  throttle: (func, ms) => {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);

      isThrottled = true;

      setTimeout(function() {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  },

  debounce: (func, ms) => {
    let isCooldown = false;

    return function() {
      if (isCooldown) return;

      func.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
    };
  },

  isInViewport: (el) => {
    const rect = el.getBoundingClientRect();

    return (
      // rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      // rect.right >= 0 &&
      // rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - 125) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth));
  },

  lazyLoad: (elements) => {
    elements.forEach((element) => {
      if (Util.isInViewport(element) && element.dataset.srcset) {
        element.srcset = element.dataset.srcset;
        element.removeAttribute(`data-srcset`);
      }

      if (Util.isInViewport(element) && element.dataset.src) {
        element.src = element.dataset.src;
        element.removeAttribute(`data-src`);
      }
    });
  },
};
