var d = 0;
var date = new Date();
var startTime = date.getTime();

document.addEventListener('keydown', function(event) {
    
    if(event.code == "Backspace") {
        d++;
        document.getElementById("d").innerHTML = d;
    }
});
function pasted(){
    var pasted = true;
    
    document.getElementById("d").innerHTML = pasted;
}
function submit(time){
      
    finishTime = startTime - time;
    document.getElementById("t").innerHTML = finishTime;
    alert(document.cookie);
    jsarray = [d, ctrl, finishTime];
    //sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
    sessionStorage.setItem("jsArray", "test ");
}