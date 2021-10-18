var text="Bangladesh"
var len=text.length
document.write(" "+len+"<br>")
document.write("Number of character: "+text.length+"<br>")

//var Name=prompt("Enter your name: ")

//document.write("Number of character of your NAMEQ: "+Name.length+"<br>")


var country="BanglaDesh"
var indexofchar=country.charAt(1)
document.write("Index Of Character : "+indexofchar+ "</br>")

var month="december"
month =month.toUpperCase()
document.write(month+ "</br>")


month =month.toLowerCase()
document.write(month+ "</br>")


var info1="Bangladesh"
var info2=" is a beautiful country"

document.write(info1.concat(info2))


var text3="Bangladesh"
var text4=text3.slice(3,9)
document.write(text4)


//get first name from user
// get last name from user
// add without using library function
// print full name
// total length of full name
// convert full name into uppercase

var first=prompt("enter your first name: ")
var last=prompt("enter your last name: ")
var fullname=first+last
document.write("Full name is : "+fullname+"<br>")
document.write("Total length of full name: "+fullname.length+"<br>")
fullname=fullname.toUpperCase()
document.write(fullname+"<br>")



