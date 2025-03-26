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
            log(`Nota ${nota} adicionada para o aluno ${this.nome}.`);
        } else {
            log("Nota inválida. Deve ser entre 0 e 10.");
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
        log(`
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
        log(`Disciplina ${disciplina} atribuída ao professor ${this.nome}.`);
    }

    // Método para listar todas as turmas/disciplinas do professor
    listarTurmas() {
        log(`\nDisciplinas do professor ${this.nome}:`);
        this.disciplinas.forEach((disciplina, index) => {
            log(`${index + 1}. ${disciplina}`);
        });
    }

    // Método para exibir informações do professor
    exibirInfo() {
        log(`
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
        log(`Aluno ${aluno.nome} matriculado na disciplina ${this.nome}.`);
    }

    // Método para gerar boletim da disciplina
    gerarBoletim() {
        log(`\nBoletim da Disciplina: ${this.nome}`);
        log(`Professor: ${this.professor.nome}`);
        log("---------------------------------");
        log("Alunos Matriculados:");
        
        this.alunosMatriculados.forEach(aluno => {
            log(`${aluno.nome} - Média: ${aluno.calcularMedia()}`);
        });
        
        log("---------------------------------");
    }

    // Método para exibir informações da disciplina
    exibirInfo() {
        log(`
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
        log(`Aluno ${aluno.nome} matriculado na escola ${this.nome}.`);
    }

    // Método para contratar um novo professor
    contratarProfessor(professor) {
        this.professores.push(professor);
        log(`Professor ${professor.nome} contratado pela escola ${this.nome}.`);
    }

    // Método para cadastrar uma nova disciplina
    cadastrarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
        log(`Disciplina ${disciplina.nome} cadastrada na escola ${this.nome}.`);
    }

    // Método para gerar relatório geral da escola
    gerarRelatorio() {
        log(`\nRELATÓRIO DA ESCOLA ${this.nome.toUpperCase()}`);
        log("=================================");
        
        log(`\nTotal de Alunos: ${this.alunos.length}`);
        log("Alunos:");
        this.alunos.forEach(aluno => {
            log(`- ${aluno.nome} (${aluno.matricula}) - ${aluno.curso}`);
        });
        
        log(`\nTotal de Professores: ${this.professores.length}`);
        log("Professores:");
        this.professores.forEach(professor => {
            log(`- ${professor.nome} - ${professor.departamento}`);
        });
        
        log(`\nTotal de Disciplinas: ${this.disciplinas.length}`);
        log("Disciplinas:");
        this.disciplinas.forEach(disciplina => {
            log(`- ${disciplina.nome} (${disciplina.codigo}) - Prof. ${disciplina.professor.nome}`);
        });
        
        log("\n=================================");
    }
}

// Instância da escola
const minhaEscola = new Escola("Escola Municipal JavaScript");

// Função para logar mensagens no console da página
function log(message) {
    const consoleElement = document.getElementById('system-console');
    if (consoleElement) {
        consoleElement.innerHTML += message + '<br>';
        consoleElement.scrollTop = consoleElement.scrollHeight;
    }
    console.log(message);
}

// Função para limpar o console
function limparConsole() {
    const consoleElement = document.getElementById('system-console');
    if (consoleElement) {
        consoleElement.innerHTML = '';
    }
}

// Funções para atualizar os selects
function atualizarSelectAlunos() {
    const selectAlunos = document.getElementById('nota-aluno');
    const selectMatricularAluno = document.getElementById('matricular-aluno');
    
    if (!selectAlunos || !selectMatricularAluno) return;
    
    selectAlunos.innerHTML = '';
    selectMatricularAluno.innerHTML = '';
    
    minhaEscola.alunos.forEach(aluno => {
        const option = document.createElement('option');
        option.value = aluno.matricula;
        option.textContent = `${aluno.nome} (${aluno.matricula})`;
        selectAlunos.appendChild(option);
        
        const option2 = option.cloneNode(true);
        selectMatricularAluno.appendChild(option2);
    });
    
    atualizarListaAlunos();
}

function atualizarSelectProfessores() {
    const selectProfessores = document.getElementById('disciplina-professor');
    const selectAtribuirProfessor = document.getElementById('atribuir-professor');
    
    if (!selectProfessores || !selectAtribuirProfessor) return;
    
    selectProfessores.innerHTML = '';
    selectAtribuirProfessor.innerHTML = '';
    
    minhaEscola.professores.forEach(professor => {
        const option = document.createElement('option');
        option.value = professor.nome;
        option.textContent = `${professor.nome} (${professor.departamento})`;
        selectProfessores.appendChild(option);
        
        const option2 = option.cloneNode(true);
        selectAtribuirProfessor.appendChild(option2);
    });
    
    atualizarListaProfessores();
}

function atualizarSelectDisciplinas() {
    const selectDisciplinas = document.getElementById('matricular-disciplina');
    const selectBoletim = document.getElementById('selecionar-disciplina');
    
    if (!selectDisciplinas || !selectBoletim) return;
    
    selectDisciplinas.innerHTML = '';
    selectBoletim.innerHTML = '';
    
    minhaEscola.disciplinas.forEach(disciplina => {
        const option = document.createElement('option');
        option.value = disciplina.codigo;
        option.textContent = `${disciplina.nome} (${disciplina.codigo})`;
        selectDisciplinas.appendChild(option);
        
        const option2 = option.cloneNode(true);
        selectBoletim.appendChild(option2);
    });
    
    atualizarListaDisciplinas();
}

// Funções para atualizar as listas de exibição
function atualizarListaAlunos() {
    const listaAlunos = document.getElementById('lista-alunos');
    if (!listaAlunos) return;
    
    listaAlunos.innerHTML = '';
    
    if (minhaEscola.alunos.length === 0) {
        listaAlunos.innerHTML = '<p>Nenhum aluno cadastrado.</p>';
        return;
    }
    
    minhaEscola.alunos.forEach(aluno => {
        const alunoDiv = document.createElement('div');
        alunoDiv.className = 'card';
        alunoDiv.style.marginBottom = '10px';
        alunoDiv.style.padding = '10px';
        
        let notasHTML = '';
        aluno.notas.forEach((nota, index) => {
            notasHTML += `<div class="nota-item">Nota ${index + 1}: <span>${nota}</span></div>`;
        });
        
        alunoDiv.innerHTML = `
            <h4>${aluno.nome}</h4>
            <p>Matrícula: ${aluno.matricula}</p>
            <p>Curso: ${aluno.curso}</p>
            ${notasHTML}
            <div class="media">Média: ${aluno.calcularMedia()}</div>
        `;
        
        listaAlunos.appendChild(alunoDiv);
    });
}

function atualizarListaProfessores() {
    const listaProfessores = document.getElementById('lista-professores');
    if (!listaProfessores) return;
    
    listaProfessores.innerHTML = '';
    
    if (minhaEscola.professores.length === 0) {
        listaProfessores.innerHTML = '<p>Nenhum professor cadastrado.</p>';
        return;
    }
    
    minhaEscola.professores.forEach(professor => {
        const professorDiv = document.createElement('div');
        professorDiv.className = 'card';
        professorDiv.style.marginBottom = '10px';
        professorDiv.style.padding = '10px';
        
        let disciplinasHTML = '';
        professor.disciplinas.forEach((disciplina, index) => {
            disciplinasHTML += `<div>${index + 1}. ${disciplina}</div>`;
        });
        
        professorDiv.innerHTML = `
            <h4>${professor.nome}</h4>
            <p>Departamento: ${professor.departamento}</p>
            <p>Disciplinas:</p>
            ${disciplinasHTML || '<p>Nenhuma disciplina atribuída.</p>'}
        `;
        
        listaProfessores.appendChild(professorDiv);
    });
}

function atualizarListaDisciplinas() {
    const listaDisciplinas = document.getElementById('lista-disciplinas');
    if (!listaDisciplinas) return;
    
    listaDisciplinas.innerHTML = '';
    
    if (minhaEscola.disciplinas.length === 0) {
        listaDisciplinas.innerHTML = '<p>Nenhuma disciplina cadastrada.</p>';
        return;
    }
    
    minhaEscola.disciplinas.forEach(disciplina => {
        const disciplinaDiv = document.createElement('div');
        disciplinaDiv.className = 'card';
        disciplinaDiv.style.marginBottom = '10px';
        disciplinaDiv.style.padding = '10px';
        
        let alunosHTML = '';
        disciplina.alunosMatriculados.forEach((aluno, index) => {
            alunosHTML += `<div>${index + 1}. ${aluno.nome} (Média: ${aluno.calcularMedia()})</div>`;
        });
        
        disciplinaDiv.innerHTML = `
            <h4>${disciplina.nome}</h4>
            <p>Código: ${disciplina.codigo}</p>
            <p>Professor: ${disciplina.professor.nome}</p>
            <p>Alunos Matriculados:</p>
            ${alunosHTML || '<p>Nenhum aluno matriculado.</p>'}
        `;
        
        listaDisciplinas.appendChild(disciplinaDiv);
    });
}

// Função para gerar boletim de uma disciplina
function gerarBoletim() {
    const select = document.getElementById('selecionar-disciplina');
    const boletimDiv = document.getElementById('boletim-disciplina');
    
    if (!select || !boletimDiv) return;
    
    const codigoDisciplina = select.value;
    
    if (!codigoDisciplina) {
        boletimDiv.innerHTML = '<p>Selecione uma disciplina para gerar o boletim.</p>';
        return;
    }
    
    const disciplina = minhaEscola.disciplinas.find(d => d.codigo === codigoDisciplina);
    
    if (!disciplina) {
        boletimDiv.innerHTML = '<p>Disciplina não encontrada.</p>';
        return;
    }
    
    let alunosHTML = '';
    disciplina.alunosMatriculados.forEach(aluno => {
        alunosHTML += `
            <div class="card" style="margin-bottom: 10px; padding: 10px;">
                <h4>${aluno.nome}</h4>
                <p>Matrícula: ${aluno.matricula}</p>
                <p>Média: ${aluno.calcularMedia()}</p>
            </div>
        `;
    });
    
    boletimDiv.innerHTML = `
        <h4>${disciplina.nome} - ${disciplina.codigo}</h4>
        <p>Professor: ${disciplina.professor.nome}</p>
        <p>Total de Alunos: ${disciplina.alunosMatriculados.length}</p>
        <div style="margin-top: 15px;">
            ${alunosHTML || '<p>Nenhum aluno matriculado nesta disciplina.</p>'}
        </div>
    `;
}

// Função para gerar relatório geral
function gerarRelatorioGeral() {
    minhaEscola.gerarRelatorio();
    openTab('console');
}

// Adicionar alguns dados iniciais para demonstração
function inicializarDadosDemonstracao() {
    // Professores
    const profMatematica = new Professor("Carlos Silva", "Exatas");
    minhaEscola.contratarProfessor(profMatematica);
    
    const profHistoria = new Professor("Ana Oliveira", "Humanas");
    minhaEscola.contratarProfessor(profHistoria);
    
    // Disciplinas
    const matematica = new Disciplina("Matemática Avançada", "MAT101", profMatematica);
    minhaEscola.cadastrarDisciplina(matematica);
    
    const historia = new Disciplina("História do Brasil", "HIS201", profHistoria);
    minhaEscola.cadastrarDisciplina(historia);
    
    // Atribuir disciplinas aos professores
    profMatematica.atribuirDisciplina("Matemática Avançada");
    profHistoria.atribuirDisciplina("História do Brasil");
    
    // Alunos
    const aluno1 = new Aluno("João Santos", "2023001", "Ensino Médio");
    minhaEscola.matricularAluno(aluno1);
    matematica.matricularAluno(aluno1);
    historia.matricularAluno(aluno1);
    
    const aluno2 = new Aluno("Maria Souza", "2023002", "Ensino Médio");
    minhaEscola.matricularAluno(aluno2);
    matematica.matricularAluno(aluno2);
    
    // Notas
    aluno1.adicionarNota(8.5);
    aluno1.adicionarNota(7.0);
    aluno1.adicionarNota(9.2);
    
    aluno2.adicionarNota(6.5);
    aluno2.adicionarNota(8.0);
    aluno2.adicionarNota(7.8);
    
    // Atualizar selects e listas
    atualizarSelectAlunos();
    atualizarSelectProfessores();
    atualizarSelectDisciplinas();
    
    log("Sistema escolar inicializado com dados de demonstração.");
}