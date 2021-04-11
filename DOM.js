//Change all paragraph data using for loop.
//var pHolder = document.getElementsByTagName('p');
/*for(var l = 0;l<=pHolder.length;l++){
    pHolder[l].innerHTML = "Hello now in india";
}*/
//changed all element using for of loop.
/*
for(let x of pHolder){
    x.innerHTML = 'Hello sir i am using javascript for of loop';
}
*/
//For in loop.
/*
for(let special in pHolder){
    console.log(pHolder[1].innerHTML="Bajaj");
}
//now you have to change all I into Somebody.
const iHolder = document.getElementsByTagName('span');
for(let i of iHolder){
    i.innerHTML = "Somebody";
}
*/
//now grab all the span tag from app class.
const App = document.getElementById('app');//Don't have to provide the dot symbol as like cass.
//now app is an distinct document
const spanHolder = App.getElementsByTagName('span');//it's return array object.
/*
When you want to grab an Identifier's child element then every part is an distinct document.
*/
for(let m of spanHolder){
    m.innerHTML="<h1>I'm reassigned!</h1>";
}
const totalWordChanged = document.getElementById('total');
totalWordChanged.innerHTML ="I have changed "+ spanHolder.length+" words";

const studentListContainer = document.getElementById('studentList');
const allStudent = studentListContainer.getElementsByTagName('li');
for(let all of allStudent){
    if (all.innerText==='Hello 1') {
        console.log(all.innerText="bangladesh");
    }
}
const bangladeshHolder = document.querySelector('#Bangladesh');
console.log(bangladeshHolder);//you can use every css property in js.
bangladeshHolder.style.color = 'red';
//inline css has most precedence then external css. it's either css or javascript.
bangladeshHolder.style.fontSize = '110px';
const phoneProperty = document.querySelectorAll('.phone span');
/*the querySelectorAll() it's supported by loop only it's without it will show undefined the property*/
for(let lather of phoneProperty){
    lather.style.fontSize = '22px';
}
//now if you want to select first one then use the querySelector();
const selectFirst = document.querySelector('.phone span');
//it's support the css selector.
selectFirst.style.color = 'blue';

/*Now learning the traversing of DOM*/
/*When you are going to back using parentNode keyword after that it's call traversing*/
//the dom api help us to traverse the document.
//it's help us to find-out the childNodes and parentNodes
//find-out the childNodes of mouse.
var selectMouse = document.getElementById('mouse');
/*childNodes: It will return the all the child elements of dom selector the childNodes dose not omit a single space*/
console.log(selectMouse.childNodes.length);

//now findout the parentNodes from the dom tree structure.
console.log(selectMouse.parentNode);
