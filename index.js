var interpolation = require( 'interpolation' );

module.exports = function( exVal, interpolationFunction ) {

	interpolationFunction = interpolationFunction || interpolation.lerp;

	if( typeof exVal == 'number' ) {

		return interpolationFunction;
	} else if( Array.isArray( exVal ) ) {

		return require( './lib/array' )( interpolationFunction );
	} else if( typeof exVal == 'object' ) {

		return require( './lib/object' )( exVal, interpolationFunction );
	} else {

		throw 'Value of type ' + ( typeof exVal ) + ' cannot be interpolated';
	}
}