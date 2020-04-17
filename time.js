function trigger() {
    setInterval("JPtime()", 1000);
}

function JPtime() {
    var date = new Date();
    var dt = date.toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour12: false
    });
    console.log("A")
    Show(dt);
}

function Show(dat) {
    var date1 = new Date();
    kekka = dat.split(",");
    time = kekka[1];
    day = kekka[0];
    document.getElementById("JTime").innerHTML = time;
    document.getElementById("JDate").innerHTML = day;
    var Udt = date1.toLocaleString('en-US', {
        hour12: false
    });
    udt1 = Udt.split(",")
    var Tdifference = parseInt(time.substr(1, 2)) - parseInt(udt1[1].substr(1, 2));

    var TDif_format = ('00' + Math.abs(Tdifference)).slice(-2);
    TDif_format = TDif_format + ":00:00";

    if (Tdifference < 0) {
        TDif_format = "&minus;" + TDif_format;
    } else if (Tdifference == 0) {
        TDif_format = "	&plusmn;" + TDif_format;
    } else if (Tdifference > 0) {
        TDif_format = "	&plus;" + TDif_format;
    }
    document.getElementById("TDif").innerHTML = TDif_format;
}
