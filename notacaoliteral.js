const a = 1
const b = 2
const c = 3

const Obj1 = {a: a, b: b, c: c} // esse jeito era o modo antigo
const Obj2 = { a, b, c }
console.log(Obj1, Obj2)

const nomeAttr = 'nota'
const valorAttr = 7.67

const obj3 = {}
obj3 [nomeAttr] = valorAttr
console.log(obj3)

const Obj4 = {[nomeAttr]: valorAttr}
console.log(Obj4)

const obj5 = {
  funcao1: function() {
    // ...
  },
  fucao2() {
    // ..
  }
}

console.log(obj5)