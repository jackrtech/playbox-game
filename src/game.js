import { loadAssets } from "./assets.js";

export async function startGame(app) {
  await loadAssets();

  const bg = PIXI.Sprite.from("bg");
  bg.anchor.set(0.5);
  app.stage.addChild(bg);

  const player = PIXI.Sprite.from("sheetPlayer");
  player.anchor.set(0.5, 1); // center horizontally, bottom vertically
  app.stage.addChild(player);

  function fitCover(sprite, w, h) {
    const sw = sprite.texture.width;
    const sh = sprite.texture.height; // get original image dimensions
    const scale = Math.max(w / sw, h / sh); // calculate scale needed
    sprite.scale.set(scale);

    // w / sw = scale needed to fit image width
    // h / sh = scale needed to fit image height
  } 

  function layout() {
    const w = app.renderer.width;
    const h = app.renderer.height;

    // background
    bg.x = w / 2;
    bg.y = h / 2;
    fitCover(bg, w, h);

    // player
    player.x = w *0.25 //player 25% from left
    player.y = h *0.90

    player.scale.set(0.4) 
  }

  // call layout function once
  layout();

  // recall layout again whenever Pixi resizes
  window.addEventListener("resize", layout);
}
