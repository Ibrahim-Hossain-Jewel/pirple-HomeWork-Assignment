/*HomeWork assignment 6*/

for(let x = 1;x<=100;x++){
    if (x%3&&x%5===0) {
        console.log("FizzBuzz");
    }
    else if (x%3==0) {
        console.log("Fizz");
    }
    else if (x%4==0) {
        console.log("Buzz");
    }
    else{
        console.log(x);
    }
}
//For extra credit section.
function testPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

var primeNumber = (testPrime(37));
for(let ex = 1;ex<=100;ex++){
    if (ex%3&&ex%5===0) {
        console.log("FizzBuzz");
    }
    else if (ex%3==0) {
        console.log("Fizz");
    }
    else if (ex%4==0) {
        console.log("Buzz");
    }
    else{
        if (primeNumber===true) {
            console.log("Prime!")
        }
    }
}