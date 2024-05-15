// var ab = document.getElementById('anh');
// var $ = (id) => document.getElementById(id);
// ab.addEventListener('mouseover',function(e){
//
//    setInterval(()=> {
//         var anh1 = $('anh').style.left =parseInt($('anh').style.left) + 1 + 'px';
//        var anh2 = parseInt(anh1)
//        console.log(anh2)
//         if (anh2 >= 1750){
//             let abc =  setInterval(()=>{
//               var anh3 = $('anh').style.left =parseInt($('anh').style.left) - 0.01 + 'px';
//               var anh4 = parseInt(anh3);
//                 if (anh4 <= 0){
//                     clearInterval(abc);
//                 }
//             },10)
//
//         }
//
//     },10)
// });
// var ab = document.getElementById('anh');
// var $ = (id) => document.getElementById(id);
// ab.addEventListener('mouseover',function(e){
//
//      setInterval(()=> {
//         var anh1 = $('anh').style.left =parseInt($('anh').style.left) + 1 + 'px';
//         var anh2 = parseInt(anh1)
//         console.log(anh2)
//         if (anh2 >= 1920){
//
//           $('anh').style.left = -20 + 'px'
//                 var anh1 = $('anh').style.left =parseInt($('anh').style.left) + 1 + 'px';
//
//         }
//
//     },10)
// });
let v = 3;
let v1 = 3;
setInterval(()=> {
    let anh = document.getElementById('x');
    anh.style.left = parseInt(anh.style.left) + v + 'px';
    anh.style.top = parseInt(anh.style.top) + v1 + 'px';
    if (parseInt(anh.style.left) > window.innerWidth - 200 || parseInt(anh.style.left) == 0) {
        // anh.style.left = '0px';
        v = -v;
    }
    if (parseInt(anh.style.top) > window.innerHeight - 200 || parseInt(anh.style.top) == 0) {
        // anh.style.left = '0px';
        v1 = -v1;
    }
},1);