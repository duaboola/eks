//view loading logo


// $(window).on('load', function() {
//     // Add the 'loaded' class to trigger the fade-in animation
//     $('#preloader').addClass('loaded');
    
//     // After a delay, fade out the preloader
//     setTimeout(function() {
//       $('#preloader').fadeOut('slow');
//       $('body').css({'overflow':'visible'});
//     }, 1000); // Adjust the delay as needed
//   });
  

//until homepage loaded
// function fadeInOut() {
//     // Fade in the preloader
//     $('#preloader').fadeIn('slow', function() {
//       // After a short delay, fade out the preloader
//       setTimeout(function() {
//         $('#preloader').fadeOut('slow', function() {
//           // Call the function recursively to create a loop
//           fadeInOut();
//         });
//       }, 1000); // Adjust the delay as needed
//     });
//   }
  
//   $(document).ready(function() {
//     // Start the fadeInOut loop when the document is ready
//     fadeInOut();
  
//     // Simulate the completion of loading after a certain delay (replace with your actual loading completion logic)
//     setTimeout(function() {
//       // Stop the animation and fade out the preloader
//       $('#preloader').stop().fadeOut('slow');
//       $('body').css({'overflow':'visible'});
//     }, 5000); // Adjust the delay as needed
//   });
  
//   // Call the fadeInOut function to start the animation
//   fadeInOut();

document.addEventListener("DOMContentLoaded", function () {
  // Simulate the preloader duration (6 seconds)
  setTimeout(function () {
      document.body.classList.add("loaded");
  }, 4000);
});


// console.clear();

const colorArray = ["#201F1F", "#201F1F", "#201F1F", "#201F1F", "#201F1F", "#201F1F"];
const slides = document.querySelectorAll("section");
const container = document.querySelector("#panelWrap");
let dots = document.querySelector(".dots");
// let toolTips = document.querySelectorAll(".toolTip");
let oldSlide = 0;
let activeSlide = 0;
let navDots = [];
let dur = 0.6;
let offsets = [];
// let toolTipAnims = [];
let ih = window.innerHeight;
const mouseAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const handAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const cursorAnim = gsap.timeline({repeat:-1, repeatDelay:1});
const arrowAnim = gsap.timeline({repeat:-1, repeatDelay:1});

const sectionTimeline = gsap.timeline();
// document.querySelector("#upArrow").addEventListener("click", slideAnim);
// document.querySelector("#downArrow").addEventListener("click", slideAnim);

