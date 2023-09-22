function showMessage() {
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Exibir a imagem quando o usuário clicar em "Sim"
    var zapImage = document.getElementById("zap-image");
    zapImage.style.display = "block";

    // Ocultar os botões
    var yesButton = document.getElementById("yes-button");
    yesButton.style.display = "none";
    var noButton = document.getElementById("no-button");
    noButton.style.display = "none";
}

function hideNoButton() {
    // Ocultar o botão "Não" e o texto de erro
    var noButton = document.getElementById("no-button");
    noButton.style.display = "none";

    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
}