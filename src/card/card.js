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
	marriage.card.Suit = {
		bells: "kule",
		green: "zelené",
		red: "červené",
		acorns: "žaludy"
	};


	/**
	 * Returns true if the enumeration contains the value.
	 * @param {marriage.card.Value|marriage.card.Suit} value
	 * @param {marriage.card.Value|marriage.card.Suit} enumeration
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
	 * @param {marriage.card.Value|marriage.card.Suit} value
	 * @param {marriage.card.Value|marriage.card.Suit} enumeration
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
	 * @param {marriage.card.Suit} suit
	 * @param {marriage.card.Value} value
	 * @constructor
	 * @throws
	 */
	marriage.Card = function (suit, value) {
		this.suit = normalize(suit, marriage.card.Suit);
		this.value = normalize(value, marriage.card.Value);
	};

	/**
	 * Returns a card suit.
	 * @return {marriage.card.Suit}
	 */
	marriage.Card.prototype.getSuit = function () {
		return this.suit;
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
		return this.suit + " " + this.value;
	};
}(marriage));