try{


// create nev dots and add tooltip listeners
for (let i = 0; i < slides.length; i++) {
let tl = gsap.timeline({paused:true, reversed:true});
  gsap.set(slides[i], { backgroundColor: colorArray[i] });
  let newDot = document.createElement("div");
  newDot.className = "dot";
  newDot.index = i;
  navDots.push(newDot);
  newDot.addEventListener("click", slideAnim);
  newDot.addEventListener("mouseenter", dotHover);
  newDot.addEventListener("mouseleave", dotHover);
  dots.appendChild(newDot);
  offsets.push(-slides[i].offsetTop);
  // tl.to(toolTips[i], 0.25, {opacity:1, ease:Linear.easeNone});
  // toolTipAnims.push(tl);

  
}



// icon animations for slide 1
// mouseAnim.fromTo("#mouseRings circle", {attr:{r:12}}, {duration: 0.8, stagger: 0.25, attr:{r:40}});
// mouseAnim.fromTo("#mouseRings circle", {opacity:0}, {duration: 0.4, stagger: 0.25, opacity:1}, 0);
// mouseAnim.fromTo("#mouseRings circle", {opacity:1}, {duration: 0.4, stagger:0.25, opacity:0}, 0.4);

// handAnim.to("#hand", {duration: 0.75, y:-16, rotation:5, transformOrigin:"right bottom"});
// handAnim.to("#hand", {duration: 0.5, y:15, ease:"power3.inOut"});
// handAnim.to("#hand", {duration: 1, y:0, rotation:0});

// gsap.set("#cursor", {rotation:240, transformOrigin:"center center", x:-25}); 
// cursorAnim.to("#cursor", 0.25, {duration: 0.25, y:-24});
// cursorAnim.to("#iconCircles circle", {duration: 0.5, stagger: 0.15, attr:{r:6}}, "expand");
// cursorAnim.to("#cursor", {duration: 1.1, y:50}, "expand");
// cursorAnim.to("#cursor", {duration: 0.75, y:0}, "contract");
// cursorAnim.to("#iconCircles circle", {duration: 0.5, attr:{r:4}}, "contract");

// arrowAnim.to("#caret", {duration: 0.5, attr:{points:"30 40, 50 65, 70 40"}, repeat:3, yoyo:true, ease:"power2.inOut", repeatDelay:0.25});

// get elements positioned
gsap.set(".dots", {yPercent:-50});
// gsap.set(".toolTips", {yPercent:-50});
  
// side screen animation with nav dots
const dotAnim = gsap.timeline({paused:true});
// cursorAnim.to("#cursor", {duration: 0.25, y:-24, onComplete: () => console.log('Cursor animation complete')});

dotAnim.to(
  ".dot",
  {
    stagger: { each: 1, yoyo: true, repeat: 1 },
    scale: 2.1,
    rotation: 0.1,
    ease: "none"
  },
  0.5
);
dotAnim.time(1);


// tooltips hovers
function dotHover() {
  // toolTipAnims[this.index].reversed() ? toolTipAnims[this.index].play() : toolTipAnims[this.index].reverse();
  toolTipAnims[this.index].reversed()
  ? toolTipAnims[this.index].play()
  : toolTipAnims[this.index].reverse();

// Add logic to create the two circles for the active dot
gsap.set(this, {
  boxShadow: this.classList.contains("active")
    ? "0 0 5px 2px rgba(255, 255, 255, 0.7), 0 0 0 2px rgba(255, 255, 255, 0.7)"
    : "none"
});
}

// Animation for the KYRO section
sectionTimeline.from(".kyro h1", { x: "-100%", opacity: 0, duration: 1 });
sectionTimeline.from(".kyro p", { x: "-100%", opacity: 0, duration: 1 }, "-=0.5");
sectionTimeline.from(".kyro .social-icons", { x: "-100%", opacity: 0, duration: 1 }, "-=0.5");

// Animation for the KYRO section images carousel
sectionTimeline.from(".kyro .carousel-inner", { x: "100%", opacity: 0, duration: 1 }, "-=0.5");


// Animation for the fume section
sectionTimeline.from(".fume h1", { x: "-100%", opacity: 0, duration: 1 });
sectionTimeline.from(".fume p", { x: "-100%", opacity: 0, duration: 1 }, "-=0.5");
sectionTimeline.from(".fume .social-icons", { x: "-100%", opacity: 0, duration: 1 }, "-=0.5");

// Animation for the KYRO section images carousel
sectionTimeline.from(".fume .carousel-inner", { x: "100%", opacity: 0, duration: 1 }, "-=0.5");

// Animation for the Team section
sectionTimeline.from(".team .team-container", { y: "200%", opacity: 0, duration: 2 }, "-=0.5");

// Animation for the Gallery section
sectionTimeline.from(".gallery .gallery_product", { y: "200%", opacity: 0, duration: 2 }, "-=0.5");

// Animation for the Media section
sectionTimeline.from(".latestmedia .latestmedia-container", { y: "200%", opacity: 0, duration: 3 }, "-=0.5");


// figure out which of the 4 nav controls called the function
  function slideAnim(e) {

    sectionTimeline.play();
  oldSlide = activeSlide;

  if (window.innerWidth <= 767) {
    // Disable animation for smaller screens
    activeSlide = e.deltaY > 0 ? activeSlide + 1 : activeSlide - 1;
    activeSlide = Math.min(Math.max(activeSlide, 0), slides.length - 1);

    // Scroll to the corresponding section
    window.scrollTo({
      top: slides[activeSlide].offsetTop,
      behavior: 'smooth',
    });

    return;

  }

  // dragging the panels
  if (this.id === "dragger") {
    activeSlide = offsets.indexOf(this.endY);
  } else {
    if (gsap.isTweening(container)) {
      return; 
    }
    // up/down arrow clicks
    if (this.id === "downArrow" || this.id === "upArrow") {
      activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
      // click on a dot
    } else if (this.className === "dot") {
      activeSlide = this.index;
      // scrollwheel
    } else {
      activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
    }
  }
  // make sure we're not past the end or beginning slide
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  if (oldSlide === activeSlide) {
    return;
  }
  // if we're dragging we don't animate the container
  if (this.id != "dragger") {
    gsap.to(container, dur, { y: offsets[activeSlide], ease:"power2.inOut", onUpdate:tweenDot });
  }

  // navDots.forEach((dot, index) => {
  //   if (index === activeSlide) {
  //     dot.classList.add('active');
  //   } else {
  //     dot.classList.remove('active');
  //   }
  // });
}

gsap.set(".hideMe", {opacity:1});
window.addEventListener("wheel", slideAnim);
window.addEventListener("resize", newSize);

// make the container a draggable element
  let dragMe = Draggable.create(container, {
  type: "y",
  edgeResistance: 1,
  onDragEnd: slideAnim,
  onDrag: tweenDot,
  onThrowUpdate: tweenDot,
  snap: offsets,
  inertia:true,
  zIndexBoost: false,
  allowNativeTouchScrolling: false,
  bounds: "#masterWrap"
});

dragMe[0].id = "dragger";
newSize();

// resize all panels and refigure draggable snap array
function newSize() {
  offsets = [];
  ih = window.innerHeight;
  gsap.set("#panelWrap", { height: slides.length * ih });
  gsap.set(slides, { height: ih });
  for (let i = 0; i < slides.length; i++) {
    offsets.push(-slides[i].offsetTop);
  }
  gsap.set(container, { y: offsets[activeSlide] });
  dragMe[0].vars.snap = offsets;
}

// tween the dot animation as the draggable moves
  function tweenDot() {
    gsap.set(dotAnim, {
    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
  });
}

// window.addEventListener(
//   "wheel",
//   function (e) {
//     // Disable slide animation for smaller screens
//     if (window.innerWidth <= 768) {
//       e.preventDefault(); // Prevent the default scroll behavior
//       const delta = e.deltaY || e.detail || e.wheelDelta; // Get the scroll direction
//       activeSlide = delta > 0 ? activeSlide + 1 : activeSlide - 1;
//       activeSlide = Math.min(Math.max(activeSlide, 0), slides.length - 1); // Ensure it stays within bounds
//       gsap.to(container, dur, { y: offsets[activeSlide], ease: "power2.inOut", onUpdate: tweenDot });
//     } else {
//       slideAnim(e);
//     }
//   },
//   { passive: false }
// );
}
catch(error) {
  console.error('GSAP Error:', error);
}

