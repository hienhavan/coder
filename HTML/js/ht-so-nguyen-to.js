var a =  +prompt("nhap vao 1 so");var count = 0;
for (var i = 2; i <10000; i++) {
if (i == 2 || i == 3 ||!(i % 2 == 0) && !(i % 3 ==0) && !(i % 5 == 0)  ) {
document.write(i+"<br>")
    count++
}if (count == a)
    break;

}