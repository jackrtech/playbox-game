export const ASSET_LIST = [

  { alias: "bg", src: "assets/raw/background.png" },
  { alias: "footer", src: "assets/raw/footer.webp" },
  { alias: "paypalBalance", src: "assets/raw/paypal_balance.webp" },
  { alias: "bush1", src: "assets/raw/bush_1.png" },
  { alias: "bush2", src: "assets/raw/bush_2.png" },
  { alias: "bush3", src: "assets/raw/bush_3.png" },
  { alias: "tree1", src: "assets/raw/tree_1.png" },
  { alias: "tree2", src: "assets/raw/tree_2.png" },
  { alias: "lamppost", src: "assets/raw/lamppost.png" },


  { alias: "sheetPlayer", src: "assets/raw/sheet_player.png" },
  { alias: "sheetEnemy", src: "assets/raw/sheet_enemy.png" },


  // rewardables/ obstacles
  { alias: "rewardCash", src: "assets/raw/reward_cash.png" },
  { alias: "rewardPaypal", src: "assets/raw/reward_paypal.webp" },
  { alias: "cone", src: "assets/raw/cone.webp" },

 
  { alias: "hand", src: "assets/raw/hand.png" },
  { alias: "coneGlow", src: "assets/raw/cone_glow.webp" },


  // finish/end UI
  { alias: "finishLine", src: "assets/raw/finish_line.png" },
  { alias: "paypalCounter", src: "assets/raw/paypal_final_counter.webp" },
  { alias: "paypalCounterGlow", src: "assets/raw/paypal_final_counter_glow.png" },
  { alias: "fail", src: "assets/raw/fail.png" },



  // confetti 
  { alias: "conf1", src: "assets/raw/confetti_1.png" },
  { alias: "conf2", src: "assets/raw/confetti_2.png" },
  { alias: "conf3", src: "assets/raw/confetti_3.png" },
  { alias: "conf4", src: "assets/raw/confetti_4.png" },
  { alias: "conf5", src: "assets/raw/confetti_5.png" },
  { alias: "conf6", src: "assets/raw/confetti_6.png" },
  { alias: "conf7", src: "assets/raw/confetti_7.png" },
  { alias: "conf8", src: "assets/raw/confetti_8.png" },
  { alias: "conf9", src: "assets/raw/confetti_9.png" },
  { alias: "conf10", src: "assets/raw/confetti_10.png" },
];

export async function loadAssets() {
  await PIXI.Assets.load(ASSET_LIST);
}
