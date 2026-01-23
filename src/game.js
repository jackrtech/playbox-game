import { loadAssets } from "./assets.js";

export async function startGame(app) {
  await loadAssets();

  const bg = PIXI.Sprite.from("bg");
  bg.anchor.set(0.5);
  bg.x = app.screen.width / 2;
  bg.y = app.screen.height / 2;

  app.stage.addChild(bg);
}
