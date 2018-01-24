//option 1
var a = 3;
var h = 6;
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

//option 2
var b = prompt("give 1st number");		
var c = prompt("give 2st number");
var triangleArea2 = b*c/2;
if (b != null && c != null) {
    alert(triangleArea2);
}