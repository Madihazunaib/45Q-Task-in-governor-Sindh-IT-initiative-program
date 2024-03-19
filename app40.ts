//Task:

function makealbum (artist: string, title: string): { artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1) , 
        title: title.charAt(0).toUpperCase() + title.slice(1)  

    };
    return dictionaries;
}
let album =makealbum("ali","light")
console.log(album) 
 album =makealbum("john","red wear")
console.log(album)
 album =makealbum("hamza","salman")
console.log(album)


