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
//Now making an Object using new Object() key method;
var SongObject = new Object(artist, releasedYear, genre, duration, releasedMonth,views,isPopular);
//now make console.log() method all the SongObject that's hold's new Object();
console.log(SongObject.artist);
