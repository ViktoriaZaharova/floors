$('[name="phone"]').mask('+7(999) 999-99-99');

$('.availability-slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

// $('.recommended-slider').slick({
//     slidesToShow: 3,
//     prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
//     nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
//     responsive: [
//         {
//             breakpoint: 920,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });

$('.suggestions-slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    appendArrows: '.suggestions-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});

$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});


$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.product-col:hidden').slice(0, 4).slideDown();
});