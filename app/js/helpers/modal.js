import {Util} from "../util.js";

export class Modal {
  constructor(element) {
    this._element = element ? element : null;
    this._elementModal = null;
    this._elementOverlay = null;
    this._elementLastFocus = null;
  }

  init() {
    this._element.addEventListener(`click`, this._clickOpenButtonHandler.bind(this));
  }

  openModal() {
    this._elementModal = document.querySelector(`[data-modal="${this._element.dataset.modalOpen}"]`);
    this._elementOverlay = this._elementModal.parentNode;
    this._elementLastFocus = document.activeElement;

    this._elementModal.setAttribute(`tabindex`, `0`);
    this._elementModal.setAttribute(`aria-hidden`, `false`);
    this._elementModal.focus();
    this._elementModal.querySelectorAll(`[tabindex="-1"]`)
      .forEach((element) => {
        element.setAttribute(`tabindex`, `0`);
      });

    Util.addClass(Util.body, `modal-open`);
    Util.addClass(this._element, Util.ACTIVE_CLASS);
    Util.addClass(this._elementModal, Util.ACTIVE_CLASS);
    Util.addClass(this._elementOverlay, Util.ACTIVE_CLASS);

    document.querySelectorAll(`[data-modal-close="${this._element.dataset.modalOpen}"]`)
      .forEach((element) => {
        element.addEventListener(`click`, this._clickCloseButtonHandler.bind(this));
      });

    if (this._elementModal.querySelector(`video`)) {
      this._elementModal.querySelector(`video`).play();
    }

    document.addEventListener(`focus`, this._focusModalHandler.bind(this), true);
    document.addEventListener(`keydown`, this._pressKeydownHandler.bind(this));
    this._elementOverlay.addEventListener(`click`, this._clickOverlayHandler.bind(this));
  }

  closeModal() {
    this._elementModal.setAttribute(`tabindex`, `-1`);
    this._elementModal.setAttribute(`aria-hidden`, `true`);
    this._elementModal.querySelectorAll(`[tabindex="0"]`)
      .forEach((element) => {
        element.setAttribute(`tabindex`, `-1`);
      });

    Util.removeClass(Util.body, `modal-open`);
    Util.removeClass(this._element, Util.ACTIVE_CLASS);
    Util.removeClass(this._elementModal, Util.ACTIVE_CLASS);
    Util.removeClass(this._elementOverlay, Util.ACTIVE_CLASS);

    document.querySelectorAll(`[data-modal-close="${this._element.dataset.modalOpen}"]`)
      .forEach((element) => {
        element.removeEventListener(`click`, this._clickCloseButtonHandler.bind(this));
      });

    if (this._elementModal.querySelector(`video`)) {
      this._elementModal.querySelector(`video`).pause();
      this._elementModal.querySelector(`video`).currentTime = 0;
    }

    document.removeEventListener(`focus`, this._focusModalHandler.bind(this));
    document.removeEventListener(`keydown`, this._pressKeydownHandler.bind(this));
    this._elementOverlay.removeEventListener(`click`, this._clickOverlayHandler.bind(this));

    // this._elementLastFocus.focus();
  }

  getModalId() {
    return this._element.dataset.modalOpen;
  }

  _clickOpenButtonHandler() {
    this.openModal();
  }

  _clickCloseButtonHandler() {
    this.closeModal();
  }

  _clickOverlayHandler(e) {
    if (e.target === this._elementModal.parentNode) {
      this.closeModal();
    }
  }

  _focusModalHandler(e) {
    if (Util.hasClass(this._elementModal, Util.ACTIVE_CLASS) && !this._elementModal.contains(e.target)) {
      e.stopPropagation();
      this._elementModal.focus();
    }
  }

  _pressKeydownHandler(e) {
    if (e.keyCode === Util.ESC_KEY) {
      this.closeModal();
    }
  }
}
