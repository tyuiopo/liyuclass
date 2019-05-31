
function toChange(){
	//alert('hi')
	var oBox = document.getElementById('box');
	oBox.style.width = '200px';
	oBox.style.height = '200px';
	oBox.style.backgroundColor = 'red';
}

var oBox = document.getElementById('box');
// oBox.onclick = "toChange()";
oBox.onclick = toChange;

