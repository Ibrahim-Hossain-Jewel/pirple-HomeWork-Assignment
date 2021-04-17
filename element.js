//make an array and output all the data from the array.
var myfavoIceCream = ['Vanilla','Chocolate','straberry','kon'];
const existid = document.getElementById('created');
const newdiv = document.createElement('div');
const newul = document.createElement('ul');
for(let x=0;x<myfavoIceCream.length;x++){
    var newli = document.createElement('li');
    newli.innerText = myfavoIceCream[x];
    newul.appendChild(newli);
}
//newul.appendChild(newli);
newdiv.appendChild(newul);
existid.appendChild(newdiv);
/*
if (newul.childNodes[3].innerText==='kon') {
    newul.removeChild(newul.childNodes[3]);
}
*/
//now delete a nodes from the childnodes.
//childNodes return's all childNodes from a tag. it's also return's as tag name.
function Delete(t) {
    for(let prop of newul.childNodes){
        if (prop.innerText===t) {
            newul.removeChild(prop);
        }
    }
}
Delete('kon');