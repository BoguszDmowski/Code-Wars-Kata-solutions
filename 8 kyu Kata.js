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
