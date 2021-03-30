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
