'use strict';

var imageOneEl = document.getElementById('item-one');
var imageTwoEl = document.getElementById('item-two');
var imageThreeEl = document.getElementById('item-three');
var itemContainerEl = document.getElementById('item-container');


var recentRandomNumbers = [];
var allItems = [];

var totalSelect = 0;

var tableBody = document.getElementById('fav-items');
var header = ['Item Name', 'Number of Times Selected', 'Number of Times Viewed']

function Item(path, name){
    this.name = name;
    this.filepath = `img/${path}`;
    this.votes = 0;
    this.views = 0;

    allItems.push(this);
}

new Item('bag.jpg','R2D2 Suitcase');
new Item('banana.jpg', 'Banana Slicer');
new Item('bathroom.jpg','Bathroom 2-in-1 Stand');
new Item('boots.jpg', 'Open-Toed Boots');
new Item('breakfast.jpg', 'Complete Breakfast Cooker');
new Item('bubblegum.jpg', 'Meatball Bubblegum');
new Item('chair.jpg', 'Orthopedic Chair');
new Item('cthulhu.jpg', 'Cthulhu Idol');
new Item('dog-duck.jpg', 'Duck Bill for Dog');
new Item('dragon.jpg', 'Exotic Canned Dragon Meat');
new Item('pen.jpg', '2-in-1 Pentensil');
new Item('pet-sweep.jpg', 'Pet Duster Boots');
new Item('scissors.jpg', 'Pizza Cutter Scissors');
new Item('shark.jpg', 'Shark Sleeping bag');
new Item('sweep.png', 'Infant Duster Onesie');
new Item('tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Item('unicorn.jpg', 'Exotic Canned Unicore Meat');
new Item('usb.gif', 'Tentacle USB Drive');
new Item('water-can.jpg', 'Refillng Water Can');
new Item('wine-glass.jpg', 'Safety Wine Glass');

function render(){

    if  (totalSelect < 2) {   

        console.log('I am rendering');

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageOneEl.src = allItems[randomIndex].filepath;
        imageOneEl.alt = allItems[randomIndex].name;
        imageOneEl.title = allItems[randomIndex].name;

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageTwoEl.src = allItems[randomIndex].filepath;
        imageTwoEl.alt = allItems[randomIndex].name;
        imageTwoEl.title = allItems[randomIndex].name;

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageThreeEl.src = allItems[randomIndex].filepath;
        imageThreeEl.alt = allItems[randomIndex].name;
        imageThreeEl.title = allItems[randomIndex].name;
    }
    else {
        renderHeader();
        renderTable();
    }
}


function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getUniqueIndex(){

    var randomIndex = randomNumber(0, allItems.length-1);

    while(recentRandomNumbers.includes(randomIndex)){
        randomIndex = randomNumber(0, allItems.length-1);
    }

    if(recentRandomNumbers.length > 3){
        recentRandomNumbers.shift();
    }

    recentRandomNumbers.push(randomIndex);
    return randomIndex;
}

function handleClick(){

    var chosenImg = event.target.title;

    for(var i = 0; i < allItems.length; i++){
        if(allItems[i].name === chosenImg){
        allItems[i].votes++;
        totalSelect++;
        console.log(totalSelect)
        }
    }
    render();
}

function renderHeader() {

    var trEl = document.createElement('tr');

    for(var i = 0; i < header.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = header[i];
        trEl.appendChild(thEl);
        tableBody.appendChild(trEl);
    }
}

function renderTable() {

    for(var i= 0; i < allItems.length; i++) {

        var trEl = document.createElement('tr');

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].name;
        trEl.appendChild(thEl);

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].votes;
        trEl.appendChild(thEl);

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].views;
        trEl.appendChild(thEl);

        tableBody.appendChild(trEl);
    }
}


itemContainerEl.addEventListener('click', handleClick);

render();
'use strict';

