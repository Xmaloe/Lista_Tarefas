import styled from 'styled-components'

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

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 32px;
  font-size: 10px;
  font-weight: bold;
  background-color: #1b9cfc;
  margin-right: 16px;
  border-radius: 8px;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 16px;
  color: #black;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 16px;
  resize: none;
  border-radius: 16px;
  background-color: #7ed6df;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
