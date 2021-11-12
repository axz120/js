var imatges = [
    '105716.jpg',
    '10.jpg',
    '1111.jpg',
    '1290130.jpg',
    '1319740.jpg',
    '1343430.jpg',
    '1348350.jpg',
    '1348530.jpg',
    '1369500.jpg',
    '1373110.jpg',
    '1373200.jpg',
    '1378900.jpg',
    '1381680.jpg',
    '1387310.jpg',
    '1393140.jpg',
    '1417610.jpg',
    '1a.jpg',
    '1.jpg',
    '2-1.jpg',
    '4.jpg',
    '7.jpg',
    'f1a.jpg',
    'f1.jpg',
    'h1.jpg',
    'l1-copia.jpg'
  ]
  var newtext = localStorage.getItem("data");
  var saveObject = JSON.parse(newtext);
  var result=[];
  var cont=0;
  function save() {
    random = imatges.sort(function(){return Math.random()-0.5});
    for (let i = 0; i < 6; i++) {
      result[i]=random[i];
      cont++;
    }
    date = new Date();
    result[cont]=date;
    localStorage.setItem("data", JSON.stringify(result));
  };
  function printPhotos(){
    console.log(saveObject);
    for (let i = 0; i < saveObject.length-1; i++) {
      document.getElementById("fotos").innerHTML += saveObject[i]+"<img src='imatges/"+saveObject[i]+"'>";
      }
};
