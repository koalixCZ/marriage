/*global marriage */
(function () {
	"use strict";

	marriage.role = marriage.role || {};

	/**
	 * Creates a new instance of Centre.
	 * @constructor
	 */
	marriage.role.Centre = function () {
	};

	marriage.role.Centre.prototype = new marriage.Role(marriage.role.RoleName.centre);
}());