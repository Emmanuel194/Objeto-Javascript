// pessoa APONTA -> 123 ->{...} 
const pessoa = { nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa <- 456 {...} -> {...}
// pessoa = { nome: 'ana'}

Object.freeze(pessoa) //congela o objeto e nao permite alterar ou mudar.

pessoa.nome = 'maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'joao'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)