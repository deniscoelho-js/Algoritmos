import prompt from 'prompt-sync'
import { Funcinario } from './Funcionario'
import { Funcionarios } from './Funcionarios'
import { deletar } from './Funcoes'

let readline = prompt()
let entrada: number = 0

while(entrada != 4){
    console.log('1 - Adicionar funcionário:')
    console.log('2 - Listar funcionário:')
    console.log('3 - Remover funcionário:')
    console.log('4 - Sair:')
    
    entrada = +readline('Escolha uma opção: ')       
    switch(entrada){
        case 1:
            const nome = readline('Digite o nome do funcionario: ')
            const matricula = +readline('Digite a matricula do funcionario: ')
            const salario = +readline('Digite o salario do funcionario: ')
            const novofuncionario: Funcinario = new Funcinario(nome, matricula, salario)
            Funcionarios.push(novofuncionario)
            break
        case 2:
            console.table(Funcionarios)
            break
        case 3:
            const indice = +readline('Digite o indice do funcionario que deseja apagar: ')
            deletar(indice)
            break
        default:
            break
    }
}