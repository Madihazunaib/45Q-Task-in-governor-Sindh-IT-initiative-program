var guestlist = ["Ali", "Bisma", "Uzair", "Naiz"];
var canNotattend = "Ali";
//console.log(canNotattend + " "  `can not attend the dinner`);
var newguest = "Madiha";
guestlist[guestlist.indexOf(canNotattend)] = newguest;
//console.log(newguest);
guestlist.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to dinner on sunday."));
});
