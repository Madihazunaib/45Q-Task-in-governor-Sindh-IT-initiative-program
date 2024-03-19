//Task:
function makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makealbum("ali", "light");
console.log(album);
album = makealbum("john", "red wear");
console.log(album);
album = makealbum("hamza", "salman");
console.log(album);
