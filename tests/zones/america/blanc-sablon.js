"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Blanc-Sablon"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Blanc-Sablon", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Blanc-Sablon", { abbr: true, expect: "America/Santo_Domingo" }),

	"1918" : helpers.makeTestYear("America/Blanc-Sablon", [
		["1918-04-14T05:59:59+00:00", "01:59:59", "AST", 240],
		["1918-04-14T06:00:00+00:00", "03:00:00", "ADT", 180],
		["1918-10-27T04:59:59+00:00", "01:59:59", "ADT", 180],
		["1918-10-27T05:00:00+00:00", "01:00:00", "AST", 240]
	]),

	"1942" : helpers.makeTestYear("America/Blanc-Sablon", [
		["1942-02-09T05:59:59+00:00", "01:59:59", "AST", 240],
		["1942-02-09T06:00:00+00:00", "03:00:00", "AWT", 180]
	]),

	"1945" : helpers.makeTestYear("America/Blanc-Sablon", [
		["1945-08-14T22:59:59+00:00", "19:59:59", "AWT", 180],
		["1945-08-14T23:00:00+00:00", "20:00:00", "APT", 180]
	])
};