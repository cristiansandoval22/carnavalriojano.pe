import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default para móviles
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
        loop: true,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
