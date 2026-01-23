import { startGame } from "./game.js";

const app = new PIXI.Application({
  width: 720,
  height: 1280,
  backgroundColor: 0x1c1c1c,
  antialias: true,
});

document.querySelector("#game").appendChild(app.view);

startGame(app);
