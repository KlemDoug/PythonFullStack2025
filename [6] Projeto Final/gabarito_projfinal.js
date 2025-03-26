/*
 * CLASSE ALUNO
 * Representa um aluno da escola com suas informações básicas e notas
 */
class Aluno {
    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.notas = []; // Array para armazenar as notas do aluno
    }

    // Método para adicionar uma nova nota ao aluno
    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para o aluno ${this.nome}.`);
        } else {
            console.log("Nota inválida. Deve ser entre 0 e 10.");
        }
    }

    // Método para calcular a média do aluno
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return (soma / this.notas.length).toFixed(2);
    }

    // Método para exibir informações do aluno
    exibirInfo() {
        console.log(`
        Aluno: ${this.nome}
        Matrícula: ${this.matricula}
        Curso: ${this.curso}
        Média: ${this.calcularMedia()}
        `);
    }
}

/*
 * CLASSE PROFESSOR
 * Representa um professor da escola com suas disciplinas
 */
class Professor {
    constructor(nome, departamento) {
        this.nome = nome;
        this.departamento = departamento;
        this.disciplinas = []; // Array para armazenar as disciplinas que o professor leciona
    }

    // Método para atribuir uma nova disciplina ao professor
    atribuirDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
        console.log(`Disciplina ${disciplina} atribuída ao professor ${this.nome}.`);
    }

    // Método para listar todas as turmas/disciplinas do professor
    listarTurmas() {
        console.log(`\nDisciplinas do professor ${this.nome}:`);
        this.disciplinas.forEach((disciplina, index) => {
            console.log(`${index + 1}. ${disciplina}`);
        });
    }

    // Método para exibir informações do professor
    exibirInfo() {
        console.log(`
        Professor: ${this.nome}
        Departamento: ${this.departamento}
        Disciplinas: ${this.disciplinas.join(', ')}
        `);
    }
}

/*
 * CLASSE DISCIPLINA
 * Representa uma disciplina ofertada na escola
 */
class Disciplina {
    constructor(nome, codigo, professor) {
        this.nome = nome;
        this.codigo = codigo;
        this.professor = professor; // Professor responsável pela disciplina
        this.alunosMatriculados = []; // Array de alunos matriculados
    }

    // Método para matricular um aluno na disciplina
    matricularAluno(aluno) {
        this.alunosMatriculados.push(aluno);
        console.log(`Aluno ${aluno.nome} matriculado na disciplina ${this.nome}.`);
    }

    // Método para gerar boletim da disciplina
    gerarBoletim() {
        console.log(`\nBoletim da Disciplina: ${this.nome}`);
        console.log(`Professor: ${this.professor.nome}`);
        console.log("---------------------------------");
        console.log("Alunos Matriculados:");
        
        this.alunosMatriculados.forEach(aluno => {
            console.log(`${aluno.nome} - Média: ${aluno.calcularMedia()}`);
        });
        
        console.log("---------------------------------");
    }

    // Método para exibir informações da disciplina
    exibirInfo() {
        console.log(`
        Disciplina: ${this.nome}
        Código: ${this.codigo}
        Professor: ${this.professor.nome}
        Alunos Matriculados: ${this.alunosMatriculados.length}
        `);
    }
}

/*
 * CLASSE ESCOLA
 * Representa a escola como um todo, agregando todas as outras classes
 */
class Escola {
    constructor(nome) {
        this.nome = nome;
        this.alunos = []; // Lista de todos os alunos da escola
        this.professores = []; // Lista de todos os professores
        this.disciplinas = []; // Lista de todas as disciplinas
    }

    // Método para matricular um novo aluno na escola
    matricularAluno(aluno) {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.nome} matriculado na escola ${this.nome}.`);
    }

    // Método para contratar um novo professor
    contratarProfessor(professor) {
        this.professores.push(professor);
        console.log(`Professor ${professor.nome} contratado pela escola ${this.nome}.`);
    }

    // Método para cadastrar uma nova disciplina
    cadastrarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
        console.log(`Disciplina ${disciplina.nome} cadastrada na escola ${this.nome}.`);
    }

    // Método para gerar relatório geral da escola
    gerarRelatorio() {
        console.log(`\nRELATÓRIO DA ESCOLA ${this.nome.toUpperCase()}`);
        console.log("=================================");
        
        console.log(`\nTotal de Alunos: ${this.alunos.length}`);
        console.log("Alunos:");
        this.alunos.forEach(aluno => {
            console.log(`- ${aluno.nome} (${aluno.matricula}) - ${aluno.curso}`);
        });
        
        console.log(`\nTotal de Professores: ${this.professores.length}`);
        console.log("Professores:");
        this.professores.forEach(professor => {
            console.log(`- ${professor.nome} - ${professor.departamento}`);
        });
        
        console.log(`\nTotal de Disciplinas: ${this.disciplinas.length}`);
        console.log("Disciplinas:");
        this.disciplinas.forEach(disciplina => {
            console.log(`- ${disciplina.nome} (${disciplina.codigo}) - Prof. ${disciplina.professor.nome}`);
        });
        
        console.log("\n=================================");
    }
}

/*
 * TESTANDO O SISTEMA COMPLETO
 */

// Criando uma instância da escola
const minhaEscola = new Escola("Escola Municipal JavaScript");

// Criando e contratando professores
const profMatematica = new Professor("Carlos Silva", "Exatas");
minhaEscola.contratarProfessor(profMatematica);

const profHistoria = new Professor("Ana Oliveira", "Humanas");
minhaEscola.contratarProfessor(profHistoria);

// Criando e cadastrando disciplinas
const matematica = new Disciplina("Matemática Avançada", "MAT101", profMatematica);
minhaEscola.cadastrarDisciplina(matematica);

const historia = new Disciplina("História do Brasil", "HIS201", profHistoria);
minhaEscola.cadastrarDisciplina(historia);

// Atribuindo disciplinas aos professores
profMatematica.atribuirDisciplina("Matemática Avançada");
profHistoria.atribuirDisciplina("História do Brasil");

// Criando e matriculando alunos
const aluno1 = new Aluno("João Santos", "2023001", "Ensino Médio");
minhaEscola.matricularAluno(aluno1);
matematica.matricularAluno(aluno1);
historia.matricularAluno(aluno1);

const aluno2 = new Aluno("Maria Souza", "2023002", "Ensino Médio");
minhaEscola.matricularAluno(aluno2);
matematica.matricularAluno(aluno2);

// Adicionando notas aos alunos
aluno1.adicionarNota(8.5);
aluno1.adicionarNota(7.0);
aluno1.adicionarNota(9.2);

aluno2.adicionarNota(6.5);
aluno2.adicionarNota(8.0);
aluno2.adicionarNota(7.8);

// Exibindo informações
aluno1.exibirInfo();
aluno2.exibirInfo();

profMatematica.listarTurmas();
profHistoria.listarTurmas();

matematica.gerarBoletim();
historia.gerarBoletim();

// Gerando relatório geral da escola
minhaEscola.gerarRelatorio();