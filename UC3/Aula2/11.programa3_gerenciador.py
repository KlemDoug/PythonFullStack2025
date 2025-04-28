def gerenciador_tarefas():
    tarefas = []
    
    while True:
        print("\nGerenciador de Tarefas")
        print("1. Adicionar tarefa")
        print("2. Listar tarefas")
        print("3. Marcar como concluída")
        print("4. Remover tarefa")
        print("5. Sair")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == '1':
            tarefa = input("Digite a nova tarefa: ")
            tarefas.append({"tarefa": tarefa, "concluida": False})
            print("Tarefa adicionada!")
        
        elif opcao == '2':
            if not tarefas:
                print("Nenhuma tarefa cadastrada.")
            else:
                print("\nLista de Tarefas:")
                for i, item in enumerate(tarefas, 1):
                    status = "✓" if item["concluida"] else " "
                    print(f"{i}. [{status}] {item['tarefa']}")
        
        elif opcao == '3':
            if not tarefas:
                print("Nenhuma tarefa para marcar.")
            else:
                try:
                    num = int(input("Número da tarefa concluída: ")) - 1
                    if 0 <= num < len(tarefas):
                        tarefas[num]["concluida"] = True
                        print("Tarefa marcada como concluída!")
                    else:
                        print("Número inválido.")
                except ValueError:
                    print("Digite um número válido.")
        
        elif opcao == '4':
            if not tarefas:
                print("Nenhuma tarefa para remover.")
            else:
                try:
                    num = int(input("Número da tarefa a remover: ")) - 1
                    if 0 <= num < len(tarefas):
                        removida = tarefas.pop(num)
                        print(f"Tarefa '{removida['tarefa']}' removida.")
                    else:
                        print("Número inválido.")
                except ValueError:
                    print("Digite um número válido.")
        
        elif opcao == '5':
            print("Saindo do gerenciador...")
            break
        
        else:
            print("Opção inválida!")

gerenciador_tarefas()