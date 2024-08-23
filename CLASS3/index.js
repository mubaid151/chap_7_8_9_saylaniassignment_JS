// CHAPTER 7 T0 10 MATH EXPRESSION
var user = prompt("please enter your name");
console.log(user);

alert("WELCOME...")

var user1 = +prompt("please enter number table from (2 to 4) which do you want see on console ...");

if(user1 === 2){
console.log("2 x 1 = " + (2 * 1));
console.log("2 x 2 = " + (2 * 2));
console.log("2 x 3 = " + (2 * 3));
console.log("2 x 4 = " + (2 * 4));
console.log("2 x 5 = " + (2 * 5));
console.log("2 x 6 = " + (2 * 6));
console.log("2 x 7 = " + (2 * 7));
console.log("2 x 8 = " + (2 * 8));
console.log("2 x 9 = " + (2 * 9));
console.log("2 x 10 = " +(2 * 10));

}
else if(user1 === 3){
console.log("3 x 1 = " + (3 * 1));
console.log("3 x 2 = " + (3 * 2));
console.log("3 x 3 = " + (3 * 3));
console.log("3 x 4 = " + (3 * 4));
console.log("3 x 5 = " + (3 * 5));
console.log("3 x 6 = " + (3 * 6));
console.log("3 x 7 = " + (3 * 7));
console.log("3 x 8 = " + (3 * 8));
console.log("3 x 9 = " + (3 * 9));
console.log("3 x 10 = " +(3 * 10));
}

else if(user1 === 4){
    console.log("4 x 1 = " + (4 * 1));
    console.log("4 x 2 = " + (4 * 2));
    console.log("4 x 3 = " + (4 * 3));
    console.log("4 x 4 = " + (4 * 4));
    console.log("4 x 5 = " + (4 * 5));
    console.log("4 x 6 = " + (4 * 6));
    console.log("4 x 7 = " + (4 * 7));
    console.log("4 x 8 = " + (4 * 8));
    console.log("4 x 9 = " + (4 * 9));
    console.log("4 x 10 = " +(4 * 10));
    }
else{
    console.log("5 x 1 = " + (5 * 1));
    console.log("5 x 2 = " + (5 * 2));
    console.log("5 x 3 = " + (5 * 3));
    console.log("5 x 4 = " + (5 * 4));
    console.log("5 x 5 = " + (5 * 5));
    console.log("5 x 6 = " + (5 * 6));
    console.log("5 x 7 = " + (5 * 7));
    console.log("5 x 8 = " + (5 * 8));
    console.log("5 x 9 = " + (5 * 9));
    console.log("5 x 10 = " +(5 * 10)); 
}

var sub1 = prompt("Please enter subject 1 name");
var sub2 = prompt("Please enter subject 2 name");
var sub3 = prompt("Please enter subject 3 name");
var totalmarks = alert("total marks for each subject is 100")
var obtsub1 = +prompt("please enter obtaining marks of sub1");
var obtsub2 = +prompt("please enter obtaining marks of sub2");
var obtsub3 = +prompt("please enter obtaining marks of sub3");
var totalobtmarks = obtsub1 + obtsub2 + obtsub3;
var percentage = totalobtmarks / 300 * 100;
console.log(sub1);

console.log(sub2);

console.log(sub3);

console.log(totalmarks);

console.log(obtsub1);

console.log(obtsub2);

console.log(obtsub3);

console.log("total obtaining marks: " + totalobtmarks);
console.log("Your percentage is: " + percentage +"%");






