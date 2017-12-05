/* eslint-disable no-console*/
var fizzBuzzString = "";

var fizzBuzz = function fizzBuzz( i ){
    if( i % 15 === 0 ){
        fizzBuzzString += ", fizzbuzz";
    }
    else if( i % 3 === 0 ){
        fizzBuzzString += ", fizz";
    }
    else if( i % 5 === 0 ){
        fizzBuzzString += ", buzz";
 	}
    else if( i === 1 ){
        fizzBuzzString += i;
    }
    else{
        fizzBuzzString += ", " + i;
    }
};

var fizzBuzzFor = function fizzBuzzFor( limit ){
    for( var i = 1; i < limit; i++ ){
        fizzBuzz( i );
    }
};

var problemTwo = function problemTwo(){
    /* places all li in an array*/
    var listItems = document.querySelectorAll( "li" );
    var listArray = Array.from( listItems );

    listArray.forEach( ( li, x ) => li.textContent = x + 1  );

    for( var x = 0; x < listArray.length; x++ ){
        listArray[x].textContent = x + 1;
    }
};

var problemThree = function problemThree(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 1; i <= 20; i++ ){
        if( i % 2 === 0 ){
            listItemString += "<li>";
            listItemString += i;
            listItemString += "</li>";
        }
        evens.innerHTML = listItemString;
    }
};

fizzBuzzFor();
problemTwo();
problemThree();

document.querySelector( "#fizzBuzz" ).textContent = fizzBuzzString;
