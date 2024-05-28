var abc = "tôi rất đẹp trai :))))";
var a = 0;
var ab = document.getElementById('key');
ab.addEventListener('keydown', function (e) {
//     if (e.key !== 'Backspace') {
//         e.preventDefault()
//         console.log(e)
//         var c = abc.charAt(a);
//         ab.value += c;
//         a = a + 1;
//     }
//
//     if (e.key == 'Backspace') {
//                ab.sice(0,-1);
//             ab.value;
//         }
//         if (a == abc.length) {
//             a = 0;
//             ab.value = " ";
//         }
//
     if (e.key !== 'Backspace') {
         e.preventDefault()
        console.log(e)
        var c = abc.charAt(a);
        ab.value += c;
        a = a + 1;
         if (a == abc.length) {
            a = 0;
            ab.value = " ";
        }
     }
})



