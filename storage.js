window.onload=function(){

    


    var form = document.getElementById('form');
    var inputData=Array.from(form.getElementsByTagName("input"));
    var data = {};
    var newtext = localStorage.getItem("dades");
    var newObj = JSON.parse(newtext);
    
    
    for (let i = 0; i < inputData.length; i++) {
        inputData[i].addEventListener("blur",function(){
            data[this.name]=this.value;
            localStorage.setItem("dades", JSON.stringify(data));  
        });
    }
    
   
        
    for (let i = 0; i < inputData.length; i++) {
        var key = inputData[i].name;
        
        if (key in newObj) {
            inputData[i].value = newObj[key];
        }
    };

    }

function deleteData(){
    localStorage.removeItem("dades");
    data = {};
}
function load(){    
    var checked = JSON.parse(localStorage.getItem('checkbox1zaal1'));
    document.getElementById("checkbox1zaal1").checked = checked;
}
function save(){
    var checkbox = document.getElementById('checkbox1zaal1');
    localStorage.setItem('checkbox1zaal1', checkbox.checked);
}