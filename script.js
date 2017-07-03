var friends = ["Chris", "Alex", "Scott", "Skilla", "Greg"]
var places = ["Bedroom","Foryer", "Basement", "Dining Room", "Guest Room", "Bar", "Living Room", "Back Yard", "Drive way"]
var weapons = ["a bottle", "a nes", "rock", "a blue eyes white dragon", "a charmander", "the Master Sword", "Majora/'/s mask", "a pile of dung", "the power of Grey Skull", "a Barbie doll", "a trap card", "a bullet bill", "a blue koopa shell", "a NERF gun", "Airbending", "the Dragonball Z live action movie", "the skull of Guldan", " a solid right hook", "a Ka-me-ha-me-HA!", "a care-bear-stare"]

$(document).ready(function(){

for (var i=1; i<100; i++) {
    var h3 = document.createElement("h3");
    var clues = ("Clue " + i);
    h3.append(clues);
    document.body.append(h3);

    var myfriends = friends[Math.floor(Math.random()*friends.length)];
    var myplaces = places[Math.floor(Math.random()*places.length)];
    var myweapons = weapons[Math.floor(Math.random()*weapons.length)];

    $("h3").bind("click", function bellring (){

        alert(myfriends + " killed them with " + myweapons + " in the " + myplaces);
        });
    };

});
/*
for (blah blah) {
    //making h3
    //here's my object that has my random stuff

    //put a click listener on my h3, whose callback is my function below
    //and that function's execution context is bound to my object above      
}

here's my function that will alert my friend,location, and weapon, using the this keyword
*/