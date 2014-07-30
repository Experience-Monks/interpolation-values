module.exports = function( interpolate ) {

	return function( val1, val2, t ) {

		var rVal = [];

		for( var i = 0, len = val1.length; i < len; i++ ) {

			rVal[ i ] = interpolate( val1[ i ], val2[ i ], t );
		}

		return rVal;
	};
};