function Pre_hover(id) {
    document.getElementById("pref" + id).style.visibility = "visible";


}

function Pre_hover_out(id) {
    document.getElementById("pref" + id).style.visibility = "hidden";
}
var Dataset = [];

function regi_hover(id) {

    Dataset = [];
    switch (id) {
        case 1:
            Dataset = [1];
            break;
        case 2:
            Dataset = [2, 3, 4, 5, 6, 7];
            break;
        case 3:
            Dataset = [8, 9, 10, 11, 12, 13, 14];
            break;
        case 4:
            Dataset = [15, 16, 17, 18, 19, 20, 21, 22, 23];
            break;
        case 5:
            Dataset = [24, 25, 26, 27, 28, 29, 30];
            break;
        case 6:
            Dataset = [31, 32, 33, 34, 35];
            break;
        case 7:
            Dataset = [36, 37, 38, 39];
            break;
        case 8:
            Dataset = [40, 41, 42, 43, 44, 45, 46, 47];
            break;
    }

    for (var i = 0; i < Dataset.length; i++) {
        document.getElementById("pref" + Dataset[i]).style.visibility = "visible";
    }
}

function regi_hover_out(id) {
    for (var i = 0; i < Dataset.length; i++) {
        document.getElementById("pref" + Dataset[i]).style.visibility = "hidden";
    }
}




function getJSON() {
    var req = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを生成する
    req.onreadystatechange = function () { // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
        if (req.readyState == 4 && req.status == 200) { // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

            var data = JSON.parse(req.responseText); // 取得した JSON ファイルの中身を変数へ格納
            var len = data.region[1].prefecture.length; // JSON のデータ数を取得
            /*
                        // JSON のデータ数分処理
                        for (var i = 0; i < len; i++) {
                            console.log("id: " + data[i].id + ", name: " + data[i].name);
                        }*/
            console.log(data.region[1].prefecture[0].nameJP);

        }
    };
    req.open("GET", "JPinform.json", false); // HTTPメソッドとアクセスするサーバーのURLを指定
    req.send(); // 実際にサーバーへリクエストを送信
}
