/*
//find-out id name and reassing a id name;
cont Mymouse = dorocument.getElementById('mouse');
const idContiner = Mymouse.id;
console.log(idContiner);

//Now Reassing the id name.
const idur = "Unknown";
Mymouse.id = idur;
console.log(Mymouse);
const assignDiv = document.getElementsByTagName('div');
console.log(assignDiv);//all div will show in your dom. it will show htmlCollection. assign the last div and provide a id name;
const divLen = assignDiv[assignDiv.length-1];
divLen.id = 'footer';

const qmouse = document.querySelector(".dummy");
console.log(qmouse.className);
qmouse.style.height = '110px';
qmouse.style.background = 'black';
qmouse.style.width = '110px';
//nested multiple comment dose not support the js
*/
const purpleHolder = document.querySelectorAll('.purple');
console.log(purpleHolder);
for(let prop of purpleHolder){
    prop.classList.add('foo');
}
//here the add(); method dose not accept the space token
setInterval(() => {
    for(let prop of purpleHolder){
        prop.classList.toggle('foo');
    }
}, 2000);
//Class list also return's as value.
//you can also grab the elements without querySelectorAll();
const idholder = document.getElementById('purple');
console.log(idholder.classList);
//also you can add class using className also you can using the classList;
idholder.className = 'jewel';
idholder.classList.add('rana');
idholder.classList.add('diffClas');
