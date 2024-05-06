// Tableau des animaux possibles
var animaux = ["chien", "chat", "éléphant", "lion", "singe", "girafe", "tigre", "ours", "lapin", "cheval"];
// Sélection aléatoire d'un animal dans le tableau
var indexAleatoire = Math.floor(Math.random() * animaux.length);
var animalMystere = animaux[indexAleatoire];
// Nombre de tentatives autorisées
var tentativesRestantes = 3;

function checkGuess() {
  var supposition = document.getElementById("guessInput").value.toLowerCase();
  var result = document.getElementById("result");
  if (supposition === animalMystere) {
    result.textContent = "Félicitations ! Tu as deviné l'animal !";
  } else {
    tentativesRestantes--;
    if (tentativesRestantes > 0) {
      result.textContent = "Mauvaise supposition ! Il te reste " + tentativesRestantes + " tentatives.";
    } else {
      result.textContent = "Désolé, tu as épuisé toutes tes tentatives. L'animal correct était : " + animalMystere + ". Essaye encore !";
    }
  }
  document.getElementById("guessInput").value = "";
}