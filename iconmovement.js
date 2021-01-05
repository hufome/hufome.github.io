document.getElementById( 'bulb' ).scrollIntoView();
var icons = ["youtube", "codame", "insta", "twitter", "github"];
for (let num = 0; num < icons.length; num++) {	
		document.getElementById(icons[num]).className = "icon" + (num + 1);
	}
function move(lor){
	if (lor){
		console.log("right");
		var lasticon = icons.shift();
		var length = icons.length;
		icons[length] = lasticon;
		console.log(icons.valueOf());
		var lor2 = true;
	}else{
		console.log("left");
		for (let num = 0; num < icons.length - 1; num++) {	
			var lasticon = icons.shift();
			var length = icons.length;
			icons[length] = lasticon;
		}
		console.log(icons.valueOf());
		var lor2 = false;
	}
	updateIcons(lor2);
}

function updateIcons(lor2){
	if (lor2){
		for (let num = 0; num < icons.length; num++) {	
			if (num == 1 || num == 4){
				$('.icon' + (num + 1)).animate({
					marginLeft: "-=20%",
				}, 1000);
			}
			if (num == 2 || num == 3){
				$('.icon' + (num + 1)).animate({
					marginLeft: "-=25%",
				}, 1000);
			}
			if (num == 0){
				$('.icon' + (num + 1)).animate({
					marginLeft: "-=25%",
				}, 500);
				$('.icon' + (num + 1)).animate({
					marginLeft: "+=140%",
				}, 0);
				$('.icon' + (num + 1)).animate({
					marginLeft: "-=25%",
				}, 500);
			}
		}
	}else{
		for (let num = 0; num <= icons.length; num++) {	
			if (num == 1 || num == 4){
				$('.icon' + (num)).animate({
					marginLeft: "+=20%",
				}, 1000);
			}
			if (num == 2 || num == 3){
				$('.icon' + (num)).animate({
					marginLeft: "+=25%",
				}, 1000);
			}
			if (num == 5){
				$('.icon' + (num)).animate({
					marginLeft: "+=25%",
				}, 500);
				$('.icon' + (num)).animate({
					marginLeft: "-=140%",
				}, 0);
				$('.icon' + (num)).animate({
					marginLeft: "+=25%",
				}, 500);
			}
		}
	}
	
	for (let num = 0; num < icons.length; num++) {	
		document.getElementById(icons[num]).className = "icon" + (num + 1);
	}
}

function toggleDark() {
	var element = document.body;
	element.classList.toggle("darkmode");
	toggleBulb();
}

function toggleBulb() {
  var image = document.getElementById('bulb');
  if (image.src.match("bulbon")) {
    image.src = "images/bulboff.png";
  } else {
    image.src = "images/bulbon.png";
  }
}

function getOffset( el ) {
    var _x = 0,
    _y = 0;
    while( el && el.tagName.toLowerCase() != 'body' && !isNaN( el.offsetLeft ) && !isNaN(el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
} 

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}