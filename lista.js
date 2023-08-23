const lista = [10, 20, 30];

function remover(elemento) {
    const indice = lista.indexOf(elemento);
    if (indice !== -1) {
        lista.splice(indice, 1);
        return true;
    } else {
        return false; 
    }
}
remover(30);
console.log(lista);
function tamanho() {
    return lista.length
}
console.log("Tamanho da lista:", tamanho());

function estaVazia() {
    return lista.length === 0
}
console.log("lista está vazia?", estaVazia());
