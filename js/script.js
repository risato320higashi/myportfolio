$(function(){
  $(window).on('scroll', function() {
     $('header').toggleClass('fixed', $(this).scrollTop() > 10);
     });
 });

const contactLinks = document.querySelectorAll('#insta-link');
const instaImg = document.querySelector('.insta-icon img');
contactLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    instaImg.classList.add('white');
  });
  link.addEventListener('mouseleave', () => {
    instaImg.classList.remove('white');
  });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});