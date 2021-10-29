//This is single line comments 
//document.getElementById("cool").innerHTML="My first js single line comment ";

/*The code will change when we call the id cool section
from html 
which will change the color */




const person={
    firstName:"shariful",
    lastName:"islam",
    id:92875,
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }



};


document.getElementById("fool").innerHTML=document.write(person.fullName.innerHTML);

const counting=[1,7,8,5,9,3,5];
counting.slice();
document.getElementById("tool").innerHTML=counting;
counting.sort();

document.getElementById("cool").innerHTML=counting;





