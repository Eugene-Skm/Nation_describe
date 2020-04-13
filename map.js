function hover(id) {
    console.log("g")
    document.getElementById("pref" + id).style.visibility = "visible";
    document.getElementById("national").style.opacity = 0.9;

}

function Mout(id) {
    console.log("h")
    document.getElementById("pref" + id).style.visibility = "hidden";
    document.getElementById("national").style.opacity = 1;
}
