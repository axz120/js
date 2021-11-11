window.onload = function() {
  var cartro = [new Array(9),new Array(9),new Array(9)];
  var grupsNumeros = [[],[],[],[],[],[],[],[],[]];
  generaNegresFila(cartro[0]);
  generaNegresFila(cartro[1]);
  generaNegresFila3(cartro[2]);
  generarNumeros();
  omplirNumeros ();
  generarHtml ();
  console.log(cartro);
// Genera 4 negres per fila (1 i 2)
function generaNegresFila(fila) {
  var negresFila = 4;
  var casellesFila = 9;
  var i = 0;
  while (i <negresFila){
    var negre = Math.floor(Math.random()*casellesFila);
    if(fila[negre]!=false){
      fila[negre]=false;
    }else{
      continue;
    };
    i++;
  };
};
console.log(cartro[0]);

// Genera 4 negres a fila 3 en funció del negres de les files 1 i 2 de manera
// que no hi hagin 3 negres o 3 blancs en la mateixa columna
function generaNegresFila3(fila) {
  var negresFila = 4;
  var casellesFila = 9;
  var i = 0;
  for (var k=0; k<fila.length;k++){
    // Recorre totes les columnes i si les files 1 i 2 tenen blanc les dues
    // en la columna posa un negre per evitar 3 blancs a la mateixa columna
    if(cartro[0][k]!=false && cartro[1][k]!=false){
      cartro[2][k]=false;
      negresFila--;
    }
  }
  // Col·loca els negres que falten evitant tres negres a la mateixa columna
  while (i <negresFila){
    var negre = Math.floor(Math.random()*casellesFila);
    if(fila[negre]!=false && (cartro[0][negre]!=false || cartro[1][negre]!=false)){
      fila[negre]=false;
    }else{
      continue;
    }
    i++;
  }
}
// Funció per desordenar un array
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
// Genera un array de numeros
function generarNumeros(){
  var col = 9;
  var final = 89;
  // Crea un array de 1-n en que cada elemente té el valor de la seva posició
  var totalNumeros = [];
  for (let k=1;k<final+1;k++){
    totalNumeros.push(k);

  }
  // Divideix l'array en porcions, en aquest cas de 9 elements que són els
  // elements per fila del cartró
  var start = 0;
  var end = col;
  for (var j=0;j<9;j++){
    // Divideix i desordena
    // Cada posició de grupsNumeros conté la decena corresponent
    grupsNumeros[j] = shuffle(totalNumeros.slice(start, end));
    start = end;
    end = end+10;
  }
  return grupsNumeros;


}
function omplirNumeros () {
  // Per a cada columna del cartró = grupsNumeros.length
  for (let i=0;i<grupsNumeros.length;i++){
    // Per a cada fila del cartró
    for (let j=0;j<cartro.length;j++){
      if (cartro[j][i]!=false){
        // Si el valor no és false, s'extreu del final de l'array corresponent
        // a la seva decena un número del final de l'array que està desordenat
        // La funció pop() extreu i elimina l'últim element d'un array
        cartro[j][i]=grupsNumeros[i].pop();
      }
    }
  }
}
function generarHtml () {
  for (var i=0; i<cartro.length;i++){
    for (var j=0; j<cartro[i].length;j++){
      if(cartro[i][j]==false){
        document.getElementById("cartro").insertAdjacentHTML("beforeend","<span class='nul'>X</span>");
      }else{
        document.getElementById("cartro").insertAdjacentHTML("beforeend","<span>"+cartro[i][j]+"</span>");
      }
    }
    document.getElementById("cartro").insertAdjacentHTML("beforeend","<br>");
  }
}

}//final window.onload



  // var arrayList= ['a','b','c','d','e','f','g'];
  // arrayList.sort(function(){
  //     return 0.5 - Math.random()
  // })
  // console.log(arrayList);
