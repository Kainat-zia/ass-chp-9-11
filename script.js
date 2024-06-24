// // Q1
// var cityname = prompt("write a city name")
// if (cityname = "karachi"){
//     alert("Welcome to city of lights")
// }

// // Q2
// var gender = prompt ("write down your gender")
// if (gender === "male"){
//     alert("Good Morning sir ")
// }
// else if(gender === "female"){
//     alert("Good Morning Ma'am")
// }

// // Q3
// let color =prompt ("Input color of road traffic signal")
// if(color === "red"){
//     alert("must stop")
// }
// else if(color === "yellow"){
//     alert ("ready to move")
// }
// else if(color === "green"){
//     alert ("move now")
// }
// else {
//     alert("requires color name")
// }

// // Q4
// var fuel = prompt ("Remaining fuel in car (in liters)")
// if (fuel < 0.25){
//     alert("“Please refill the fuel in your car")
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Q6
// let marks1 = +prompt("Enter the marks obtained in subject 1:");
        // let marks2 = +prompt("Enter the marks obtained in subject 2:");
        // let marks3 = +prompt("Enter the marks obtained in subject 3:");

        // let totalMarks = +prompt("Enter the total marks:");
        // let marksObtained = +prompt("Enter the marks obtained");

        // let percentage1 = (marks1 / totalMarks)*100
        // let percentage2 = (marks2 / totalMarks)*100
        // let percentage3 = (marks3 / totalMarks)*100

        // let grade;
        // let remarks;

        // if (percentage1 >= 90) {
        //     grade = "A+";
        //     remarks = "Excellent";
        // } else if (percentage2 >= 80) {
        //     grade = "A";
        //     remarks = "Very Good";
        // } else if (percentage3 >= 70) {
        //     grade = "B";
        //     remarks = "You need to improve";
        // } else if (percentage2 >= 60) {
        //     grade = "C";
        //     remarks = "Average";
        // } else if (percentage1 >= 50) {
        //     grade = "D";
        //     remarks = "Pass";
        // } else {
        //     grade = "F";
        //     remarks = "Fail";
        // }

        // document.write("<h2> Mark Sheet </h2>");
        // document.write("Total Marks : "+totalMarks+"<br>");
        // document.write("Marks Obtained: "+ marksObtained+"<br>");
        // document.write("Precentage: "+ percentage3+"   % "+"<br>"); 
        // document.write("Grade: "+ grade+" "+"<br>"); 
        // document.write("Remarks: "+ remarks+" "+"<br>");
//Q7

// var secretNumber = parseInt(prompt("Store a secret number (ranging from 1-10)"), 10);
// var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);

//            // Store a secret number (ranging from 1 to 10) in a variable
//            let secretNumber = Math.floor(Math.random() * 10) + 1;

//            // Prompt user to guess the secret number
//            let userGuess = +prompt("Guess the secret number (between 1 and 10):") ;

//         // Check if the user's guess is correct
//         if (userGuess === secretNumber) {
//             alert("Bingo! Correct answer");
//         } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//             alert("Close enough to the correct answer");
//         } else {
//             alert("Try again! The secret number was " + secretNumber);
//         }

// Q8
// var number = prompt("Enter a number to check if it is divisible by 3:");

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }

// Q9
// var number = prompt("Input a number")
// if( number % 2 === 0 ){
//     alert("The number " + number + " is even.")
// }
// else{
//     alert("The number " + number + " is odd.")
// }

// Q10
// var temperatute = prompt("write a temperature")
// if (temperatute > 40 ){
//     alert("It is hot outside")
// }
// if (temperatute > 30){
//     alert("The Weather today is Normal.")
// }
// if (temperatute >20 ){
//     alert("Todays Weather is cool.")
// }
// if (temperatute >10 ){
//     alert("OMG! Todays weather is so Cool.")
// }
// else{
//     alert("write correct temperature")
// }

// Q11

var firstNumber = parseFloat(prompt("Enter the first number :"));  
  var secondNumber = parseFloat(prompt("Enter the second number :"));  

  var opreation = prompt("Enter the opreations (+,-,*,/,%):");
  var result;

  if (opreation === "+"){
    result = firstNumber + secondNumber;
  }
  else if(opreation === "-"){
    result = firstNumber - secondNumber;
  }
  else if(opreation === "*"){
    result = firstNumber * secondNumber;
  }
  else if(opreation === "/"){
    result = firstNumber / secondNumber;
  }
  else if(opreation === "%"){
    result = firstNumber % secondNumber;
  }
  else{
   document.write("invalid opreation")
  }
 
  document.write("Result:" + " " + result);