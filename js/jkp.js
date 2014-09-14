var opciones = ["Piedra","Papel","Tijera"];
var opcionUsuario
var opcionMaquina =  ""

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
	//limpia los divs y la maquina elige aleatoriamente la opcion
	document.getElementById("playGame").innerHTML=" "
	document.getElementById("playUsuario").innerHTML=" "
	document.getElementById("resultado").innerHTML=" " 
	document.getElementById("abajo").innerHTML=" " 
	opcionMaquina =  opciones[aleatorio(0, 2)]
	alert("La máquina elegirá primero" + opcionMaquina)
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
		document.getElementById("resultado").innerHTML="<p> Empatamos!!!, la maquina eligio " + maq + " y tu " + usu + "</p>" 
		document.getElementById("abajo").innerHTML="<img src='img/empatamos.jpg'>" 
	}
	else{
		if((usu == "Piedra" && maq == "Tijera") || (usu == "Papel" && maq == "Piedra") || (usu == "Tijera" && maq == "Papel")){
			alert("Ganaste!!")
		document.getElementById("resultado").innerHTML="<p> Ganaste!!!, la maquina eligio " + maq + " y tu " + usu + "</p>" 
		document.getElementById("abajo").innerHTML="<img src='img/spierde.jpg'>" 
		}
		else if((usu == "Piedra" && maq == "Papel") || (usu == "Papel" && maq == "Tijera") || (usu == "Tijera" && maq == "Piedra")){
		document.getElementById("resultado").innerHTML="<p> Perdites!!!, la maquina eligio " + maq + " y tu " + usu + "</p>" 
		document.getElementById("abajo").innerHTML="<img src='img/sgana.jpg'>" 
		}
	}
}

