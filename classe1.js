class Lancamento {
  constructor(nome = 'generico', valor = 0) {
    this.nome = nome
  this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.Lancamento = []
  }

  addLancamento(...Lancamento) {
    Lancamento.forEach(l => this.Lancamento.push(l))
  }


sumario() {
  let valorConsolidado = 0
  this.Lancamento.forEach(l =>{
    valorConsolidado += l.valor
  }) 
  return valorConsolidado

}

}

const salario = new Lancamento('salario', 45000)
const contadeLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contadeLuz)
console.log(contas.sumario())