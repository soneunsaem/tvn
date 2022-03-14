//swipe.js

const swiper = new Swiper('.swiper', {
    // 옵션설정
    direction: 'horizontal', //슬라이더 방향
    effect: 'slide',  //슬라이더 효과
    loop: true, // 슬라이더 순환여부
    autoplay: {
        delay : 5000
    },
  
    // 하단버튼
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 방향화살표
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});