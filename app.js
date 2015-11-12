var photos = [];
var data = [];

function GamePhoto(label, path, color) {
  this.label = label;
  this.path = path;
  this.color = color;
  this.value = 1;
  photos.push(this);

  this.pushData = function() {
    data.push({
      value: this.value,
      color: this.color,
      highlight: this.color,
      label: this.label,
    });
  };
  this.pushData();
}

var updateChart = function() {
  for (var i =0; i < photos.length; i++) {
    myChart.segments[i].value = photos[i].value;
  }
}

var newChart = function() {
  if (myChart) {
    updateChart();
    myChart.update();
  } else {
    myChart = new Chart(canvas).Doughnut(photos, {
    animationSteps : 100,
    animationEasing : 'easeOutBounce',
    percentageInnerCutout : 50,
    animateRotate : true,
    animateScale : true
    });
  }
}


var display1 = document.getElementById('displayImg1');
var display2 = document.getElementById('displayImg2');

var tracker = {
  picOne: null,
  picTwo: null,
  img1: null,
  img2: null,
  calcRandNum: function() {
    return Math.floor(Math.random() * photos.length);
  },
  displayNewImages: function() {
    this.picOne = this.calcRandNum();
    this.picTwo = this.calcRandNum();
    this.img1 = photos[this.picOne];
    this.img2 = photos[this.picTwo];

    while (tracker.picOne === tracker.picTwo) {
      tracker.picTwo = tracker.calcRandNum();
      this.img2 = photos[this.picTwo];
    };

    display1.src = this.img1.path;
    display2.src = this.img2.path;

    display1.addEventListener('click', this.voteForOne);
    display2.addEventListener('click', this.voteForTwo);
  },
  voteForOne: function() {
    tracker.img1.value +=1;
    updateChart();
    tracker.displayNewImages();
  },
  voteForTwo: function() {
    tracker.img2.value +=1;
    updateChart();
    tracker.displayNewImages();
  },
}

var destiny = new GamePhoto('destiny', 'images/destiny.png', '#FF782A')
var diablo = new GamePhoto('diablo', 'images/diablo.png', '#A417E8')
var guildwars = new GamePhoto('guildwars', 'images/guildwars.png', '#8DE817')
var hearthstone = new GamePhoto('hearthstone', 'images/hearthstone.png', '#FF251C')
var heroes = new GamePhoto('heroes', 'images/heroes.png', '#6417E8')
var lol = new GamePhoto('lol', 'images/lol.png', '#FFEF1A')
var overwatch = new GamePhoto('overwatch', 'images/overwatch.png', '#26E899')
var pokemon = new GamePhoto('pokemon', 'images/pokemon.png', '#E8E4E4')
var portal = new GamePhoto('portal', 'images/portal.png', '#7871E8')
var starcraft = new GamePhoto('starcraft', 'images/starcraft.png', '#ADE871')
var supersmash = new GamePhoto('supersmash', 'images/supersmash.png', '#FF925E')
var wow = new GamePhoto('wow', 'images/wow.png', '#82E871')

tracker.displayNewImages();

var canvas = document.getElementById("games").getContext("2d");

var myChart = new Chart(canvas).Doughnut(data)
