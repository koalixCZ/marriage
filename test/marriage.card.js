/*global describe, expect, it, marriage */
describe("The cards", function () {
	"use strict";

	describe("The values", function () {
		it("Expected values exist", function () {
			expect(marriage.card.Value.seven).toBe("sedm");
			expect(marriage.card.Value.eight).toBe("osm");
			expect(marriage.card.Value.nine).toBe("devět");
			expect(marriage.card.Value.ten).toBe("deset");
			expect(marriage.card.Value.underKnave).toBe("spodek");
			expect(marriage.card.Value.overKnave).toBe("svršek");
			expect(marriage.card.Value.king).toBe("král");
			expect(marriage.card.Value.ace).toBe("eso");
		});
	});

	describe("The colours", function () {
		it("Expected colours exist", function () {
			expect(marriage.card.Color.bells).toBe("kule");
			expect(marriage.card.Color.green).toBe("zelené");
			expect(marriage.card.Color.red).toBe("červené");
			expect(marriage.card.Color.acorns).toBe("žaludy");
		});
	});

	describe("The card", function () {

		var card;

		it("It is possible to create specific card - the red ace", function () {
			card = new marriage.Card(marriage.card.Color.red, marriage.card.Value.ace);

			expect(card instanceof marriage.Card).toBeTruthy();
		});

		it("It is possible to get the card value", function () {
			card = new marriage.Card(marriage.card.Color.red, marriage.card.Value.seven);

			expect(card.getValue()).toBe(marriage.card.Value.seven);
		});

		it("It is possible to get the card color", function () {
			card = new marriage.Card(marriage.card.Color.green, marriage.card.Value.ten);

			expect(card.getColor()).toBe(marriage.card.Color.green);
		});

		it("it is not possible to create a card with an invalid value", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card(marriage.card.Color.acorns, "twenty");
			}).toThrow();
		});

		it("it is not possible to create a card with an invalid color", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card("white", marriage.card.Value.ten);
			}).toThrow();
		});

		it("It is not possible to create a card with an invalid value and color", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card("a", "b");
			}).toThrow();
		});

		it("the toString method returns color and value", function () {
			var color = marriage.card.Color.red,
				value = marriage.card.Value.ace;

			card = new marriage.Card(color, value);
			expect(card.toString()).toBe(color + " " + value);
		});
	});
});