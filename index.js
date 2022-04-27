const pupilEl = document.querySelector("#pupil");
var sound = new Howl({
  src: ["nirvana.wav"],
  loop: false,
  volume: 1,
});

// const wrapper = document.querySelectorAll(".pupil-wrapper");
let iterationCount = 0;

pupil.onanimationiteration = () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount / 2}`);
  if (iterationCount === 9) sound.play();
};

// (function jiggle() {
//   wrapper.forEach((pupil) => {
//     setTimeout(() => {
//       pupil.classList.add("soft-jiggle");
//     }, 2000);
//   });
// })();
