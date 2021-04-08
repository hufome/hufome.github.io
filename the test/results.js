jsarray = JSON.parse(localStorage.getItem("jsArray"));
result = document.getElementById("r");
console.log(jsarray);
document.getElementById("r").innerHTML = jsarray;