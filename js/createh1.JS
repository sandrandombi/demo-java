 const body = document.querySelector("body");// il n'y a q'une balise body
 

 //function createH1(titre){//titre est un paramètre de la fonction

 //const h1 = document.createElement("h1");
 //h1.textContent = titre;
//return h1;
//}
//  console.log(h1);

//  body.appendChild(createH1("titre"));//titre est un argument à la fonction
//  body.appendChild(createH1("titre1"));
//  body.appendChild(createH1("titre2"));
//  body.appendChild(createH1("titre3"));

//<script defer src= ou mettre script dans body
// ---------------------------------------------------------------


function mySection(titre, texte){
    const H1 = document.createElement("h1");
    H1.textContent = titre;
    const p = document.createElement("p");
    p.textContent = "texte";
    const section = document.createElement("section");
    section.appendChild(H1);
    section.appendChild(p);
return section;
}
const uneSection = mySection("Un titre", "Un paragraphe...");
body.appendChild(uneSection);
console.log(uneSection);