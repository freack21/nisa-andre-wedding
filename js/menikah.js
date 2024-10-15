// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let toTop = document.getElementById("toTop");
  if (!toTop) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
var audioElement = document.querySelector("audio");

audioElement.addEventListener(
  "ended",
  function () {
    this.play();
  },
  false
);

let musicPlayed = false;

window.addEventListener("click", function () {
  if (!musicPlayed) {
    audioElement.play();
    musicPlayed = true;
  }
});

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});
