//HomeWork-3
/*Statements and Operators
    All men are mortal
    Socrates is mortal
    Therefore, socrates is mortal
*/
//Make a collection to test if else statements.
var allmen = {
    men:'men',
    martal: 'mortal',
    socrates: 'socrates'
};
if(allmen.men == 'men'){
    console.log('men are mortal');
    if(allmen.socrates == 'socrates'){
        console.log('socrates are mortal');
    }
}else{
    console.log('men is not mortal');
}
/*Hang of creating logical operator*/
var cake = {
    vanilla: 'vanilla',
    chocolate: 'chocolate',
};
if(cake.vanilla === cake.vanilla){
    console.log('this cake is not chocolate');
}
else if(cake.vanilla === 'vanilla' || cake.chocolate == 'chocolate'){
    console.log('This cake is either vanilla or chocolate');
}else{
    console.log('this cake is vanilla.');
}