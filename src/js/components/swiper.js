import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

// import 'swiper/swiper-bundle.css';

const reviewSlider = new Swiper('.swiper', {
    spaceBetween: 32,
    slidesPerView: 1.5,
    simulateTouch: false,
    scrollbarDraggable: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1440: {
            centeredSlides: true,
            slidesPerView: "auto",
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

