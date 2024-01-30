function X(T) {
	var Y = document.getElementsByClassName('half');
	var S = "rot-up " + T + "s ease-out infinite";
	Y[0].style.animation = S;
	S = "rot-down " + T + "s ease-out infinite";
	Y[1].style.animation = S;
}
document.addEventListener("keydown", function(e) {
	if (e.keyCode == 49) X(0.6);
	if (e.keyCode == 50) X(0.3);
	if (e.keyCode == 51) X(0.15);
})