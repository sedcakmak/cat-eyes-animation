const pupilEl = document.querySelector("#pupil");

var sound = new Howl({
  src: ["nirvana.wav"],
  loop: false,
  volume: 1,
});

let iterationCount = 0;
pupil.onanimationiteration = () => {
  iterationCount++;
  if (iterationCount === 9) sound.play();
};
