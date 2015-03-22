/* global marriage */
(function () {
	"use strict";

	/**
	 * Returns a new pack of card.
	 * @return {Array.<marriage.Card>}
	 */
	function getNewPack() {
		var pack = [],
			availableColors = marriage.card.Color,
			availableValues = marriage.card.Value,
			color,
			value;

		for (color in availableColors) {
			if (availableColors.hasOwnProperty(color)) {
				for (value in availableValues) {
					if (availableValues.hasOwnProperty(value)) {
						pack.push(new marriage.Card(availableColors[color], availableValues[value]));
					}
				}
			}
		}
		// Reverse the array because enumerations are defined from the front size of pack
		return pack.reverse();
	}

	/**
	 * Returns a random number from 0-10
	 * @return {number}
	 */
	function getRandomInteger() {
		return parseInt(Math.random() * 10, 10);
	}

	/**
	 * Returns and index where to cut the pack.
	 * @return {number}
	 */
	function getIndexForCut() {
		// Bitwise operator is faster then modulo 2
		//noinspection JSBitwiseOperatorUsage,JSHint
		var count = getRandomInteger() - 5,		// We need to take only few cards around the middle
			isEven = getRandomInteger() & 1 ? -1 : 1;

		return 16 + isEven * count;
	}


	/**
	 * Creates a new instance of Pack.
	 * @constructor
	 */
	marriage.Pack = function () {
		/**
		 * @private
		 * @type {Array.<marriage.Card>}
		 * */
		this.pack = getNewPack();

		/**
		 * @private
		 * @type {number}
		 */
		this.index = 0;
	};

	/**
	 * Cuts the package.
	 */
	marriage.Pack.prototype.cut = function () {
		var indexForCut = getIndexForCut();

		this.pack = this.pack.slice(indexForCut).concat(this.pack.slice(0, indexForCut));
	};

	/**
	 * Shuffles the pack.
	 */
	marriage.Pack.prototype.shuffle = function () {
		// Algorithm is from underscore library
		var newPack = [],
			length = this.pack.length,
			random,
			i;

		for (i = 0; i < length; i++) {
			random = Math.floor(Math.random() * (i + 1));
			newPack[i] = newPack[random];
			newPack[random] = this.pack[i];
		}
		this.pack = newPack;
	};

	/**
	 * Takes a card from the pack.
	 * @return {marriage.Card}
	 * @throws
	 */
	marriage.Pack.prototype.takeCard = function () {
		if (this.index < this.pack.length) {
			return this.pack[this.index++];
		}
		throw "There is not any card to take.";
	};

	/**
	 * Returns the object as a string.
	 * @return {string}
	 */
	marriage.Pack.prototype.toString = function () {
		return this.pack.toString();
	};
}());
