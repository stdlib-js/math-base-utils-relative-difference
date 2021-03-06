/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert-is-function' );
var format = require( '@stdlib/string-format' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var abs = require( '@stdlib/math-base-special-abs' );
var SCALE = require( './scale.js' );


// MAIN //

/**
* Computes the relative difference of two real numbers.
*
* @param {number} x - first number
* @param {number} y - second number
* @param {(string|Function)} [scale='max-abs'] - scale function
* @throws {Error} must provide a recognized scale function name
* @returns {number} relative difference
*
* @example
* var d = relativeDifference( 2.0, 5.0 ); // => 3/5
* // returns 0.6
*
* @example
* var d = relativeDifference( -1.0, 3.14 ); // => 4.14/3.14
* // returns ~1.318
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'max-abs' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'max' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'min-abs' ); // => |-7/2|
* // returns 3.5
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'min' ); // => |-7/-2|
* // returns 3.5
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'mean-abs' ); // => |-7/3.5|
* // returns 2.0
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'mean' ); // => |-7/1.5|
* // returns ~4.67
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'x' ); // => |-7/-2|
* // returns 3.5
*
* @example
* var d = relativeDifference( 5.0, -2.0, 'x' ); // => |7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'y' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( 5.0, -2.0, 'y' ); // => |7/-2|
* // returns 3.5
*/
function relativeDifference( x, y, scale ) {
	var f;
	var s;
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	if (
		x === PINF ||
		x === NINF ||
		y === PINF ||
		y === NINF
	) {
		if ( x === y ) {
			return NaN;
		}
		return PINF;
	}
	// If the absolute difference is `0`, then so is the relative difference:
	if ( x === y ) {
		return 0.0;
	}
	if ( isFunction( scale ) ) {
		f = scale;
	} else {
		if ( scale === void 0 ) {
			scale = 'max-abs';
		}
		f = SCALE[ scale ];
		if ( f === void 0 ) {
			throw new Error( format( 'invalid argument. Unrecognized/unsupported scale function. Value: `%s`.', scale ) );
		}
	}
	s = f( x, y );
	if ( s === 0.0 ) {
		// Bail. No possible return value which works for all possible scale functions...
		return NaN;
	}
	return abs( (x - y) / s );
}


// EXPORTS //

module.exports = relativeDifference;
