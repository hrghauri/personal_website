(function writeWelcomeMessage() {
  let secondLineLength = 0;
  new TypeIt(".welcome-text", {
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
  const navItems = document.querySelector(".main-nav-items");
  const nav = document.querySelector(".nav");
  const main = document.querySelector(".main");
  const footerText = document.querySelector(".footer-text");
  const navLinks = document.querySelectorAll(".main-nav-item");

  burger.addEventListener("click", function() {
    navItems.classList.toggle("navItemsOnBurgerClick");
    nav.classList.toggle("navOnBurgerClick");
    main.classList.toggle("mainOnBurgerClick");
    footerText.classList.toggle("footerOnBurgerClick");
    navLinks.forEach(function(navLink, index) {
      if (navLink.style.animation) navLink.style.animation = "";
      else
        navLink.style.animation = `navLinkFade 0.5s forwards ${index / 5 +
          0.2}s`;
    });

    burger.classList.toggle("navIconToggle");
  });
})();

particlesJS.load("particles-js", "particles.json", function() {
  console.log("callback - particles.js config loaded");
});
