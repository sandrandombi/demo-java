

//les functions ont souvent des paramètres
//tout les composants react avec des functions 


const nombre = 10;
multiplier(3, nombre);//3 est un argument
multiplier(10, 10);
//fonction toute simple
function foisDeux(){
    console.log(nombre * 2);
}
// foisDeux();

//function avec paramètre
function multiplier(a, n){// a est un paramètre de la function
    console.log(n * a);
    return n * a;
}


