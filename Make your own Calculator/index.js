var num1= prompt("Enter first number")
var num2= prompt("Enter last number")

num1 = parseInt(num1,10)
num2 = parseInt(num2,10)

var sum,sub, mul,div, mod,expo

sum=num1+num2
document.write(num1+" + "+num2+"<br>")
document.write("Sum ="+sum+"<br>")

sub=num1-num2
document.write(num1+" - "+num2+"<br>")
document.write("Sub="+sub+"<br>")

mul=num1*num2
document.write(num1+" * "+num2+"<br>")
document.write("Multiplication: = "+mul+"<br>")

div=num1/num2
document.write(num1+" / "+num2+"<br>")
document.write("Division ="+div+"<br>")

mod=num1%num2
document.write(num1+" % "+num2+"<br>")
document.write("Modulas ="+mod+"<br>")

expo=num1**num2
document.write(num1+" ** "+num2+"<br>")
document.write("Exponentioal ="+expo)


