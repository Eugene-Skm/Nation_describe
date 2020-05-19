var Rlist = [""];
var Plist = [];

function Pre_hover(id) {
	try {
		document.getElementById("pref" + id).style.visibility = "visible";
	} catch (e) {
		var er = e;
	} finally {
		document.getElementById("name_en").innerHTML = Plist[id].name;
		document.getElementById("name_jp").innerHTML = Plist[id].nameJP;
		document.getElementById("cap_en").innerHTML = Plist[id].capital;
		document.getElementById("cap_jp").innerHTML = Plist[id].capitalJP;
		document.getElementById("cat_en").innerHTML = Plist[id].category;
		document.getElementById("Detail").innerHTML = Plist[id].introduction;

	}

}

function Pre_hover_out(id) {
	try {
		document.getElementById("pref" + id).style.visibility = "hidden";
	} catch (e) {
		var er = e;
	}

}

function display_Element(in_Ob_id, ob_id) {
	if (document.getElementById(in_Ob_id).checked) {
		document.getElementById(ob_id).style.visibility = "visible";
	} else {
		document.getElementById(ob_id).style.visibility = "hidden";
	}
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
	document.getElementById("name_en").innerHTML = Rlist[id].name;
	document.getElementById("name_jp").innerHTML = Rlist[id].nameJP;
	document.getElementById("cap_en").innerHTML = "";
	document.getElementById("cap_jp").innerHTML = "";
	document.getElementById("cat_en").innerHTML = Rlist[id].category;
	document.getElementById("Detail").innerHTML = Rlist[id].introduction;

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
	try {

		var req = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを生成する
		req.onreadystatechange = function () { // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
			if (req.readyState == 4 && req.status == 200) { // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

				var data = JSON.parse(req.responseText); // 取得した JSON ファイルの中身を変数へ格納



				JsonChange(data);

			}
		};
		req.open("GET", "JPinform.json", false); // HTTPメソッドとアクセスするサーバーのURLを指定
		req.send(); // 実際にサーバーへリクエストを送信
	} catch (e) {
		var data = jInf;
		JsonChange(data);
		console.log("Exception happen");
	}
}

function JsonChange(datas) {
	Plist.push(datas[0])

	var lenR = datas[0].region.length; // JSON のデータ数を取得
	for (i = 0; i < lenR; i++) {
		Rlist.push(datas[0].region[i])
		var lenP = datas[0].region[i].prefecture.length; // JSON のデータ数を取得
		for (x = 0; x < lenP; x++) {
			Plist.push(datas[0].region[i].prefecture[x])
		}

	}
	Pre_hover(0);
	Pre_hover_out(0);

}
