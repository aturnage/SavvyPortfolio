// $( "#word" ).mouseenter() => {
//     $( "#switch" ).slidedown();
// } );


$( document ).ready( () => {
    $( ".titleContainer" ).mouseenter( ( event ) => {
        console.log( event );
        $( ".list" ).slideDown( "slow" );
    } );
} );
// $( document ).ready( () => {
//     $( "#flip" ).mouseleave( () => {
//         $( "#panel" ).slideUp( "slow" );
//     } );
// } );
