let string = '30 дней JavaScript';
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.substring(0, 8));
console.log(string.substring(3));
console.log(string.includes('Script'));
console.log(string.split(''));
console.log(string.split(' '));
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

console.log(string.replace('JavaScript', 'Python'));
console.log(string.charAt(15));
console.log(string.charCodeAt(10));
console.log(string.indexOf('a'));
console.log(string.lastIndexOf('a'));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log(string.trim(' 30 Days Of JavaScript '));
console.log(string.startsWith('3'));
console.log(string.endsWith('t'));
console.log(string.matchAll('a'));
console.log('30 Days of '.concat('JavaScript'));
console.log(string.repeat(2));

//Упражнение: уровень 2
//1
console.log('There is no exercise better for the heart than reaching down and lifting people up.');
//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//3
console.log(typeof 10); 
//4
let num = "9.8";
let numFloat = +num;

console.log(numFloat);
//5
let string1 = "Python, jargon";

console.log(string1.includes("on")); 
//6
let string2 = "I hope this course is not full of jargon.";

console.log(string2.includes("jargon")); 
//7
const num1 = Math.floor(Math.random() * 101); 
console.log(num1);
//8
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  console.log(getRandomInt(50, 100));
//9
const num2 = Math.floor(Math.random() * 256); 
console.log(num2);
//10
let string3 = "JavaScript";
let firstLetter = string3[9];

console.log(firstLetter); 
//11
console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');
//12
let string4 = "You cannot end a sentence with because because because is a conjunction";

console.log(string4.substr(31, 15));

//Упражнения: уровень 3
//1
let string6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(string6.indexOf("Love"));
console.log(string6.indexOf("love"));
console.log(string6.lastIndexOf("love"));
//2
let string7 = "You cannot end a sentence with because because because is a conjunction";
console.log(string7.match("because"));
//3
 var sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
  sentence = sentence.replace(/['%/$/@/&/#/!;']/gi, '');
console.log(sentence);
//4
let txt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g)); 
console.log(5000+10000+15000);
