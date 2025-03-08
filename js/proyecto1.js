const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});

typewriter.typeString("- Well + Good").pauseFor(900).start();
