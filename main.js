const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 },
  { id: 4, nom: 'Casque', prix: 600, stock: 0 }
];
let reponse = document.getElementById("reponse");
let boutons = document.querySelectorAll(".q");  
boutons.forEach((button)=>{
    button.addEventListener("click",()=>{
let question = button.dataset.question;
if (question === "1") {
    let resultat = produits.find((p) => p.id === 3);

    reponse.textContent = resultat.nom;
    
}else if (question === "2") {
    let resultat = produits.filter((p) => p.stock === 0);

    let noms = "";

    resultat.forEach((p) => {
        noms += p.nom + ", ";
    });

    reponse.textContent = noms;
}else if (question === "3") {
    let resultat = produits.some((p) => p.stock === 0);

    reponse.textContent = resultat ? "Oui" : "Non";
}else if (question === "4") {
    let resultat = produits.every((p) => p.prix < 2000);

    reponse.textContent = resultat ? "Oui" : "Non";
}else if (question === "5") {
    let resultat = produits.find((p) => p.prix > 5000);

    if (resultat) {
        reponse.textContent = resultat.nom;
    } else {
        reponse.textContent = "Aucun produit trouvé.";
    }
}
    })
})