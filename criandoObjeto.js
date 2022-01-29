// criar objeto usando notação literal
const obj1 = {} // abrindo e fechando colchetes
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object // sem os colchetes so usando o new object
console.log(obj2)

// Função construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Nootbook', 2989.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function CriarFuncionario(nome, salariobase, faltas) {
    return {
      nome,
      salariobase,
      faltas,
      getsalario() {
        return (salariobase / 30) * (30 - faltas)
      }
    }
}

const f1 = CriarFuncionario('joao', 7980, 4)
const f2 = CriarFuncionario('maria', 11400, 1)
console.log(f1.getsalario(), f2.getsalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// UMa Função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)
