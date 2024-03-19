function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("_ ".concat(items[i]));
    }
}
console.log("enjoy your sandwich afshan");
sandwich("capsicum", "tamato", "chicken");
sandwich("mutton", "cheese");
sandwich("garlic chicken", "soya sauce");
