

  
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
  
  }
  
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

  // Animation for the about section
  sectionTimeline.from(".about1 h2", { x: "-100%", opacity: 0, duration: 1 });
  sectionTimeline.from(".about1 .carousel-inner", { x: "100%", opacity: 0, duration: 1 });
  
  
  // Animation for the deets section
  sectionTimeline.from(".deets h2", { x: "-100%", opacity: 0, duration: 1 });
  sectionTimeline.from(".deets p", { x: "-100%", opacity: 0, duration: 1 }, "-=0.5");
  sectionTimeline.from(".deets img", { x: "100%", opacity: 0, duration: 1 }, "-=0.5");
  
  
  
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
  
 
  }
  catch(error) {
    console.error('GSAP Error:', error);
  }
  
 
  
  
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
  
  function toggleSlideMenu(slideMenu) {
    if (slideMenu.style.transform === 'translateX(0%)') {
      slideMenu.style.transform = 'translateX(100%)';
      slideMenu.style.opacity = '0';
    } else {
      slideMenu.style.transform = 'translateX(0%)';
      slideMenu.style.opacity = '1';
    }
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
  
  function closeSlideMenu(slideMenu) {
    slideMenu.style.transform = 'translateX(100%)';
    slideMenu.style.opacity = '0';
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
  
  
  
  
  
  
  