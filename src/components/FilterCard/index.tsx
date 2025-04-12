import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Contact'
import { RootReducer } from '../../store'

export type Props = {
  cation: string
  criterion: 'family' | 'friends' | 'business' | 'favorites' | 'all'
  value?: enums.Group | enums.Favorite
}

const FilterCard = ({ cation, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const verifyActive = () => {
    const sameCriteria = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const countContacts = () => {
    if (criterion !== 'all') {
      return contacts.itens.filter((item) => item.group === value).length
    }

    if (criterion === 'all') {
      return contacts.itens.length
    }
  }

  const filtrate = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const count = countContacts()
  const active = verifyActive()

  return (
    <S.Card isActive={active} onClick={filtrate}>
      <S.Counter>{count}</S.Counter>
      <S.Label>{cation}</S.Label>
    </S.Card>
  )
}

export default FilterCard
