/* ------ Navbar -------*/
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
  
  

  /* ---------- Job Filter -------*/
  document.addEventListener('DOMContentLoaded', function () {
    // Get filter elements
    var searchInput = document.getElementById('searchInput');
    var locationDropdown = document.getElementById('locationDropdown');
    var categoryDropdown = document.getElementById('categoryDropdown');
    var findButton = document.querySelector('.btn-outline-light'); // Use a class to identify the button
  
    // Add event listener to the Find button
    findButton.addEventListener('click', function () {
      filterJobs();
    });
  
    function filterJobs() {
        // Get filter values
        var searchValue = searchInput.value.toLowerCase();
        var locationValue = locationDropdown.value.toLowerCase();
        var categoryValue = categoryDropdown.value.toLowerCase();
      
        // Get all job listings
        var jobListings = document.querySelectorAll('.job .rounded-rectangle');
      
        // Flag to check if any listings match the filter criteria
        var anyMatch = false;
      
        // Loop through job listings and show/hide based on filter criteria
        jobListings.forEach(function (listing) {
          var jobTitle = listing.querySelector('h3').innerText.toLowerCase();
          var jobLocation = listing.querySelector('p').innerText.toLowerCase();
          var jobCategory = listing.querySelector('.btn-outline-light').innerText.toLowerCase();
      
          // Check if the listing matches the filter criteria
          var titleMatch = jobTitle.includes(searchValue);
          var locationMatch = jobLocation.includes(locationValue);
          var categoryMatch = categoryValue === 'all' || jobCategory === categoryValue;
      
          // Show or hide the listing based on filter criteria
          if (titleMatch && locationMatch && categoryMatch) {
            listing.style.display = 'block';
            anyMatch = true; // At least one listing matched
          } else {
            listing.style.display = 'none';
          }
        });
      
        // Display "No results found" message if no listings matched
        if (!anyMatch) {
          var noResultsMessage = document.createElement('div');
          noResultsMessage.innerText = 'No results found';
          noResultsMessage.classList.add('no-results-message'); // Optional: Add a class for styling
          document.getElementById('jobListings').appendChild(noResultsMessage);
        } else {
          // Remove the "No results found" message if there were matches
          var existingMessage = document.querySelector('.no-results-message');
          if (existingMessage) {
            existingMessage.remove();
          }
        }
      }
    })

    //contact

// JavaScript/jQuery to handle tab switching
// JavaScript/jQuery to handle tab switching
// $(document).ready(function() {
//     $('#myTabs a').on('click', function (e) {
//         e.preventDefault();
//         $(this).tab('show');
//     });

//     $('#myTabs a').on('shown.bs.tab', function (e) {
//         var targetPane = $(e.target).attr("href");
//         $('html, body').animate({
//             scrollTop: $(targetPane).offset().top
//         }, 500);
//     });
// });


// //Navbar
// window.addEventListener("scroll", function () {
//     var scrollPosition = window.scrollY;
//     var header = document.getElementById("topLeftButton");
  
//     // Add 'scrolled' class to buttons when scrolled
//     if (scrollPosition > 0) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
  

