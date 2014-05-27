// matches(el, '.my-class');
var matches = function(el, selector) {
	var _matches = (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector);

	if (_matches) {
		return _matches.call(el, selector);
	}
	else {
		var nodes = el.parentNode.querySelectorAll(selector);

		for (var i = nodes.length; i--;) {
			if (nodes[i] === el) {
				return true;
			}
		}
		return false;
	}
};

// ready( function () {} );
var ready = function (fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		fn();
	}
	else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	}
	else {
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === "complete" || document.readyState === 'interactive') {
				fn();
			}
		});
	}
};

// setText(element, string);
var setText = function (el, string) {
	if (el.textContent !== undefined) {
		el.textContent = string;
	}
	else {
		el.innerText = string;
	}
};

// forEachElement(selector, function(el, i) { });
var forEachElement = function (selector, fn) {
	var elements = document.querySelectorAll(selector);
	for (var i = 0; i < elements.length; i++) {
		fn(elements[i], i);
	}
};

ready(function(){
	forEachElement('.obfuscated-email', function(el) {
		var em = el.getAttribute('data-id')  + '@oslagbar' + 'produktion.se';

		setText(el, em);

		if (matches(el, 'a')) {
			el.setAttribute('href', 'mailto:' + em);
		}
	});
});