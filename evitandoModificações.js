// Object.preventExtensions -- vai prevenir que tenha aumento de atributos no objeto

const produto = Object.preventExtensions({
  nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('extensivel', Object.isExtensible(produto))
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -- SEAL DE SELAR.

const pessoa = { nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freezee = selado + valores constantes

