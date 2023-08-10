import Swiper, {Navigation} from "swiper";

export const Sliderbutton = () => {
  const button = new Swiper(`.masters-row`, {
    modules: [Navigation],
    wrapperClass: `masters-swiper`,
    slideClass: `employees`,
    slideActiveClass: `employees--active`,
    speed: 1000,
    loop:true,
    slidesPerView: 1,
    breakpoints: {
      800: {
        slidesPerView: 2,
      },
        1200:{
          slidesPerView: 2,
        },
        1201:{
          slidesPerView: 3,
        },
      },
    navigation: {
      enabled: true,
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    }
  });
};

