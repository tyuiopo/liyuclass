window.onload = function(){
	var oBox = document.getElementById('box');

	function toRed(){
		oBox.style.background = 'red';
	}


	oBox.onclick = toRed;
}

