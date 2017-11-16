var story = {
    "start": {
        "text": "Back in 1964 in old backwoods Vacherie, LA where the air is muggy and the alligators run wild. You stand on the bank of the swamp. Would you like to 'jump' in or 'walk' to the river road?",
        "choice": [ "walk", "jump" ]
    },
    "jump": {
        "text": "You jump into the swamp and swim 10 feet out and you encounter a massive 13ft alligator beaming down on your nose. Do you 'bite' the alligator or 'swim away?",
        "choice": [ "bite", "swim" ]
    },
    "walk": {
        "text": "You quickly walk away and head down the river road.  Cars are zooming by.  You come across a guy fixin' his bike. Do you 'speak' to him or 's' him?",
        "choice": [ "speak", "skip" ]
    },
    "bite": {
        "text": "Oh you dead!  BYE BYE!!!"
    },
    "swim": {
        "text": "You try your best to swim away but the alligator eats you...Oh You dead!  BYE BYE!",
    },
    "speak": {
        "text": "Don't talk to strangers.  He hit you with a pipe and stole your wallet!"
    },
    "skip": {
        "text": "Pushing right along.  You make it home safely!"
    }
};


var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choice = prompt( chapter.text );
    var choices = chapter.choice;

    if( choice === choices[1] ){
        choice = prompt( story[choice].text );

        if( choice === "bite" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice].text;
        }
        else if( choice === "swim" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice].text;
        }
        else{
            runStory( choices[0] );
        }
    }
    else if( choice === choices[0] ){
        choice = prompt( story[choice].text );
        if( choice === "speak" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice].text;
        }
        else if( choice === "skip" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice].text;
        }
        else{
            document
                .querySelector( "#output" )
                .textContent = "You'll walk forever!";
        }
    }
    else{
        runStory( branch );
    }
};

runStory( "start" );
