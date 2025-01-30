"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var alunos = [{
  nome: "João",
  nota: 7.5,
  idade: 15,
  turma: "9ºA"
}, {
  nome: "Maria",
  nota: 5.8,
  idade: 14,
  turma: "9ºA"
}, {
  nome: "Pedro",
  nota: 9.0,
  idade: 15,
  turma: "9ºB"
}, {
  nome: "Ana",
  nota: 6.0,
  idade: 14,
  turma: "9ºA"
}, {
  nome: "Carlos",
  nota: 4.5,
  idade: 16,
  turma: "9ºC"
}, {
  nome: "Julia",
  nota: 8.7,
  idade: 14,
  turma: "9ºB"
}, {
  nome: "Lucas",
  nota: 3.2,
  idade: 15,
  turma: "9ºC"
}, {
  nome: "Beatriz",
  nota: 9.5,
  idade: 14,
  turma: "9ºB"
}, {
  nome: "Gabriel",
  nota: 6.8,
  idade: 15,
  turma: "9ºA"
}, {
  nome: "Sofia",
  nota: 5.9,
  idade: 14,
  turma: "9ºC"
}];
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Mostrar resultados de forma organizada
console.log("Lista detalhada dos aprovados:");
var aprovados = filtrarAprovados(alunos);
aprovados.forEach(function (aluno) {
  console.log("\n    Nome: ".concat(aluno.nome, "\n    Nota: ").concat(aluno.nota, "\n    Idade: ").concat(aluno.idade, " anos\n    Turma: ").concat(aluno.turma, "\n    ----------------------"));
});
console.log("\nEstatísticas por turma:");
var turmas = _toConsumableArray(new Set(alunos.map(function (aluno) {
  return aluno.turma;
})));
turmas.forEach(function (turma) {
  var alunosTurma = alunos.filter(function (aluno) {
    return aluno.turma === turma;
  });
  var aprovadosTurma = alunosTurma.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  console.log("\n    Turma: ".concat(turma, "\n    Total de alunos: ").concat(alunosTurma.length, "\n    Aprovados: ").concat(aprovadosTurma.length, "\n    ----------------------"));
});
console.log("\nEstatísticas gerais:");
console.log("Total de alunos: ".concat(alunos.length));
console.log("Total de aprovados: ".concat(aprovados.length));
console.log("M\xE9dia de idade dos aprovados: ".concat((aprovados.reduce(function (sum, aluno) {
  return sum + aluno.idade;
}, 0) / aprovados.length).toFixed(1), " anos"));