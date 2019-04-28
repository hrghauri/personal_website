(function writeWelcomeMessage() {
  var app = document.querySelector(".type-writter-effect");

  (function callback() {
    new Typewriter(app)
      .typeString("Hi, Stranger!")
      .pauseFor(1500)
      .deleteAll()
      .typeString("Welcome to my website!")
      .pauseFor(1500)
      .typeString("<br>")
      .typeString("I am a Full Stack Software Developer.")
      .pauseFor(1500)
      .deleteAll()
      .start()
      .callFunction(callback);
  })();
})();

(function navSlide() {
  const burger = document.querySelector(".burger");
  const navItemsList = document.querySelector(".nav-items-list");
  const navListItem = document.querySelectorAll(".nav-list-item");

  burger.addEventListener("click", function() {
    navItemsList.classList.toggle("nav-items-list-OnBurgerIconClick");
    navListItem.forEach(function(navLink, index) {
      if (navLink.style.animation) navLink.style.animation = "";
      else
        navLink.style.animation = `navLinkFade 0.5s forwards ${index / 5 +
          0.2}s`;
    });
    burger.classList.toggle("burger-icon-toggle");
  });
})();

particlesJS.load("particles-js", "particles.json", function() {
  console.log("callback - particles.js config loaded");
});

// document.querySelector(".project-link").addEventListener("click", function(e) {
//   e.preventDefault();
//   document
//     .querySelector(".section-projects")
//     .scrollIntoView({ behavior: "smooth" });
// });
