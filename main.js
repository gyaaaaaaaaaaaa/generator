window.onload = function onLoad(){

  //シーン1のテキスト群からランダムに1個出力
  var scene_1 = [
    "1",
    "2",
    "3",
  ];
  var scene_1_number = Math.floor(Math.random() * scene_1.length);
  var target_scene_1 = document.getElementById("scene_1");
  target_scene_1.innerHTML = "空文+" + scene_1[scene_1_number] + "+空文";

  //シーン1のテキストが「1」なら、以下のテキスト群の中からランダムに1個選択
  //テキストをランダムに選ぶことで配列をランダムに選べるのか？
  if (scene_1[scene_1_number] === "1") {
    var scene_1_1 = [
      //シーン1_1のテキスト群1からランダムに1個出力
      [
        "1_1あ",
        "1_1い",
        "1_1う"
      ],
      //シーン1_1のテキスト群2からランダムに1個出力
      [
        "1_1え",
        "1_1お",
        "1_1か"
      ],
      //シーン1_1のテキスト群3からランダムに1個出力
      [
        "1_1き",
        "1_1く",
        "1_1け"
      ]
    ];
    var scene_1_1_number = Math.floor(Math.random() * scene_1_1.length);
    var scene_1_1_number2 = Math.floor(Math.random() * scene_1_1[scene_1_1_number].length);
    var target_scene_1_1 = document.getElementById("scene_1_1");
    target_scene_1_1.innerHTML = "空文+" + scene_1_1[scene_1_1_number][scene_1_1_number2] + "+空文";
  }

  //シーン1のテキストが「2」なら、以下のテキスト群の中からランダムに1個選択
  //テキストをランダムに選ぶことで配列をランダムに選べるのか？
  else if (scene_1[scene_1_number] === "2") {
    var scene_1_2 = [
      //シーン1_2のテキスト群1からランダムに1個出力
      [
        "1_2あ",
        "1_2い",
        "1_2う"
      ],
      //シーン1_2のテキスト群2からランダムに1個出力
      [
        "1_2え",
        "1_2お",
        "1_2か"
      ],
      //シーン1_2のテキスト群3からランダムに1個出力
      [
        "1_2き",
        "1_2く",
        "1_2け"
      ]
    ];
    var scene_1_2_number = Math.floor(Math.random() * scene_1_2.length);
    var scene_1_2_number2 = Math.floor(Math.random() * scene_1_2[scene_1_2_number].length);
    var target_scene_1_2 = document.getElementById("scene_1_2");
    target_scene_1_2.innerHTML = "空文+" + scene_1_2[scene_1_2_number][scene_1_2_number2] + "+空文";
  }

  //シーン1のテキストが「3」なら、以下のテキスト群の中からランダムに1個選択
  //テキストをランダムに選ぶことで配列をランダムに選べるのか？
  else if (scene_1[scene_1_number] === "3") {
    var scene_1_3 = [
      //シーン1_3のテキスト群1からランダムに1個出力
      [
        "1_3あ",
        "1_3い",
        "1_3う"
      ],
      //シーン1_3のテキスト群2からランダムに1個出力
      [
        "1_3え",
        "1_3お",
        "1_3か"
      ],
      //シーン1_3のテキスト群3からランダムに1個出力
      [
        "1_3き",
        "1_3く",
        "1_3け"
      ]
    ];
    var scene_1_3_number = Math.floor(Math.random() * scene_1_3.length);
    var scene_1_3_number2 = Math.floor(Math.random() * scene_1_3[scene_1_3_number].length);
    var target_scene_1_3 = document.getElementById("scene_1_3");
    target_scene_1_3.innerHTML = "空文+" + scene_1_3[scene_1_3_number][scene_1_3_number2] + "+空文";
  }

}
