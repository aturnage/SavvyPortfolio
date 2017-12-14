/* eslint-disable no-undef*/

var story = {
    "start": {
        "text": "'Every day is an opportunity to do better than you did yesterday.' ... My goal to be better than I was the day prior. Everyday I wake up with a fire to be creative, think outside the box, and bring my best effort to making a difference in the world. To assist my progress I have obtained traditional and non-traditional education.  Enter: <strong>Traditional</strong> or <strong>Non-Traditional</strong>  " ,
        "choices": [ "Trad", "Non" ]
    },
    "Trad": {
        "text": "I graduated with a B.S. in Business Administration with an emphasis in Marketing from Missouri Westerm State University.  Obtained my MBA with an emphasis in Advertising from Lindenwood University. So, what's next? Enter <strong>Next</strong>",
        "choices": [ "Next", "swim" ]
    },
    "Non": {
        "text": "I graduated from <i>Savvy Coders</i> (60 hour Code Bootcamp) focused on front-end web development.  I learned a basline of code languages: javascript, JQuery, HTML, CSS.  How to mine data using loops (for, while, forEach, map, and filer), implement API's and JSON to parse data from outside sources. <i>LaunchCode</i> (23 week code bootcamp) where I learned fundatmentals in coding languages: Python, SQL for database management, Javascript, JQuery, API's, adn JSON. So, what's next? enter <strong>Next</strong>",
        "choices": [ "Next" ]
    },
    "Next": {
        "text": "I would like to continue to advance my coding skills to create dynamic front-end & back-end web applications. Along with my business background I hope to have a successful career in the IT Industry. Enter <strong>End</strong>",
        "choices": [ "End" ]
    },
    "End": {
        "text": "Thank you for taking time to dig deeper into me.  Hope you enjoyed!",
    },
    "speak": {
        "text": "Don't talk to strangers.  He hit you with a pipe and stole your wallet!"
    },
    "skip": {
        "text": "Pushing right along.  You make it home safely!"
    }
};

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

    document
        .querySelector( "#output" )
        .innerHTML = chapter.text;
}

$( "#button" ).on( "click", () => runStory( "start" ) );

// EVERYTHING BENIETH ARE NOTES

// runStory( "start" );
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
