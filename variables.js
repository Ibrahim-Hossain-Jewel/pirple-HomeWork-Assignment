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

    (About hoisting)
    Hoisting is a javascript mechanism that's variables and functions are move to the top of there scope in the other word it's provide global scope. we will provide some example below.
*/
/*Example of var scope
    var provide function scope of a variable
*/

function checkvar(){
    var Country = 'bangladesh';
    if(Country== 'bangladesh'){
        console.log('Hello bangladesh i am from inside checkvar() if you call outside checkvar() then i will make an error;');
    }
}
checkvar();
//console.log(Country); this is out of scope that's why it will show country is not defined!

/*Example of let scope
    let provide block scoped (within cury brace{..scope..}) as described above.
*/
function checklet(){
    let letcountry = true;//you can access this letcountry from anywhere inside this checklet();
    if(letcountry == true){
        var name = 'ibrahim hossain';
        console.log('Hi am from from another block but i am under the letcounry scoped ' + letcountry);
        console.log('if you call me outside this block then i will an erro '+name);//accessable here;
    }
    //console.log(name);//name is not access able here;
}
checklet();//function invoked here;
/*Exmaple of const
    const and let is block scoped but little bit difference const varible value can not be change during program execution along with can not be override the variable|| function value.

*/
function checkconst(){
    const rollnumber = 121212121;// it able to access inside checkconst();
    if(rollnumber==121212121){
        const registrationnumber = 222222;//can not call outside this scope.
        console.log('i am constant value i am block scoped'+rollnumber);
        console.log('i am registrationnumber i am under if scoped'+registrationnumber);
    }
    //console.log(registrationnumber);//call is not possible it's not under the if block;
}
checkconst();


/*About hoisting
hoisting is a mechanism that is variable and function,   forward to top of the scoped.

variable : undefined variable is hoistable from anywhere;
*/
console.log('m is hoisted now value is '+m);
var m; //hoisting is possible;

/*if you declare semultaneously a variable then it's not identify able*/

console.log('Semultaneously is not possible '+semultaneously);
var semultaneously = 'Not identify able'; //it's provide undefined as a value;

//now declare a function for hoisting;
checkhoist(); //invoked hoisted function;
function checkhoist(){
    console.log("i am not a variable assigned function that's why i am hoistable!");
}

/*Assignment function
    assignment function is not hoistable if you try to hoist a assignment funtion then it will make an error;
*/

//assignmentfunction();
var assignmentfunction = function(){
    console.log("hello assignment function you are not hoistable");
};