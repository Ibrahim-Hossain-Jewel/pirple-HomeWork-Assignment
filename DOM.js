//Change all paragraph data using for loop.
var pHolder = document.getElementsByTagName('p');
for(var l = 0;l<=pHolder.length;l++){
    pHolder[l].innerHTML = "Hello now in india";
}