//lower case
var person_Name1 = "Madiha";
console.log("lowercase:", person_Name1.toLowerCase());
//upper case:
console.log("uppercase:", person_Name1.toUpperCase());
//title case:
console.log("titlecase:", person_Name1.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
