function gravarDados() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("endereco", endereco);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);

    alert("Dados gravados com sucesso!");
}

function exibirDados() {
    const nome = localStorage.getItem("nome");
    const endereco = localStorage.getItem("endereco");
    const email = localStorage.getItem("email");
    const telefone = localStorage.getItem("telefone");

    document.getElementById("dadosExibidos").innerText = 
        `Nome: ${nome}\nEndereço: ${endereco}\nE-mail: ${email}\nTelefone: ${telefone}`;

    document.getElementById("enviarWhatsAppButton").style.display = "inline";
}

function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const mensagem = `Nome: ${nome}\nEndereço: ${endereco}\nE-mail: ${email}\nTelefone: ${telefone}`;

    const numeroTelefone = telefone.replace(/\D/g, "");

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, "_blank");
}