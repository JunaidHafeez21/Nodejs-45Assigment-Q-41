"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["Nawaz Sharif", "Asif Ali Zardari", "Maryam Nawaz", "Bilawal Bhutto"];
show_magicians(magicianNames);
