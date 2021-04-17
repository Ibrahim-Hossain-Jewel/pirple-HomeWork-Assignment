//Assignment 7
//now number 1 display h1tag and h2tag.
let titleTag = document.getElementsByTagName('title');
const h1tag = document.createElement('h1');
const h2tag = document.createElement('h2');
let colorshow = document.getElementById('colorlist');
h1tag.innerText = 'Restaurant web page';
h2tag.innerText = "Restaurant is a fantastic place to eat food. it's provide a lot facility like clean place, enough human for serve food restaurant is a fantastic place to eat food. it's provide a lot facility like clean place, enough human for serve food";
colorshow.appendChild(h1tag);
colorshow.appendChild(h2tag);
//now show the h1tag data to the title of the web page.
titleTag.innerText = h1tag.innerText;
//Displaying some of my favorite colors.
const colorNames = ['red','green','blue','gray','yellow'];
const newul = document.createElement('ul');
for(let colorProp = 0;colorProp<colorNames.length;colorProp++){
    var newli = document.createElement('li');
    newli.innerText = colorNames[colorProp];
    newul.appendChild(newli);
}
colorshow.appendChild(newul);
//now coloring using loop;
for(let m=0;m<colorNames.length;m++){
    newul.childNodes[m].style.color=colorNames[m];
}
//Number 2. drowing 10 rectangle;
const oldrectangle = document.getElementById('rectangleWrapper');
const tenColor = ['#C0C0C0','#808080','#D2B4DE','#FF0000','#800000','#FFFF00','#5499C7','#00FF00','#008000','#00FFFF'];
console.log("Here are the rectangle IDs");
for(let m=0;m<10;m++){
    const newdiv = document.createElement('div');
    newdiv.style.height='200px';
    newdiv.style.width = '500px';
    newdiv.style.backgroundColor = tenColor[m];
    newdiv.style.padding = '50px 50px 0px 50px';
    newdiv.innerText = tenColor[m];
    newdiv.className+= 'colorClass';
    newdiv.id+='rectUniqueId'+m;
    console.log(newdiv.id);
    oldrectangle.appendChild(newdiv);
}

