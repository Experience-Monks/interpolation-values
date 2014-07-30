var interpolateNumber = require( '../index' )( 0 );
var interpolateObject = require( '../index' )( { x: 10, y: 10 } );
var interpolateArray = require( '../index' )( [ 10, 10 ] );

console.log( interpolateNumber( 0, 10, 0.5 ) ); // 5
console.log( interpolateObject( { x: 0, y: 0 }, { x: -5, y: 10 }, 0.5 ) ); // { x: -2.5, y: 5 }
console.log( interpolateArray( [ 0, 10, 0, 20 ], [ 20, 5, 10, 0 ], 0.5 ) ); // [ 10, 7.5, 5, 10 ]