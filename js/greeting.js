/* eslint-disable no-console*/
var hello = "hello";
var userName = prompt( "What's your name?" );

var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "What's your name? for real Bro!" );
        checkUserName();
    }
};

checkUserName();
alert( hello + " " + userName );
