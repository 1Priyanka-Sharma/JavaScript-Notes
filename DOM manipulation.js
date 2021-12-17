// DOM Manipulation
console.log(document.getElementById('a'));
let eleclass=document.getElementsByClassName('container');
console.log(eleclass);
eleclass[0].style.background= 'Yellow';
eleclass[0].classList.add('bg-primary');
eleclass[0].classList.remove('bg-secondary');
eleclass[0].innerHTML;
eleclass[0].innerText;

document.getElementsByTagName('div');

createdele=document.createElement('h1');        //Create element
createdele.innerText='Created Heading1';
eleclass[0].appendChild(createdele);            //append Element

createdele2=document.createElement('p');        //Create element
createdele2.innerText='Created Para';
eleclass[0].replaceChild(createdele2,createdele);       //Repalce child

eleclass[0].removeChild(createdele2);           //remove Child

document.forms;
document.images;

sel=document.querySelector('.container');       //Query Selector-for CSS-Returns a element
sel=document.querySelectorAll('.container');    //Query Selector ALL-for CSS-Returns a HTML Collections    

window.onload(()=>{                             //Onload Event
    console.log('The document was loaded');
})

// setTimeout() and setInterval()
setTimeout(()=>{
    console.log('SetTimeout Executed');
},1000)

sint=setInterval(() => {
    console.log('SetInterval Executed');
}, 1000);

clearInterval(sint);


// Array Methods
let myarr=['hi',23,true,null];
myarr.length;
myarr.pop();        //Returns the last element
myarr.push('harry');    //Add element at the end.
myarr.shift();          //Returns first element
myarr.unshift('bye');       //Reurns new length and  add element at first place.
myarr.toString();       //Returns a single string of all the elements of an array.
myarr.sort();
myarr.splice(2,1,'hello');          //(index,howmany,item)  -At position 2 adds 1 element
myarr.splice(2,1);                  ////(index,howmany,item)  -At position 2 remove 1 element


// String Methods
let mystr= 'I am a good person';
mystr.length;
mystr.indexOf('good');
mystr.slice(0,4);       //Both args are index positon. Returns substring from 0th index position to lastIndex-1
mystr.replace('good','bad');

// Local Storage
localStorage;
localStorage.setItem('name','priyanka');
localStorage.clear();       //Clears whole storage
localStorage.getItem('name');
// We can see localStorage of any domain  by going to Inspect->Applications->LocalSrtorage.innerText

// JSON-data interchange format. For Structuring DS
// JSON -only acepts Double Quotes.
obj={name:'priya',value:'good'};
JSON.stringify(obj);        //Converts arr/obj into JSON string. typeof-sring
 


