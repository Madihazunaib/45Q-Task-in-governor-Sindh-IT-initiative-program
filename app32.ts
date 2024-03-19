let current_users :string [] = ["admin","Eric","Azan","bisha","abiha"]
let new_users1 : string [] = ["admin","fisal","Noor","kinza","Hassib"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())
let new_user1 : string [] = new_users1.map(user => user.toLocaleLowerCase())


for (let new_user1 of new_users1){
    if (current_users_lower.includes(new_user1.toLocaleLowerCase())){
        console.log(`Sorry ${new_user1}, that name is taken `)
    } else {
        console.log(`Yes ${new_user1}, is still in avaliable list`)
    }
}