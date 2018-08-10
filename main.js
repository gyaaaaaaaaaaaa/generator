function generator(){
  // まず全シーンを空にしてから
  var scenes = document.getElementsByClassName("scene");
  for (var i = 0; i < scenes.length; i++) {
    scenes[i].innerHTML = "";
  }

  /*---------------------------------------------
   * シーン1
  ---------------------------------------------*/
  // 以下のテキスト群からランダムに1個選択
  var scene_1 = [
    [
      "男女数人で心霊スポットへ肝試しに行く",
    ],
  ];
  var scene_1_number = Math.floor(Math.random() * scene_1.length);
  var scene_1_number2 = Math.floor(Math.random() * scene_1[scene_1_number].length);
  var target_scene_1 = document.getElementById("scene_1");
  target_scene_1.innerHTML = "1 - " + scene_1[scene_1_number][scene_1_number2];

  /*---------------------------------------------
   * シーン2
  ---------------------------------------------*/
  // 前シーンが「男女数人で心霊スポットへ肝試しに行く」なら、以下のテキスト群からランダムに1個選択
  if (scene_1[scene_1_number][scene_1_number2] === "男女数人で心霊スポットへ肝試しに行く") {
    var scene_2 = [
      [
        "メンバーの一人に霊や怪異を信じない男Aがいる",
      ],
    ];
    var scene_2_number = Math.floor(Math.random() * scene_2.length);
    var scene_2_number2 = Math.floor(Math.random() * scene_2[scene_2_number].length);
    var target_scene_2 = document.getElementById("scene_2");
    target_scene_2.innerHTML = "2 - " + scene_2[scene_2_number][scene_2_number2];
  }

  /*---------------------------------------------
   * シーン3
  ---------------------------------------------*/
  // 前シーンが「メンバーの一人に霊や怪異を信じない男Aがいる」なら、以下のテキスト群からランダムに1個選択
  if (scene_2[scene_2_number][scene_2_number2] === "メンバーの一人に霊や怪異を信じない男Aがいる") {
    var scene_3 = [
      [
        "男Aが故意に禁忌を犯す",
      ],
    ];
    var scene_3_number = Math.floor(Math.random() * scene_3.length);
    var scene_3_number2 = Math.floor(Math.random() * scene_3[scene_3_number].length);
    var target_scene_3 = document.getElementById("scene_3");
    target_scene_3.innerHTML = "3 - " + scene_3[scene_3_number][scene_3_number2];
  }

  /*---------------------------------------------
   * シーン4
  ---------------------------------------------*/
  // 前シーンが「男Aが故意に禁忌を犯す」なら、以下のテキスト群からランダムに1個選択
  if (scene_3[scene_3_number][scene_3_number2] === "男Aが故意に禁忌を犯す") {
    var scene_4 = [
      [
        "異形の存在を目撃する",
      ],
    ];
    var scene_4_number = Math.floor(Math.random() * scene_4.length);
    var scene_4_number2 = Math.floor(Math.random() * scene_4[scene_4_number].length);
    var target_scene_4 = document.getElementById("scene_4");
    target_scene_4.innerHTML = "4 - " + scene_4[scene_4_number][scene_4_number2];
  }

  /*---------------------------------------------
   * シーン5
  ---------------------------------------------*/
  // 前シーンが「異形の存在を目撃する」なら、以下のテキスト群からランダムに1個選択
  if (
    scene_4[scene_4_number][scene_4_number2] === "異形の存在を目撃する"
  ) {
    var scene_5 = [
      [
        "（車で来た場合）車で逃げる",
        "（徒歩で来た場合）走って逃げる",
      ],
    ];
    var scene_5_number = Math.floor(Math.random() * scene_5.length);
    var scene_5_number2 = Math.floor(Math.random() * scene_5[scene_5_number].length);
    var target_scene_5 = document.getElementById("scene_5");
    target_scene_5.innerHTML = "5 - " + scene_5[scene_5_number][scene_5_number2];
  }

  /*---------------------------------------------
   * シーン6
  ---------------------------------------------*/
  // 前シーンが「（車で来た場合）車で逃げる」なら、以下のテキスト群からランダムに1個選択
  if (scene_5[scene_5_number][scene_5_number2] === "（車で来た場合）車で逃げる") {
    var scene_6 = [
      [
        "異形が追って来る",
        "パーキングなどで異形の痕跡を発見する",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = "6 - " + scene_6[scene_6_number][scene_6_number2];
  }

  // 前シーンが「（徒歩で来た場合）走って逃げる」なら、以下のテキスト群からランダムに1個選択
  else if (scene_5[scene_5_number][scene_5_number2] === "（徒歩で来た場合）走って逃げる") {
    var scene_6 = [
      [
        "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = "6 - " + scene_6[scene_6_number][scene_6_number2];
  }

  /*---------------------------------------------
   * シーン7
  ---------------------------------------------*/
  // 前シーンが「異形が追って来る」なら、以下のテキスト群からランダムに1個選択
  if (scene_6[scene_6_number][scene_6_number2] === "異形が追って来る") {
    var scene_7 = [
      [
        "パーキングなどで異形の痕跡を発見する",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = "7 - " + scene_7[scene_7_number][scene_7_number2];
  }

  // 前シーンが「パーキングなどで異形の痕跡を発見する」なら、以下のテキスト群からランダムに1個選択
  else if (scene_6[scene_6_number][scene_6_number2] === "パーキングなどで異形の痕跡を発見する") {
    var scene_7 = [
      [
        "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = "7 - " + scene_7[scene_7_number][scene_7_number2];
  }

  // 前シーンが「最近男Aの様子がおかしい（事後の報告が無い場合に語られる）」なら、以下のテキスト群からランダムに1個選択
  else if (scene_6[scene_6_number][scene_6_number2] === "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）") {
    var scene_7 = [
      [
        "後に男Aは死亡する",
        "後に男Aは消息や行方が不明になる",
        "後に男Aは入院などで姿を消す",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = "7 - " + scene_7[scene_7_number][scene_7_number2];
  }

  /*---------------------------------------------
   * シーン8
  ---------------------------------------------*/
  // 前シーンが「パーキングなどで異形の痕跡を発見する」なら、以下のテキスト群からランダムに1個選択
  if (scene_7[scene_7_number][scene_7_number2] === "パーキングなどで異形の痕跡を発見する") {
    var scene_8 = [
      [
        "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_8_number = Math.floor(Math.random() * scene_8.length);
    var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
    var target_scene_8 = document.getElementById("scene_8");
    target_scene_8.innerHTML = "8 - " + scene_8[scene_8_number][scene_8_number2];
  }

  // 前シーンが「最近男Aの様子がおかしい（事後の報告が無い場合に語られる）」なら、以下のテキスト群からランダムに1個選択
  else if (scene_7[scene_7_number][scene_7_number2] === "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）") {
    var scene_8 = [
      [
        "後に男Aは死亡する",
        "後に男Aは消息や行方が不明になる",
        "後に男Aは入院などで姿を消す",
      ],
    ];
    var scene_8_number = Math.floor(Math.random() * scene_8.length);
    var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
    var target_scene_8 = document.getElementById("scene_8");
    target_scene_8.innerHTML = "8 - " + scene_8[scene_8_number][scene_8_number2];
  }

  // 前シーンが
  // 「後日男Aは死亡する」か
  // 「後に男Aは消息や行方が不明になる」か
  // 「後に男Aは入院などで姿を消す」なら、以下のテキスト群からランダムに1個選択
  else if (
      scene_7[scene_7_number][scene_7_number2] === "後に男Aは死亡する" ||
      scene_7[scene_7_number][scene_7_number2] === "後に男Aは消息や行方が不明になる" ||
      scene_7[scene_7_number][scene_7_number2] === "後に男Aは入院などで姿を消す"
     ) {
    var scene_8 = [
      [
        "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）",
      ],
    ];
    var scene_8_number = Math.floor(Math.random() * scene_8.length);
    var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
    var target_scene_8 = document.getElementById("scene_8");
    target_scene_8.innerHTML = "8 - " + scene_8[scene_8_number][scene_8_number2];
  }

  /*---------------------------------------------
   * シーン9
  ---------------------------------------------*/
  // 前シーンが「最近男Aの様子がおかしい（事後の報告が無い場合に語られる）」なら、以下のテキスト群からランダムに1個選択
  if (scene_8[scene_8_number][scene_8_number2] === "最近男Aの様子がおかしい（事後の報告が無い場合に語られる）") {
    var scene_9 = [
      [
        "後に男Aは死亡する",
        "後に男Aは消息や行方が不明になる",
        "後に男Aは入院などで姿を消す",
      ],
    ];
    var scene_9_number = Math.floor(Math.random() * scene_9.length);
    var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
    var target_scene_9 = document.getElementById("scene_9");
    target_scene_9.innerHTML = "9 - " + scene_9[scene_9_number][scene_9_number2];
  }

  // 前シーンが
  // 「後日男Aは死亡する」か
  // 「後に男Aは消息や行方が不明になる」か
  // 「後に男Aは入院などで姿を消す」なら、以下のテキスト群からランダムに1個選択
  else if (
      scene_8[scene_8_number][scene_8_number2] === "後に男Aは死亡する" ||
      scene_8[scene_8_number][scene_8_number2] === "後に男Aは消息や行方が不明になる" ||
      scene_8[scene_8_number][scene_8_number2] === "後に男Aは入院などで姿を消す"
     ) {
    var scene_9 = [
      [
        "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）",
      ],
    ];
    var scene_9_number = Math.floor(Math.random() * scene_9.length);
    var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
    var target_scene_9 = document.getElementById("scene_9");
    target_scene_9.innerHTML = "9 - " + scene_9[scene_9_number][scene_9_number2];
  }

  // 前シーンが
  // 「後日男Aは死亡する」か
  // 「後に男Aは消息や行方が不明になる」か
  // 「後に男Aは入院などで姿を消す」なら、以下のテキスト群からランダムに1個選択
  else if (scene_8[scene_8_number][scene_8_number2] === "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）") {
    var scene_9 = [
      [
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_9_number = Math.floor(Math.random() * scene_9.length);
    var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
    var target_scene_9 = document.getElementById("scene_9");
    target_scene_9.innerHTML = "9 - " + scene_9[scene_9_number][scene_9_number2];
  }

  /*---------------------------------------------
   * シーン10
  ---------------------------------------------*/
  // 前シーンが
  // 「後日男Aは死亡する」か
  // 「後に男Aは消息や行方が不明になる」か
  // 「後に男Aは入院などで姿を消す」なら、以下のテキスト群からランダムに1個選択
  if (
    scene_9[scene_9_number][scene_9_number2] === "後に男Aは死亡する" ||
    scene_9[scene_9_number][scene_9_number2] === "後に男Aは消息や行方が不明になる" ||
    scene_9[scene_9_number][scene_9_number2] === "後に男Aは入院などで姿を消す"
  ) {
    var scene_10 = [
      [
        "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）",
      ],
    ];
    var scene_10_number = Math.floor(Math.random() * scene_10.length);
    var scene_10_number2 = Math.floor(Math.random() * scene_10[scene_10_number].length);
    var target_scene_10 = document.getElementById("scene_10");
    target_scene_10.innerHTML = "10 - " + scene_10[scene_10_number][scene_10_number2];
  }

  // 前シーンが「最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）」なら、以下のテキスト群からランダムに1個選択
  else if (scene_9[scene_9_number][scene_9_number2] === "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）") {
    var scene_10 = [
      [
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_10_number = Math.floor(Math.random() * scene_10.length);
    var scene_10_number2 = Math.floor(Math.random() * scene_10[scene_10_number].length);
    var target_scene_10 = document.getElementById("scene_10");
    target_scene_10.innerHTML = "10 - " + scene_10[scene_10_number][scene_10_number2];
  }

  /*---------------------------------------------
   * シーン11
  ---------------------------------------------*/
  // 前シーンが「最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）」なら、以下のテキスト群からランダムに1個選択
  if (scene_10[scene_10_number][scene_10_number2] === "最近男Aの様子がおかしかった（事前の目撃談が無い場合に語られる）") {
    var scene_11 = [
      [
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_11_number = Math.floor(Math.random() * scene_11.length);
    var scene_11_number2 = Math.floor(Math.random() * scene_11[scene_11_number].length);
    var target_scene_11 = document.getElementById("scene_11");
    target_scene_11.innerHTML = "11 - " + scene_11[scene_11_number][scene_11_number2];
  }

}
