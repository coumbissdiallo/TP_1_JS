/*cela signifie; lorsque le contenu du document HTML a été complétement chargé et analysé ,
 alors exécute le code qui est à l'intérieur de la fontion.Cela permet que le Dom soit bien chargé*/
 document.addEventListener ("DOMContentLoaded",() => {

//on cible le formulaire
const form = document.getElementById("form")

//on cible la zone où afficher les cartes
const container = document.getElementById("container-card")

//on écoute l'élément "submit"
form.addEventListener("submit" ,function (e) {
    e.preventDefault(); // empeche l'envoi normal du formulaire

//recupération des valeurs des champs
const nameproduit = document.getElementById ("TextInput").value;
const prix = document.getElementById("prixInput").value;
const quant = document.getElementById("quantInput").value;
// recupération des checkbox
const electronique = document.getElementById("tronique").checked;
const alimentation = document.getElementById("alim").checked;
const electromenager =document.getElementById("elec").checked;

//condition
const categorie = [];//on crée un tableau vide qui va stockés les catégories 

//pour "push" sert à ajouter un ou plusieurs éléments à la fin d’un tableau
    if ( electronique) categorie.push ("Electronique");
    if ( alimentation) categorie.push ("Alimentation");
    if ( electromenager) categorie.push ("Electromenager");

//je crée une div qui aura la carte boostrap 
const card = document.createElement("div")
card.className ="card mb-3 p-3"; // cela permet de bien styliser la carte et "classname" pour appliquer plusieurs classes boostrap


//le contenu HTML de la carte avec les données
// ici on utilise innerHTML pour insérer dynamiquement le contenu html et remplacer le contenu de l'élément HTML ciblé
card.innerHTML = `
<div class="card" style="width: 18rem;">

<div class="card-body">

  <h2 class="card-title">Produit: ${nameproduit}</h2>

  <h2 class="card-title">Catégorie: ${categorie.join(", ")}

  <h2 class="card-title">Prix: ${prix}</h2>

  <h2 class="card-title">Quantité: ${quant}</h2>

  <a href="#" class="btn btn-outline-info" id="btn">Valider</a>
  <a href="#" class="btn btn-outline-warning" id="btn">Modif</a>
  <a href="#" class="btn btn-outline-danger" id="btn">Supprimer</a>

</div>

</div>

`;
//on ajoute la carte au conteneur dans HTML
container.appendChild(card);

//on réinitialise le formulaire
form.reset ();
// .join(", ") transforme le tableau en texte séparé par des virgules
})

// const bouton =document.querySelectorAll("#btn")
// bouton.addEventListener("click", function (e) {
//  e.preventDefault();
//       if () { 

//       }
    

// } 


 });





