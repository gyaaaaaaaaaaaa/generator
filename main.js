function generator(){
  //まずすべてのシーンを空文にリセット
  var scenes = document.getElementsByClassName("scene");
  for (var i = 0; i < scenes.length; i++) {
    scenes[i].innerHTML = "";
  }

  /*---------------------------------------------
   * シーン1
  ---------------------------------------------*/
  // 以下のテキスト群からランダムに1個出力
  var scene_1 = [
    [
      "男女数人で心霊スポットへ肝試しにGO",
    ],
  ];
  var scene_1_number = Math.floor(Math.random() * scene_1.length);
  var scene_1_number2 = Math.floor(Math.random() * scene_1[scene_1_number].length);
  var target_scene_1 = document.getElementById("scene_1");
  target_scene_1.innerHTML = scene_1[scene_1_number][scene_1_number2];

  /*---------------------------------------------
   * シーン2
  ---------------------------------------------*/
  // シーン1が「男女数人で心霊スポットへ肝試しにGO」なら、以下のテキスト群からランダムに1個選択
  if (scene_1[scene_1_number][scene_1_number2] === "男女数人で心霊スポットへ肝試しにGO") {
    var scene_2 = [
      [
        "霊を信じない男Aがいる",
        "何の変哲もないメンバーのみ",
        "自称「霊感のある」女Bがいる"
      ],
    ];
    var scene_2_number = Math.floor(Math.random() * scene_2.length);
    var scene_2_number2 = Math.floor(Math.random() * scene_2[scene_2_number].length);
    var target_scene_2 = document.getElementById("scene_2");
    target_scene_2.innerHTML = scene_2[scene_2_number][scene_2_number2];
  }

  /*---------------------------------------------
   * シーン3
  ---------------------------------------------*/
  // シーン2が「霊を信じない男Aがいる」なら、以下のテキスト群からランダムに1個選択
  if (scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる") {
    var scene_3 = [
      [
        "男Aが故意に禁忌を犯す",
      ],
    ];
    var scene_3_number = Math.floor(Math.random() * scene_3.length);
    var scene_3_number2 = Math.floor(Math.random() * scene_3[scene_3_number].length);
    var target_scene_3 = document.getElementById("scene_3");
    target_scene_3.innerHTML = scene_3[scene_3_number][scene_3_number2];
  }

  // シーン2が「何の変哲もないメンバーのみ」なら、以下のテキスト群からランダムに1個選択
  else if (scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ") {
    var scene_3 = [
      [
        "誤って禁忌を犯す",
        "一人が体調の異変を訴える",
      ],
    ];
    var scene_3_number = Math.floor(Math.random() * scene_3.length);
    var scene_3_number2 = Math.floor(Math.random() * scene_3[scene_3_number].length);
    var target_scene_3 = document.getElementById("scene_3");
    target_scene_3.innerHTML = scene_3[scene_3_number][scene_3_number2];
  }

  // シーン2が「自称「霊感のある」女Bがいる」なら、以下のテキスト群からランダムに1個選択
  else if (scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる") {
    var scene_3 = [
      [
        "女Bが泣き出す",
        "女Bが豹変する",
      ],
    ];
    var scene_3_number = Math.floor(Math.random() * scene_3.length);
    var scene_3_number2 = Math.floor(Math.random() * scene_3[scene_3_number].length);
    var target_scene_3 = document.getElementById("scene_3");
    target_scene_3.innerHTML = scene_3[scene_3_number][scene_3_number2];
  }

  /*---------------------------------------------
   * シーン4
  ---------------------------------------------*/
  /* シーン3が
   * 「男Aが故意に禁忌を犯す」
   * 「誤って禁忌を犯す」
   * 「一人が体調の異変を訴える」
   * 「女Bが泣き出す」
   * 「女Bが豹変する」
   なら、以下のテキスト群からランダムに1個選択 */
  if (
    scene_3[scene_3_number][scene_3_number2] === "男Aが故意に禁忌を犯す" ||
    scene_3[scene_3_number][scene_3_number2] === "誤って禁忌を犯す" ||
    scene_3[scene_3_number][scene_3_number2] === "一人が体調の異変を訴える" ||
    scene_3[scene_3_number][scene_3_number2] === "女Bが泣き出す" ||
    scene_3[scene_3_number][scene_3_number2] === "女Bが豹変する"
  ) {
    var scene_4 = [
      [
        "異形の存在を目撃する",
      ],
    ];
    var scene_4_number = Math.floor(Math.random() * scene_4.length);
    var scene_4_number2 = Math.floor(Math.random() * scene_4[scene_4_number].length);
    var target_scene_4 = document.getElementById("scene_4");
    target_scene_4.innerHTML = scene_4[scene_4_number][scene_4_number2];
  }

  /*---------------------------------------------
   * シーン5
  ---------------------------------------------*/
  // シーン2が「霊を信じない男Aがいる」なら、以下のテキスト群からランダムに1個選択
  if (scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる") {
    var scene_5 = [
      [
        "車で逃げる",
        "走って逃げる",
      ],
    ];
    var scene_5_number = Math.floor(Math.random() * scene_5.length);
    var scene_5_number2 = Math.floor(Math.random() * scene_5[scene_5_number].length);
    var target_scene_5 = document.getElementById("scene_5");
    target_scene_5.innerHTML = scene_5[scene_5_number][scene_5_number2];
  }

  // シーン2が「何の変哲もないメンバーのみ」なら、以下のテキスト群からランダムに1個選択
  else if (scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ") {
    var scene_5 = [
      [
        "車で逃げる",
        "走って逃げる",
      ],
    ];
    var scene_5_number = Math.floor(Math.random() * scene_5.length);
    var scene_5_number2 = Math.floor(Math.random() * scene_5[scene_5_number].length);
    var target_scene_5 = document.getElementById("scene_5");
    target_scene_5.innerHTML = scene_5[scene_5_number][scene_5_number2];
  }

  // シーン2が「自称「霊感のある」女Bがいる」なら、以下のテキスト群からランダムに1個選択
  else if (scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる") {
    var scene_5 = [
      [
        "車で逃げる",
        "走って逃げる",
      ],
    ];
    var scene_5_number = Math.floor(Math.random() * scene_5.length);
    var scene_5_number2 = Math.floor(Math.random() * scene_5[scene_5_number].length);
    var target_scene_5 = document.getElementById("scene_5");
    target_scene_5.innerHTML = scene_5[scene_5_number][scene_5_number2];
  }

  /*---------------------------------------------
   * シーン6
  ---------------------------------------------*/
  /* シーン2が
   * 「霊を信じない男Aがいる」
   * シーン5が
   * 「車で逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  if (
    scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
    scene_5[scene_5_number][scene_5_number2] === "車で逃げる"
  ) {
    var scene_6 = [
      [
        "追ってくる",
        "パーキングで異形の痕跡を発見する",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /* シーン2が
   * 「霊を信じない男Aがいる」
   * シーン5が
   * 「走って逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
    scene_5[scene_5_number][scene_5_number2] === "走って逃げる"
  ) {
    var scene_6 = [
      [
        "最近Bの挙動がおかしい（事前目撃Ver）",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /* シーン2が
   * 「何の変哲もないメンバーのみ」
   * シーン5が
   * 「車で逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
    scene_5[scene_5_number][scene_5_number2] === "車で逃げる"
  ) {
    var scene_6 = [
      [
        "追ってくる",
        "パーキングで異形の痕跡を発見する",
        "知人の霊媒師やお寺でお祓い",
        "",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /* シーン2が
   * 「何の変哲もないメンバーのみ」
   * シーン5が
   * 「走って逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
    scene_5[scene_5_number][scene_5_number2] === "走って逃げる"
  ) {
    var scene_6 = [
      [
        "知人の霊媒師やお寺でお祓い",
        "メンバー数人に何かしらの異変が残り続ける",
        "メンバー全員死亡",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /* シーン2が
   * 「自称「霊感のある」女Bがいる」
   * シーン5が
   * 「車で逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる" &&
    scene_5[scene_5_number][scene_5_number2] === "車で逃げる"
  ) {
    var scene_6 = [
      [
        "追ってくる",
        "パーキングで異形の痕跡を発見する",
        "女Bが異形の解説をする",
        "",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /* シーン2が
   * 「自称「霊感のある」女Bがいる」
   * シーン5が
   * 「走って逃げる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる" &&
    scene_5[scene_5_number][scene_5_number2] === "走って逃げる"
  ) {
    var scene_6 = [
      [
        "女Bが異形の解説をする",
        "物語は異形の正体が解らないまま終了",
      ],
    ];
    var scene_6_number = Math.floor(Math.random() * scene_6.length);
    var scene_6_number2 = Math.floor(Math.random() * scene_6[scene_6_number].length);
    var target_scene_6 = document.getElementById("scene_6");
    target_scene_6.innerHTML = scene_6[scene_6_number][scene_6_number2];
  }

  /*---------------------------------------------
   * シーン7
  ---------------------------------------------*/
  /* シーン2が
   * 「霊を信じない男Aがいる」
   * シーン6が
   * 「追ってくる」
   なら、以下のテキスト群からランダムに1個選択 */
  if (
    scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
    scene_6[scene_6_number][scene_6_number2] === "追ってくる"
  ) {
    var scene_7 = [
      [
        "パーキングで異形の痕跡を発見する",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = scene_7[scene_7_number][scene_7_number2];
  }

  /* シーン2が
   * 「何の変哲もないメンバーのみ」
   * シーン6が
   * 「」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "何の変哲もないメンバーのみ" &&
    scene_6[scene_6_number][scene_6_number2] === ""
  ) {
    var scene_7 = [
      [
        "知人の霊媒師やお寺でお祓い",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = scene_7[scene_7_number][scene_7_number2];
  }

  /* シーン2が
   * 「自称「霊感のある」女Bがいる」
   * シーン6が
   * 「追ってくる」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる" &&
    scene_6[scene_6_number][scene_6_number2] === "追ってくる"
  ) {
    var scene_7 = [
      [
        "パーキングで異形の痕跡を発見する",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = scene_7[scene_7_number][scene_7_number2];
  }

  /* シーン2が
   * 「自称「霊感のある」女Bがいる」
   * シーン6が
   * 「」
   なら、以下のテキスト群からランダムに1個選択 */
  else if (
    scene_2[scene_2_number][scene_2_number2] === "自称「霊感のある」女Bがいる" &&
    scene_6[scene_6_number][scene_6_number2] === ""
  ) {
    var scene_7 = [
      [
        "女Bが異形の解説をする",
      ],
    ];
    var scene_7_number = Math.floor(Math.random() * scene_7.length);
    var scene_7_number2 = Math.floor(Math.random() * scene_7[scene_7_number].length);
    var target_scene_7 = document.getElementById("scene_7");
    target_scene_7.innerHTML = scene_7[scene_7_number][scene_7_number2];
  }

  if (
    scene_2[scene_2_number][scene_2_number2] === "霊を信じない男Aがいる" &&
    scene_7[scene_7_number][scene_7_number2] === "パーキングで異形の痕跡を発見する"
  ) {
    console.log("test");
  }

}
