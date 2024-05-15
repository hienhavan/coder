
var good = document.getElementsByClassName("sty");
var $ =(id) => document.getElementById(id);
for (var i = 0;i < good.length;i++){
good[i].addEventListener('click', function(){
    var cc = this.value
if (cc == "a"){
    $("c").checked = false;
}
else if (cc == "b"){
    $("c").checked = false;
    $("a").checked = false;
    // $('c').classList.remove("styy")
    // $('a').classList.remove("styy")

}
else if (cc == "c"){
    // $("c").classList.add("styy");
    $('a').checked = false;
}
// for (var a = 1;a<3;a++){
// if (cc == "c"){
//         $("c").classList.add("styy");
//     }
// else if (a % 2 == 1){
//     $('a').classList.remove("styy")
// }
// }
})
}
