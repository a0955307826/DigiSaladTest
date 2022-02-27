const header = document.getElementById('header');
const blueLogo = document.getElementsByClassName('blueLogo')[0];
const lineTop = document.getElementsByClassName('lineTop')[0];
const lineMiddle = document.getElementsByClassName('lineMiddle')[0];
const lineBottom = document.getElementsByClassName('lineBottom')[0];
const about = document.getElementById('about');
const toTop = document.getElementById('toTop');

// navbar顯示
window.addEventListener('scroll', function() {
  if(window.scrollY >= about.offsetTop - 50) {
    header.style.background = 'rgba(255, 255, 255, 0.9)';
    blueLogo.style.visibility = 'initial';
    lineTop.style.backgroundColor = '#414042';
    lineMiddle.style.backgroundColor = '#414042';
    lineBottom.style.backgroundColor = '#414042';
    toTop.style.opacity = '1';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0)';
    blueLogo.style.visibility = 'hidden';
    lineTop.style.backgroundColor = '#FFFFFF';
    lineMiddle.style.backgroundColor = '#FFFFFF';
    lineBottom.style.backgroundColor = '#FFFFFF';
    toTop.style.opacity = '0';
  }
})

// click salad to about
$('.saladItem').click(function(){
  $('html,body').animate({
    scrollTop: about.offsetTop
  }, 800);
});

// menu event
const lineItem = document.getElementsByClassName('lineItem')[0];
const navbarBackground = document.getElementsByClassName('navbarBackground')[0];
lineItem.addEventListener('click', function() {
  navbarBackground.style.left = '0';
  blueLogo.style.display = 'none';
});

// close menu
const wrongItem = document.getElementsByClassName('wrongItem')[0];
wrongItem.addEventListener('click', function() {
  navbarBackground.style.left = '120%';
  blueLogo.style.display = 'block';
});

$(function(){
  AOS.init();
});

// toTop
$('#toTop').click(function(){
  $('html,body').animate({
    scrollTop: 0
  }, 800);
});