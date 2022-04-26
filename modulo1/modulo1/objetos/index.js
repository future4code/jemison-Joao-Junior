// 1 > Exercício de interpretção

/*Será impresso Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }*/


/*2 Exercício de interpretação

será impresso { nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }*/


/* 3 Exercícioa de interpretação

sera inpresso false. (undefined porque não tem nenhum valor atribuido ao comando console.log(minhaFuncao(pessoa, "altura")) dentro do obejeto*/


// Exercício de escrita 1


 //1.a
const pessoa = {
    nome: "Junior", 
    apelidos: ["Juninho", "Jota", "Ju"]
 }
 
 const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
console.log (frase)*/

//1.b

/*const novaPessoa = {
 
 ...pessoa,

 apelidos: ["Juju", "Jr", "Ninho"  ]

}

const novaFrase = `Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`
console.log (novaFrase)

// 2 Exercício de escrita



const pessoa1 = {
	nome: "Junior" , 

  idade: 22, 
	profissao: "AlunoLBN",
 
}

console.log (` [ ${(pessoa1.nome)} , ${(pessoa1.nome.length)}, ${pessoa1.idade}, ${(pessoa1.profissao)}, ${pessoa1.profissao.length} ] `)

const pessoa2 = {
	nome: "Matheus" , 
    idade: 20, 
	profissao: "Não faz nada!",

}

console.log (` [ ${(pessoa2.nome)} , ${(pessoa2.nome.length)}, ${pessoa2.idade}, ${(pessoa2.profissao)}, ${pessoa2.profissao.length} ] `)


// 3 Exercício de escrita



const fruta1 = {

   nome: "banana",
   disponibilidade : true 
} 

const fruta2 = {

    nome: "goiaba",
    disponibilidade : false 
 } 


 const fruta3 = {

    nome: "uva",
    disponibilidade : true 
 } 

function obj (fruta1) {

    return fruta1
   
}
let carrinho = [obj(fruta1)]
 carrinho.push(fruta2,fruta3)
console.log (carrinho)