let guestlist: string[] = [ "Ali","Bisma","Uzair","Naiz"];
let canNotattend: string = "Ali";

//console.log(canNotattend + " "  `can not attend the dinner`);

let newguest : string = "Madiha";

 guestlist [guestlist.indexOf(canNotattend)] = newguest;
//console.log(newguest);
guestlist.map((items) =>
 console.log(`Dear ${items}, you are invited to dinner on sunday.`));

