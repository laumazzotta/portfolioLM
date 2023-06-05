jQuery(function($) {

    $('.hero-title > h1 > span').addClass('animate__fadeInLeft');

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);

        
    });

});

let navButton = document.getElementById('nav-icon3');
let navMobile = document.getElementById('myNav');
let brand = document.getElementById('brand');

navButton.onclick = function() {
    this.classList.toggle('open');
    navMobile.classList.toggle('h-100');
    brand.classList.toggle('width-100px');

}

