//boolean
let estaPago: boolean = true;
console.log(estaPago);

//number
let idade: number = 20;
let valor: number = 29.99;

if(idade >= 18){
    console.log(`Sua idade é ${idade} anos, você é maior de idade, portanto pode entrar na festa.`);
}

//string
let empresa: string = 'Itaú Unibanco';
console.log(`Vc trabalha na empresa ${empresa}?`);

//arrays
let notas: number[] = [8, 10, 11, 12, 13, 14, 15, 16, 17];

//tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Enum
enum Cor {Verde, Amarelo, Azul, Branco}
let corFundo: Cor = Cor.Verde;
console.log(`Sua cor preferida é ${Cor[0]}`);

//Any
let qualquerValor: any = 4;
qualquerValor = 'Agora é uma string';
qualquerValor = true;

//void
function alerta(): void {
    //alerta...
}

//null e underfined -> Não faz muito sentido!
let u: any = 'indefinido';
let n: null = null;

//null e underfined -> São subtipos dos outros tipos
empresa = null;
console.log(`Você trabalha ${empresa}`);