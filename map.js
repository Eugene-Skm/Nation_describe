function Pre_hover(id) {
    document.getElementById("pref" + id).style.visibility = "visible";

    var date = new Date();
    console.log(date.toLocaleString());
    console.log(date.toLocaleString('en-US', {
        timeZone: 'America/New_York'
    }));
    console.log(date.toLocaleString('en-GB', {
        timeZone: 'Europe/London'
    }));
    console.log(date.toLocaleString('en-GB', {
        timeZone: 'Asia/Tokyo'
    }));
    console.log(date.toLocaleString('en-GB', {
        timeZone: 'Africa/Johannesburg'
    }));
    console.log(date.toLocaleString('en-GB', {
        timeZone: 'Asia/Calcutta'
    }));
    console.log(date.toLocaleString('en-GB', {
        timeZone: 'Etc/UTC'
    }));
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
