import Swiper, {Autoplay, } from "swiper";

export const NewVirt = () => {
  const V = new Swiper(`.swiper-friend`, {
    modules: [Autoplay],
    wrapperClass: `swiper-holder`,
    slideClass: `swiper-cardsholder`,
    slideActiveClass: `swiper-cardsholder--active`,
    speed: 4000,
    spaceBetween: 30,
    loop:true,
    slidesPerView: 1,
    breakpoints: {
      900:{
        slidesPerView: 1,
      },
      1200:{
        slidesPerView: 1,
      },
      1440:{
        slidesPerView: 2,
      },
    },
    autoplay: {
      delay: 2000,
    },
  });
};



