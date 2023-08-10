import {Util} from "../util";

const closeOpenedElem = () => {
  const openerEl = document.querySelectorAll(`[data-opener]`);

  openerEl.forEach((elem) => {
    if (Util.hasClass(elem, Util.ACTIVE_CLASS)) {
      Util.removeClass(elem, Util.ACTIVE_CLASS);
      Util.removeClass(Util.body, `open-nav`);
    }
  });

  document.removeEventListener(`keydown`, pressKeydownHandler);
};

const pressKeydownHandler = (e) => {
  if (e.keyCode === Util.ESC_KEY) {
    closeOpenedElem();
  }
};

export const Opener = () => {
  document.addEventListener(`click`, Util.throttle((e) => {
    const target = e.target;
    const isButtonOrLink = target.tagName === `BUTTON` || target.tagName === `A`;

    if (target.dataset[`opener`] && isButtonOrLink) {
       e.preventDefault();
      const id = target.dataset[`opener`];
      const notCurrentElem = document.querySelectorAll(`[data-opener]:not([data-opener="${id}"]).open`);
      const currentElem = document.querySelectorAll(`[data-opener="${id}"]`);

      notCurrentElem.forEach((elem) => {
        Util.removeClass(elem, Util.ACTIVE_CLASS);
      });

      currentElem.forEach((elem) => {
        if (Util.hasClass(elem, Util.ACTIVE_CLASS)) {
          Util.removeClass(elem, Util.ACTIVE_CLASS);
          Util.removeClass(Util.body, `open-nav`);

          if (elem.tagName === `BUTTON`) {
            document.removeEventListener(`keydown`, pressKeydownHandler);
          }
        } else {
          Util.addClass(elem, Util.ACTIVE_CLASS);

          if (target.dataset[`opener`] === `nav`) {
            Util.addClass(Util.body, `open-nav`);
          }

          if (elem.tagName === `BUTTON`) {
            document.addEventListener(`keydown`, pressKeydownHandler);
          }
        }
      });
    }

    return false;
  }, 100));
};
