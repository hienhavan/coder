let giatri = document.getElementById("doi-tien");
var goc =document.getElementById("goc");
var chuyen_doi = document.getElementById("chuyen-doi");
var nut = document.getElementById("nut");
nut.addEventListener('click',function (){
    let gtgoc = goc.value;
    let gtchuyendoi = chuyen_doi.value;
    let giatriinput =giatri.value;
    var inra = document.getElementById("in");

    if(gtgoc == gtchuyendoi ){
    var a= giatriinput;
}
else if (gtgoc == "vnd" && gtchuyendoi == "usd"){
   var a = giatriinput/23000
}
else if (gtgoc == "usd" && gtchuyendoi == "vnd"){
    var a = giatriinput*23000
}
inra.innerHTML = "result:"+a;
})

