import Swiper, {Autoplay, } from "swiper";

export const NewsSlider = () => {
  const slider = new Swiper(`.swiper`, {
    modules: [Autoplay],
    wrapperClass: `swiper-cards`,
    slideClass: `swiper-cards__slide`,
    slideActiveClass: `swiper-cards__slide--active`,
    speed: 850,
    spaceBetween: 30,
    loop:true,
    slidesPerView: 2,
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      900:{
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 6,
      }

    },
    autoplay: {
      delay: 10,
    },
  });
};


