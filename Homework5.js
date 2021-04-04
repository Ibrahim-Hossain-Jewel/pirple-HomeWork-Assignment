//HomeWork Assignment-5.
/*
    timeAdder()
    timeAdder(5,"days",25,"hours")
    timeAdder(1,"minute",240,"seconds")
*/
function toArray(value1,label1,value2,label2){
    var arr = arguments;
    switch(value1 || value2){
        case 0:
        case 1:
            let lastchar1 = arr[1].charAt(arr[1].length-1);
            let lastchar2 = arr[3].charAt(arr[3].length-1);
            if (value1 == 1 || value2 == 1 && lastchar1 != 's' || lastchar2 != 's') {
                let contain = Array.prototype.slice.call(arguments);
                console.log([contain[0],contain[1]]);
                console.log([contain[2],contain[3]]);
            }else{
                console.log("Invalid input ${value1 + label1 + value2 + label2}");
            }
            break;
        default:
            let lastchar11 = arr[1].charAt(arr[1].length-1);
            let lastchar21 = arr[3].charAt(arr[3].length-1);
            if (value1 == 1 || value2 == 1 && lastchar11 =='s' || lastchar21 == 's') {
                let contain = Array.prototype.slice.call(arguments);
                console.log([contain[0],contain[1]]);
                console.log([contain[2],contain[3]]);
            }else{
                console.log("Invalid input");
                const myError = new Error('please improve your code');
                console.log(myError);
            }
    }
}
//Now make a filter function;
function timeAdder(value1,label1,value2,label2){
   let numberHolder1 = Number(value1);
   let numberHolder2 = Number(value2);
   let stringHolder1 = label1.toString();
   let stringHolder2 = label2.toString();
    if(isNaN(numberHolder1) || isNaN(numberHolder2) ){
        return false;
    }else{
       return toArray(numberHolder1,stringHolder1,numberHolder2,stringHolder2);
    }
}
timeAdder(1,"minute",3,"minutes");
timeAdder(5,"days",25,"hours");
timeAdder(1,"minute",240,"seconds");

/*HomeWork 5 extra credit*/
//timeAdder(20,"hours",4,"hours");
function extraCredit(time1,unit1,time2,unit2){
    var arrExtra = arguments;
    var arrayContainer = arrExtra[0]+arrExtra[2];
    switch (arrayContainer) {
        case 24:
            console.log([1,'day']);
            break;
        default:
            if(arrExtra[1]===arrExtra[3]){
                console.log([arrExtra[0]+arrExtra[2],arrExtra[1]]);
            }
            break;
    }
}
//making a function for filter data.
function extraTimeAdder(value1,label1,value2,label2){
    if (isNaN(value1) && isNaN(value2)) {
        console.log("Invalid Data");
    }else{
        return extraCredit(value1,label1,value2,label2);
    }
}
extraTimeAdder(20,"hours",4,"hours");

