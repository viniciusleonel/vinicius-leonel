export default function capitalizarFrase(frase: string): string {
    // Verifica se a frase é vazia
    if (frase.length === 0) {
        return frase;
    }
    
    // Divide a frase em palavras
    const palavras = frase.split(" ");
    
    // Capitaliza cada palavra na frase
    const palavrasCapitalizadas = palavras.map((palavra) => {
        return capitalizarPalavra(palavra);
    });
    
    // Combina as palavras capitalizadas em uma frase novamente
    return palavrasCapitalizadas.join(" ");
}

function capitalizarPalavra(palavra: string): string {
    // Capitaliza a primeira letra e torna as outras minúsculas
    const primeiraLetraMaiuscula = palavra.charAt(0).toUpperCase();
    const restanteMinusculo = palavra.slice(1).toLowerCase();
    
    // Combina a primeira letra maiúscula com o resto da palavra em minúsculas
    return primeiraLetraMaiuscula + restanteMinusculo;
}