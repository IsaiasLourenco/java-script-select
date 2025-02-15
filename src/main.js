document.getElementById("option").addEventListener("change", function() {
    let selectedOption = this.value; // Captura a opção selecionada
    hello("Isaias", selectedOption); // Chama a função com a opção correta
});

function hello(name, type) {
    let welcome = `Bem-vindo ${name}!`;
    write(welcome, type);
}

function write(phrase, type) {
    let outputElement = document.getElementById("output");

    if (type !== "console") {
        console.clear(); // Limpa o console se a opção não for "console"
    }

    switch(type) {
        case "console":
            console.log(phrase);
            outputElement.innerText = ""; // Apaga o texto da página
            alert("Aperte F12 para ver sua mensagem na saída do console ao lado!");
            break;
        case "alert":
            alert(phrase);
            outputElement.innerText = ""; // Apaga o texto da página
            break;
        case "page":
            outputElement.innerText = phrase; // Exibe na página
            break;
        default:
            console.warn("Nenhuma opção válida selecionada.");
    }
}