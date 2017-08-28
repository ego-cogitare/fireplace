// var slider = new Swiper('.swiper-container', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   pagination: '.swiper-pagination',
//   paginationClickable: true,
//   // autoplay: 4000,
//   loop: true,
//   spaceBetween: 0,
//   mousewheelControl: false,
//   speed: 1000
// });
//
// $(document).ready(function() {
//   var $burger = $('LABEL[for="menu-switcher"]')
//     , $switcher = $('#menu-switcher')
//     , $nav = $('.nav-holder');
//
//   $switcher.on('click', function() {
//     $(window).outerWidth() <= 1023 ?
//       $nav.css({ left: $(this).is(':checked') ? (parseInt($burger.offset().left) - 150) + 'px' : '100%' }) :
//       $nav.css({ left: $(this).is(':checked') ? $burger.offset().left : '100%' });
//   });
//   $(window).bind('resize', function() {
//     if ($switcher.is(':checked')) {
//       console.log('asdf')
//       $(window).outerWidth() <= 1023 ?
//         $nav.css({ left: (parseInt($burger.offset().left) - 150) + 'px' }) :
//         $nav.css({ left: $burger.offset().left });
//     }
//   });
//
//   $('.accordion-title').on('click', function() {
//     $(this).next().slideToggle().closest('.accordion-wrapper').toggleClass('opened');
//   });
// });
