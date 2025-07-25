function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
//var experiencePoints = winBattle() ? 10 : 1;


function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward");// answer is you encounter a monster


//#3 return value when moveCommant("back");// answer is you arrived home

//#4 return value when moveCommant("right");// answer is you found a river

//#5 return value when moveCommant("left");// answer is you run into a troll
