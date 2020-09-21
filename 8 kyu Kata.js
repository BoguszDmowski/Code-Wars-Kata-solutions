//############Beginner Series #1 School Paperwork############
const paperwork = (n, m) => (n<0 || m<0) ? 0: (n*m)
//############Array plus array############
function arrayPlusArray(arr1, arr2) {
    var sum1 = arr1.reduce(function(a, b){
          return a + b;
      }, 0);
    var sum2 = arr2.reduce(function(a, b){
      return a + b;
      }, 0);
    return  sum1+sum2
  }
//############Abbreviate a Two Word Name############
const abbrevName=name=>name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.')
//############Total amount of points############
function points(games) {
    let score=0;
    for (i=9; i>=0; i--) {
      var current = games[i];
      var output = current.split('')
       if (output[0]>output[2]){
         score += 3;
       } else if (output[0]===output[2]) {
         score += 1;
       } 
    }
    return score;
  }
  
  ////much more elegant solution to similar problem that I found and adaped////
  // const points=games=>games.reduce((result,score)=>{
  //     return result += score[0]>score[2] ? 3 : score[0]===score[2] ? 1 : 0;
  //   },0)
//############Beginner Series #2 Clock############
const past = (h, m, s) => (3600000*h +60000*m +1000*s)
//############Expressions Matter############
function expressionMatter(a, b, c) {
  var v= a + b+ c;
  var w= a*(b+c);
  var x= a*b*c;
  var y= a+b*c;
  var z= (a+b)*c;
  
  return Math.max(v, w, x ,y ,z);
}
//############Take the Derivative############
const derive = (z, y) => (`${z*y}`+"x^"+`${y-1}`)
//############Find the first non-consecutive number############
function firstNonConsecutive (arr) {
  if (arr.length == 0 || arr.length == 1) {
    return null
  } else {
    let z= arr[0];
    for (i=0; i<=arr.length; i++) {
      if (arr[i] != z) {
        return arr[i];
      } else if ((i+1) == arr.length) {
        return null;
      } else {
        z++;
      }
    }
  }
}
//############Subtract the Sum############
function splitToDigit(x){
  var sum = [...x + ''].map(Number).reduce(function(a, b){
  return a + b;}, 0);
  return x-sum;
}
function getFruitName(id){  
  var name = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
    10: "pineapple",
    11: "cucumber",
    12: "pineapple",
    13: "cucumber",
    14: "orange",
    15: "grape",
    16: "orange",
    17: "grape",
    18: "apple",
    19: "grape",
    20: "cherry",
    21: "pear",
    22: "cherry",
    23: "pear",
    24: "kiwi",
    25: "banana",
    26: "kiwi",
    27: "apple",
    28: "melon",
    29: "banana",
    30: "melon",
    31: "pineapple",
    32: "melon",
    33: "pineapple",
    34: "cucumber",
    35: "orange",
    36: "apple",
    37: "orange",
    38: "grape",
    39: "orange",
    40: "grape",
    41: "cherry",
    42: "pear",
    43: "cherry",
    44: "pear",
    45: "apple",
    46: "pear",
    47: "kiwi",
    48: "banana",
    49: "kiwi",
    50: "banana",
    51: "melon",
    52: "pineapple",
    53: "melon",
    54: "apple",
    55: "cucumber",
    56: "pineapple",
    57: "cucumber",
    58: "orange",
    59: "cucumber",
    60: "orange",
    61: "grape",
    62: "cherry",
    63: "apple",
    64: "cherry",
    65: "pear",
    66: "cherry",
    67: "pear",
    68: "kiwi",
    69: "pear",
    70: "kiwi",
    71: "banana",
    72: "apple",
    73: "banana",
    74: "melon",
    75: "pineapple",
    76: "melon",
    77: "pineapple",
    78: "cucumber",
    79: "pineapple",
    80: "cucumber",
    81: "apple",
    82: "grape",
    83: "orange",
    84: "grape",
    85: "cherry",
    86: "grape",
    87: "cherry",
    88: "pear",
    89: "cherry",
    90: "apple",
    91: "kiwi",
    92: "banana",
    93: "kiwi",
    94: "banana",
    95: "melon",
    96: "banana",
    97: "melon",
    98: "pineapple",
    99: "apple",
    100: "pineapple",
  };
  return name[id];
}

