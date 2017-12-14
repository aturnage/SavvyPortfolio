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

$( ".navigation > li" ).on( "mouseenter", ( event ) => {
    $( event.target )
        .css( "background-color", "#0099ff" )
        .css( "color", "white" );
} );
$( ".navigation > li" ).on( "mouseleave", ( event ) => {
    $( event.target )
        .css( "background-color", "transparent" )
        .css( "color", "gray" );
} );
$( ".footerGrid > li" ).on( "mouseenter", ( event ) => {
    $( event.target )
        .css( "background-color", "#transparent" )
        .css( "color", "white" );
} );
$( ".footerGrid > li" ).on( "mouseleave", ( event ) => {
    $( event.target )
        .css( "background-color", "transparent" )
        .css( "color", "darkgray" );
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
