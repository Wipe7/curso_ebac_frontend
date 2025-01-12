// Adicionar evento ao botão de gerar senha
document.getElementById("botao-gerar").addEventListener("click", function () {
    // Recupera os valores das opções
    const comprimentoSenha = document.getElementById("comprimento-senha").value;
    const incluirNumeros = document.getElementById("incluir-numeros").checked;
    const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
    const incluirEspeciais = document.getElementById("incluir-especiais").checked;

    // Gera a senha com base nas opções
    const senhaGerada = gerarSenha(comprimentoSenha, incluirNumeros, incluirMaiusculas, incluirEspeciais);

    // Exibe a senha gerada
    document.getElementById("senha-gerada").textContent = senhaGerada || "Selecione pelo menos uma opção.";
});

// Função para gerar a senha
function gerarSenha(comprimento, incluirNumeros, incluirMaiusculas, incluirEspeciais) {
    // Define os caracteres disponíveis
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirEspeciais) caracteres += "!@#$%^&*()_+";

    // Verifica se há caracteres disponíveis
    if (!caracteres) return null;


    // Alternar o layout do container entre coluna e linha
document.getElementById("botao-gerar").addEventListener("click", function () {
    const container = document.querySelector(".container");
    container.classList.toggle("linha"); // Alterna a classe "linha" para alinhar em linha
});

    // Gera a senha
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}
