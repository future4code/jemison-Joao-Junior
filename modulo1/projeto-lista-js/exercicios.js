// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt ("Qual a sua altura?")
  let largura = prompt ("Qual a largura ?")
  console.log (altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt ("Qual ano atual ?")
let anoDeNascimento = prompt ("Em que voce nasceu")
let resultado = (anoAtual - anoDeNascimento )
console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let resultado = peso / (altura* altura) 
  return resultado

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt ("nome")
  let idade = prompt ("idade")
  let email = prompt ("email")

  let info =`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log (info)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 let cor1 = prompt ("Azul")
 let cor2 = prompt ("Amarelo")
 let cor3 = prompt ("Vermelho")
console.log ([cor1,cor2,cor3]) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1 >= string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array [0] 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array[array.length - 1])
} 

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let valor1 = array [0]
let valor2 = (array[array.length - 1])
let troca = valor1
valor1 = valor2
valor2 = troca
array[0] = valor1
array[array.length-1] = valor2
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let var1 = string1.toUpperCase()
  let var2 = string2.toUpperCase()
 return var1 === var2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number (prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt('Digite seu ano de nascimentoo'))
  let anoDeEmissaoRg = Number (prompt('Digite o ano da sua emissção'))

  let idade = anoAtual - anoDeNascimento
  let idadeDoRg = anoAtual - anoDeEmissaoRg

  let checar = idade <= 20 && idadeDoRg >= 5 ||
  idade <= 50 && idadeDoRg >= 10 || idade > 50 &&
  idadeDoRg >= 15

  console.log(checar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let bissexto = (ano === 2000)  
  let bissexto2 = (ano > 2001)
  let teste = ( bissexto || bissexto2)
  return teste

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

 let maior18 = prompt ("Tem mais de 18 anos?")
 let ensinoMedio = prompt ("Tem ensino medio completo?")
 let horario = prompt ("Tem disponibilidade de horario?")

 let maior = (maior18 === "sim" )
 let medioC = (ensinoMedio === "sim")
 let hora = (horario === "sim")
 
 let resultado = ( maior && medioC && hora)
  
 console.log (resultado)

}