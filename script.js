var button = document.getElementById('giaiBtn');
giaiBtn.onclick = function () {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    if (a == '' || b == '') {
        alert('Vui long nhap du lieu')
    } else {
        a = Number(a);
        b = Number(b);
        giaiPt(a, b);
    }
};

function giaiPt(a, b) {
    if(a == 0 && b == 0){
        alert('pt vo so nghiem');
    } else if( a!= 0 && b == 0 ) {
        alert('pt co nghiem x = 0');
    } else if (a == 0 && b != 0) {
        alert('pt vo nghiem');
    } else {
        alert('pt co nghiem x =' + (-b/a));
    }
}