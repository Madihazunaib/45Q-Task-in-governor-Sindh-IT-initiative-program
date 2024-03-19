//Task 30
var users = ["kinza", "huzifa", "imran khan", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "kinza") {
        console.log(" Hello admin ,would you like to use a status report?");
    }
    else {
        var users_2 = ["kinza", "huzifa", "imran khan", "admin"];
        console.log("Hello ".concat(user, ", thank you for loggin in again"));
    }
}
