const maChaine = "I love coding";
console.log(maChaine, typeof maChaine);

const withJs = "with Javascript";

let message = maChaine + withJs;
console.log(message, typeof message);
// I love coding ! with Javascript. string

const year =  "2024"

message = message + " since " + year
// message += "since" + year
console.log(message, typeof message);

const prenom = "toto";
const age = 10;
const message2 = "Je m'appelle " + prenom + " et j'ai " + age + " ans. ";//syntaxe 1
console.log(message2, typeof message2);
const message3 = `Je m'appelle ${prenom} et j'ai ${age} ans.`;//template string  syntaxe2
console.log(message3, typeof message3);

const text = "How are doing today ?";
const myArray = text.split (" ");
console.log(myArray, typeof myArray);
console.log(text.length);


const visit = "Visit Microsoft";
const visitReplace = visit.replace ("Microsoft","W3Schools");
console.log(visitReplace,typeof visitReplace);

console.log(visit.toUpperCase());

console.log(visit [1]);


