window.addEventListener('DOMContentLoaded', () => {

    //Slider

    $('.carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: []
    });

    //Tabs

    tabs('.product__title', '.product__list', '.product__headline', 'product__title_active');

});
