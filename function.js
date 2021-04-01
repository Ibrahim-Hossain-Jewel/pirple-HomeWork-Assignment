/*function is a procedure in JavaScript*/
console.log('i am connected with this DOM');
function studentInfo(firstName,lastName,age){ //inside this function parameter don't need the data scope;
    var name = firstName;
    var ancientName = lastName;
    var age = age;
    console.log(name+ancientName+age);
}
//Invoke the function here;
studentInfo('Ibrahim ','Hossain',22);// if you don't pass the second argument then it will automatically define undefined data.
//function with return keyword;
function numberDoubler(num){
    return num*2;
}
console.log(numberDoubler(22));
//squared function with anonymous function;
var anonymousSquared = function(num,num2){//must provide a descriptive parameter.
    var firstnumber = num(9); //now this num is as function of numberDoubler();
    return firstnumber*num2;
}
//anonymous function container would be a variable.
var anonymoussquaredvariable = anonymousSquared(numberDoubler,2);//here passed function as argument
/*if you want you can pass name of function only dose not need the parenthesis with value*/
console.log(anonymoussquaredvariable);

// make an multiplication function then make it local function for add tow argument;
function multiplication(usernumber1,usernumber2){
    return usernumber1*usernumber2;
}
function addtwonumber(calculatedValue,existValue){
    var calculatedValueholder = calculatedValue(2,2);//provide the value;
    console.log(calculatedValueholder+existValue);
}
addtwonumber(multiplication,22);

/*make an object inside function along with make an array and push one data inside array*/
var studentobj1 = {
    name: 'jewel',
    roll: 27,
    id: 555555,
    address: 'khulna'
};

function student1(objectdata){
    objectdata.area = 'bangladesh is our country';
}
student1(studentobj1);
console.log(studentobj1);
//now make an array and push an element to the array by a function
var electronic = ['mobile','laptop','desktop'];
function pusharray(arrayData){ //now arrayData is array name.
    arrayData.push(120000);
}
pusharray(electronic);
console.log(electronic);
//Now learn nested function and inside this function make a private function.
function squareAndMultiply(num1,num2){
    function squareX(x){
        return x*x;
    }
    function squareY(y){ //this is nested function overhere;
        return y*y;
    }
    return squareX(num1) * squareY(num2);
}
var x = squareAndMultiply(12,12);
console.log(x);
//why you will assign a function in a variable because to reuse code.

//now make a function for firstname, lastname, and age 
function username(firstname, lastname, age){
    //made a function for string concatenation
    function formattedName(userfirstname, userlastname){
        return userfirstname+ ' '+userlastname;
    }
    //made a function for making the concatenate object.
    function userData(fullName,userAge){
        //now made all the info into object;
        var personinfo ={
            usernameHolder: fullName,
            passwordHolder: userAge
        }
        return personinfo; //this function returning object;
    }
    //Now make a function to call all another function.
    function callingPrivateFunction(firstname,lastname,age){
        const formattedUserName = formattedName(firstname,lastname);
        const userDataName = userData(formattedUserName, age);
        return userDataName;
    }
    return callingPrivateFunction(firstname,lastname,age);
}
var man = username('Ibrahim Hossain','Jewel',23); //invoking function to return name with space;
console.log(man);

//staring the Advance function;
//function expression,arrow function, map function;
//let's stat the expression function;
var expressionfunctionMessage = function(){
    console.log("Hi i'm from expression function");
}
expressionfunctionMessage();//invoked the function expression.
//Let's start with the arrow function it's most popular in ES6 version
var arrowfunction = () => {
    console.log("Hello i'm from arrow function");
}
arrowfunction();
//starting map function it is use to get certain data from your object. it's a iterative method
var studentarray = [
    {name:'ibrahim',age: 22},
    {name: 'jewel', age: 23},
    {name: 'Hossain',age: 17}
];
//find-out all the name from the array's objects
const holder1 = (studentobjectlist)=>{ //now holder1 is function name.
    var studentlistholder = studentobjectlist.map((student)=>{
        return student.name;
    });
    return studentlistholder;
}
var studentarraylist = holder1(studentarray);
console.log(studentarraylist);

//if you need single value returning function then your arrow function is too much usefull.
const multiply = (a,b)=> a*b;
console.log(multiply(11,11));  
//if your function take 1 parameter then you can omit the parameter brace like thet below;
const squarer = num => num*num; //this is es6 code overhere;
console.log(squarer(9));

//made an array with object list and then find-out the all list student name as a array list;
var csestudent = [
    {name:'Ibrahim', lastname: 'hossain',age: 22},
    {name: 'Jewel', lastname: 'rana', age:12},
    {name: 'Raihan', lastname: 'Hossain', age: 23},
    {name: 'shawon', lastname: 'Hossain', age: 22}
];
//now findout the all name from the array objects.
var csestudentName = csestudent.map(snamelist=>snamelist.age);
console.log(csestudentName);
/*ended the map() function worked with object mapping*/

/*Starting filter() it's use to make new array from an existing array*/
var studentRoll = ['jewel','jewel','vodor','vodor','vodor'];
var rollcontainer = studentRoll.filter(function(student){
    return student ==='jewel';
});
console.log(rollcontainer);

var numbers = [1,2,3,5,7,8,9,10,'jewel'];
//Made an array element into doubled.
function doubleElement(num){
    const emptyarray = []; //To keep all multiplyed data inside this.
    num.forEach(function(singleElement){
        const numberdoubler = singleElement*2;
       emptyarray.push(numberdoubler);
    });
    return emptyarray;
}
console.log(doubleElement(numbers));

//Set default value here.
function defaultMultiply(i,j){
    i = i || 2; //Set's the default value.
    j = j || 2; //Set's the default value.
    console.log(i*j);
}
defaultMultiply(); //return NaN because did not passed any value;now set a default value if you don't pass any value must set a default value with the assignment operator also can with Or|| operator;


//made default function that set's split(" "); function inside this.
var defaultMessage = "Your data did not input from the user";
function showDefaultMessage(i=defaultMessage){
    var x = i.split(' ');//split(" ") return an array if you provide space only.
    console.log(x[0]);
    return x;
}
const showData = showDefaultMessage();
console.log(showData);

//Now make purchaseItem code segment that's will be reusable
var creditCar = {
    Balance: 100,
    wantToBye: true
}
/*Making a function to buy a item*/
function buyItem(price, accountbalance = creditCar){ //this accountbalance able to take different bank account.
    if(accountbalance.wantToBye){
        accountbalance.Balance -= price;
        if(accountbalance.Balance<0){
            return accountbalance.wantToBye = false;
        }
        return true;
    }
    else{
        return accountbalance.wantToBye = false;
    }
}
//we can buyitem with different bank account;
console.log(buyItem(99));
console.log(buyItem(112));//now don't have enough balance.
//buy product with another bank account.
console.log(buyItem(32,{Balance:30,wantToBye:true}));//it's return true because this is another account.

