// script.js - TP 【entity-GitHub¦canonical_name=GitHub】 - Collaborateur 3 - Niveau OFPPT

var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");
var nom = inputs[0];
var email = inputs[1];
var password = inputs[2];

function afficherErreur(input, message) {
    var erreur = input.nextElementSibling;
    if (!erreur || erreur.tagName !== "DIV") {
        erreur = document.createElement("div");
        erreur.style.color = "red";
        erreur.style.fontSize = "13px";
        input.after(erreur);
    }
    erreur.textContent = message;
    input.style.border = "1px solid red";
}

function effacerErreur(input) {
    var erreur = input.nextElementSibling;
    if (erreur) {
        erreur.textContent = "";
    }
    input.style.border = "1px solid #ccc";
}

nom.addEventListener("input", function () {
    if (nom.value.length < 3) {
        afficherErreur(nom, "Veuillez entrer un nom d'au moins 3 caractères.");
    } else {
        effacerErreur(nom);
    }
});

email.addEventListener("input", function () {
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        afficherErreur(email, "Veuillez entrer une adresse email valide.");
    } else {
        effacerErreur(email);
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valide = true;

    if (nom.value.length < 3) {
        afficherErreur(nom, "Veuillez entrer un nom d'au moins 3 caractères.");
        valide = false;
    }
    if (email.value.indexOf("@") == -1) {
        afficherErreur(email, "Veuillez entrer une adresse email valide.");
        valide = false;
    }
    if (password.value.length < 6) {
        afficherErreur(password, "Le mot de passe doit avoir au moins 6 caractères.");
        valide = false;
    }

    if (valide) {
        alert("Inscription réussie !");
    }
});