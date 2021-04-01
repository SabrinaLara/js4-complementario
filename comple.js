//Ingresamos precio a calcular
let precio1 	= parseInt(prompt("Ingrese precio de producto"));
let iva			= parseInt(prompt("Ingrese Iva"));
console.log(parseInt(precio1));
 
function calculoIva (precio1, iva) {
	let ivaCalculado	= (precio1 * iva)/100;
	let precioFinal		= precio1 + ivaCalculado;

	return precioFinal;
}

alert(calculoIva(precio1, iva));



//Ingresamos notas a calcular
let nota1 	= parseInt(prompt("Ingrese primera nota"));
let nota2 	= parseInt(prompt("Ingrese segunda nota"));
let nota3 	= parseInt(prompt("Ingrese tercera nota"));

function calculoPromedioNotas (nota1, nota2, nota3) {
	
	let promedio = (nota1 + nota2 + nota3)/3; 	

	return promedio;

}

alert(calculoPromedioNotas(nota1, nota2, nota3));




//Ingresamos edades a calcular

let edad1 	= parseInt(prompt("Ingrese primera edad"));
let edad2 	= parseInt(prompt("Ingrese segunda edad"));
let edad3 	= parseInt(prompt("Ingrese tercera edad"));

function calculoPromedioEdad (edad1, edad2, edad3) {

	let promedioEdad = (edad1 + edad2 + edad3)/3;

	return promedioEdad;

}

alert(calculoPromedioEdad(edad1, edad2, edad3));