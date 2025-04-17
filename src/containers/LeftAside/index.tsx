import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Button, Field, SaveButton, Title } from '../../styles'
import * as enums from '../../utils/enums/Contact'
import { changeLetterSearch } from '../../store/reducers/filter'

type Props = {
  showFilter: boolean
}

const LeftAside = ({ showFilter }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { letterSearch } = useSelector((state: RootReducer) => state.filter)

  const user = localStorage.getItem('user')

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

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
                value={enums.Favorite.FAVORITED}
                criterion="favorites"
                cation="Favorites"
              />
              <FilterCard criterion="all" cation="All Contacts" />
            </S.Filters>
            <S.Filters>
              <S.UserContainer>
                <S.Icon
                  src="https://www.svgrepo.com/show/327465/person-circle.svg"
                  alt="User Icon"
                />
                <Title>{user}</Title>
              </S.UserContainer>

              <SaveButton onClick={() => navigate('/register')}>
                ADD NEW CONTACT
              </SaveButton>
              <Button onClick={() => handleLogout()}>DISCONECT</Button>
            </S.Filters>
          </>
        ) : (
          <S.Filters>
            <Button
              onClick={() => {
                navigate('/')
              }}
            >
              Return to home
            </Button>
          </S.Filters>
        )}
      </div>
    </S.Aside>
  )
}

export default LeftAside
