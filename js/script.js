// header search bar 
const searchBtn = document.querySelector('.header-search-btn');
const searchBar = document.querySelector('.header-search-bar');

// cart content 
const cartBtn = document.querySelector('.cart-content');
const siteHeaderCart = document.querySelector('.site-header-cart-side');
const closeHeaderCart = document.querySelector('.close-cart-side');

// navbar 
const hamburger = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');



// search bar toggle 
searchBtn.addEventListener('click', headerSearchBar);

function headerSearchBar(){
    searchBar.classList.toggle('active');
}

// cart content visible & close
cartBtn.addEventListener('click', headerCartlistOpen);
closeHeaderCart.addEventListener('click', headerCartlistClose);

function headerCartlistOpen(){
    siteHeaderCart.classList.add('active');
}
function headerCartlistClose(){
    siteHeaderCart.classList.remove('active');
}

// Mobile menu toggle 
hamburger.addEventListener('click', toggleMenu);

function toggleMenu(){
    navbar.classList.toggle('nav-toggle');
}

// footer search bar toggle 

const footerSearchBtn = document.querySelector('.handheld-footer-bar .search a');
const footerSearchBar = document.querySelector('.footer-search-bar');


footerSearchBtn.addEventListener('click', footerSearchBarToggle);

function footerSearchBarToggle(){
    let searchBarNone = footerSearchBar.getAttribute('data-toggle', 'toggle');

    if(searchBarNone){
        footerSearchBar.style.display = 'block';
        searchBarNone = footerSearchBar.removeAttribute('data-toggle', 'toggle');
    }else{
        searchBarNone = footerSearchBar.setAttribute('data-toggle', 'toggle');
        footerSearchBar.style.display = 'none';
    }
}


// parallax 
const sectionHome = document.querySelector('#home');
sectionHome.addEventListener('mousemove', parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}



$(document).ready(function(){

    $('.responsive').slick({
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



    // autoplay
//     $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

  });


// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// http://kenwheeler.github.io/slick/