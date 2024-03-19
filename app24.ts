import { copyFileSync } from "fs"

let name_1 :string = "Madiha"
let name_2 :string = "Madiha zunaib"
let name_3 :string = "Madiha zunaib soomro"

if (name_1 == name_3){
    console.log("name are equal")
} else {
    console.log("name are not equal")
}
if (name_1 != name_2){
    console.log("name are equal")
} 

if (name_1 != name_3){
    console.log("name are equal")
} 

let age_1 : number = 15
let age_2 : number = 20
 
if(age_1 == 15){
    console.log("aligiable fo vote cast")
}

if(age_1 != 20){
    console.log("aligiable fo vote cast in adult category")
}


if (age_1 <= age_2 ){ //less
    console.log("younger")
} 

if (age_2 >= age_1 ){ //greatar
    console.log("adult")
}

if (age_1 == 15 && age_2 == 20){
    console.log("person is eligable for vote cast  ")
}

if (age_1 == 15 || age_2 != 20){
    console.log("person is eligable  not for vote cast  ")
}

let country : string [] = ["pakistan","india","Japan","China"]

if (country.includes("pakistan")){
    console.log("pakistan is in country list")
}

if (!country.includes ("Uk")){
  console.log("Uk is not include in an array")
}
