var gamePhotos = [];

function GamePhoto(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  gamePhotos.push(this);
}

var display1 = document.getElementById('displayImg1');
var display2 = document.getElementById('displayImg2');

var tracker = {
  randomNumberOne: null,
  randomNumberTwo: null,
  calcRandNum: function() {
    return Math.floor(Math.random() * gamePhotos.length);
  },
  displayNewImages: function() {
    this.randomNumberOne = this.calcRandNum();
    this.randomNumberTwo = this.calcRandNum();

    while (this.randomNumberOne === this.randomNumberTwo) {
      this.randomNumberTwo = this.calcRandNum();
    };

    var img1 = gamePhotos[this.randomNumberOne];
    var img2 = gamePhotos[this.randomNumberTwo];

    display1.src = img1.path;
    display2.src = img2.path;

    display1.addEventListener('click', this.voteForOne);
    display2.addEventListener('click', this.voteForTwo);
  },
  voteForOne: function() {
    gamePhotos[tracker.randomNumberOne].votes +=1;
    tracker.displayNewImages();
  },
  voteForTwo: function() {
    gamePhotos[tracker.randomNumberTwo].votes +=1;
    tracker.displayNewImages();
  },
}

var destiny = new GamePhoto('destiny', 'images/destiny.png')
var diablo = new GamePhoto('diablo', 'images/diablo.png')
var guildwars = new GamePhoto('guildwars', 'images/guildwars.png')
var hearthstone = new GamePhoto('hearthstone', 'images/hearthstone.png')
var heroes = new GamePhoto('heroes', 'images/heroes.png')
var lol = new GamePhoto('lol', 'images/lol.png')
var overwatch = new GamePhoto('overwatch', 'images/overwatch.png')
var pokemon = new GamePhoto('pokemon', 'images/pokemon.png')
var portal = new GamePhoto('portal', 'images/portal.png')
var starcraft = new GamePhoto('starcraft', 'images/starcraft.png')
var supersmash = new GamePhoto('supersmash', 'images/supersmash.png')
var wow = new GamePhoto('wow', 'images/wow.png')

tracker.displayNewImages();

var ctx = document.getElementById("games").getContext("2d");
var myPieChart = new Chart(ctx).Pie(data, {
  //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
  //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
});

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]