var imageOneEl = document.getElementById('item-one');
var imageTwoEl = document.getElementById('item-two');
var imageThreeEl = document.getElementById('item-three');
var itemContainerEl = document.getElementById('item-container');


var recentRandomNumbers = [];
var allItems = [];

var totalSelect = 0;

var tableBody = document.getElementById('fav-items');
var header = ['Item Name', 'Number of Times Selected', 'Number of Times Viewed']

function Item(path, name){
    this.name = name;
    this.filepath = `img/${path}`;
    this.votes = 0;
    this.views = 0;

    allItems.push(this);
}

new Item('bag.jpg','R2D2 Suitcase');
new Item('banana.jpg', 'Banana Slicer');
new Item('bathroom.jpg','Bathroom 2-in-1 Stand');
new Item('boots.jpg', 'Open-Toed Boots');
new Item('breakfast.jpg', 'Complete Breakfast Cooker');
new Item('bubblegum.jpg', 'Meatball Bubblegum');
new Item('chair.jpg', 'Orthopedic Chair');
new Item('cthulhu.jpg', 'Cthulhu Idol');
new Item('dog-duck.jpg', 'Duck Bill for Dog');
new Item('dragon.jpg', 'Exotic Canned Dragon Meat');
new Item('pen.jpg', '2-in-1 Pentensil');
new Item('pet-sweep.jpg', 'Pet Duster Boots');
new Item('scissors.jpg', 'Pizza Cutter Scissors');
new Item('shark.jpg', 'Shark Sleeping bag');
new Item('sweep.png', 'Infant Duster Onesie');
new Item('tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Item('unicorn.jpg', 'Exotic Canned Unicore Meat');
new Item('usb.gif', 'Tentacle USB Drive');
new Item('water-can.jpg', 'Refillng Water Can');
new Item('wine-glass.jpg', 'Safety Wine Glass');

function render(){

    if  (totalSelect < 25) {   

        console.log('I am rendering');

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageOneEl.src = allItems[randomIndex].filepath;
        imageOneEl.alt = allItems[randomIndex].name;
        imageOneEl.title = allItems[randomIndex].name;

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageTwoEl.src = allItems[randomIndex].filepath;
        imageTwoEl.alt = allItems[randomIndex].name;
        imageTwoEl.title = allItems[randomIndex].name;

        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        imageThreeEl.src = allItems[randomIndex].filepath;
        imageThreeEl.alt = allItems[randomIndex].name;
        imageThreeEl.title = allItems[randomIndex].name;
    }
    else {
        itemContainerEl.style.display = 'none';
        renderHeader();
        renderTable();
        results.style.display = 'block';
        console.log(tableBody, tableBody.style.display)
    }
}


function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getUniqueIndex(){

    var randomIndex = randomNumber(0, allItems.length-1);

    while(recentRandomNumbers.includes(randomIndex)){
        randomIndex = randomNumber(0, allItems.length-1);
    }

    if(recentRandomNumbers.length > 3){
        recentRandomNumbers.shift();
    }

    recentRandomNumbers.push(randomIndex);
    return randomIndex;
}

function handleClick(){

    var chosenImg = event.target.title;

    for(var i = 0; i < allItems.length; i++){
        if(allItems[i].name === chosenImg){
        allItems[i].votes++;
        totalSelect++;
        console.log(totalSelect)
        }
    }
    render();
}

function renderHeader() {

    var trEl = document.createElement('tr');

    for(var i = 0; i < header.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = header[i];
        trEl.appendChild(thEl);
        tableBody.appendChild(trEl);
    }
}

function renderTable() {

    for(var i= 0; i < allItems.length; i++) {

        var trEl = document.createElement('tr');

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].name;
        trEl.appendChild(thEl);

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].votes;
        trEl.appendChild(thEl);

        var thEl = document.createElement('td');
        thEl.textContent = allItems[i].views;
        trEl.appendChild(thEl);

        tableBody.appendChild(trEl);
    }
}


itemContainerEl.addEventListener('click', handleClick);

render();
