var $ = (id) => document.getElementById(id);
$('nut').addEventListener('click', function () {
    var thang = $('thang').value;
    switch (thang) {
        case '1':
            case '3':
                case '5':
        case '7':
            case '8':
                case '10':
                    case '12':
$('hienthithang').innerHTML = "thang "+ thang + " co 31 ngay";
break;
        case '4':
            case '6':
                case '9':
                    case '11':
$('hienthithang').innerHTML = "thang "+ thang + " co 30 ngay";
break;
case '2':
    $('hienthithang').innerHTML = "thang "+ thang + " co 28 hoac 29 ngay";
break;
    }
})