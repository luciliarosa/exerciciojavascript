let numero1 = Number(prompt('Digite o primeiro n�mero: '));
let numero2 = Number(prompt('Digite o segundo n�mero: '));
let resultado = 0;

while (numero1 == null){
	prompt('Digite o primeiro n�mero: ');
	
}

resultado = numero1 + numero2;

if (resultado >= 100) {
	console.log(`O resultado final � ${resultado}`);
}

else if (resultado < 100) {
	alert(`O resultado � menor que 100`);

}


