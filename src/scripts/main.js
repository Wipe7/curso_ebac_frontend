// Adicionar evento ao botão de gerar senha
document.getElementById("botao-gerar").addEventListener("click", function () {
    const comprimentoSenha = document.getElementById("comprimento-senha").value;
    const incluirNumeros = document.getElementById("incluir-numeros").checked;
    const incluirMaiusculas = document.getElementById("incluir-maiusculas").checked;
    const incluirEspeciais = document.getElementById("incluir-especiais").checked;

    // Limita o comprimento da senha ao máximo de 12
    const comprimentoValido = Math.min(comprimentoSenha, 12);

    // Gera a senha com base nas opções
    const senhaGerada = gerarSenha(comprimentoValido, incluirNumeros, incluirMaiusculas, incluirEspeciais);

    // Exibe a senha gerada ou uma mensagem de erro
    document.getElementById("senha-gerada").textContent = senhaGerada || "Selecione pelo menos uma opção.";
});

// Função para gerar a senha
function gerarSenha(comprimento, incluirNumeros, incluirMaiusculas, incluirEspeciais) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirEspeciais) caracteres += "!@#$%^&*()_+";

    // Verifica se há caracteres disponíveis
    if (!caracteres) return null;

    // Gera a senha
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

