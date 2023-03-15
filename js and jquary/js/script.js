// aos activation start 
// js
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
// aos activation end 
// type effect start
var typed = new Typed('#element', {
    strings: ["<i>javascript and</i>","jquery animation example"],
    typeSpeed: 80,
  });
// type effect end

    $('.owl-carousel').owlCarousel();
    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true
    });
    var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })

// perallax 
jQuery(window).trigger('resize').trigger('scroll');