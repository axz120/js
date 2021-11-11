window.onload = function () {
  // Date
  let vdd = true;
  let getfecha = document.getElementById("fecha");
  getfecha.addEventListener('dblclick', cambiarformato);

  function formato1() {
    let hoy = new Date();
    let fecha = ("0" + hoy.getDate()).slice(-2) + '-' + ("0 " + (hoy.getMonth() + 1)).slice(-2) + '-' + hoy.getFullYear();
    let hora = ("0" + hoy.getHours()).slice(-2) + ':' + ("0" + hoy.getMinutes()).slice(-2) + ':' + ("0" + hoy.getSeconds()).slice(-2);
    return "Fecha y hora de hoy: " + fecha + " " + hora;

  }

  function formato2() {
    let hoy = new Date();
    let fecha = hoy.toLocaleString('en-US', {
      weekday: 'short'
    }) + ' ' + ("0" + hoy.getDate()).slice(-2) + ' ' + hoy.toLocaleString('en-US', {
      month: 'short'
    }) + ' ' + hoy.getFullYear();
    let hora = ("0" + hoy.getHours()).slice(-2) + ':' + ("0" + hoy.getMinutes()).slice(-2) + ':' + ("0" + hoy.getSeconds()).slice(-2);
    return "Fecha y hora de hoy: " + fecha + " " + hora;

  }
  fecha.appendChild(document.createTextNode((formato1()).toString()));

  function cambiarformato() { // doubleclick para cambiar de formato
    if (vdd) {
      document.getElementById("fecha").innerHTML = formato2();
      vdd = false;
    } else if (!vdd) {
      document.getElementById("fecha").innerHTML = formato1();
      vdd = true;
    }
  }
  setInterval(function () {
    if (vdd) {
      document.getElementById("fecha").innerText = formato1();
    } else {
      document.getElementById("fecha").innerText = formato2();
    }
  }, 1000);

  // Bingo

  let table = document.createElement('table');

  let arr = new Array(9);
  let min = 0;
  let max = 9;

  for (let i = 0; i < arr.length; i++) {
    let filas = new Array(3);
    for (let j = 0; j < filas.length; j++) {
      do {
        var num = Math.floor(Math.random() * (max - min)) + min + 1;
      } while (filas.includes(num));

      filas[j] = num;

    }
    filas.sort();
    min = min + 10;
    max = max + 10;
    arr[i] = filas;
    console.log(filas);
  }
  
  let arrNegras = [];

  for (let i = 0; i < arr[0].length; i++) {
    let negras = new Array(4);
    for (let j = 0; j < negras.length; j++) {
      do {
        var num = Math.floor(Math.random() * 9) + 1;
      } while (negras.includes(num));

      negras[j] = num;
      arrNegras.push(num);
    }
    console.log(negras);

    let tr = document.createElement('tr');

    for (let k = 0; k < arr.length; k++) {
      let td = document.createElement('td');

      if (negras.includes(k + 1)) {
        td.classList.add('negro');
        negras = negras + 1;
        td.appendChild(document.createTextNode(''));
      } else {
        td.appendChild(document.createTextNode(arr[k][i]));
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.getElementById("carton").appendChild(table);
  
  // Extra
  /*let boton = document.createElement('button');
  boton.innerHTML = "Extreu bola";
  
  let arrResult = [];



  document.getElementById("boton").appendChild(boton);*/
}