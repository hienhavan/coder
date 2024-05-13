var $ =(id) => document.getElementById(id);
$("ghep_hinh1").addEventListener('click',function(){
    var a = ["url('https://tse2.mm.bing.net/th?id=OIP.L6uwZSilJyP8rBdmpYQsDAHaEK&pid=Api&P=0&h=180')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-con-meo-cute4.jpg')","url('https://trinhvantuyen.com/wp-content/uploads/2022/05/306c1ebd04fb88ab72f7a8b75c7a30ea.jpg')"];
    var i = Math.random()*5;
    var j = parseInt(i);
    var h =  a[j];
    var A = $('ghep_hinh1').style.background = h;
return A;
})
$("ghep_hinh2").addEventListener('click',function(){
    var a = ["url('https://tse2.mm.bing.net/th?id=OIP.L6uwZSilJyP8rBdmpYQsDAHaEK&pid=Api&P=0&h=180')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-con-meo-cute4.jpg')","url('https://trinhvantuyen.com/wp-content/uploads/2022/05/306c1ebd04fb88ab72f7a8b75c7a30ea.jpg')"];

    // var a = ["url('https://tse2.mm.bing.net/th?id=OIP.L6uwZSilJyP8rBdmpYQsDAHaEK&pid=Api&P=0&h=180')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-con-meo-cute4.jpg')","url('https://1.bp.blogspot.com/-oMGH-GzrEZU/XqGjCiY5jrI/AAAAAAAAiig/qNd6RJ3f5lw0NNOpiMpK8eztaI0gUdHHQCLcBGAsYHQ/s1600/Hinh-anh-meo-ngau-nhat%2B%252817%2529.jpg')"];
    var i = Math.random()*5;
    var j = parseInt(i);
    var h =  a[j];
    var B = $('ghep_hinh2').style.background = h;
return B;
})
$("ghep_hinh3").addEventListener('click',function(){
    var a = ["url('https://tse2.mm.bing.net/th?id=OIP.L6uwZSilJyP8rBdmpYQsDAHaEK&pid=Api&P=0&h=180')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-con-meo-cute4.jpg')","url('https://trinhvantuyen.com/wp-content/uploads/2022/05/306c1ebd04fb88ab72f7a8b75c7a30ea.jpg')"];

    // var a = ["url('https://tse2.mm.bing.net/th?id=OIP.L6uwZSilJyP8rBdmpYQsDAHaEK&pid=Api&P=0&h=180')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://mtv.vn/uploads/2023/02/25/meo-gg.jpg')","url('https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-meo-ff-cam-phong-lon.jpg')","url('https://upanh123.com/wp-content/uploads/2021/03/hinh-anh-con-meo-cute4.jpg')","url('https://toigingiuvedep.vn/wp-content/uploads/2022/04/anh-meo-khoc.jpg')"];
    var i = Math.random()*5;
    var j = parseInt(i);
    var h =  a[j];
    var C = $('ghep_hinh3').style.background = h;
    return C;
})
// if ($('ghep_hinh1').style.background == $('ghep_hinh2').style.background == $('ghep_hinh3').style.background ){
//     console.log("okokok")
// }
$('nen').classList.remove("h1")
$('nen2').classList.remove("h2")
$('ghep_hinh').addEventListener('click',function (){
    var A = $('ghep_hinh1').style.background;
    var B = $('ghep_hinh2').style.background;
    var C = $('ghep_hinh3').style.background;
    console.log(A,B,C);
    if (A === B && B === C) {
        $("nen").classList.add("h1");
        $("nen2").innerHTML = "ban gioi velo"
        $("nen2").classList.add("h2");
alert("ban da ghep dung")    }

})

