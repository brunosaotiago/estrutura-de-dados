const pilha = [10, 20, 30];
function desempilhar() {
    if (estaVazia()) {
        return null;
    }
    return pilha.pop();
}
desempilhar();
console.log("Tamanho da lista após desempilhar:", tamanho());
