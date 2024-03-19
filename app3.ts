//lower case
let person_Name1: string ="Madiha";
console.log("lowercase:",person_Name1.toLowerCase());

//upper case:
console.log("uppercase:",person_Name1.toUpperCase());

//title case:
console.log("titlecase:",person_Name1.replace(/\bw/g,c => c.toUpperCase()));


