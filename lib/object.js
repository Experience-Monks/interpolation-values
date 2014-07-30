module.exports = function( exVal, interpolate ) {

	var keys = [];

	for( var i in exVal ) {

		if( typeof exVal[ i ] == 'number' ) {

			keys.push( i );
		}
	}

	return function( val1, val2, t ) {

		var key, rVal = Object.create( exVal );

		for( var i = 0, len = keys.length; i < len; i++ ) {

			key = keys[ i ];

			rVal[ key ] = interpolate( val1[ key ], val2[ key ], t );
		}

		return rVal;
	};
};