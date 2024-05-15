var a =  prompt("nhap vao 1 so");
var b = parseInt(a);
var count = 0;
for (var i = 2; i <100000; i++) {
if (i == 2 && i == 3 || !(i % 2 == 0) && !(i % 3 ==0) ) {
document.write(i+"<br>")
    count++
}if (count == b)
    break;

}