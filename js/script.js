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

$('.carousel').slick({
    autoplay: true, // 自動再生を有効にする
    autoplaySpeed: 3000, // 自動再生の速度（ミリ秒）
    dots: true, // ドットナビゲーションを表示する
    infinite: true, // 無限ループを有効にする
    fade: true // フェードイン・アウトを有効にする
});