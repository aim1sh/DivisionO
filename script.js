// GSAP animations for .mission section

// Animation for background gradient on hover
gsap.to('.mission', {
    backgroundPosition: '100% 100%',
    ease: 'power2.out',
    duration: 0.5,
  });
  
  // Animation for mission header
  gsap.from('.mission-header h2', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });
  
  // Animation for mission body
  gsap.from('.mission-body', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });
  
  // Additional animations as needed
  function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    console.log("Clicked page3Center");
    console.log("Video paused:", video.paused);
    if (video.paused) {
      video.play();
      gsap.to(video, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        borderRadius: "0px"
      });
    } else {
      video.pause();
    }
  });

  video.addEventListener("click", function () {
    console.log("Clicked video");
    console.log("Video paused:", video.paused);
    if (!video.paused) {
      video.pause();
      gsap.to(video, {
        scaleX: 0.7,
        scaleY: 0,
        opacity: 0,
        borderRadius: "30px"
      });
    }
  });

  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var videoOverlay = elem.querySelector("video");
      if (videoOverlay) {
        videoOverlay.style.opacity = 1;
        videoOverlay.play();
      }
    });

    elem.addEventListener("mouseleave", function () {
      var videoOverlay = elem.querySelector("video");
      if (videoOverlay) {
        videoOverlay.style.opacity = 0;
        videoOverlay.pause();
        videoOverlay.currentTime = 0; // Reset video to start
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.getElementById('play-button');
  var video = document.getElementById('page3-video');
  var page3Center = document.querySelector('.page3-center');

  playButton.addEventListener('click', function() {
    video.style.opacity = 1; // Show video
    video.style.pointerEvents = 'auto'; // Enable pointer events on video

    if (video.paused) {
      video.play();
      // Hide play button and text
      page3Center.style.opacity = 0;
      page3Center.style.pointerEvents = 'none'; // Disable pointer events
    } else {
      video.pause();
    }
  });

  // Event listener for video end to show play button and text again
  video.addEventListener('ended', function() {
    page3Center.style.opacity = 1;
    page3Center.style.pointerEvents = 'auto'; // Enable pointer events
  });

  // Event listener to pause video if clicked on the video area
  video.addEventListener('click', function() {
    if (!video.paused) {
      video.pause();
    }
  });
});



const toggleButton = document.getElementById('js-navbar-toggle');
const menu = document.getElementById('js-menu');

toggleButton.addEventListener('click', function() {
    menu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('open');
    }
});

// Toggle submenu visibility
const menuItems = document.querySelectorAll('nav > ul > li');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
            const isOpen = this.classList.contains('open');
            menuItems.forEach(function(otherItem) {
                otherItem.classList.remove('open');
            });
            if (!isOpen) {
                this.classList.add('open');
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
  function startCounters() {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
      const target = +counter.parentElement.getAttribute('data-target');
      const duration = 5000; // Animation duration in milliseconds (5 seconds)
      const increment = target / (duration / 50); // Adjust increment based on duration

      let currentCount = 0;
      const updateCount = () => {
        currentCount += increment;

        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount);
          setTimeout(updateCount, 50); // Adjust delay to control animation speed (higher delay for slower animation)
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  let animationStarted = false;

  function checkScroll() {
    const countersSection = document.getElementById('counters');
    const countersPosition = countersSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (countersPosition < screenHeight && !animationStarted) {
      startCounters();
      animationStarted = true;
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load if counters are already in view
});





locomootiveAnimation()

page3VideoAnimation()
