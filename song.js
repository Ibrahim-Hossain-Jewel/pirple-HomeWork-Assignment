//Creating a variable for Homework assignment
var artist = "Ibrahim Hossain"; //Now variable type is string;
var releasedYear = 2021;
var genre = "nare nare nanan";
var duration = 2.3 + " S";
var releasedMonth = "February";
var views = 2000000;
var isPopular = "Not so much popular";//Now variable type is string;
//Now testing a variable data using boolean data type;
if(artist=="Ibrahim Hossain"){
	console.log(true);
}else{
	console.log(false);
}

// Starting the object section;
/*Two types of object 1. literal object 2. new object() constructor syntax */
var SongObject = new Object();//argument property is maximum 1;
//now make console.log() method all the SongObject that's hold's new Object();
//assigning properties and value to the new Object() constructor
SongObject.artist = "Jewel Rana"; //here this artist is not the above declared  artist variable;
console.log(SongObject.artist);
//now make an action method for object constructor syntex;
SongObject.age = 22;
SongObject.howOld = function(){
	if(this.age==22){
		console.log("You are ",this.age);
	}else{
		console.log("You are not ",this.age);
	}
}
SongObject.howOld();//Object constructor method is called on this line;
//now make an literal object;
var SongObject2 = {songName: "Amar sonal bangla", duration: 2+"minutes", artist: "Ibrahim Hossain", isPopular: false,

popularFunction : function (){
	if(this.isPopular==false){
		console.log('Your song is not popular');
	}else{
		console.log("Your song is popular");
	}
}
}; //first provide propery name and value;
console.log(SongObject2.songName);
SongObject2.popularFunction();

//marge the above declared Object using Object.assign() method;
var finalObject = Object.assign(SongObject,SongObject2);
console.log(finalObject); //Output of finalObject that's i had merged SongObject and SongObject2;

// now cloning object using Object.assign() method for reuse object;
var objectcloning = Object.assign({},SongObject2);
console.log(objectcloning);
//suppose to you want to change the songName value;
objectcloning['songName'] = "Go alonly for your future";
console.log(objectcloning);
/*After cloning an object then you can modify the object according to your like wise */

//now merge two object using object spread syntax;
var aerosol = {1:'Bangladesh',2: 'India', 3: 'Myanmer'};
var student = {4:'Dhaka',5: 'Dilli', 6: 'Katmundu'};
//now merge the two object using Object spread operator;
var Objectspread = {aerosol,student}; //This is merge using Object spread operator;
console.log(Objectspread);
delete Objectspread.aerosol['1']; 
console.log(Objectspread);
/*End the Object section*/


/*Starting the array section*/
//two types of array declaration 1. literal object 2. new Array() object;

/*Declaring literal array one dimension and multi dimension array*/
/*Single dimension array*/
var DeskTop = ['CPU','Monitor','Mouse','Keyboard']; //declaration of one dimensional array;
console.log('The 0 index variable '+DeskTop[0]); //output is CPU
/*Multi Dimesional array declaration*/
var computer = [['laptop',{weight: 70, screen: 'LED', keyBoard: 'Attached'}],['desktop',{monitor:'22'+"inch",keyBoard: 'A4 tech'}],['mobile',{Brand: 'Apple',height: '5 inch'}]];
//Accessing to the multi Dimensional array;
console.log("Your multi Dimensional array values : "+ computer[0][0]);
console.log("Your multi Dimensional array object value is "+ computer[0][1].screen); //accessing multi-dimensional array object;

//now make array using new Array() method with first parenthesis;
var mobile = new Array(1,2,3);
console.log("the new Array value is "+mobile[2]);
//now make new Array[] with square bracket;
var rainbow = new Array(["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]);  
//now passing this array to a function;
function show(rainbow){ //
	console.log(rainbow[0][3]); //leaving a green signal from the array constructor;
	for(var i=0;i<rainbow[0].length;i++){
		console.log(rainbow[0][i]); //now will show all the data from the array constructor;
	}
}
show(rainbow);//must have to pass data through this value;

/*Completed the array constructor*/

















