// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   //var matriz = Object.keys(objeto).map(function(key)
  var matriz = Object.entries(objeto);
return matriz;}




function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cont=[];                                  //inicializar el contador
  //ncad=cadena.split('');                        //dividir la cadena en caracteres
  for (var i = 0; i < string.length; i++) {     //recorrer la cadena
    letra=string[i].charCodeAt();                 //pasar cada letra a código ascii
    //antes de sumarlo verificar si ya existe en cont, de no ser así inicializarlo
    cont[letra]==undefined ? cont[letra]=1 : cont[letra]++  
  };
  total={};                                     //para guardar el resultado
  for (var i in cont)                           //recorrer el contador
    total[String.fromCharCode(i)]=cont[i];      //pasar el caracter de ascii a string y pasarle la cantidad
  return total;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i<s.length; i++){ 
     if(s[i] === s[i].toUpperCase()){ 
          mayuscula = mayuscula + s[i]; 
       }
   else {
          minuscula = minuscula + s[i];
        } 
   }       
  return (mayuscula + minuscula) 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //  var invertida = [];
  //for (var i = 0; i < str.length-1; i++) {
  //  invertida = invertida + str[i]..reverse()
  //} 
  //var devolver = invertida.concat()
  //return devolver}
  var invertida = '';
  for(var i = str.length -1; i >= 0; i--) {
    invertida += str[i];
  };
 return invertida.split(' ').reverse().join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numerostr = numero.toString();
  for (var i = 0; i < numerostr.length/2; i++) {
    if (numerostr[i] !== numerostr[numerostr.length - 1 - i]) {
        return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.split('a').join('').split('b').join('').split('c').join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 // return arr.sort(function(a,b){return a - b;})
 return arr.sort(function(a, b){return a.length - b.length})
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var comun = [];

arreglo1.forEach(comparar);

function comparar(arreglo1) {
  if(arreglo2.includes(arreglo1) && (comun.includes(arreglo1) === false)){
  comun.push(arreglo1);
  }
}
return comun;
  
  //var nuevoarreglo= [];
  //for ( var i=0 ; i<arreglo1.length; i++);{
  //for (var i=0; i< arreglo2.length; i++) {
  //  if (arreglo1[i] === arreglo2[i]){
  //  nuevoarreglo.push(arreglo1[i])}}    
  //} return nuevoarreglo;
  //for (var i =1 ; i<arreglo2.length; i++){
  //  if (arreglo2[i] === )
  //}
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

