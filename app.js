                        //chapter 14-16 pdf
                       
//q1.                        
var studentsName=[,]
console.log(studentsName);
             //&                   
console.log(studentsName[0]);

//q2.
var studentsName={
    name:[]
}
console.log(studentsName);

//q3.
var fruits=["apple","mango","banana","orange"];
console.log(fruits);

//q4.
var number=[1,2,3,4,5,6,7,8];
console.log(number);

//q5.
var booleanArray=[true,false,true,false];
console.log(booleanArray);

//q6.
var mixedArray=["apple",1,true,null,{name:"sara"},[1,2,3,4]];
console.log(mixedArray);

//q7.
var quali=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(`<h2>Qualification:</h2> <br> 1) ${quali[0]}  <br> 2) ${quali[1]}  <br> 3) ${quali[2]}  <br> 4) ${quali[3]}  <br>
   5) ${quali[4]}  <br> 6) ${quali[5]}  <br> 7) ${quali[6]}  <br> 8) ${quali[7]}`);

//q8.
var studentsName=["Michael","john","Tony"];
var score= [320,230,480];
var totalMarks=500;

for(var i=0; i<studentsName.length; i++){
    var percentage=(score[i]/totalMarks)*100;
    document.write(`Score of ${studentsName[i]} is ${score[i]}. Percentage: ${percentage}% <br>`);
}

//q10.
var studentScore=[320,230,480,120];
document.write(`Scores of Students ${studentScore}`);

//q11.
var cities =["Karachi ","Lahore","Islamabad","Quetta","Peshawar"]
var selectedCities= cities.slice(2,4);
document.write(`Cities list: ${cities} <br>`);
 document.write(`Selected cities list: ${selectedCities}`);



                        //Home chapter 14-16
                        //Chapter 15 (Array I)
//q1.                        
var studentsName=[,]
console.log(studentsName);
             //&                   
console.log(studentsName[0]);

//q2.
var studentsName=["sara"]
console.log(studentsName);

//q3.
var alphabets=["h","i","j","k"];
alert(alphabets[2]);

//q4.
var alphabets=["h","i","j","k","l","m","n","o"];
console.log(alphabets.length);

//q5.
var arr =[10];
arr[1]= 20;
alert(arr);


                        //Chapter 16 (Array II)

//q1.
var arr=["Hello"];
arr.push("World","hi");
alert(arr[arr.length - 1]);

//q2.
var alphabets=["h","i","j","k"];
alphabets.pop();
console.log(alphabets);

//q3.
var alphabets=["h","i","j","k"];
alphabets.push(5);
console.log(alphabets);

                                
                       // Chapter 16 (Array III)

//q1.
var sizes=["S","M","XL","XXL","XXXL"];
sizes.shift();
console.log(sizes);

//q2.
var sizes=["S","M","XL","XXL","XXXL"];
sizes.unshift(1,2,3);
console.log(sizes);

//q3.
var arr=["world"];
arr.unshift("Hello");
console.log(arr);

//q4.
var sizes=["S","M","XL","XXL","XXXL"];
sizes.splice(2,0,"L");
console.log(sizes);

//q5.
var sizes=["S","M","XL","XXL","XXXL"];
 var regSizes=sizes.slice(0,3);
console.log(regSizes);

//q6.
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,3,"horse","cow");
console.log(pets);

//q7.
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,2);
console.log(pets);

//q8.
var pets=["dog","cat","ox","duck","frog","flea"];
var reducePets= pets.slice(3,5);
console.log(reducePets);








































