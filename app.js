// array of photo objects
var gamePhoto = [];

// pushing this object thats being created into the function
// sites path and votes property
function GamePhoto(site, path) {
  this.site = site;
  this.path = path;
  this.votes = 0;
  gamePhoto.push(this);
}

var tracker = {
  photo1: 0,
  photo2: 0,
  calcRandNum: function() {
  return Math.floor(Math.random() * gamePhoto.length);
  },
  getRandomImg: function (){
    this.index1 = gamePhoto[this.calcRandNum()];
    this.index2 = gamePhoto[this.calcRandNum()];
    var img1 = this.index1.path;
    var img2 = this.index2.path;
    var display1 = document.getElementById ('displayImg1');
    var display2 = document.getElementById ('displayImg2');
    while (img1 === img2) {
      this.index2 = calcRandNum();
      img2 = gamePhoto[this.index2].path;
    };
    display1.src = img1;
    display2.src = img2;
    },
  }

function callBack (event) {
  this.photo1.vote++;
}
// vote funtion
vote = function() {
  console.log(gamePhoto[photo1].site + ' had ' + gamePhoto[photo1].votes + ' votes. ');
  gamePhoto[photo1].votes++; // here is where the vote increments
  console.log(gamePhoto[photo2].site + ' now has ' + gamePhoto[photo2].votes + ' votes. ');
  gamePhoto[photo2].votes++;

  picture1.parentNode.removeChild(picture1);

  displayPhotos();
}

var picture1 = document.createElementById('img1');
var picture2 = document.createElementById('img2');

//display photos function
//make a second picture
displayPhotos = function() {
  var somethingThatLinksToHtml


  picture1 = document.createElement('img');
  picture2 = document.createElement('img');

  picture1.setAttribute('id', 'img1');
  picture2.setAttribute('id', 'img2');

  picture1.setAttribute('src', gamePhoto[photo1].path);
  picture2/setAttribute('src', gamePhoto[photo2].path);

  picture1.setAttribute('width', '300');
  picture2.setAttribute('width', '300');

  somethingThatLinksToHtml.appendChild(picture1);

//   //add event listeners
  picture1.addEventListener('click', function(){
    vote(index1); // An integer being past through
  });
}
var destiny = new Photo('destiny', 'images/destiny.png')
var diablo = new Photo('diablo', 'images/diablo.png')
var guildwars = new Photo('guildwars', 'images/guildwars.png')
var hearthstone = new Photo('hearthstone', 'images/hearthstone.png')
var heroes = new Photo('heroes', 'images/heroes.png')
var lol = new Photo('lol', 'images/lol.png')
var overwatch = new Photo('overwatch', 'images/overwatch.png')
var pokemon = new Photo('pokemon', 'images/pokemon.png')
var portal = new Photo('portal', 'images/portal.png')
var starcraft = new Photo('starcraft', 'images/starcraft.png')
var supersmash = new Photo('supersmash', 'images/supersmash.png')
var wow = new Photo('wow', 'images/wow.png')

//displayPhotos();

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

