const tab = ["Pierre", "Paul", "Jacques"];
console.log(tab, typeof tab);
console.log(tab[0], typeof tab );//Pierre
console.log(tab[1], typeof tab );//Paul
console.log(tab[2], typeof tab );//Jacques
// console.log(tab[3]);//undefined car ont commence a compter à partir de 0 (pierre),1 (paul),2(jacques)

console.log(tab.length);

console.log("Tout va bien");

tab.unshift("Guy");//La méthode unshift() ajoute de nouveaux éléments au début d'un tableau
console.log(tab, typeof tab);
tab.push ("Joseph");//ajoute un nouvel élément à un tableau
console.log(tab, typeof tab);

tab.pop ();//La méthode pop() supprime le dernier élément d'un tableau.
console.log(tab, typeof tab);

tab.shift()//supprime le premier élément d'un tableau (et "décale" les autres éléments vers la gauche) :
console.log(tab, typeof tab);

// delete tab [0];
// console.log(tab, typeof tab);

const filles = ["Josiane", "Huguette"];
const toutLemonde = filles.concat(tab);
console.log(toutLemonde,typeof toutLemonde);
console.log(tab.toString());

const sliceTab = toutLemonde.slice(3);
console.log(sliceTab);
toutLemonde.slice(3)//Découpez une partie d'un tableau à partir de l'élément de tableau 1 

tab.splice(1, 0, "Guy", "Joseph");//ajoute un nom entre Pierre et Paul
console.log(tab);
