var $ = (id) => document.getElementById(id);// var annut = document.getElementsByClassName("abc");

var annut = document.getElementsByClassName("abc");
for (var i = 0; i < annut.length; i++) {
    annut[i].addEventListener('click', function() {
        var a = this.innerText;
       var b = parseInt(a);
        if(a == "AC"){
            var c = $('hienthi').value;
            var d = c.slice(0,-1);
            var f =  $('hienthi').value = d;
        }else if (a == "=") {
            var q =  $('hienthi').value;
            var tinh = eval(q);
            console.log(tinh);
            $('hienthi').value = tinh;
        }
        else {
            var f = $('hienthi').value += a;

        }

    });
}