function SubtractSum(n){
  var s = splitToDigit(n)
  for (i=0; i<10000; i++) {
    if (s<=100) {
      return getFruitName(s);
      break;
    } else {
      s = splitToDigit(s);
    }
  }
}
//############Get Planet Name By ID############
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      return 'Mercury';
      break;
    case 2:
      return 'Venus';
      break;
    case 3:
      return 'Earth';
      break;
    case 4:
      return 'Mars';
      break;
    case 5:
      return 'Jupiter';
      break;
    case 6:
      return 'Saturn';
      break;
    case 7:
      return 'Uranus';
      break;
    case 8:
      return 'Neptune';
      break;
  }
  
  return name;
}
//############Holiday VI - Shark Pontoon############
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if  (dolphin) {
    sharkSpeed /=2;
  };
  if (pontoonDistance/youSpeed < sharkDistance/sharkSpeed) {
    return "Alive!" 
  } else {
    return "Shark Bait!"
  }
}
//############Smallest unused ID############
const nextId = ids => {
  let unique = [...new Set(ids)]; 
  unique.sort((x, y) => x - y);
  for (let i = 0; i <= unique.length; i++) {
    if (i != unique[i]) {
      return i;
    } else continue
  }
}
//############Welcome!############
function greet(language) {
  var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
//looking by values is harder. Here is the solution for value searching.  
//  if (Object.values(database).indexOf(language)> -1) {
    if (database.hasOwnProperty(language)) {
    return database[language] 
  } else {
    return database.english;
  }
}
//############N-th Power############
//Short version
const index = (array, n) => (n>=array.length) ? -1 : Math.pow(array[n], n)
//############Function 1 - hello world############
const greet = () => "hello world!"// Write a function "greet" that returns "hello world!"
//############Grasshopper - Create the rooms############
var rooms = {
  firstRoom:{name:"bathroom", description:"shower", completed:"True"},
  secondRoom:{name:"bedroom", description:"sleep", completed:"True"},
  thirdRoom3:{name:"livingroom", description:"read", completed:"True"}
 }
//############Holiday VIII - Duty Free############
function dutyFree(normPrice, discount, hol){
  var gain = normPrice*0.01*discount;
  return Math.floor(hol/gain);
}
//############L1: Bartender, drinks!############
function getDrinkByProfession(param) {
  var prof = param.toLowerCase();
  if (prof=="jabroni"){
      return "Patron Tequila"
    } else if  (prof=="school counselor"){
      return "Anything with Alcohol"
    } else if  (prof=="programmer"){
      return "Hipster Craft Beer"
    } else if  (prof=="bike gang member"){
      return "Moonshine" 
    } else if  (prof=="politician"){
      return "Your tax dollars" 
    } else if  (prof=="rapper"){
      return "Cristal" 
    } else {
      return "Beer"
    }
}
//Also works using "switch" instruction
//############Quarter of the year############
const quarterOf = (month) => (month <= 3) ? 1 : (month <= 6) ? 2 :(month <= 9) ? 3 : 4;
//############Find Multiples of a Number############
function findMultiples(integer, limit) {
    var outcome = [];
    for (i=1; i*integer<=limit; i++) {
      outcome.push(i*integer);
    }
    return outcome
  }
//############Check the exam############
function checkExam(array1, array2) {
    var score = 0;
    for (i = 0; i < array1.length; i++) {
      if (array2[i] == "") { 
        continue; 
      } else if  (array1[i]!=array2[i]) {
        score--;
      } else {
        score +=4 
      }
    }
    if (score>0){
        return score 
    } else{
        return 0
    }
}
//############Is n divisible by x and y?############ 
// Long version
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true
  } else {
    return false
  }
}
// Short version
const isDivisible = (n, x, y) => (n % x == 0 && n % y == 0) ? true : false;

