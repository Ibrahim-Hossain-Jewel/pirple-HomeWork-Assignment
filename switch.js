//switch statements
//Now make a function and then grap all the function inside the curly brace;
function fruittester(fruitValue){
switch(fruitValue){
    case "apple": 
    case "orange":
    case "banana":
        console.log("Great! i love apple.");
        break;
    default:
        console.log("I didn't understand that but sure:D");
        break;

}
//After complete the switch() statement then fire a message inside fruittester();
console.log("Now the switch statement is broken!");
}
fruittester('banana');

//Make a function for low range mid range and high range.
function numcheck(Value){
    //make a variable for contain value.
    let Mcontainer;
    switch(Value){
        case 0:
        case 1:
        case 2:
        case 3:
        Mcontainer = "Low range!";
        outvalue(Mcontainer);
        break;
        case 4:
        case 5:
        case 6:
        Mcontainer = "Mid range!";
        outvalue(Mcontainer);
        break;
        case 7:
        case 8:
        case 9:
        Mcontainer = "High range!";
        outvalue(Mcontainer);
        break;
        default:
        Mcontainer = "your range must be 0 to 9";
        return;
    }
}
//Output all the value with a function.
function outvalue(n){ //since it is hoisting from anywhere.
    console.log("Volume set at "+n);
}
numcheck(1);
//Donat picker.
var donatPicker=value=>{
    switch(value){
        case 's':
            return 'sparkless'; //when you written the return then you don't have to write 
        case 'c':
            return 'chocolates';
        case 'b':
            return 'bear claw';
        default:
            return ; //you can leave null value with the return keyword.
    }
}
//Make donat for call in other side.
var donuts = (selected)=>{
    const holder = donatPicker(selected);
    if(!holder){
        console.log("Incorrect selected "+holder);
    }else{
        console.log("You have selected "+holder);
    }
}
donuts('b');
donuts('c');
donuts(1212);
