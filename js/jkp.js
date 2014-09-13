var opciones = ["Piedra","Papel","Tijera"];
var opcionUsuario
var opcionMaquina =  opciones[aleatorio(0, 2)]

function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random()*(maximo - minimo + 1) + minimo)
	return numero
}

function mostrar(num){
	opcionUsuario = opciones[num] 
	var respuesta = confirm("Elegiste " + opcionUsuario + " Estas seguro?")
	if(respuesta == true){
		alert("Elegiste " + opcionUsuario)
		comparar(opcionUsuario,opcionMaquina)
	}
	else{
		alert("escoge de nuevo")
	}
	
}

function empezar(){
	alert("La máquina elegirá primero")
	aviso1()
	aviso2()
	
}

function aviso1(){
	document.getElementById("playGame").innerHTML="<p> El computador acaba de elegir!!!</p>"
}

function aviso2(){
	document.getElementById("playUsuario").innerHTML="<p> Ahora Elige TUUU -----></p>"
}

function comparar(usu,maq){
	alert("la maq eligio " + maq)
	alert("la usu eligio " + usu)
	if(usu == maq){
		alert("Empatamos!!")
		document.getElementById("resultado").innerHTML="<p> Empatamos!!!, la maquina eligio " + maq + " y tu " + usu + "</p> <br> <img src='img/empatamos.jpg'>"
	}
	else{

	}
}

