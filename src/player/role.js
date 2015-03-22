/*global marriage*/
(function() {
	"use strict";

	marriage.role = marriage.role || {};

	/**
	 * @enum {string}
	 */
	marriage.role.RoleName = {
		foreman: "forhont",
		defender: "zadák",
		centre: "střední hráč"
	};

	/**
	 * Creates a new instance of Role.
	 * @param {marriage.role.RoleName} roleName
	 * @constructor
	 */
	marriage.Role = function (roleName) {
		/**
		 * @private
		 * @type {marriage.role.RoleName}
		 */
		this.roleName = roleName;
	};

	/**
	 * Returns the role name.
	 * @return {marriage.role.RoleName}
	 */
	marriage.Role.prototype.getRoleName = function () {
		return this.roleName;
	};
}());