let valores = [];
let valoresOrdenados = [];

//while (i < 10){
//   valores.push(prompt('Digite um número:'));
//   i++; }

for (let i = 0; i < 10; i ++){
    valores.push(Number(prompt('Digite um número:')));
}

for (let i = 0; i < valores.length; i ++) {
    let valorAtual = valores[i];
    let j = i - 1;
    let indice = i;

        while(j >= 0) {
            let valorAnterior = valoresOrdenados[j];

            if (valorAtual < valorAnterior) {
                console.log(`valor anterior é: ${valorAnterior} no indice ${indice}`);
                indice = j;
            }
            j --;
        }
    

    valoresOrdenados.splice(indice, 0, valorAtual);
}

console.log(valores);
console.log(valoresOrdenados);
