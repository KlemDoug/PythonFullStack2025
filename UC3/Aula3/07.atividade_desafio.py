#Implemente um sistema de gerenciamento de tarefas (to-do list) em memória usando dicionários e JSON.

#Use um dicionário para armazenar tarefas no formato exemplificado abaixo:
tarefas = {
    1: {"titulo": "Estudar Python", "status": "pendente"},
    2: {"titulo": "Fazer relatório", "status": "concluído"}
}

#Implemente os recursos abaixo:
'''
listar_tarefas(): Retorna todas as tarefas em JSON.

adicionar_tarefa(id, titulo, status): Adiciona nova tarefa.

atualizar_status(id, novo_status): Altera o status de uma tarefa.

remover_tarefa(id): Deleta uma tarefa.

Valide se o ID existe antes de operações.

Use um set para armazenar status válidos ({"pendente", "em andamento", "concluído"}).
'''

