'use strict';

var imageOneEl = document.getElementById('item-one');
var imageTwoEl = document.getElementById('item-two');
var imageThreeEl = document.getElementById('item-three');
var catContainerEl = document.getElementById('cat-container');


var recentRandomNumbers = [];
var allItems = [];

function Item(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allCats.push(this);
}

new Cat('bag');
new Cat('banana');
new Cat('bathroom');
new Cat('boots');
new Cat('outsideCat');
new Cat('sleepyCat');
new Cat('tomatoCat');
new Cat('yogaCat');

function render(){
  var randomIndex = getUniqueIndex();
  allCats[randomIndex].views++;
  // I want to display allCats[randomIndex];
  imageOneEl.src = allCats[randomIndex].filepath;
  imageOneEl.alt = allCats[randomIndex].name;
  imageOneEl.title = allCats[randomIndex].name;

  var randomIndex = getUniqueIndex();
  allCats[randomIndex].views++;
  // I want to display allCats[randomIndex];
  imageTwoEl.src = allCats[randomIndex].filepath;
  imageTwoEl.alt = allCats[randomIndex].name;
  imageTwoEl.title = allCats[randomIndex].name;


}
// helper function
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getUniqueIndex(){

  var randomIndex = randomNumber(0, allCats.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = randomNumber(0, allCats.length-1);
  }

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  recentRandomNumbers.push(randomIndex);
  return randomIndex;
}

function handleClick(){
  var chosenImg = event.target.title;

  for(var i = 0; i < allCats.length; i++){
    if(allCats[i].name === chosenImg){
      allCats[i].votes++;
    }
  }
  render();
}

catContainerEl.addEventListener('click', handleClick);

render();



