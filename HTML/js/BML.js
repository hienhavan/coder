var $ =(id)=> document.getElementById(id);
 $('tinhtoan').addEventListener('click', function(e){
     var o1 = $('o1').value;
     var o2 = $('o2').value;
     var  bmi = o1 / (o2*o2);
     if (bmi < 18)
         document.write("Underweight");
     else if (bmi < 25.0)
         document.write("Normal");
     else if (bmi < 30.0)
         document.write("Overweight");
     else
         document.write("Obese");

 })