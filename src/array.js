
const alunos = [
    { nome: "João", nota: 7.5, idade: 15, turma: "9ºA" },
    { nome: "Maria", nota: 5.8, idade: 14, turma: "9ºA" },
    { nome: "Pedro", nota: 9.0, idade: 15, turma: "9ºB" },
    { nome: "Ana", nota: 6.0, idade: 14, turma: "9ºA" }, 
    { nome: "Carlos", nota: 4.5, idade: 16, turma: "9ºC" },
    { nome: "Julia", nota: 8.7, idade: 14, turma: "9ºB" },
    { nome: "Lucas", nota: 3.2, idade: 15, turma: "9ºC" },
    { nome: "Beatriz", nota: 9.5, idade: 14, turma: "9ºB" },
    { nome: "Gabriel", nota: 6.8, idade: 15, turma: "9ºA" },
    { nome: "Sofia", nota: 5.9, idade: 14, turma: "9ºC" }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Mostrar resultados de forma organizada
console.log("Lista detalhada dos aprovados:");
const aprovados = filtrarAprovados(alunos);
aprovados.forEach(aluno => {
    console.log(`
    Nome: ${aluno.nome}
    Nota: ${aluno.nota}
    Idade: ${aluno.idade} anos
    Turma: ${aluno.turma}
    ----------------------`);
});


console.log("\nEstatísticas por turma:");
const turmas = [...new Set(alunos.map(aluno => aluno.turma))]; 

turmas.forEach(turma => {
    const alunosTurma = alunos.filter(aluno => aluno.turma === turma);
    const aprovadosTurma = alunosTurma.filter(aluno => aluno.nota >= 6);
    
    console.log(`
    Turma: ${turma}
    Total de alunos: ${alunosTurma.length}
    Aprovados: ${aprovadosTurma.length}
    ----------------------`);
});

console.log("\nEstatísticas gerais:");
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Total de aprovados: ${aprovados.length}`);
console.log(`Média de idade dos aprovados: ${(aprovados.reduce((sum, aluno) => sum + aluno.idade, 0) / aprovados.length).toFixed(1)} anos`);
