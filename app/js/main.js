import { NewsSlider } from "./sliders/news";
import { NewVirt} from "./sliders/slider";
import { Sliderbutton} from "./sliders/masters";

NewsSlider()
NewVirt()
Sliderbutton()


// window.addEventListener('scroll', (event) => {
//     const header = document.querySelector('.header')
//     if (header) {
//         if (window.scrollY >= 50) {
//             if (!header.classList.contains('active')) {
//                 header.classList.add('active')
//             }
//         } else {
//             if (header.classList.contains('active')) {
//                 header.classList.remove('active')
//             }
//         }
//     }
// })



// const burger = document.querySelector('button.burger[type="button"]')
// if (burger) {
//   burger.addEventListener('click', function (event) {
//     const modal = document.querySelector('.modal-overlay')
//     if (modal) {
//       if (modal.classList.contains('active')) {
//         modal.classList.remove('active')
//       } else {
//         modal.classList.add('active')
//         modal.querySelector('.modal').classList.add('active')
//       }
//     }
//   })
// }

// const overlay = document.querySelector('.modal-overlay')
// if (overlay) {

//   overlay.addEventListener('click', function (event) {
//     const modal = overlay.querySelector('.modal')
//       if (this === event.target) {
//         modal.classList.remove('active')
//         if (this.classList.contains('active')) {
//           setTimeout(() => {
//             this.classList.remove('active')
//           }, 750)
//         }
//       }

//   })

//   const closeMenu = document.querySelector('.modal-btn__close')
//   if (closeMenu) {

//     closeMenu.addEventListener('click', function (event) {
//       const modal = overlay.querySelector('.modal')

//           modal.classList.remove('active')
//           if (overlay.classList.contains('active')) {
//             setTimeout(() => {
//               overlay.classList.remove('active')
//             }, 750)
//           }

//     })
//   }
// }




