function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se o usuário e a senha correspondem
    if (username === "soso" && password === "amorzinho") {
        window.location.href = "pergunta.html"; // Redireciona para a página de pergunta
    } else {
        alert("Erro: Usuário ou senha incorretos!");
    }
}