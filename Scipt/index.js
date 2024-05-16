

//questão 1
function calculadora(){
    var sinal = prompt("qual o tipo de calculo");
    let num1 = parseFloat(prompt("digite o primeiro numero"));
    let num2 = parseFloat(prompt("digite o segundo numero"));
    
    
    switch (sinal){
        case "soma":
            soma(num1,num2);
            break;
        case "subtração":
            sub(num1,num2);
            break;
        case "divisão":
            div(num1,num2);
            break;
        case "multiplicação":
            multi(num1,num2);
            break;
    }
}

function soma(num1,num2){
    let resultado = num1 + num2;
    document.querySelector("#resultado").innerHTML = resultado;
}

function sub(num1,num2){
    let resultado = num1 -num2;
    document.querySelector("#resultado").innerHTML = resultado;
}

function multi(num1,num2){
    let resultado = num1*num2;
    document.querySelector("#resultado").innerHTML = resultado;
}

function div(num1,num2){
    let resultado = num1/num2;
    document.querySelector("#resultado").innerHTML = resultado;
}

//questão 2
function calc(){
    let sb = parseFloat(prompt("qual o salário bruto do funcionario?"));
    let sl = sb - ir(sb) - fgts(sb) - inss(sb);
    document.querySelector("#resultado1").innerHTML = "salário bruto: " + sb + "<br>salário liquido: " + sl;
}

function ir(sb){
    if (sb < 2800){
        let imposto = sb*0;
        return imposto;
    }
    else if(sb >= 2800 && sb < 5000){
        let imposto = sb*0.15;
        return imposto;
    }
    else if (sb >= 5000){
        let imposto = sb*0.27;
        return imposto;
    }
    else{
        document.querySelector("#resultado1").innerHTML = "valor inválido"; 
    }
}

function fgts(sb){
    let taxa = sb*0.08;
    return taxa;
}
function inss(sb){
    let valor = sb*0.20;
    return valor;
}

//questão 3

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let candidato5 = 0;
let adm = true;
function votacao(adm){
adm = true;
while (adm == true){
    let voto = parseInt(prompt("qual o seu voto?\n"+
                                    "candidato 1: digite 1\n"+
                                    "candidato 2: digite 2\n"+
                                    "candidato 3: digite 3\n"+
                                    "candidato 4: digite 4\n"+
                                    "candidato 5: digite 5\n"+
                                    "código de encerramento para o adm: 558"));
    switch(voto){
        case 1:
            candidato1++;
            break;
        case 2:
            candidato2++;
            break;
        case 3:
            candidato3++;
            break;
        case 4:
            candidato4++;
            break;
        case 5:
            candidato5++;
            break;
        case 558:
            adm = false;
            administrador(adm);
            break;
        default:
            alert("voto inválido");
            break;
    }
}
}

function administrador(adm){
    adm = false;

    document.querySelector("#votos").innerHTML = "<p>votos do candidato 1: " + candidato1 + "</p>" + "<p>votos do candidato 2: " + candidato2 + "</p>" + "<p>votos do candidato 3 : " + candidato3 + "</p>" + "<p>votos do candidato 4: " + candidato4 + "</p>" + "<p>votos do candidato 5: " + candidato5 + "</p>";

    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    candidato4 = 0;
    candidato5 = 0;
}