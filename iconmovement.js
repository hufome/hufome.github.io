var icons = ["youtube", "codame", "insta", "twitter", "github"];
move(true);
function move(lor){
	if (lor){
		console.log("right");
		var lasticon = icons.shift();
		var length = icons.length;
		icons[length] = lasticon;
		console.log(icons.valueOf());
	}else{
		console.log("left");
		for (let num = 0; num < icons.length - 1; num++) {	
			var lasticon = icons.shift();
			var length = icons.length;
			icons[length] = lasticon;
		}
		console.log(icons.valueOf());
	}
	updateIcons();
}
function updateIcons(){
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