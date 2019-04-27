(function writeWelcomeMessage() {
  let secondLineLength = 0;
  new TypeIt(".type-writter-effect", {
    deleteSpeed: 60,
    speed: 120,
    loop: true
  })
    .type("Hi, Stranger!")
    .pause(2500)
    .delete()
    .pause(1000)
    .type("Welcome to my website!")
    .pause(2000)
    .break()
    .type("I am a Full-Stack Software Developer.")
    .pause(2000)
    .delete(secondLineLength)
    .go();
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
