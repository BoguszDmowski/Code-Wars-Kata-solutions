//############Hungarian Vowel Harmony (easy)############
const front = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
const back = ["a", "á", "o", "ó", "u", "ú"];

function dative(word) {
  for (var i = word.length - 1; i >= 0; i--) {
    var last = word.charAt(i);
    if (front.includes(last)) {
      return word +"nek";
    } else if (back.includes(last)) {
      return word +"nak";
    } else {
      continue
    }
  }
}
