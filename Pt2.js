// Aoxin Zhou
window.onload = function () {
    carreto = [
        ["Asus VivoPC VM42-S255Z",2,345.59,true],
        ["HTC Vive Deluxe Audio Strap", 3, 119.50, true],
        ["Office 365", 10, 69.95, true],
        ["Windows Server 2012 R2", 2, 1582.6, true],
        ["Lenovo Legion Y520", 3, 799, false],
      ];

    let item = ["Descripció","Quantitat","Preu","Import"];
    var tbd = document.getElementById("disponibles");
    var tbnd = document.getElementById("nodisponibles");
    let total = 0;
    let multi = 0;
    
    for (let i = 0; i< carreto.length; i++) {
        let tr = document.createElement("tr");
        
        for (let o = 0; o< carreto[i].length; o++) {
            let td = document.createElement("td");
            
            if (carreto[i][o]==carreto[i][carreto[i].length-1]) {
                
                multi = carreto[i][1]*carreto[i][2].toFixed(2);
                td.appendChild(document.createTextNode(multi)); //La columna de multiplicación
                if (carreto[i][carreto[i].length-1]==true) {
                    total = total + multi;
                    console.log(total);
                }
            }else{   
                td.appendChild(document.createTextNode(carreto[i][o])); //Columnes de contingut
            }
            if (carreto[i][carreto[i].length-1]==true) { //bucles per seperar les taules true & false
                let totalRowCount = tbd.rows.length; 
                if (totalRowCount == 0) {
                    for (let l = 0; l < item.length; l++) {
                        let th = document.createElement("th");
                        th.appendChild(document.createTextNode(item[l]));
                        tbd.appendChild(th);
                        
                    }
                }
                tbd.appendChild(tr); 
                tr.appendChild(td);
               
            }else{
                let totalRowCount = tbnd.rows.length; 
                if (totalRowCount == 0) {
                    for (let l = 0; l < item.length; l++) {
                        let th = document.createElement("th");
                        th.appendChild(document.createTextNode(item[l]));
                        tbnd.appendChild(th);
                    }
                }
                tbnd.appendChild(tr);
                tr.appendChild(td);
            }
        }
        
    }
    //crear l'última fila
    let tri = document.createElement("tr");
    let tdi = document.createElement("td");
    tdi.setAttribute("colspan","4");
    tdi.setAttribute("id","total");
    tbd.appendChild(tri);
    tdi.appendChild(document.createTextNode("Import total: "+total.toFixed(2)));
    tri.appendChild(tdi);
    
    
}