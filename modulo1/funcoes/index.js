console.log ("Olá,mundo!")

//Exercício de interpretação = 1

// 1.a > imprime (10) e (50), pois os dois number estão multiplicados por (5);
// 1.b > Não aparecia nada no console, pois é preciso de um (console.log) pra algo ser imprimido no console.


 //2.a > A função pede a o usuruario uma resposta que vai retornar (true ou false), porque o (includes) dar essa função ao prompt.

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {

	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// 2.b > criaria um (console.log) para cada saída (Igual esta escrito abaixo) 
console.log("Eu gosto de cenoura.")
console.log("CENOURA é bom pra vista.")
console.log("cenoura cresce na terra.")


// Exercício de escrita 1

// 1.a > 
function umaFrase(){
console.log ("Eu sou Junior, tenho 22 , moro em Olho D`água e sou estudande ")
}
 umaFrase()


 //1.b >
 function sobremim (nome, idade,cidade,profissao ) {
 console.log  (`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissao}`)
 }
sobremim("junior",22,"olhodagua" , "estudante")*/


 //2.a 

 >function somaDeDois(num1, num2){
const soma = num1 + num2 
console.log ( soma )
return soma
}
somaDeDois (7 , 10)
somaDeDois ( 25 , 300)

 //2.b 
>function maiorQue(num1, num2){
const comparacao = num1 > num2 
console.log ( comparacao )
return comparacao
}
maiorQue (10, 35)


 //2.c 
  function impaOuPar( num1){

		let par = ( num1 % 2 == 0)
		console.log ( par )
		return par
		}
		impaOuPar (100 )


  //2.d >
  function frase(string){
  let frase = string
  return frase
 }		
frase ("O mundo é livre para todos")
const tamanho = "O mundo é livre para todos"
console.log ( tamanho.length )
console.log ( tamanho.toLocaleUpperCase() )

//3.a
function adicao(num1,num2){

 let adicao = num1 + num2
 
console.log (`Adição ; ${Number(adicao)} `)
 return adicao
}
adicao (30 , 20)

//3.b
function diferenca (num1 , num2){

let diferenca = num1 - num2
console.log (`resto ; ${Number(diferenca)}`)
return diferenca
}
diferenca (30 , 20)

//3.c
function multiplicados (num1 , num2){

	let multiplicados = num1 * num2
	console.log (`multiplicção ; ${Number(multiplicados)}`)
	return multiplicados
	}
	multiplicados (30 , 20)

	//3.d
	function dividir (num1 , num2){

		let dividir = num1 - num2
		console.log (`Divisão ; ${Number(dividir)}`)
		return dividir
		}
		dividir (30 , 20)
		


	


