import { startGame } from "./game.js";

const app = new PIXI.Application({
  backgroundColor: 0x1c1c1c,
  antialias: true,
  resizeTo: document.querySelector("#game"),
});

document.querySelector("#game").appendChild(app.view);

startGame(app);
