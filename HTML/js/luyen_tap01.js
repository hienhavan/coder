var $ =(id)=>document.getElementById(id);
$('ab').addEventListener('click',function (){
    var a = $('a').value;
    var b = $('b').value;
    if (a%b == 0){
        $('ht').innerHTML = "a co chia het cho b";
        $('a').value = " ";
        $('b').value = " ";
    }
    else {
        $('htbai1').innerHTML = "a khong chia het cho b";

    }
})
$('nut2').addEventListener('click',function (){
    var a2 = $('bai2').value;
    if (a2 < 15){
        $('htbai2').innerHTML = "khong du dieu kien hoc lop 10";
    }
})
$('nut3').addEventListener('click',function (){
    var a3 = $('bai3').value;
    if (a3 < 0){
$('htbai3').innerHTML = "so "+a3+" < hon 0";
    }
    else{
        $('htbai3').innerHTML = "so "+a3+" > hon 0";
    }
})
$('nut4').addEventListener('click',function (){
    var a4 = +$('bai4-1').value;
    var b4 = +$('bai4-2').value;
    var c4 = +$('bai4-3').value;
    var max = (a4 > b4)? a4:b4;
    var max = (max > c4)? max:c4;
    var max = (max > a4)? max:a4;
    $('htbai4').innerHTML = "so lon nhat la:"+max
})
$('nut5').addEventListener('click', function () {
    var a5 = +$('bai5').value;
    ($('htbai5').innerHTML = (a5 < 5) ? "hoc luc trung binh" : (a5 >= 5 && a5 < 8) ? "hoc luc kha" :(a5 >= 8 && a5 <= 10) ? "hoc luc gioi" : null);
});
$('nut6').addEventListener('click', function () {
    var a6 = +$('bai6').value;
    var b6 = a6*10/100;
    $('htbai6').innerHTML = "hoa hong nhan duoc la:" + b6 + "VND"
})
$('nut5').addEventListener('click', function () {
    var a7 = +$('bai5').value;
    if (a7 >= 8 && a7 <= 10){
        alert("hoc luc gioi")
    }
    if (a7 >= 5 && a7 < 8){
        alert("hoc luc kha" )
    }
    else {
       alert( "hoc luc trung binh")
    }
})
var a = +prompt("nhap so tien");
var b = +prompt("nhap so thang");

alert(a*(1+0.1)**b)

