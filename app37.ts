function makeShirt(size: string = `large`,text: string = `i love typescript`): void {
    console.log(`you have order = ${size}, shirt that says ${text}`)
}
makeShirt();
makeShirt(`medium`)

//different massage 
makeShirt(`small`,`I need a big shirt to wear`)