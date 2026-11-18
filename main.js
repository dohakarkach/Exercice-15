
const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 },
  { id: 4, nom: 'Casque', prix: 600, stock: 0 }
];

let reponse = document.getElementById("reponse");
let buttons = document.querySelectorAll(".q");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
let numeroQuestion = btn.dataset.question;
if (numeroQuestion === "1") {
let resultat = produits.find(produit => produit.id === 3);
 reponse.textContent = resultat.nom;
        }
else if (numeroQuestion === "2") {
    let resultat = produits.filter(produit => produit.stock === 0);
            reponse.textContent = resultat.map(produit => produit.nom).join(", ");
        }
else if (numeroQuestion === "3") {
let resultat = produits.some(produit => produit.stock === 0);
reponse.textContent = resultat ? "Oui, il existe au moins un produit en rupture." : "Non, aucun produit en rupture.";
}
else if (numeroQuestion === "4") {
let resultat = produits.every(produit => produit.prix < 2000);
reponse.textContent = resultat ? "Oui, tous les produits coûtent moins de 2000 DH." : "Non, certains produits coûtent 2000 DH ou plus.";
}
else if (numeroQuestion === "5") {
let resultat = produits.find(produit => produit.id === 10);
if (resultat) {
reponse.textContent = resultat.nom;
} else {
reponse.textContent = "Aucun produit trouvé.";
}
}
});
});
// La méthode find() permet de rechercher et de retourner le premier élément d'un tableau qui satisfait une condition. Si aucun élément ne correspond, elle retourne undefined
// La méthode filter() permet de créer et de retourner un nouveau tableau contenant tous les éléments qui satisfont une condition. Si aucun élément ne correspond, elle retourne un tableau vide []
// La méthode every() permet de vérifier si tous les éléments d'un tableau satisfont une condition. Elle retourne true si tous les éléments respectent la condition, sinon false
// La méthode some() permet de vérifier si au moins un élément d'un tableau satisfait une condition. Elle retourne true si au moins un élément correspond, sinon false