import { loadAssets } from "./assets.js";

export async function startGame(app) { //exporting my startgame function to main.js
    await loadAssets();

    const bg = PIXI.Sprite.from("bg");
    bg.anchor.set(0.5);
    app.stage.addChild(bg);

    const sheet = PIXI.Assets.get("sheetTestJSON"); // retrieve the spritesheet that was loaded from my texture.json

    console.log("Player atlas frame keys:", Object.keys(sheet.textures));

    const standTex = sheet.textures["player_idle.png"]; // get each frame texture from the atlas.
    const blinkTex = sheet.textures["player_blinking.png"];

    const player = PIXI.Sprite.from("standTex");
    player.anchor.set(0.5, 1); // center horizontally, bottom vertically
    app.stage.addChild(player);

    function blinkLoop() { 
        const delayMs = 2000 + Math.random() * 2000; //random delay between 2000ms and 4000ms

        setTimeout(() => { // wait for the random delay before blinking.
            player.texture = blinkTex; // swap the texture to the blink frame.

            setTimeout(() => { // wait a short moment to hold the blink.
                player.texture = standTex; // swap back to eyes open.
                blinkLoop(); // call again for eternal blinking
            }, 120); // hold blink timer.
        }, delayMs); 
    } 

    blinkLoop();


    function fitCover(sprite, w, h) {
        const tex = sprite.texture;
        const sw = tex.orig.width;  //.orig is one of many default properties of texture, 'Original, untrimmed size of the image/frame'
        const sh = tex.orig.height; // get original image dimensions
        const scale = Math.max(w / sw, h / sh); // calculate scale needed
        sprite.scale.set(scale);

        // w / sw = scale needed to fit image width
        // h / sh = scale needed to fit image height
    }

    function layout() {
        const w = app.renderer.width; //read the width + height of the pixi canvas
        const h = app.renderer.height;

        // background
        bg.x = w / 2; //position bg at horizontal and vertical center
        bg.y = h / 2;
        fitCover(bg, w, h); //scale bg so it covers the screen

        // player
        player.x = w * 0.25 //player 25% from left
        player.y = h * 0.75 //player 80% from the top 

        player.scale.set(0.55)
    }

    // call layout function once
    layout();

    // recall layout again whenever Pixi resizes
    window.addEventListener("resize", layout);
}