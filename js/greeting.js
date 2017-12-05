// /* eslint-disable no-console*/
/* global $ */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subHeader = $( "h3" );

        $subHeader.html( "<h1>Hello, " + value + "</h1>" );
    }
);

$( "li" ).on( "mouseenter", ( event ) => {
    $( event.target ).css( "background-color", "blue" );
} );
$( "li" ).on( "mouseleave", ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );
// var hello = "hello";
// var originalName = prompt( "What's your name?" );
//
// var checkUserName = function checkUserName( userName ){
//     if( !userName || userName === " " ){
//         userName = prompt( "What's your name? for real Bro!" );
//         checkUserName( userName );
//     }
//     else{
//         originalName = userName;
//     }
// };
//
// checkUserName( originalName );
//

// function saysClick(){
//     console.log( "click" );
// }

$( "h1" )
    .on(
        "dblclick", ( event ) => event.target.textContent = "Change"
    );
