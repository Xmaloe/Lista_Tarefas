import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluída" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={4} />
        <FiltroCard legenda="Normal" contador={5} />
        <FiltroCard legenda="Todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
