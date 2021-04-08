jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
result = document.getElementById("r");
console.log(jsarray);
document.getElementById("r").innerHTML = jsarray;