function trigger() {
    setInterval("JPtime()", 1000);
}

function JPtime() {
    var date = new Date();
    var dt = date.toLocaleString('en-GB', {
        timeZone: 'Asia/Tokyo'
    });
    Show(dt);
}

function Show(dat) {
    document.getElementById("JapanTime").innerHTML = dat;
}
