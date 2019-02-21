/* document.getElementById().addEventListener('DOMContentLoaded', function(){
var greet_name = function(person_name, greet) {
  var text = greet + ',' + name;
  var person_name = text
  text = "Enter your name here";
  person_name = prompt(text); stop 

  console.log(text);
  var greet = greet_name(person_name, greet);
};
greet_name()
}); */

 /* partie restaurant */  

 var ladate=new Date();
 var j = ladate.getDay();
 var jourT = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
 var h=ladate.getHours();
 var m=ladate.getMinutes();
 var b=ladate.getDate();
 var c=ladate.getMonth();
 var d=ladate.getFullYear();
 
 function heure(){
 if (m < 10) {
 m = "0"+ m;
 }
 
 if (c < 10) {
 c = "0"+ c;
 }
 
 if (h >= 12 && h <= 23) {
 document.getElementById("date").innerHTML = jourT[j]+ " " + b +" "+ c +" " +d+ ", " + h + ":" + m ;
 document.getElementById("ouvertoupas").innerHTML = "Nos restaurant sont ouverts, Wellcome";
 } else {
 document.getElementById("date").innerHTML = b +" "+ c +" " +d+ ", " + h + ":" + m ;
 document.getElementById("ouvertoupas").innerHTML = " Nos restaurant ne sont pas encore ouverts, à bientôt!";
 
 }
 };
 
 heure();




