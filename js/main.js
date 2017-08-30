$(document).ready(function() {
  new Swiper('.slider-section .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    // autoplay: 4000,
    loop: true,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });

  new Swiper('.rewiews-slider .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: '.reviews-pagination',
    paginationClickable: true,
    // autoplay: 4000,
    loop: true,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });

  $('.product-thumb').on('click', function() {
    var $productImg = $(this).parent().next('.product-photo').find('IMG');
    $productImg.attr('src', $(this).find('IMG').attr('src'));
    $(this).addClass('active').siblings('.product-thumb').removeClass('active');
  });
});

function initMap() {
  var coords = {lat: 46.469020, lng: 30.752267};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coords,
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });
  map.panBy($(document).width() / -4, 0);
}
