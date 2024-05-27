// écrire une fonction qui calcule le prix Ttc connaissant le prix httc
// Le prix ttc est ègal à ht + htva
// ex:    prix ht: 5€
    //    tva: 20% = 20/100 =0.2
    //    ttc = ht + h*tva = 1.2 * ht
    //     ht => ht * 1.2


const prixHT = 10;
const tauxTva = 1.2;

console.log(ttc(prixHT, tauxTva));

function ttc(prix, tva){        
        return prix * tva;

}
    
    