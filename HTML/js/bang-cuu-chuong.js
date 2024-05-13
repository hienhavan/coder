var a = document.getElementById('1');
var b = document.getElementById('div1');
var tr = " "
a.addEventListener('click', function(e) {
    for (var i = 2; i <= 10; i++) {
        tr += '<tr>'
        for (var j = 1; j <= 10; j++) {
            var c = i*j;
            tr += "<td>" + i + "*" + j + "=" + c + "</td>";
        }
        tr += '</tr>'
    }
    b.innerHTML = '<table>' + tr + '</table>';
});