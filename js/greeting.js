/* eslint-disable no-console*/
var hello = "hello";
var originalName = prompt( "What's your name?" );

var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "What's your name? for real Bro!" );
        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};

checkUserName( originalName );

document.querySelector( "h3" ).textContent = "Hello, " + originalName;
