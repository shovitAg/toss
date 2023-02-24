var names = ["Shovit", "Dud", "Lodu Lalit"];


var randomNumber = Math.floor(Math.random() * names.length);
var randomName = names[randomNumber];


document.querySelector("h2").innerHTML = randomName;
