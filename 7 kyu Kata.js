
//############Mirror, mirror, on the wall...############
function mirror(data) {
  if (typeof data !== 'undefined' && data.length > 1) {
    var firstList = [...data];
    var secondList= [...data];
    firstList.sort(function(a, b){return a-b});
    secondList.sort(function(a, b){return b-a});
    firstList.pop();
    var thirdList = firstList.concat(secondList);
    return thirdList;
  } else {
    return data
  }
}
//############Stones on the Table############
function solve(stones) {
  var removedStones = 0;
  var Arr = stones.split("");
  for (i=0; i<Arr.length; i++) {
    if (Arr[i]==Arr[i+1]) {
      removedStones+=1;
    } 
  }
  return removedStones
};
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
