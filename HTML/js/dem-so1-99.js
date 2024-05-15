var $ =(id) => document.getElementById(id);
$('nut1').addEventListener('click', function(e) {
var td = '';
td += '<tr>'
    for (var i =1; i < 100; i++) {
         td += '<td>' + i + '</td>';
        if (i == 99) {
            alert("da dem xong")
        }
    }
    td += '</tr>'
$('bai1').innerHTML = '<table>' +td+'</table>';
})
for(var i=0;i<100;i++){
    var nd= +prompt("mhap nhiet do");
    if (nd <20){
     prompt("qua lnh,nhap lai")
 }else if (nd > 80){
     prompt("qua ,nhap lai")
 }else if (nd >= 20 && nd <=80) {
     alert("nhiet do cho phep")
     break ;
 }
 }
$('nut3').addEventListener('click',function (){
    var fib = [0, 1];
    for (var i = 2; i < 20; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
$('ht3').innerHTML = fib
    for (var j = 1; j < 20; j++) {
        if (fib[j] % 5 == 0) {
            $('ht4').innerHTML = "so dau tien chia het cho 5 la:" + fib[j];
break;
        }
    }
    var sum = 0;
    for (var k = 0; k < 20; k++) {
        sum += fib[k];
    }
    $('ht4').innerHTML = "tong 20 so dau tien la:" + sum;

})
$('nut6').addEventListener('click',function (){
    for (var i = 7; i <300; i += 7) {
        var sum = 0;
        var dem = 0;
        if (i%7 == 0){
            sum += i;
            dem++;
        }
        else if (dem == 30){
            break;
        }
    }
    $('ht6').innerHTML = "tong 30 so dau tien la chia het cho 7 la:" + sum;
})
$('nut7').addEventListener('click',function (){
    // for (var i =1; i <= 100; i++) {
    //     if (i == 3){
    //         $('ht7').innerHTML = "tong 30 so dau tien la chia het cho 7 la:" + sum;
    //
    //     }
    // }
    let num;
    for (num = 1; num <= 100; num++) { // 99 vẫn đúng
        if (num % 3 == 0 && num % 5 !== 0) {
            document.write("Fizz" + "<br>");
        } else if (num % 5 == 0 && num % 3 !== 0) {
            document.write("Buzz" + "<br>");
        } else if (num % 3 == 0 && num % 5 == 0) {
            document.write("FizzBuzz" + "<br>");
        }
        document.write (num + "<br>");
    }
})