/* -----------------Gallery ----------------*/
$(document).ready(function() {
  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    // Toggle the 'active' class
    $(".filter-button").removeClass("active");
    $(this).addClass("active");

    // Toggle classes to show/hide elements
    $('.filter').addClass('hidden');
    $('.filter.' + value).removeClass('hidden');
  });

  // Set the initial filter to "kyro"
  $(".filter-button[data-filter='kyro']").click();
});


/*----------- Animation -------------*/
// document.addEventListener('DOMContentLoaded', function() {

//   console.log('DOMContentLoaded event fired');
  
//   var sections = document.querySelectorAll('section');

//   // Initialize GSAP timeline
//   var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".slider",
//       start: "top top",
//       end: "+=400%", // Adjust as needed
//       scrub: 1,
//       markers: true // For visualization, remove in production
//     }
//   });

//   // Add animations to each section
//   sections.forEach(function(section, index) {
//     tl.fromTo(section, { opacity: 0 }, { opacity: 1 }, index * 1); // Adjust duration as needed
//   });

//   // Add a class to indicate when a section is in view
//   function toggleSectionClass() {
//     sections.forEach(function(section) {
//       var rect = section.getBoundingClientRect();
//       var isInViewport = (
//         rect.top >= 0 &&
//         rect.bottom <= window.innerHeight
//       );

