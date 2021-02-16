//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var casado_18 = 0.1
var casado_25 = 0.2
var casado_50 = 0.3

var hijos_recargos = 0.2


//Recargo
var recargo = 0
var recargo_total = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0

alert("Bienvenido estimado usuario")
alert("Cotizacion de seguros TK-U")

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad < 18){
  alert("ERROR, Tiene que ser mayor de edad")
 
}

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = Number(prompt("¿Que edad tiene su esposo/a?"))
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = Number(prompt("Escriba en numeros cuantos hijos tiene ?"));
           
}            
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
 
}
//aqui puede colocar un else if() con el siguiente rango
if (edad_numero>= 25 && edad_numero<50){
  recargo = precio_base * edad_25
  
}
if(edad_numero >=50 ){
  recargo = precio_base * edad_50

}
/** 
/** 
 * 2. Recargo por la edad del conyuge
 */

if(edad_conyuge_numero >= 18 && edad_conyuge_numero <25)
  recargo_conyuge = (precio_base * casado_18)
  
if(edad_conyuge_numero >= 25  && edad_conyuge_numero <50)
  recargo_conyuge = (precio_base * casado_25)
  
if(edad_conyuge_numero >=50 && edad_conyuge_numero <100)
  recargo_conyuge = (precio_base * casado_50)

  
  
/**
 * 3. Recargo por la cantidad de hijos 
 */ 

recargo_hijos = (precio_base * hijos_recargos) * cantidad_hijos;

recargo_total = recargo + recargo_conyuge + recargo_hijos
precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("Su recargo  es "+recargo)
alert ("Para el conyuge sera un recargo de: "+recargo_conyuge)
alert ("El recargo de los hijos es de: "+recargo_hijos)
alert ("El recargo total sera de: "+recargo_total)