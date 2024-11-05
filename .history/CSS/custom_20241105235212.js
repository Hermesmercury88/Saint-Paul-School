$(document).ready(function(){
    $(".quotes-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,  // แสดงลูกศร
        navText: ["<", ">"],  // กำหนดข้อความหรือไอคอนของลูกศร
        dots: false,  // ซ่อนจุดบอกตำแหน่ง
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
    });
  });
  