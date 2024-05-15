var $ = (id) => document.getElementById('id');
var anut1 = document.getElementsByClassName('abc');
var onhap =document.getElementsByClassName('m');
var f = '';
//
for (var i = 0; i < onhap.length; i++) {

onhap[i].addEventListener('click',function (){
    var nhap = this.name;
    f = nhap;
    }
)
};
for (var j = 0; j < anut1.length; j++){
anut1[j].addEventListener('click',function (){
        var a = this.innerText;
        // onhap[f].value += a;


             if (a == "=") {
                var cannag = onhap[0].value;
                var chieucao = onhap[1].value;
                console.log('chieu cao:'+ cannag)
                console.log("can nag:" + chieucao)
                    var  bmi = cannag / (chieucao * chieucao);
                 // if (bmi < 18)
                 //     $("inramanhinh").innerHTML = ":gầy zl";
                 // else if (bmi < 25.0)
                 //     $("inramanhinh").innerHTML = ":ok ";
                 // else if (bmi < 30.0)
                 //     $("inramanhinh").innerHTML = ":béo zl";
                 // else
                 //     $("inramanhinh").innerHTML = ":sắp chêt";
                 if (bmi <18){
                     $('h1').innerHTML = "cần ăn thêm vì gầy"
                 }
                 else if (bmi < 25){
                     $("h1").innerHTML = "ok bình thường"
                 }
                 else if (bmi < 30){
                     $("h1").innerHTML = 'béo zl'
                 }
                 else {
                     $("h1").innerHTML = " sắp chết "
                 }
             }

             else {
                 onhap[f].value += a;
             }
    }
)};
