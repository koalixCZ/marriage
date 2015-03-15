/*global marriage*/
(function () {
	"use strict";

	marriage.card = marriage.card || {};

	/**
	 * @enum {string}
	 */
	marriage.card.Value = {
		seven: "sedm",
		eight: "osm",
		nine: "devět",
		ten: "deset",
		underKnave: "spodek",
		overKnave: "svršek",
		king: "král",
		ace: "eso"
	};


	/**
	 * @enum {string}
	 */
	marriage.card.Color = {
		bells: "kule",
		green: "zelené",
		red: "červené",
		acorns: "žaludy"
	};


	/**
	 * Returns true if the enumeration contains the value.
	 * @param {marriage.card.Value|marriage.card.Color} value
	 * @param {marriage.card.Value|marriage.card.Color} enumeration
	 * @return {boolean}
	 */
	function isValid(value, enumeration) {
		for (var key in enumeration) {
			if (enumeration.hasOwnProperty(key) && enumeration[key] === value) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Throws an error when the value is an unknown in the specified enumeration.
	 * @param {marriage.card.Value|marriage.card.Color} value
	 * @param {marriage.card.Value|marriage.card.Color} enumeration
	 * @return {string}
	 * @throws
	 */
	function normalize(value, enumeration) {
		if (isValid(value, enumeration)) {
			return value;
		}
		throw "'" + value + "' is not a valid value.";
	}


	/**
	 * Creates a new instance of a Card.
	 * @param {marriage.card.Color} color
	 * @param {marriage.card.Value} value
	 * @constructor
	 * @throws
	 */
	marriage.Card = function (color, value) {
		this.color = normalize(color, marriage.card.Color);
		this.value = normalize(value, marriage.card.Value);
	};

	/**
	 * Returns a card color.
	 * @return {marriage.card.Color}
	 */
	marriage.Card.prototype.getColor = function () {
		return this.color;
	};

	/**
	 * Returns a card value.
	 * @return {marriage.card.Value}
	 */
	marriage.Card.prototype.getValue = function () {
		return this.value;
	};

	/**
	 * @override
	 * Returns an objects as a string.
	 * @return {string} an instance as a string
	 */
	marriage.Card.prototype.toString = function () {
		return this.color + " " + this.value;
	};
}());