//smooth scoll down
$(document).ready(function () {
  $("nav a").click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
});

//scoll trigger
$(document).ready(function() {
  $(window).scroll(function() {
    $('.level-fill').each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scrollPosition + windowHeight - 50) {
        $(this).addClass('animate');
        $(this).css('width', $(this).attr('data-width'));
      }
    });
  });
});

//slide show 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $(".slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}






