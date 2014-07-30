interpolation-values
====================

Interpolate between numbers, objects, and arrays.

Example:
------
```javascript
var interpolateNumber = require( '../index' )( 0 );
var interpolateObject = require( '../index' )( { x: 10, y: 10 } );
var interpolateArray = require( '../index' )( [ 10, 10 ] );

console.log( interpolateNumber( 0, 10, 0.5 ) ); // 5
console.log( interpolateObject( { x: 0, y: 0 }, { x: -5, y: 10 }, 0.5 ) ); // { x: -2.5, y: 5 }
console.log( interpolateArray( [ 0, 10, 0, 20 ], [ 20, 5, 10, 0 ], 0.5 ) ); // [ 10, 7.5, 5, 10 ]
```

Usage:
------
#### `require( 'interpolation-values' )( exampleValue, [ interpolationFunction ] )` #### 

The first step is to build an interpolation function. This is done to get maximum performance for interpolating values
especially for when working with objects. 

`exampleValue`: is a value you'll be attempting to interpolate.

`interpolationFunction`: is the function that will be used to interpolate numeric values. It should accept three parameters
the first two being the values you interpolate and the last being the interpolation amount.

After you've done the above you'll receive a function you'll be able to pass two values and an interpolation amount to.