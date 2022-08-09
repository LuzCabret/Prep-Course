// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // var shift = array.shift ===== retorna el primer elemento y lo elemina
  // return shif;
  return ( array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array[array.length - 1];
//= array.length -1)
  //console.log(array.length - 1);
   ///
   /// var ultimo = array.pop();   ----
   //retunr ultimo;                ----- valida       
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoarray = [];
  for (var b = 0 ; b < array.length ; b++) {
    nuevoarray [b] = array[b] + 1;}
  return nuevoarray; 
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array [array.length] = elemento;
  return array; 
  ///array.push(elemento);
  ///return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join (" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 // for ( var a = 0 ; a < array.length ; a++){
 // if (array[a] === elemento) {return true;}}
 // return false;}
return array.includes(elemento);}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    var array = 0 ;
  for (var b = 0 ; b < numeros.length ; b++) {
    array = array + numeros[b];}
    return array;
 //
// var array = numeros.reduce((actual, nuevo)=>actual + nuevo, 0)
//  return array;    ===> https://vimeo.com/733208596/d4c9737fc4 minuto 37 ;)
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
   var total = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
  total = total + resultadosTest[i]
  }
  return total / resultadosTest.length;
  }
 

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
//  var mayor = numeros[0];
//  for (var i = 0 ; i < numeros.length; i++){
//   if ( mayor < numeros[i]) {
//    mayor = numeros [i];
//   }
//  }return mayor;
//}
return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;                                       //var total = arguments[0];
  for(var i = 0; i < arguments.length; i++) {          //for (var i =1 ; i < arguments.length ; i++);
    total = total * arguments[i];                      //total = total * argumento[i]  <---  tambien es valida
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contados = 0;
  for (var i = 0 ; i < arreglo.length; i++) {
   if (arreglo[i] > 18) contados++;
  } 
 return contados;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // 1-domingo // 2 lunes// 3 martes / 4 miercoles / 5 jueves / 6 viernes /7  sabado
  if ( numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "Es dia Laboral";
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString()
  if ( numero[0] === "9" ) return true;
  else return false;  
  // var string = n + " ";
  //if (string[0] === "9") return true;
  // retunr false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var iguales= arreglo[0];
for (var i = 1; i < arreglo.length; i++){
  if (iguales === arreglo [i]) return true};
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = []
  for (var i = 0 ; i < array.length ; i++) {
  if ( array [i] === "Enero" || array [i]=== "Marzo" || array [i]=== "Noviembre") 
    nuevoarray.push (array[i]); 
   } if (nuevoarray.length < 3) {return "No se encontraron los meses pedidos";} //
return nuevoarray;            //} if (nuevoarray.length !== 3) {return "No se encontraron los meses pedidos";}
//return nuevoarray;}
//
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arraymascien = [];
  for (var i=0 ; i < array.length ; i++){
    if (array[i] > 100) {
    arraymascien.push(array[i])
    }
  }
  return arraymascien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var nuevoarray = []
var numaumentado = numero
var cantidad = 1
for ( var i = 1 ; i <= 10 ; i++) {
numaumentado = numaumentado + 2;
nuevoarray.push(numaumentado)

if  (cantidad === numaumentado) {  break;} 
cantidad = cantidad + 1;
}
if  (cantidad === numaumentado) return "Se interrumpió la ejecución";
else return nuevoarray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var miarray = [];
  var numaumentado = numero;
   for ( var i = 0 ; i < 10 ; i++){
    if (i === 5) continue; 
    else numaumentado = numaumentado + 2;
    miarray.push(numaumentado);}
   return miarray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
