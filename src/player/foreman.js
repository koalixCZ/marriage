/*global marriage */
(function () {
	"use strict";

	marriage.role = marriage.role || {};

	/**
	 * Creates a new instance of Foreman.
	 * @constructor
	 */
	marriage.role.Foreman = function () {
	};

	marriage.role.Foreman.prototype = new marriage.Role(marriage.role.RoleName.foreman);
}());