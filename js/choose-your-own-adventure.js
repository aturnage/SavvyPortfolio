var story = {
    "start": "Back in 1964 in old backwoods Vacherie, LA where the air is muggy and the alligators run wild. You stand on the bank of the swamp. Would you like to JUMP in or WALK to the river road?",
    "jump": "You jump into the swamp and swim 10 feet out and you encounter a massive 13ft alligator beaming down on your nose. Do you bite the alligator or swim away?",
    "walk": "You quickly walk away and head down the river road.  Cars are zooming by.  You come across a guy fixin' his bike. Do you speak to him or skip him?",
    "bite": "Oh you dead!  BYE BYE!!!",
    "swim": "You try your best to swim away but the alligator eats you...Oh You dead!  BYE BYE!"
};


var runStory = function runStory( ){
    var userChoice = prompt( story.start );

    if( userChoice === "jump" ){
        choice = prompt( story.jump );

        if( choice === "bite" ){
            document
                .querySelector( "#output" )
                .textContent = story.bite;
        }
        else if( choice === "swim" ){
            document
                .querySelector( "#output" )
                .textContent = story.swim;
        }
        else{

        }
    }
    else if( userChoice === "walk" ){
        document
            .querySelector( "#output" )
            .textContent = story.walk;
    }
    // else if( userChoice === "bite" ){
    //     prompt( story.bite );
    // }
    else{
        runStory( );
    }
};

runStory( );
