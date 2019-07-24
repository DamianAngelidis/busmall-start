'use strict';



//////////////// VARIABLES /////////////
var path = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var itemNames = ['R2D2 Suitcase', 'Banana Slicer', 'Bathroom 2-in-1 Stand', 'Open-Toed Boots', 'Complete Breakfast Cooker', 'Meatball Bubblegum', 'Orthopedic Chair', 'Duck Bill for Dog', 'Exotic Canned Dragon Meat', '2-in-1 Pentensil', 'Pet Duster Boots', 'Pizza Cutter Scissors', 'Shark Sleeping Bag', 'Infant Duster Onesie', 'Tauntaun Sleeping Bag', 'Exotic Canned Unicore Meat', 'Tentacle USB Drive', 'Refillng Water Can', 'Safety Wine Glass'];

var imageOneEl = document.getElementById('item-one');
var imageTwoEl = document.getElementById('item-two');
var imageThreeEl = document.getElementById('item-three');
var images = [imageOneEl, imageTwoEl, imageThreeEl];
var itemContainerEl = document.getElementById('item-container');
var resultsEl = document.getElementById('results')


var recentRandomNumbers = [];
var allItems = [];

var totalSelect = 0;

var tableBody = document.getElementById('fav-items');
var header = ['Item Name', 'Number of Times Selected', 'Number of Times Viewed'];



var nameArray = [];
var itemVotes = [];
var itemViews = [];



//////////////// CONSTRUCTOR /////////////
function Item(path, name){
    this.name = name;
    this.filepath = `img/${path}`;
    this.votes = 0;
    this.views = 0;

    allItems.push(this);
}



//////////////// FUNCTIONS /////////////

function render(){
    // console.log('I am rendering');

    for(var i = 0; i < images.length; i++) {
        var randomIndex = getUniqueIndex();
        allItems[randomIndex].views++;
        images[i].src = allItems[randomIndex].filepath;
        images[i].alt = allItems[randomIndex].name;
        images[i].title = allItems[randomIndex].name;
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
    
    if  (totalSelect < 25) {  
        var chosenImg = event.target.title;

        for(var i = 0; i < allItems.length; i++){
                if(allItems[i].name === chosenImg) {
                allItems[i].votes++;
                totalSelect++;
                // console.log(' hello friend')
                // console.log(totalSelect);
            }
        }
        addLocalStorage();
        render();
    } else {
        // console.log('hi there');
        resultsEl.style.display ='block';
        itemContainerEl.style.display = 'none';  

        renderHeader();
        renderTable();
        labelGraph();
        generateChart();

    }
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

function labelGraph() {

    for(var i = 0; i < allItems.length; i++) {
        nameArray.push(allItems[i].name);
        itemVotes.push(allItems[i].votes);
        itemViews.push(allItems[i].views);
        
        // console.log(allItems[i].name, allItems[i].votes, allItems[i].views);
    }
}

function generateChart() {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameArray,
            datasets: [{
                label: '# of Votes',
                data: itemVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function checkLocal() {
    if(localStorage.length === 0) {
        console.log('hello');
        for(var i = 0; i < path.length; i++) {
            new Item(path[i], itemNames[i]);
        }
    } else {
        getLocalStorage();
    }
}
  
function addLocalStorage() {
    var jsonItems = JSON.stringify(allItems);
    localStorage.setItem('items', jsonItems);
}

function getLocalStorage() {
        var storageItems = localStorage.getItem('items');    
        var parsedItems = JSON.parse(storageItems);
        allItems = parsedItems;
        console.log(parsedItems);
}



//////////////// FUNCTION CALLS AND EVENT LISTENERS /////////////
itemContainerEl.addEventListener('click', handleClick);

checkLocal();
render();