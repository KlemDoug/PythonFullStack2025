# Atividades Práticas:

# 1. Crie uma classe Conta com:
'''
Atributo _saldo (privado).
Getter saldo que retorna o valor formatado (ex: R$1000.00).
Setter que bloqueia valores negativos.
'''

# 2. Classes Abstratas:
'''
Crie uma classe abstrata Animal com método comum a todas as classes-filhas.
Implemente, pelo menos, as classes Cachorro e Gato com 3 métodos para cada uma.
'''

# 3. Padrão de Acesso a Repositórios

# Crie uma classe UsuarioRepository com os seguintes métodos:
'''
- cadastrar(usuario): cadastra um usuário (dicionário com nome e email).
- listar_todos(): retorna uma lista com todos os usuários cadastrados.
- buscar_por_email(email): retorna o usuário correspondente ao email informado.
- remover(email): remove o usuário correspondente ao email informado. 
- atualizar(usuario): atualiza os dados do usuário correspondente ao email informado.
- listar_por_nome(nome): retorna uma lista com todos os usuários que possuem o nome informado.
- listar_por_email(email): retorna uma lista com todos os usuários que possuem o email informado.
- listar_por_nome_e_email(nome, email): retorna uma lista com todos os usuários que possuem o nome e email informados.
'''

# 4. DESAFIO: retorne às atividades 2 e 3 e implemente uma metaclasse dentro de seus respectivos contextos.