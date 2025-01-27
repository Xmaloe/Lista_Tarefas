import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.PrioridadeEnum.IMPORTANTE,
    status: enums.StatusEnum.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar a conta no gmail',
    prioridade: enums.PrioridadeEnum.URGENTE,
    status: enums.StatusEnum.CONLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer o treino B',
    prioridade: enums.PrioridadeEnum.IMPORTANTE,
    status: enums.StatusEnum.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
