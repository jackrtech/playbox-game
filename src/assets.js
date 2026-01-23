export const ASSET_LIST = [

  { alias: "bg", src: "./assets/background.png" },
  { alias: "footer", src: "./assets/footer.webp" },
  { alias: "paypalBalance", src: "./assets/paypal_balance.webp" },
  { alias: "bush1", src: "./assets/bush_1.png" },
  { alias: "bush2", src: "./assets/bush_2.png" },
  { alias: "bush3", src: "./assets/bush_3.png" },
  { alias: "tree1", src: "./assets/tree_1.png" },
  { alias: "tree2", src: "./assets/tree_2.png" },
  { alias: "lamppost", src: "./assets/lamppost.png" },


  { alias: "sheetPlayer", src: "./assets/sheet_player.png" },
  { alias: "sheetEnemy", src: "./assets/sheet_enemy.png" },
  

  // rewardables/ obstacles
  { alias: "rewardCash", src: "./assets/reward_cash.png" },
  { alias: "rewardPaypal", src: "./assets/reward_paypal.webp" },
  { alias: "cone", src: "./assets/cone.webp" },

 
  { alias: "hand", src: "./assets/hand.png" },
  { alias: "coneGlow", src: "./assets/cone_glow.webp" },


  // finish/end UI
  { alias: "finishLine", src: "./assets/finish_line.png" },
  { alias: "paypalCounter", src: "./assets/paypal_final_counter.webp" },
  { alias: "paypalCounterGlow", src: "./assets/paypal_final_counter_glow.png" },
  { alias: "fail", src: "./assets/fail.png" },



  // confetti 
  { alias: "conf1", src: "./assets/confetti_1.png" },
  { alias: "conf2", src: "./assets/confetti_2.png" },
  { alias: "conf3", src: "./assets/confetti_3.png" },
  { alias: "conf4", src: "./assets/confetti_4.png" },
  { alias: "conf5", src: "./assets/confetti_5.png" },
  { alias: "conf6", src: "./assets/confetti_6.png" },
  { alias: "conf7", src: "./assets/confetti_7.png" },
  { alias: "conf8", src: "./assets/confetti_8.png" },
  { alias: "conf9", src: "./assets/confetti_9.png" },
  { alias: "conf10", src: "./assets/confetti_10.png" },
];

export async function loadAssets() {
  await PIXI.Assets.load(ASSET_LIST);
}
