
/*----------isotope---------------------*/

let  $gallery = $('.gallery').isotope({
    itemSelector: '.photo',
    layoutMode: 'masonry'
});


$('.nav__item').click(function(){
    const $this = $(this);
    const filter =  "." + $this.data('filter');
    $gallery.isotope({ filter: filter});
});




/*------------------Big-Slider--------------------------*/

$('.big-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    fade: true


});


/*---------------------------------MAP-------------------------------------*/


function initMap() {
    var barcelona = {lat: 41.38879, lng: 2.15899};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: barcelona
    });
    var marker = new google.maps.Marker({
        position: barcelona,
        map: map,
        title: 'Barcelona Spain',

    });
}

/*---------------------Brands-Slider--------------------------------*/
$('.brands-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    /*arrows: true,*/
    infinite: true,
    slidesToScroll: 1,
  variableWidth: true,
    responsive: [

        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});




/*---------------smoothscroll---------------------------*/

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 3000
});


/*--------------------------sales-slider--------------------------------------*/

$('.sales').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true
});

$('.big-sales').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    slidesToShow: 2
});