//       if (isInViewport) {
//         section.classList.add('section-show');
//       } else {
//         section.classList.remove('section-show');
//       }
//     });
//   }

//   // Initial check on load
//   toggleSectionClass();

//   // Check on scroll
//   window.addEventListener('scroll', toggleSectionClass);
// });




/* ------ Navbar -------*/


document.getElementById('toggleBtn').addEventListener('click', function() {
  console.log('Toggle button clicked!');

  var overlay = document.getElementById('overlay');
  var slideMenu = document.querySelector('.slide-menu');

  // Toggle the visibility of the overlay and slide menu
  if (overlay.style.width === '100%') {
    overlay.style.width = '0';
    slideMenu.style.transform = 'translateX(100%)';
    slideMenu.style.opacity = '0';
  } else {
    overlay.style.width = '100%';

    // Delay the appearance of the slide menu
    setTimeout(function() {
      slideMenu.style.transform = 'translateX(0)';
      slideMenu.style.opacity = '1';
    }, 50); // Adjust the delay as needed
  }
});

document.getElementById('closeBtn').addEventListener('click', function() {
  console.log('Close button clicked!');

  var overlay = document.getElementById('overlay');
  var slideMenu = document.querySelector('.slide-menu');

  overlay.style.width = '0';
  slideMenu.style.transform = 'translateX(100%)';
  slideMenu.style.opacity = '0';
});


var brandsLink = document.getElementById('brandsLink');
var brandsSlideMenu = document.getElementById('brandsSlideMenu');
var brandsCloseBtn = document.getElementById('brandsCloseBtn');

var servicesLink = document.getElementById('servicesLink');
var servicesSlideMenu = document.getElementById('servicesSlideMenu');
var servicesCloseBtn = document.getElementById('servicesCloseBtn');

function toggleMenu(link, slideMenu) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(link.id + ' clicked!');

    // Toggle the visibility of the slide menu
    if (slideMenu.style.transform === 'translateX(0%)') {
      slideMenu.style.transform = 'translateX(100%)';
      slideMenu.style.opacity = '0';
    } else {
      slideMenu.style.transform = 'translateX(0%)';
      slideMenu.style.opacity = '1';
    }

    // Close the other menu
    closeMenus(slideMenu);
  });
}

function closeMenus(exceptMenu) {
  if (exceptMenu !== brandsSlideMenu) {
    brandsSlideMenu.style.transform = 'translateX(100%)';
    brandsSlideMenu.style.opacity = '0';
  }

  if (exceptMenu !== servicesSlideMenu) {
    servicesSlideMenu.style.transform = 'translateX(100%)';
    servicesSlideMenu.style.opacity = '0';
  }
}

// Toggle visibility for brands and services menus
toggleMenu(brandsLink, brandsSlideMenu);
toggleMenu(servicesLink, servicesSlideMenu);

// Additional event listener to close the slide menus when clicking outside of them
document.addEventListener('click', function () {
  closeMenus();
});

// Event listeners for close buttons
brandsCloseBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  closeMenus();
});

servicesCloseBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  closeMenus();
});


/* ------ scrolling navbar -----*/
// Example of a simple debounce function
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

// document.addEventListener('DOMContentLoaded', function() {
//   var navContainer = document.querySelector('.nav-background-container');

//   window.onscroll = function() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       navContainer.classList.add('solid-background');
//     } else {
//       navContainer.classList.remove('solid-background');
//     }
//   };
// });


/*----- Animation -----*/





