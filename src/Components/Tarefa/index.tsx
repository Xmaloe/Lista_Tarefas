import * as S from './styles'

const Tarefa = () => (
  <S.CardTarefa>
    <S.Titulo>Nome da tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Edtar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.CardTarefa>
)

export default Tarefa
