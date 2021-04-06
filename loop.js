/*loop:
    All loops are doing samething.
*/
//add 1-100 all value using while loop
num1 = 0;
container = 0; //0 for reset memory location
while(num1<8){
    num1+=1;//break the loop when it's gone 50 times.
    container+=num1;
    sayHi();
}
//make a function then call it 100 times through while loop.
console.log(container);
function sayHi(){
    console.log("I'm looping");
}

//Looking for an array element using while loop;
var Name = ['jewel','hossain','kholil','mosto','abdur rabbi vai','others'];
function nameList(arr,name){
    var index = 0;
    while(index<arr.length){
        if(arr[index]===name){
            console.log('Successed!');
            console.log(arr[index] + ' '+ index);
            break;
        }else{
            index++;
        }
    }
}
nameList(Name,'hossain');

//do... while() loop here.
var indexValue = 0;
var shouldRunOnlyOnce = true;
do{
    indexValue++;
    console.log("Your value is "+indexValue);
    if(indexValue===10){
        shouldRunOnlyOnce = false;
    }
}while(shouldRunOnlyOnce);

//now make a condition value while press q then exit; do while loop execute the code minimum one time overhere.
var condition = false;
do{
    var userInput = 'q';

    if(userInput === 'q'){
        condition = false;
    }else{
        condition = true;
        console.log(userInput);
    }
}while(condition);

//make a while loop for purchase an item.
var purchase = true;
var balance = 1000;
do{
    purchaseFunction();
    purchase = false;
}while(purchase);
// Above 500 tk then you can purchase item.
function purchaseFunction() {
    if(balance>500){
        console.log("you can purchase the item");
    }else{
        console.log("you can not purchase the item");
    }
}
//Repeat until a specified conditions evaluates false.
//Now start false value
console.log('Started for loop');
var iceCream = ["Vanilla","Chocolate","Rocky Road","Strawberry"];
function  iceCreamLooper(pramsArray) {
    for (let i = 0; i < 100; i++) {
        if (i%15===0) {
            console.log('Jewel');
        }
        else if(i%10===0) {
            console.log(i);
        }
        else{
            console.log(i);
        }
    }
}
iceCreamLooper(iceCream);
/*
    for (var s = 0; s < 10; s++) {
    ice(s);
}
function ice(params) {
    //when you are using anonymous function then don't have to use the parameter holder variable
    setTimeout(function() { //inside a handelar dose not need the argument in anonymous function.
        console.log(params);
    },params*1000);
}
//use of setTimeOut() function in JavaScript using for loop and while loop.

*/
//used for loop and function has been completed.
//now let's start the the work with while loop.
console.log('Started while Loop');
var other = 0;
while(other<5){
    other++;
    icewhile(other);
}
function icewhile(prams) {
        setTimeout(() => {
            console.log(prams);
        }, 1500*prams);
}
