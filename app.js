let entier = document.getElementById("entier");
let flottant = document.getElementById("flottant");
let nonNumerique = document.getElementById("non-numerique");
let random = document.getElementById("random");
let trunc = document.getElementById("trunc");
let replace = document.getElementById("replace");

let operande = 10;

// 1
entier.innerText = operande * parseInt(entier.innerText);

//2
flottant.innerHTML = operande * parseFloat(flottant.innerHTML);
flottant.innerHTML = parseInt(entier.innerHTML) + parseFloat(flottant.innerHTML);

//3
if (isNaN(nonNumerique)) {
    console.log("nonNumerique n'est pas un nombre");
    nonNumerique.innerHTML = 0;
}

//4
for (let i = 0; i === 0; i++) {
    random = Math.random();
    console.log(random);
}

//5
trunc.innerHTML = Math.trunc(trunc.innerHTML);

//6
replace.innerHTML = replace.innerHTML.replace('Hello world !'  , 'Coursan Corentin');