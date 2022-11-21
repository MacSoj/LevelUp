//funcion para generar nuevos colores desde hexadecimales 
function generador(){
	var numeros, color;
	numeros = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + numeros[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;;
}