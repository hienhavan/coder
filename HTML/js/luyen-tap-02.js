var $ =(id) => document.getElementById(id);
var a = prompt("nhap vao nhiet do");
var a1 = parseInt(a);
if (a1 >= 0 || a1 <= 0 ){
    alert("bang:"+" "+ a1*9/5+32+" "+"do F")
}else
{
    alert("bat buoc phai la 1 so")
}
var b = prompt("nhap vao chieu dai (m)");
var b1 = parseInt(b);
if (b1 >= 0 || b1 <= 0 ){
    alert("bang:"+" "+b1*3.2808+" "+"feet")
}else {
    alert("bat buoc phai la 1 so")
}
var c = prompt("nhap vao chieu dai canh hinh vuong");
var c1 = parseInt(c);
if (c1 >= 0 || c1 <= 0 ){
    alert("hinh vuong co dien tich bang:"+" "+c1*c1 )
}else {
    alert("bat buoc phai la 1 so")
}
var d = prompt("nhap vao chieu dai hinh chu nhat");
var d1 = prompt("nhap vao chieu rong hinh chu nhat");
var d2 = parseInt(d);
var d3 = parseInt(d1);
if (d2 >= 0 || d2 <= 0 && d3 >= 0 || d3 <= 0 ){
    alert("dien tich hinh chu nhat la :"+" "+d2*d3 );
}else {
    alert("bat buoc phai la 1 so");
}
var e = prompt("nhap vao canh thu nhat cua tam giac")
var e1 = prompt("nhap vao canh thu hai cua tam giac")
var e2 = parseInt(e);
var e3 = parseInt(e1);
if(e2 >= 0 || e2 <= 0 && e3 >=0 || e3 <= 0){
    alert("dien tich cua tam giac vuong la:"+" "+1/2*(e2*e3))
}else{
    alert("bat buoc phai la 1 so");
}
var f = prompt("nhap vao so tuoi")
var f1 = parseInt(f);
if (f1 >0 && f1 < 120){
    alert(f1+""+"co phai la tuoi cua mot nguoi");
}else {
    alert("khong phai tuoi cua mot nguoi");
}
$('nut1').addEventListener('click',function () {
    var g1 = +$('o1').value;
    var g2 = +$('o2').value;
    var g3 = +$('o3').value;
    if (g1,g2,g3 > 0 && g1+g2 >g3 && g2+g3 >g1 && g1 +g3 > g2){
        alert("3 da nhap la canh cua tam giac");
    }else {
        alert(" 3 khong phai la canh cua tam giac")
    }
})
$('nut2').addEventListener('click',function () {
    var g1 = +$('o4').value;
    var g2 = +$('o5').value;
    if (g1 > 0 && g2 >0){
        alert("dien tich hinh chu nhat la:"+" "+g1*g2);
    }
    else {
        alert("bat buoc la so lon hon khong")
    }
})
$('nut3').addEventListener('click',function () {
    var g1 = +$('o6').value;
(g1 > 5000000 && g1 < 10000000)? alert("thue cua ban la:"+g1*5/100) : (g1 >= 10000000 && g1 < 20000000)? alert("thue cua ban la:"+g1*10/100) :(g1 >= 20000000)? alert("thue cua ban la:"+g1*15/100) : alert("qua ngheo ko bo thue");
})