import {Util} from "../util.js";

export class Tab {
  constructor(element) {
    this._element = element ? element : null;
  }

  init() {
    this._highlightTab();
    this._element.addEventListener(`click`, this._clickSwitchButtonHandler.bind(this));

    let focus = 0;
    this._element.parentNode.addEventListener(`keydown`, (e) => {
      if (e.key === `ArrowRight` || e.key === `ArrowLeft` || e.key === `ArrowDown` || e.key === `ArrowUp`) {
        e.preventDefault();
        this._element.parentNode.querySelectorAll(`[data-tab-button]`)[focus].setAttribute(`tabindex`, -1);
        if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
          focus++;
          if (focus >= this._element.parentNode.querySelectorAll(`[data-tab-button]`).length) {
            focus = 0;
          }
        } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
          focus--;
          if (focus < 0) {
            focus = this._element.parentNode.querySelectorAll(`[data-tab-button]`).length - 1;
          }
        }

        this._element.parentNode.querySelectorAll(`[data-tab-button]`)[focus].setAttribute(`tabindex`, 0);
        this._element.parentNode.querySelectorAll(`[data-tab-button]`)[focus].focus();
      }
    });
  }

  addHandler() {
    this._element.addEventListener(`click`, this._clickSwitchButtonHandler.bind(this));
  }

  switchTab(hash, cb) {
    const id = hash ? hash : this._element.dataset.tabButton || this._element.dataset.tabLink;

    if (document.querySelector(`[data-tab-button="${id}"]`)) {
      document.querySelectorAll(`[data-tab-button="${id}"]`)[0].parentNode.querySelectorAll(`[data-tab-button]`).forEach((element) => {
        Util.removeClass(element, Util.ACTIVE_CLASS);
        element.setAttribute(`aria-selected`, false);
      });
    }

    document.querySelectorAll(`[data-tab="${id}"]`).forEach((tab) => {
      tab.parentNode.querySelectorAll(`[data-tab]`).forEach((element) => {
        Util.removeClass(element, Util.ACTIVE_CLASS);

        element.setAttribute(`hidden`, true);
        element.setAttribute(`tabindex`, -1);
      });
    });

    document.querySelectorAll(`[data-tab-button="${id}"], [data-tab="${id}"]`).forEach((element) => {
      Util.addClass(element, Util.ACTIVE_CLASS);

      if (element.dataset.tabButton) {
        element.setAttribute(`aria-selected`, true);
      } else {
        element.removeAttribute(`hidden`);
      }

      element.setAttribute(`tabindex`, 0);
    });

    if (typeof cb === `function`) {
      cb();
    }
  }

  _highlightTab() {
    const hash = location.hash.replace(`#`, ``);

    if (hash !== ``) {
      this.switchTab(hash);
    }
  }

  _clickSwitchButtonHandler() {
    if (this._element.dataset.tabLink) {
      this._element.blur();

      if (document.querySelector(`.nav[data-opener="nav"]`) && Util.hasClass(document.querySelector(`.nav[data-opener="nav"]`), Util.ACTIVE_CLASS)) {
        Util.removeClass(document.querySelector(`.nav[data-opener="nav"]`), Util.ACTIVE_CLASS);
      }
    }

    this.switchTab();
  }
}
