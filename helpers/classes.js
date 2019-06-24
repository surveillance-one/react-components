/*
	Usage:
	classes("class1", "class2", "class3");
	classes(["class1", "class2", "class3"]);
	classes("class1 class2 class3");
	classes("class1 class2", { add: ["class3", "class4"], remove: "class1" });
*/
const classes = (...opts) => {

	let classList = [];
	let queryOpts = {};
	let classArgs = opts;

	// Check for options at end of args
	if (classArgs.length > 1 && typeof classArgs[classArgs.length - 1] === "object") {
		queryOpts = classArgs[classArgs.length - 1];
		classArgs = classArgs.slice(0, classArgs.length - 1);
	}

	// passed an array of classes
	if (classArgs.length === 1 && Array.isArray(classArgs[0])) {
		[classList] = classArgs;
	}

	// passed classes from className property
	else if (classArgs.length === 1 && typeof classArgs[0] === "string") {
		classList = classArgs[0].split(" ").filter(o => o.length > 0);
	}

	// passed classes as args
	else if (classArgs.length > 0) {
		classList = [...classArgs];
	}

	// Unknown usage
	else {
		return "";
	}

	// Check for additional options
	const addc = typeof queryOpts.add === "string" ? [queryOpts.add] : queryOpts.add;
	const rmc = typeof queryOpts.remove === "string" ? [queryOpts.remove] : queryOpts.remove;
	if (addc) classList = [...classList, ...addc];
	if (rmc) classList = classList.filter(c => !rmc.includes(c));

	// Filter out duplicates, later refs have precedence
	classList = classList.reverse().filter((c, i, l) => l.indexOf(c) === i).reverse();

	// Return final list
	return classList.join(" ");
};

export default classes;
