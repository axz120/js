window.onload = function() {
  var nomItem = "dades";
  var bd = document.getElementById('bd');
  // Referència al formulari html amb id="dades"
  var forDades = document.getElementById('dades');
  // Referència a tots els input del formulari. Es desa en un array
  var inputs = forDades.getElementsByTagName("input");
  // Si existeixen dades desades les carreguem, si no creem l'objecte
  if (localStorage.getItem(nomItem)){
    dadesForm = JSON.parse(localStorage.getItem(nomItem));
    // Es recuperen les dades
    for (var i=0; i<inputs.length;i++) {
      // S'obté la referència a l'element HTML
      var key = inputs[i].name;
      // Si hi han dades per carregar a l'element HTML (per evitar undefined)
      if (key in dadesForm){
        inputs[i].value = dadesForm[key];
      }
    };
  }else {
    dadesForm = {};
  }
  // Desem les dades introduïdes
  // NOTA: Hi han altres maneres de assignar un listener a diversos elements,
  // les veurem més endavant
  for (var i=0; i<inputs.length;i++) {
    inputs[i].addEventListener("blur",function () {
      dadesForm[this.name]=this.value;
      // Es converteix a JSON
      localStorage.setItem("dades", JSON.stringify(dadesForm));
    });
  };
  document.getElementById("reseteja").addEventListener("click",eliminaDades);
};

function eliminaDades () {
  localStorage.removeItem("dades");
  // Per buidar un objecte s'han d'eliminar tots els elements
  // Object.keys(dadesForm).forEach(function(key) { delete dadesForm[key]; });
  // dadesForm = null;
  // delete dadesForm;
  dadesForm = {};
};