//############The falling speed of petals############
// LONG VERSION:
function sakuraFall(v) {
  if (v<=0) {
    return 0
  } else {
    return 400/v
  }
}
// SHORT VERSION
const sakuraFall = (v) => (v<=0) ? 0: 400/v
//############Coefficients of the Quadratic Equation############
function quadratic(x1, x2){
    var result= [1];
    result.push(-(x1+x2), x1*x2);
    return result
  }
//############Short Long Short############
function solution(a, b){
    var result = ""
    if (a.length <b. length) {
      result += a + b + a
    } else {
      result += b + a + b
    }
    return result
  }
//############Fake Binary############
function fakeBin(x){
    var result = ""
    for (i=0; i<x.length; i++)
      if (x[i]<5) {
        result += 0
      } else {
        result += 1
      }
    return result
  }
//############Keep Hydrated!############
function litres(time) {
    var t = Math.floor(time);
    return Math.floor(t/2);
  }
//############String repeat############
function repeatStr (n, s) {
    var result = ""
    for (i=0; i <n; i++) {
      result += s;
    }
    return result;
  }
//############Parse float############
function parseF(s) {
    var inputParsed = parseFloat(s);
    if (isNaN(inputParsed)) {
      return null;
    } else {
      return inputParsed
    }
  }  
//############Grasshopper - Messi Goals############
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5

var totalGoals = Number(laLigaGoals) + Number(championsLeagueGoals) + Number(copaDelReyGoals)
//############Area or Perimeter############
const areaOrPerimeter = function(l , w) {
    if (l!=w) {
      return 2 * l + 2 * w;
    } else {
      return l*w
    }
  };
//############Can we divide it?############
function isDivideBy(number, a, b) {

    if ((number/a)%1==0 && (number/b)%1==0) {
      return true
    } else return false
  }
//############Capitalization and Mutability############
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
    
  }
//############Grasshopper - Debug############
function weatherInfo (temp) {
    function convertToCelsius (t) {
    var celsius = (t - 32) * (5/9)
    return celsius
  }
    
    var c = convertToCelsius(temp)
    if (c <= 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
//############Grasshopper - Debug sayHello############
function sayHello(name) {
    return `Hello, ${name}`
  }
//############Hello, Name or World!############
function hello(name) {

    var value = name;
    if (!name || value.length == 0) {
      return "Hello, World!"
    } else {
      name.toLowerCase();
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
  }
//############Beginner Series #4 Cockroach############
function cockroachSpeed(s) {
    return Math.floor(s/3.6 *100)
  }
//############Returning Strings############
function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }
//############Grasshopper - Function syntax debugging############
function main (verb, noun) {
    return verb + noun
  }
//############Get the mean of an array############
function getAverage(marks){
    var total = 0;
    for(var i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    var avg = total / marks.length;
    return Math.floor(avg);
  }
//############Filling an array (part 1)############
function arr(x) {
    let newArray = [];
    var i;
    for (i = 0; i < x; i++) {
      newArray.push(i);
    }
    return newArray;
   }
  
//############Simple equation reversal############
function solve(eq){
  
    return eq.split("").reverse().join("").replace(
  //just spliting and reversing the whole expresion. 
  //but numbers larger than single digits become invalid ex. 200 becomes 002    
      /(\d+)/g,$1=>{
  // here I need to single out all reversed numbers, hence need to use RegExp. 
  //I catch them with "(/d+)", do so for the whole expresion with "g" 
        return $1.split("").reverse().join("")
  //and then reverse them right where they are. 
      }
    )
    
  }
//############Multiply############
function multiply(a, b){
    let c = a * b;
    return c;
  }
