// Return sheet object
// Paramenter: media (string)
//	+ media query 
//  + Ex: "only screen and (max-width : 1024px)"
function DynamicCss(media) {
	// Create the <style> tag
	var style = document.createElement("style");

	if (typeof media === "string") {
		style.setAttribute("media", media);
	}
	// WebKit hacks
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);
	function addCSSRule(sheet, selector, rules, index) {
		if("insertRule" in sheet) {
			sheet.insertRule(selector + "{" + rules + "}", index);
		}
		else if("addRule" in sheet) {
			sheet.addRule(selector, rules, index);
		}
	}
	style.sheet.addRule = function(selector, rules) {
		return addCSSRule(style.sheet, selector, rules);
	}

	return style.sheet;
})();