var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18 
//Store the location in an array
var placestoVisit = ["Dubai", "Pakistan", "China", "America", "Japan"];
//print the array in its orignal order
console.log("Orignal order:", placestoVisit);
//print the array in Alphabetical order without modifying the actual list 
console.log("Alphabetical order:", __spreadArray([], placestoVisit, true).sort());
// // show that the array is still in its orignal order
console.log("Original order after sorting:", placestoVisit);
// // print the array in reverse Alphabetical order without changing the order of list
console.log("Reverse Alphabetical order:", __spreadArray([], placestoVisit, true).sort().reverse());
//show that the array is still in its orignal order
console.log("orignal order after reverse sorting:", placestoVisit);
// show that  the array is still in its orignal order
console.log("orignal order after reverse sorting:", placestoVisit);
// // print the array in reverse Alphabetical order without changing the order of list
console.log("Reverse Alphabetical order:", __spreadArray([], placestoVisit, true).sort().reverse());
//show that array is still in its orignal order
console.log("Orignal order after reverse sorting:", placestoVisit);
// // Reverse the order of the list
placestoVisit.reverse();
console.log("Reversed order:", placestoVisit);
// // Reverse the order of the list again to get back to the orignal order
placestoVisit.reverse();
console.log("Back to orignal order:", placestoVisit);
//Sort the array in Alphabetical order
placestoVisit.sort();
console.log("sorted in Alphabetical order", placestoVisit);
//Sort the array in reverse Alphabetical order
placestoVisit.sort(function (a, b) { return b.localeCompare("a"); });
console.log("sorted in reverse Alphabetical order:", placestoVisit);
