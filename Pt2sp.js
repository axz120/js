//S'executa el codi una vegada s'ha carregat el document HTML
window.onload = function () {
    // Els camps de la comanda que s'han de mostrar es defineixen en un array
  item = ["Descripció","Quantitat","Preu","Import"];
  var tb = document.getElementById("disponible");
  var tbn = document.getElementById("pendent");
    // L'array carreto conté els camps dels productes
    carreto = [["Asus VivoPC VM42-S255Z",2,345.59,false],
      ["HTC Vive Deluxe Audio Strap", 3, 119.50, true],
      ["Office 365", 10, 69.95, true],
      ["Windows Server 2012 R2", 2, 1582.6, true],
      ["Lenovo Legion Y520", 3, 799, false]];
    //Variable Total per acumular els imports de cada producte
    var Total = 0;
    /* CREAR LES FILES DE LA TAULA */
    //Es generen les cel·les per a cada item del carreto
    for (let i=0;i<carreto.length;i++){
      // Es crea la fila per a cada producte
      let tr = document.createElement("tr");
        for (var j =0;j<carreto[i].length;j++){
          var td = document.createElement("td");
            td.setAttribute("id","td"+j+i);
            // Convertir el valor a dos decimals
            if (j==2){carreto[i][2] = carreto[i][2].toFixed(2);}
            // Quan s'arriba a la 4t columna s'ha de calcular l'import = columna2 * columna3
            if (j==3){
              importe = carreto[i][1]*carreto[i][2];
              var v = document.createTextNode(importe.toFixed(2));
              // Si l'article està disponible se suma l'import al total
              if (carreto[i][3]){Total += importe};
            // En qualsevol altre cas s'assigna el valor corresponent
            }else {
              var v = document.createTextNode(carreto[i][j]);
            }
            td.appendChild(v);
            tr.appendChild(td);
            if (carreto[i][3]){
              // ES POT SIMPLIFICAR EL CODI AMB UNA FUNCIÓ
              // Comprova si la capçalera existeix
              var th = document.getElementById("trh");
              if (th===null){
                // Si no existeix la crea
                var trh = document.createElement("tr");
                trh.setAttribute("id","trh");
                tb.appendChild(trh);
                for (let i=0;i<item.length;i++){
                  var th = document.createElement("th");
                  var c = document.createTextNode(item[i]);
                  th.appendChild(c);
                  trh.appendChild(th);
                }
              }
              tb.appendChild(tr);
            }else {
              // ES POT SIMPLIFICAR EL CODI AMB UNA FUNCIÓ
              // Comprova si la capçalera existeix
              var thn = document.getElementById("trhn");
              if (thn===null){
              // Si no existeix la crea
                var trhn = document.createElement("tr");
                trhn.setAttribute("id","trhn");
                tbn.appendChild(trhn);
                for (let i=0;i<item.length;i++){
                  var th = document.createElement("th");
                  th.appendChild(document.createTextNode(item[i]));
                  trhn.appendChild(th);
                }
              }
              tbn.appendChild(tr);
            }
          }
        }
          /* CREAR LA FILA PER MOSTRAR L'IMPORT TOTAL */
          if (Total>0){
            var linia = document.createElement("tr");
            var columna = document.createElement("td");
            columna.setAttribute("colspan",item.length);
            columna.appendChild(document.createTextNode("Import total: "+Total.toFixed(2)));
            linia.appendChild(columna);
            tb.appendChild(linia);
          }
}
