/*cela signifie; lorsque le contenu du document HTML a été complétement chargé et analysé ,
 alors exécute le code qui est à l'intérieur de la fontion.Cela permet que le Dom soit bien chargé*/
 document.addEventListener("DOMContentLoaded", () => {
  const nameproduit = document.getElementById("TextInput");
  const prix = document.getElementById("prixInput");
  const quant = document.getElementById("quantInput");
  const categorie = document.querySelector("#categorie");
  const produits = document.getElementById("listesProduits");
  const btnajout = document.getElementById("bouton");

  const inputs = [nameproduit, categorie, prix, quant];

  // Ajout des écouteurs "input" AU CHARGEMENT en vert
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
      }
    });
  });

  btnajout.addEventListener("click", function (e) {
    e.preventDefault();

    let isValid = true;

    // 🔍 Vérifie les champs à chaque clic
    inputs.forEach(input => {
      input.classList.remove("is-invalid", "is-valid");
      if (input.value.trim() === "") {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.add("is-valid");
      }
    });

    if (!isValid) return;

    let mesproduits = {
      Nom: nameproduit.value,
      Categorie: categorie.value,
      Prix: prix.value,
      Quantite: quant.value,
    };

    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.style.width = "18rem";

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Produit: <span class="nom">${mesproduits.Nom}</span></h5>
        <p class="card-text">Catégorie: <span class="categorie">${mesproduits.Categorie}</span></p>
        <p class="card-text">Prix: <span class="prix">${mesproduits.Prix}</span></p>
        <p class="card-text">Quantité: <span class="quantite">${mesproduits.Quantite}</span></p>
        <i class="bi bi-plus-square-fill valider w-100 text-success"></i>
        <i class="bi bi-pencil-fill text-primary modifier w-100"></i>
        <i class="bi bi-trash3-fill supprimer w-100 text-danger"></i>
      </div>
    `;

    produits.appendChild(card);

    // Réinitialiser les champs
    nameproduit.value = "";
    categorie.value = "";
    prix.value = "";
    quant.value = "";

    // Supprimer les classes de validation après ajout
    inputs.forEach(input => {
      input.classList.remove("is-invalid", "is-valid");
    });

    // Événements sur les boutons de la carte
    const btnValider = card.querySelector(".valider");
    const btnModifier = card.querySelector(".modifier");
    const btnSupprimer = card.querySelector(".supprimer");
    const spanQuantite = card.querySelector(".quantite");

    btnValider.addEventListener("click", (e) => {
      e.preventDefault();
      let q = parseInt(spanQuantite.textContent);
      if (q > 1) {
        q--;
        spanQuantite.textContent = q;
      } else {
        alert("La quantité est déjà à 1 ou moins.");
      }
    });

    btnModifier.addEventListener("click", (e) => {
      e.preventDefault();
      nameproduit.value = card.querySelector(".nom").textContent;
      categorie.value = card.querySelector(".categorie").textContent;
      prix.value = card.querySelector(".prix").textContent;
      quant.value = card.querySelector(".quantite").textContent;
      produits.removeChild(card);
    });

    btnSupprimer.addEventListener("click", (e) => {
      e.preventDefault();
      produits.removeChild(card);
    });
  });
});
