//times deleted
var d = 0;

var startTime = Date.now();
var ctrl = false;

document.addEventListener('keydown', function(event) {
    console.log(Date.now());
    if(event.code == "Backspace") {
        d++;
        document.getElementById("d").innerHTML = d;
    }if(event.code == "Enter") {
        submit(Date.now());
    }
});
function pasted(){
    ctrl = true;
    
    document.getElementById("d").innerHTML = ctrl;
}
function submit(time){
    //document.cookie = "submitted=true";
    let input = document.getElementById("input").value
    if (input == "chiaroscurist"){var correct = true}else{correct = false}
    finishTime =  time - startTime;
    jsarray = [d, ctrl, finishTime, correct];
    document.getElementById("t").innerHTML = jsarray.toString();
}