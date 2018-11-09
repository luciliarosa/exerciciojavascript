let valores = [];

for (let i = 0; i < 10; i ++){
    valores.push(Number(prompt('Digite um número:')));
}

for(const valor of valores){
    if (Math.floor (valor) % 2 == 0) {
        console.log(`${valor} é par`);
    }
    else {
        console.log(`${valor} é ímpar`);
    }
}