var personName = 'Socrates';
var convertName = personName.toString();
function nameChecker (value1){
    var Socrates = value1;
    if(Socrates == 'Socrates'){
        return true;
    }else{
        return false;
    }
}
console.log(nameChecker(convertName));

/*Extra credit*/
var cake = ['vanilla','chsocolate'];
function extraCredit(cakeArray,chocolateCheck=true){
    if(cake[1] === cake[1] && chocolateCheck){
        console.log('Flavor of chocolate '+ chocolateCheck);
    }
    else if(cake[0] === 'vanilla' && cake[1] == 'chocolate' && chocolateCheck){
        console.log('This flavor of vanilla or chocolate '+ chocolateCheck);
    }else{
        console.log('This is not a vanilla or chocolate');
    }
}
extraCredit(cake,true);