var abc = "tôi rất đẹp trai :))))";
var a = 0;
var ab =  document.getElementById('key');
    ab.addEventListener('keydown', function (e) {
        e.preventDefault()
    var c = abc.charAt(a);
    ab.value += c;
        a = a +1;
        if (a == abc.length){
            a = 0;
            ab.value = " ";
        }
    })



