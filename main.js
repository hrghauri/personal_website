// new TypeIt(".type-writter-text", {
//   strings: "Welcome to my website!"
// }).go();

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
    .type("haha")
    .go();
})();
