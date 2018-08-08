/*---------------------------------------------
 * シーン8
---------------------------------------------*/
/* シーン2が
 * 「霊を信じない男Aがいる」
 * シーン7が
 * 「パーキングで異形の痕跡を発見する」
 なら、以下のテキスト群からランダムに1個選択 */
 if (
   scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
   scene_7[scene_7_number][scene_7_number2] === "パーキングで異形の痕跡を発見する"
 ) {
   var scene_8 = [
     [
       "最近男Bの挙動がおかしい（事前目撃Ver）",
       "物語は異形の正体が解らないまま終了",
     ],
   ];
   var scene_8_number = Math.floor(Math.random() * scene_8.length);
   var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
   var target_scene_8 = document.getElementById("scene_8");
   target_scene_8.innerHTML = scene_8[scene_8_number][scene_8_number2];
 }

/* シーン2が
 * 「何の変哲もないメンバーのみ」
 * シーン7が
 * 「パーキングで異形の痕跡を発見する」
 なら、以下のテキスト群からランダムに1個選択 */
else if (
  scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
  scene_7[scene_7_number][scene_7_number2] === "パーキングで異形の痕跡を発見する"
) {
  var scene_8 = [
    [
      "知人の霊媒師やお寺でお祓い",
      "メンバー数人に何かしらの異変が残り続ける",
      "メンバー全員死亡",
      "物語は異形の正体が解らないまま終了",
    ],
  ];
  var scene_8_number = Math.floor(Math.random() * scene_8.length);
  var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
  var target_scene_8 = document.getElementById("scene_8");
  target_scene_8.innerHTML = scene_8[scene_8_number][scene_8_number2];
}

/* シーン2が
 * 「自称「霊感のある」女Bがいる」
 * シーン7が
 * 「パージングで異形の痕跡を発見する」
 なら、以下のテキスト群からランダムに1個選択 */
else if (
  scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
  scene_7[scene_7_number][scene_7_number2] === "パーキングで異形の痕跡を発見する"
) {
  var scene_8 = [
    [
      "物語は異形の正体が解らないまま終了",
      "女Bが異形の解説をする",
    ],
  ];
  var scene_8_number = Math.floor(Math.random() * scene_8.length);
  var scene_8_number2 = Math.floor(Math.random() * scene_8[scene_8_number].length);
  var target_scene_8 = document.getElementById("scene_8");
  target_scene_8.innerHTML = scene_8[scene_8_number][scene_8_number2];
}

/*---------------------------------------------
 * シーン9
---------------------------------------------*/
/* シーン2が
 * 「霊を信じない男Aがいる」
 * シーン8が
 * 「最近男Bの挙動がおかしい（事前目撃Ver）」
 なら、以下のテキスト群からランダムに1個選択 */
if (
  scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
  scene_8[scene_8_number][scene_8_number2] === "最近男Bの挙動がおかしい（事前目撃Ver）"
) {
  var scene_9 = [
    [
      "後日男Aは死亡する",
      "後日男Aは行方不明になる",
      "後日男Aは自宅に籠る",
    ],
  ];
  var scene_9_number = Math.floor(Math.random() * scene_9.length);
  var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
  var target_scene_9 = document.getElementById("scene_9");
  target_scene_9.innerHTML = scene_9[scene_9_number][scene_9_number2];
}

/* シーン2が
 * 「何の変哲もないメンバーのみ」
 * シーン8が
 * 「知人の霊媒師やお寺でお祓い」
 なら、以下のテキスト群からランダムに1個選択 */
else if (
  scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
  scene_8[scene_8_number][scene_8_number2] === "知人の霊媒師やお寺でお祓い"
) {
  var scene_9 = [
    [
      "メンバー数人に何かしらの異変が残り続ける",
      "メンバー全員死亡",
      "物語は異形の正体が解らないまま終了",
    ],
  ];
  var scene_9_number = Math.floor(Math.random() * scene_9.length);
  var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
  var target_scene_9 = document.getElementById("scene_9");
  target_scene_9.innerHTML = scene_9[scene_9_number][scene_9_number2];
}

/* シーン2が
 * 「自称「霊感のある」女Bがいる」
 * シーン8が
 * 「女Bが異形の解説をする」
 なら、以下のテキスト群からランダムに1個選択 */
else if (
  scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる" &&
  scene_8[scene_8_number][scene_8_number2] === "女Bが異形の解説をする"
) {
  var scene_9 = [
    [
      "物語は異形の正体が解らないまま終了",
    ],
  ];
  var scene_9_number = Math.floor(Math.random() * scene_9.length);
  var scene_9_number2 = Math.floor(Math.random() * scene_9[scene_9_number].length);
  var target_scene_9 = document.getElementById("scene_9");
  target_scene_9.innerHTML = scene_9[scene_9_number][scene_9_number2];
}

/*---------------------------------------------
 * シーン10
---------------------------------------------*/
/* シーン2が
 * 「霊を信じない男Aがいる」
 * シーン9が
 * 「後日男Aは死亡する」
 * 「後日男Aは行方不明になる」
 * 「後日男Aは自宅に籠る」
 なら、以下のテキスト群からランダムに1個選択 */
if (
  scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
  scene_8[scene_8_number][scene_8_number2] === "後日男Aは死亡する" ||
  scene_8[scene_8_number][scene_8_number2] === "後日男Aは行方不明になる" ||
  scene_8[scene_8_number][scene_8_number2] === "後日男Aは自宅に籠る" ||
) {
  var scene_10 = [
    [
      "最近男Bの挙動がおかしかった（事後報告Ver）",
    ],
  ];
  var scene_10_number = Math.floor(Math.random() * scene_10.length);
  var scene_10_number2 = Math.floor(Math.random() * scene_10[scene_10_number].length);
  var target_scene_10 = document.getElementById("scene_10");
  target_scene_10.innerHTML = scene_10[scene_10_number][scene_10_number2];
}

/* シーン2が
 * 「何の変哲もないメンバーのみ」
 * シーン10が
 * 「メンバー数人に何かしらの異変が残り続ける」
 * 「メンバー全員死亡」
 なら、以下のテキスト群からランダムに1個選択 */
else if (
  scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
  scene_8[scene_8_number][scene_8_number2] === "メンバー数人に何かしらの異変が残り続ける" ||
  scene_8[scene_8_number][scene_8_number2] === "メンバー全員死亡" ||
) {
  var scene_10 = [
    [
      "物語は異形の正体が解らないまま終了",
    ],
  ];
  var scene_10_number = Math.floor(Math.random() * scene_10.length);
  var scene_10_number2 = Math.floor(Math.random() * scene_10[scene_10_number].length);
  var target_scene_10 = document.getElementById("scene_10");
  target_scene_10.innerHTML = scene_10[scene_10_number][scene_10_number2];
}
