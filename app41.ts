//Task:41
function show_magicians(magicians: string[]): void {
    for (const magician of magicians){
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
}
const magician: string [] = ["naiz","ayaz","bilal"];
show_magicians(magician)

//Task 42:
 function make_great1 (magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]   +   ` The great `
    }
    
    }

const magicians: string[] = ["naiz","ayaz","bilal"];

make_great1(magicians)
show_magicians(magicians)

//Task 43:
function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] =[];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ` the Great `);

    }
    return greatMagicians;
}
const magicians3: string[] = ["naiz","ayaz","bilal"];

const greatmagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);