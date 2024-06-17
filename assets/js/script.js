var nomInput = document.getElementById('nom');
var prenomInput = document.getElementById('Prenom');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var envoyerButton = document.querySelector('button[type="button"]'); 


function estSeulementLettres(chaine) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(chaine); 
}

function estValideEmail(email) {
  
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function validerFormulaire() {
    var nom = nomInput.value.trim();
    var prenom = prenomInput.value.trim();
    var email = emailInput.value.trim();

    if (nom === "") {
        alert("Veuillez entrer votre nom.");
        return false;
    } else if (!estSeulementLettres(nom)) {
        alert("Le nom ne doit contenir que des lettres.");
        return false;
    }
    if (prenom === "") {
        alert("Veuillez entrer votre prénom.");
        return false;
    } else if (!estSeulementLettres(prenom)) {
        alert("Le prénom ne doit contenir que des lettres.");
        return false;
    }
    if (email === "") {
        alert("Veuillez entrer votre adresse email.");
        return false;
    } else if (!estValideEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    alert("Formulaire soumis avec succès !");
    return true;
}
envoyerButton.addEventListener('click', function() {
    validerFormulaire();
});

