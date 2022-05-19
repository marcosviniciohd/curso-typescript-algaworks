//boolean
var estaPago = true;
console.log(estaPago);
//number
var idade = 20;
var valor = 29.99;
if (idade >= 18) {
    console.log("Sua idade \u00E9 ".concat(idade, " anos, voc\u00EA \u00E9 maior de idade, portanto pode entrar na festa."));
}
//string
var empresa = 'Itaú Unibanco';
console.log("Vc trabalha na empresa ".concat(empresa, "?"));
//arrays
var notas = [8, 10, 11, 12, 13, 14, 15, 16, 17];
//tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
var corFundo = Cor.Verde;
console.log("Sua cor preferida \u00E9 ".concat(Cor[0]));
//Any
var qualquerValor = 4;
qualquerValor = 'Agora é uma string';
qualquerValor = true;
//void
function alerta() {
    //alerta...
}
//null e underfined -> Não faz muito sentido!
var u = 'indefinido';
var n = null;
//null e underfined -> São subtipos dos outros tipos
empresa = null;
console.log(empresa);
