window.onload = function() {
//1.calculadora    
let calcula = document.getElementById("calcula");
calcula.addEventListener("click",calculadora);

function calculadora() {
    //value para coger el valor del input
    //replace de , a .
    let t1 = document.getElementById("t1").value.replace(",","."); 
    let t2 = document.getElementById("t2").value.replace(",",".");
    let op = document.getElementById("op").value;
    let total;

    //parseFloat para convertir a decimal
    if (op == "suma") {
        total = parseFloat(t1) + parseFloat(t2);
        total = total.toFixed(2);
        document.getElementById("resultado").value = total;
        //alert(total);
    }else if (op == "resta") {
        total = parseFloat(t1) - parseFloat(t2);
        total = total.toFixed(2);
        document.getElementById("resultado").value = total;
    }else if (op == "multi"){
        total = parseFloat(t1) * parseFloat(t2);
        total = total.toFixed(2);
        document.getElementById("resultado").value = total;
    }else if (op == "divi"){
        total = parseFloat(t1) / parseFloat(t2);
        total = total.toFixed(2);
        document.getElementById("resultado").value = total;
    }else if (op == "potencia"){
        total = Math.pow(parseFloat(t1),Math.round(parseFloat(t2)));
        total = total.toFixed(2);
        document.getElementById("t2").value = Math.round(parseFloat(t2));
        document.getElementById("resultado").value = total;
    }
    //cambiar de color en caso de error
    if (total == "NaN" || total == "Infinity") {
        document.getElementById("resultado").style.color = "red";
    }
    
}
// limpiar campos
let limp = document.getElementById("limpiar");
limp.addEventListener("click",limpiar);

function limpiar() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultado").value = "";

}
//2.1 Correu
let executa = document.getElementById("executa");
executa.addEventListener("click",executar);

function executar() {
    let temail = document.getElementById("correu").value;
    
    let splitemail = temail.split("@");
    let usuari = splitemail[0].length;
    let domini = splitemail[1];
    document.getElementById("lsa").value = usuari;
    let splitDomini = domini.split(".");
    document.getElementById("tld").value = splitDomini[splitDomini.length-1];
    let thosdomini = "@thosicodina.com";
    document.getElementById("noudomini").value = splitemail[0]+thosdomini;
}
// limpiar campos
let limp1 = document.getElementById("limpiar1");
limp1.addEventListener("click",limpiar1);

function limpiar1() {
    document.getElementById("correu").value = "";
    document.getElementById("lsa").value = "";
    document.getElementById("tld").value = "";
    document.getElementById("noudomini").value = "";
}

//2.2 Fltrar correus

let filtra = document.getElementById("filtra");
filtra.addEventListener("click",filtrar);

function filtrar() {
    let filtrarEmail = ["p.escosa@gmail.com","j.garcia@info.yahoo.es","r.esteban@sales.gmail.com",
"a.gomez@gmail.es", "l.mesa@gmail.com", "t.sants@hotmail.es", "v.ros@hotmail.com"];
let arraygmail = [];
let arrayes = [];
    filtrarEmail.forEach((element) => {
        let egmail = "";
        let splitegmail = element.split("@");
        let domini = splitegmail[1];
        if (domini.includes("gmail.com")) {
            arraygmail.push(element);
            for (let o = 0; o < arraygmail.length; o++) {
                egmail += " "+arraygmail[o]+"<br>";
                    
            }
            document.getElementById("lgmail").innerHTML = egmail;
        }
        let ees = "";
        let splitees = element.split("@");
        let domini1 = splitees[1];
        if (domini1.includes(".es")) {
            arrayes.push(element);
            for (let o = 0; o < arrayes.length; o++) {
                ees += arrayes[o]+"<br>";
                    
            }
            document.getElementById("ltld").innerHTML = ees;
            
        } 
    });
}

// limpiar campos
let limp2 = document.getElementById("limpiar2");
limp2.addEventListener("click",limpiar2);

function limpiar2() {
    document.getElementById("lgmail").remove();
    document.getElementById("ltld").remove();
}

//2.3 Extreure subdomini

let correos = ["p.escosa@gmail.com","j.garcia@info.yahoo.es","r.esteban@sales.gmail.com",
"a.gomez@gmail.es", "l.mesa@gmail.com", "t.sants@hotmail.es", "v.ros@hotmail.com"];
function extrure(param) {
    let sub0 = "";
    param.forEach((element) => {

        
        let dominis = element.split("@");
        let splitsub = dominis[dominis.length-1].split(".");
        
        if (splitsub.length > 2) {
            sub0 += "Subdomini de l'email "+element+" --> "+splitsub[0]+"<br>";
            document.getElementById("subdominis").innerHTML = sub0;
        }
        
    });
}
extrure(correos);

}