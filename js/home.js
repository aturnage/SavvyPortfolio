/* eslint-disable no-undef*/
$( document ).ready( () => {
    $( ".titleContainer" ).mouseenter( () => {
        $( ".list" ).slideDown( "slow" );
    } );
} );
// $( document ).ready( () => {
//     $( ".titleContainer" ).mouseleave( () => {
//         $( ".list" ).slideUp( "fast" );
//     } );
// } );

// var $output = $( "#output" );
// var $subtitle = $( "<h2>I'm a beast<h2>" );
//
// $output
//     .html( "<h3>HELLO WORLD</h3>" )
//     .css( { "color": "pink",
//         "font-size": "300%",
//         "font-family": "arial" } )
//     .append( $subtitle )
//     .css( "color" ,"crimson" )
//     .fadeOut( 3000 )
//     .fadeIn( )
//     .animate( {
//         "margin-top": "50%"
//     },{
//         "duration": "5000",
//         "ease": "ease-in",
//         "complete": function changeSubtitle(){
//             $subtitle.css( "color", "orange" );
//         }
//     } );
