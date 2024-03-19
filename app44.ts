function sandwich(...items: string[]): void {
    console.log("sandwich order:")

    for (let i = 0; i< items.length; i++){
        console.log(`_ ${items[i]}`)
    }
}
console.log("enjoy your sandwich afshan")

sandwich(`capsicum`, `tamato`, `chicken`)
sandwich(`mutton`, `cheese`)
sandwich(`garlic chicken`, `soya sauce`)