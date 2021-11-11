/* let d = getItem("dades")
 let do = JSON.parse(d) transformarlo a js
    dades = {nom:"sa"}
    dades[nom] acceder
 */
window.onload = function(){
   // Enviar datos
   let send = document.getElementById("enviar");
   send.addEventListener("click",enviar);
   function enviar(){
      let vnom = document.getElementById("nom").value;
      localStorage.setItem("nom",vnom);
      let vcognom = document.getElementById("cognom").value;
      localStorage.setItem("cognom",vcognom);
      let vemail = document.getElementById("email").value;
      localStorage.setItem("email",vemail);
      let vadreca = document.getElementById("adreca").value;
      localStorage.setItem("adreca",vadreca);

   }
   // Focusout, guardar los datos en el input y localstorage
   let nom = document.getElementById("nom");
   nom.addEventListener("focusout",nfocus);
   function nfocus() {
      let vnom = document.getElementById("nom").value;
      localStorage.setItem("nom",vnom);
   }
   let snom = JSON.stringify(localStorage.getItem("nom"));
   let pnom = JSON.parse(snom);
   document.getElementById("nom").value = pnom;

   let cognom = document.getElementById("cognom");
   cognom.addEventListener("focusout",cfocus);
   function cfocus() {
      let vcognom = document.getElementById("cognom").value;
      localStorage.setItem("cognom",vcognom);
   }
   let scognom = JSON.stringify(localStorage.getItem("cognom"));
   let pcognom = JSON.parse(scognom);
   document.getElementById("cognom").value = pcognom;

   let email = document.getElementById("email");
   email.addEventListener("focusout",efocus);
   function efocus() {
      let vemail = document.getElementById("email").value;
      localStorage.setItem("email",vemail);
   }
   let semail = JSON.stringify(localStorage.getItem("email"));
   let pemail = JSON.parse(semail);
   document.getElementById("email").value = pemail;

   let adreca = document.getElementById("adreca");
   adreca.addEventListener("focusout",afocus);
   function afocus() {
      let vadreca = document.getElementById("adreca").value;
      localStorage.setItem("adreca",vadreca);
   }
   let sadreca = JSON.stringify(localStorage.getItem("adreca"));
   let padreca = JSON.parse(sadreca);
   document.getElementById("adreca").value = padreca;

   // RESET
   let limp = document.getElementById("resetejar");
   limp.addEventListener("click",resetejar);

   function resetejar() {
      document.getElementById("nom").value = "";
      document.getElementById("cognom").value = "";
      document.getElementById("email").value = "";
      document.getElementById("adreca").value = "";
      localStorage.clear();
   }

}