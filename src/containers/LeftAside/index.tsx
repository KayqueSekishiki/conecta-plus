import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Button, Field } from '../../styles'
import * as enums from '../../utils/enums/Contact'
import { changeLetterSearch } from '../../store/reducers/filter'

type Props = {
  showFilter: boolean
}

const LeftAside = ({ showFilter }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { letterSearch } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilter ? (
          <>
            <S.H1>
              Conecta <span>+</span>{' '}
            </S.H1>
            <Field
              type="text"
              placeholder="Buscar"
              value={letterSearch}
              onChange={(e) => dispatch(changeLetterSearch(e.target.value))}
            />
            <S.Filters>
              <FilterCard
                value={enums.Group.FAMILY}
                criterion="family"
                cation="Family"
              />
              <FilterCard
                value={enums.Group.FRIENDS}
                criterion="friends"
                cation="Friends"
              />
              <FilterCard
                value={enums.Group.BUSINESS}
                criterion="business"
                cation="Business"
              />
              <FilterCard
                value={enums.Group.FAVORITES}
                criterion="favorites"
                cation="Favorites"
              />

              <FilterCard criterion="all" cation="All Contacts" />
              <Button onClick={() => navigate('/login')}>DISCONECT</Button>
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Return to your contacts list
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default LeftAside
