/*global marriage */
(function () {
	"use strict";

	marriage.Module = (function () {
		var dispatcher = new marriage.Dispatcher();

		return {
			/**
			 * Returns an instance of the dispatcher.
			 * @return {marriage.Dispatcher}
			 */
			get dispatcher () {
				return dispatcher;
			}
		};
	}());
}());