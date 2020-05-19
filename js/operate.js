function check(idname) {
    var obj = document.getElementById(idname);
    obj.checked = !obj.checked;
    console.log(obj.checked)
}
