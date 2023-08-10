import {Util} from "../util";

const CURRENT_CLASS = `current`;

const highlightCurrentLink = (id) => {
  if (Util.body.querySelector(`.main-wrap`).dataset.page === id) {
    if (Util.body.querySelector(`.nav-menu__link.${CURRENT_CLASS}`)) {
      Util.removeClass(Util.body.querySelector(`.nav-menu__link.${CURRENT_CLASS}`), CURRENT_CLASS);
    }

    Util.addClass(Util.body.querySelector(`.nav-menu__link[data-page="${Util.body.querySelector(`.main-wrap`).dataset.page}"]`), CURRENT_CLASS);
  }
};

export const HighlightMenu = () => {
  const links = [];
  document.querySelectorAll(`.nav-menu__link[data-page]`).forEach((link) => {
    links.push(link.dataset.page);
  });

  links.forEach((id) => {
    highlightCurrentLink(id);
  });
};
