let numero1 = Number(prompt('Digite o primeiro número: '));
let numero2 = Number(prompt('Digite o segundo número: '));
let resultado = 0;

while (isNaN(numero1) || isNaN(numero2)) {
	if (isNaN(numero1)){
		numero1 = Number(prompt('Digite novamente o primeiro número: '));
	}
	if (isNaN(numero2)){
		numero2 = Number(prompt('Digite novamente o segundo número: '));
	}	
}

resultado = numero1 + numero2;

if (resultado >= 100) {
	console.log(`O resultado final é ${resultado}`);
}

else if (resultado < 100) {
	alert(`O resultado é menor que 100`);

}


