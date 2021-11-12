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

function rand_imgs() {
    let newimatges;
    newimatges = shuffle(imatges);
    let list = '';
    for (let i = 0; 6 > i; i++) {
        list += newimatges[i] + ';;;';
    }
    return list;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function print_list(list) {
    const arr = list.split(';;;');
    for (let i = 0; i < arr.length - 1; i++) {
        let title = arr[i].split('.');
    }
}

function getDiaSemana(dia) {
    var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    switch (dia) {
        case 1:
            return dias[1];
        case 2:
            return dias[2];
        case 3:
            return dias[3];
        case 4:
            return dias[4];
        case 5:
            return dias[5];
        case 6:
            return dias[6];
        case 7:
            return dias[7];
    }
}

function getMes(mes) {

    switch (mes) {
        case 1:
            return meses[1];
        case 2:
            return meses[2];
        case 3:
            return meses[3];
        case 4:
            return meses[4];
        case 5:
            return meses[5];
        case 6:
            return meses[6];
        case 7:
            return meses[7];
        case 8:
            return meses[8];
        case 9:
            return meses[9];
        case 10:
            return meses[10];
        case 11:
            return meses[11];
        case 12:
            return meses[12];
    }
}


window.onload = function () {
    document.getElementById("desar").onclick = function fun() {
        let date = new Date();
        const seg = date.getSeconds();
        const min = date.getMinutes();
        const h = date.getHours();
        const s_d = date.getDay();
        const n_d = date.getDate();
        const mon = date.getMonth();
        const yea = date.getFullYear();
        date = "el dia " + n_d + ", " + getDiaSemana(s_d) + ", " + "del mes " + mon + " y año " + yea + ", a las " + h + ":" + min + ":" + seg + ".";
        const list = rand_imgs() + 'Les imatges es van desar ' + date;
        localStorage.setItem("list", list);
    }

    document.getElementById("recuperar").onclick = function fun() {
        const list = localStorage.getItem("list");
        print_list(list);
    }
}
