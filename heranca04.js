function Meuobjeto() {}
console.log(Meuobjeto.prototype)

const obj1 = new Meuobjeto
const obj2 = new Meuobjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(Meuobjeto.prototype === obj1.__proto__)

Meuobjeto.prototype.nome = 'Anônimo'
Meuobjeto.prototype.falar = function () {
  console.log(`Bom dia Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'rafael'
obj2.falar ()

const obj3 = {}
obj3.__proto__ = Meuobjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumindo
console.log((new Meuobjeto).__proto__ === Meuobjeto.prototype)
console.log(Meuobjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)