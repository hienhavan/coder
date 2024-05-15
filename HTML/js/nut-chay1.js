var nutChay1 = document.getElementById("no");
var yes = document.getElementById('yes');
var love = document.getElementById('love');


nutChay1.addEventListener('mouseover', function(e) {
    // var l = Math.random() * 300;
    nutChay1.style.left=Math.random()*window.innerWidth+"px";
    nutChay1.style.top=Math.random()*window.innerHeight+"px";
})
yes.addEventListener('click', function(e) {
    love.innerHTML = "I love you too"
});