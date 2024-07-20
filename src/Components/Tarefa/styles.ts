import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  prioridade?: string
  status?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return variaveis.amarelo
    if (props.status === 'concluida') return variaveis.verde
    return '#ccc'
  } else if ('prioridade' in props) {
    if (props.prioridade === 'urgente') return variaveis.vermelho
    if (props.prioridade === 'importante') return variaveis.laranja
  }
  return '#ccc'
}

export const CardTarefa = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 32px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  margin-right: 16px;
  border-radius: 8px;
  color: #fff;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 16px;
  color: #black;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 16px;
  resize: none;
  border-radius: 8px;
`

export const BarraAcoes = styled.div`
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #747d8c;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
