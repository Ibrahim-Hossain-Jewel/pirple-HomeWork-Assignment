/*function is a procedure in JavaScript*/
console.log('i am connected with this DOM');
function studentInfo(firstName,lastName,age){ //inside this function parameter don't need the data scope;
    var name = firstName;
    var ancientName = lastName;
    var studentAge = age;
    if(age == 22){
        console.log('your age is '+studentAge);
    }
    //now make an object that contain the name;
    var studentobj = {
        name: firstName,
        ancientName: lastName,
        studentAge: age,
        username: function(){
            console.log('your name is '+name+ancientName);
            if(studentAge==22){
                console.log('you are '+studentAge);
            }
        }
    };
    //call the studentobjects function.
    studentobj.username();
}
//Invoke the function here;
studentInfo('jewel','rana',22);