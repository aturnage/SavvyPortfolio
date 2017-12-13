// $( "#word" ).mouseenter() => {
//     $( "#switch" ).slidedown();
// } );


$( document ).ready( () => {
    $( "#flip" ).mouseenter( () => {
        $( "#panel" ).slideDown( "slow" );
    } );
} );
$( document ).ready( () => {
    $( "#flip" ).mouseleave( () => {
        $( "#panel" ).slideUp( "slow" );
    } );
} );
