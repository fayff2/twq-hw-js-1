///////


let width= 40;
let haigh= 60;
let area = width*haigh;


console.log("Area of rectangle: " + area);


console.log("--------------------------------------");




///////

let f=60;
let c=45;

let toF= c * 9 /5 + 32;
console.log(toF);


let toC =(f-32) / 1.8;
console.log(toC);


///////////////////

console.log("--------------------------------------");

let hours=2;

let seconds = (hours * 60) * 60;

console.log(seconds +" "+"sec")




///////////////////

console.log("--------------------------------------");

let year =2023;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}



///////////////////

console.log("--------------------------------------");

let num=15;
let r;

 
if (num >= 11 && num<=30) {
console.log("true")


}else{
    console.log("false")
}



///////////////////

console.log("--------------------------------------");





// function factorialize(num) {
    // If the number is less than 0, reject it.
    // if (num < 0) 
    //       return -1;
      
    // If the number is 0, its factorial is 1.
    // else if (num == 0) 
    //     return 1;
      
    // Otherwise, call the recursive procedure again
    //   else {
    //       return (num * factorialize(num - 1));
        
    //   }

          



const number =9;

if (number < 0) {
    console.log('negative number');
}

else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
        console.log(`The factorial of ${i} is ${fact}.`);
    }
    
}

        
        
       
      

          