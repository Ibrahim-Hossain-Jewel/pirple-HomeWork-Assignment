/*Home work 2 || assignment 2*/
/*   Name : Ibrahim Hossain
     Country : Bangladesh
     Age : 23
     Background : Computer Science & Engineering
*/
//what is the distinguash between var, let, const;
/*
    (About var)
    var is a data type and it's scope area inside function also we can declare a variable globally by the var keyword. we can override variable data. along with you can easily overwrite a variable data. if i call variable outside the function then it will make an erro
    
    (About let)
    let provide block scoped variable (block scoped means inside the cury brace '{}'), and we can override variable data. if you call outside the block then it will make an error in your code; let and const are pretty similar.

    (About const)
    const provide block scoped variable it's can not be altered by the program during normal execution. and also you can not be override variable data or reassign is not possible, but you can push() data inside your array. and in Object you can push name key pair value;
*/
// example of var scope below;
function country(){
    var areYouHere = 'yes';
    var howMuchYourAge = 22;
    if(areYouHere=='yes'){
        let nickname = 'jewel'; // here nickname is block scoped variable if you call outside this block then it will occur an error;
        let howMuchYourAge =33; // here variable howMuchYourAge is overwrite data along with variable scope;
        console.log(nickname);
        console.log(howMuchYourAge);

    }else if(howMuchYourAge==22){
        console.log("You are "+howMuchYourAge+ " Year's old");
    }else{
        console.log("Your input is wrong!");
    }
}
country(); //here invoking the country() function;
/*if i try to call all the function's variable outside the function then it will make your code error */
//console.log(areYouHere+howMuchYourAge); it's made error because these variable are not under scoped;

/*Checking scoped by Object*/
/*overwrite a funtion variable name*/
var name = "Ibrahim Hossain";
function printname(){
    //now make it as a local variable along with change the value;
    name = "bangladesh";
    console.log(name); //now console.log() won't call the global name it will call this local variable inside this console.log();
    //reDeclaring a variable with the same name;
}
console.log(name); //ibrahim hossain;
printname(); //bangladesh; along with overwrite the same name variable data;
//now print the name globally here; if i don't invoke variable what will happend;
//if i invoke printname() function then ibrahim hossain will overwrite within bangladesh;
console.log(name); //print bangladesh eventually;

//check variable block from here
function check(){
    var u = 121; //here u is function scoped
    if(u==1212){
        let x = 3333;
        x = 555;
        console.log(x);
    }
    else{
        const m = 'monir';
        //m = 'dudu'; //it will make an error if you try to override the m variable data 
        console.log(m);
    }
}
check();
//now declare constant array
const book = ['Bangla','English', 'Mathematics', 'Social Science'];
book.push('hello from outside the data'); 
/*You can push() data but you can not reassign your data*/

console.log(book);

/*make an object as a constant*/
const bookobject = {bname:'Bangladesh',area: 147570};
bookobject.username = 'jewel rana';
console.log(bookobject);

//const function overhere;
function jewel(){
    if(true){
        const m ='bangladesh is my motherland!';
        console.log(m);
    }
    else{
        console.log(m);
        /*
        when function is block scoped that's why the m dose not work in this block.
        */
    }
}
jewel();