"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_1 = "Madiha";
var name_2 = "Madiha zunaib";
var name_3 = "Madiha zunaib soomro";
if (name_1 == name_3) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
}
if (name_1 != name_2) {
    console.log("name are equal");
}
if (name_1 != name_3) {
    console.log("name are equal");
}
var age_1 = 15;
var age_2 = 20;
if (age_1 == 15) {
    console.log("aligiable fo vote cast");
}
if (age_1 != 20) {
    console.log("aligiable fo vote cast in adult category");
}
if (age_1 <= age_2) { //less
    console.log("younger");
}
if (age_2 >= age_1) { //greatar
    console.log("adult");
}
if (age_1 == 15 && age_2 == 20) {
    console.log("person is eligable for vote cast  ");
}
if (age_1 == 15 || age_2 != 20) {
    console.log("person is eligable  not for vote cast  ");
}
var country = ["pakistan", "india", "Japan", "China"];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (!country.includes("Uk")) {
    console.log("Uk is not include in an array");
}
