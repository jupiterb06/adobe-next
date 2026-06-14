$(document).ready(function() {
  
  // Listen to the window scroll event
  $(window).scroll(function() {
    
    // Calculate the vertical position of the bottom of the viewport
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    $('.fade-in-element').each(function() {
      // Calculate the vertical position of the top of the element
      var top_of_element = $(this).offset().top;
      
      // If the top of the element is within the viewport, fade it in
      if (bottom_of_window > top_of_element) {
        $(this).animate({
          'opacity': '1',
          'margin-top': '0px' // Complements the optional CSS slide-up
        }, 800); // 800ms duration for a smooth transition
      }
    });
    
  });
  
});
const mapSection = document.getElementById("map");
$("#scroll-to-map").on("click", function() {
    mapSection.scrollIntoView({behavior:"smooth"});
});

const aboutTheScene = document.getElementById("about-the-scene");
$("#scroll-to-about").on("click", function() {
    aboutTheScene.scrollIntoView({behavior:"smooth"});
});

const aboutMe = document.getElementById("about-me");
$("#scroll-to-about-me").on("click", function() {
    aboutMe.scrollIntoView({behavior:"smooth"});
});

const moreAbout = document.getElementById("more-about");
$("#scroll-to-more-about").on("click", function() {
    moreAbout.scrollIntoView({behavior:"smooth"});
});

const whichOrg = document.getElementById("which-org");
$("#scroll-to-which-org").on("click", function() {
    whichOrg.scrollIntoView({behavior:"smooth"});
});


const whyMe = document.getElementById("why-me");
$("#scroll-to-why-me").on("click", function() {
    whyMe.scrollIntoView({behavior:"smooth"});
});


const ai = document.getElementById("ai");
$("#scroll-to-ai").on("click", function() {
    ai.scrollIntoView({behavior:"smooth"});
});

const moreAi = document.getElementById("more-ai");
$("#scroll-to-more-ai").on("click", function() {
    moreAi.scrollIntoView({behavior:"smooth"});
});

const start = document.getElementById("start");
$("#back-to-top").on("click", function() {
    start.scrollIntoView({behavior:"smooth"});
});
