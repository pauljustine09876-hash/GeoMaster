var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #1e1ec1ff";
        crsr.style.backgroundColor = "#1e1ec1ff";
    });
});

gsap.to("#nav", {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});
gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});

// Get the element
const exploreElement = document.getElementById('explore');

// Add event listener to handle the click
exploreElement.addEventListener('click', () => {
    // Redirect to the main page (index.html)
    window.location.href = 'main.html';  // Replace 'index.html' with your main page's URL
});

// Get the element by ID
const discoverElement = document.getElementById('discover');

// Add event listener to handle the click
discoverElement.addEventListener('click', () => {
    // Open GeoGuessr's website in a new tab
    window.open('https://www.geoguessr.com/', '_blank');
});

// Get the element by ID
const liveElement = document.getElementById('live');

// Add event listener to handle the click
liveElement.addEventListener('click', () => {
    // Open the GeoMaster website in a new tab
    window.open('https://geo-master-plum.vercel.app/', '_blank');
});



// JavaScript to enable smooth scrolling
document.getElementById('discoverLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('page4').scrollIntoView({
        behavior: 'smooth' // Enables smooth scrolling
    });
});

// JavaScript to enable smooth scrolling
document.getElementById('missionlink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('page3').scrollIntoView({
        behavior: 'smooth' // Enables smooth scrolling
    });
});

// JavaScript to enable smooth scrolling
document.getElementById('page2').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('page2').scrollIntoView({
        behavior: 'smooth' // Enables smooth scrolling
    });
});

// JavaScript to enable smooth scrolling
document.getElementById('#about-us-in-name').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('#about-us-in-name').scrollIntoView({
        behavior: 'smooth' // Enables smooth scrolling
    });
});

// JavaScript to enable smooth scrolling
document.getElementById('#page1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    document.getElementById('#page1').scrollIntoView({
        behavior: 'smooth' // Enables smooth scrolling
    });
});




