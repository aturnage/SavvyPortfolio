var story = {
    "start": {
        "text": "Back in 1964 in old backwoods Vacherie, LA where the air is muggy and the alligators run wild. You stand on the bank of the swamp. Would you like to 'jump' in or 'walk' to the river road?",
        "choices": [ "walk", "jump" ]
    },
    "jump": {
        "text": "You jump into the swamp and swim 10 feet out and you encounter a massive 13ft alligator beaming down on your nose. Do you 'bite' the alligator or 'swim' away?",
        "choices": [ "bite", "swim" ]
    },
    "walk": {
        "text": "You quickly walk away and head down the river road.  Cars are zooming by.  You come across a guy fixin' his bike. Do you 'speak' to him or 'skip' him?",
        "choices": [ "speak", "skip", "bite" ]
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

// function validateChoice( choice, choices ){
//     var isValidChoice = false;
//
//     choices.forEach((validChoice) => {
//         if( choice === choices[i] ){
//             isValidChoice = true;
//         }
//     });
//     // for( let i = 0; i < choices.length; i++ ){
//     //     if( choice === choices[i] ){
//     //         isValidChoice = true;
//     //     }
//     // }
//
//     return isValidChoice;
// }

var $choice = $( "#inputChoose" );


function validateChoice( choice, choices ){
    var isValidChoice = choice.isValidChoice;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}


function runStory( branch ){
    var chapter = story[branch];

    $choice.on( "keyup", ( event ) => {
        var userInput = $( event.target ).val();

        if( validateChoice( userInput, chapter.choices ) ){
            $choice.off( "keyup" );
            $choice.val( "" );
            runStory( userInput );
        }
    } );
    console.log( "event" );
    document
        .querySelector( "#output" )
        .innerHTML = chapter.text;
}

// runStory( "start" );
$( "#button" ).on( "click", () => runStory( "start" ) );

// The original code
// var runStory = function runStory( branch ){
//     var chapter = story[branch];
//     var choices = chapter.choices;
//     var isValidChoice = false;
//     var choice;
//
//     if( choices ){
//         choice = prompt( chapter.text );
//
//         // Validate choices
//         for( var i = 0; i < choices.length; i++ ){
//             if( choice === choices[i] ){
//                 isValidChoice = true;
//             }
//         }
//
//         if( isValidChoice ){
//             runStory( choice );
//         }
//         else{
//             runStory( branch );
//         }
//     }
//     else{
//         document
//             .querySelector( "#output" )
//             .textContent = chapter.text;
//     }
// };
//
// runStory( "start" );
