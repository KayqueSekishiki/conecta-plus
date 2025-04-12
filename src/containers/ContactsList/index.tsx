import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { MainContainer, Title } from '../../styles'

const ContactsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { letterSearch, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const contactFilter = () => {
    let filteredContacts = itens

    if (letterSearch) {
      filteredContacts = filteredContacts.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .search(letterSearch.toLocaleLowerCase()) >= 0
      )
    }

    if (criterion === 'all') {
      return filteredContacts
    }

    if (criterion !== 'favorites') {
      filteredContacts = filteredContacts.filter((item) => item.group === value)
    } else if (criterion === 'favorites') {
      filteredContacts = filteredContacts.filter(
        (item) => item.favorite === value
      )
    }

    return filteredContacts
  }
  const displayFilteringResult = (amount: number) => {
    let message = ''
    const messageCompletion =
      letterSearch !== undefined && letterSearch.length > 0
        ? `and "${letterSearch}"`
        : ''

    if (criterion === 'all') {
      message = `${amount} contact(s) found as: All Contacts ${messageCompletion}`
    } else {
      message = `${amount} contact(s) found as: "${`${value}`}"
      ${messageCompletion}`
    }

    return message
  }
  const contacts = contactFilter()
  const message = displayFilteringResult(contacts.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {contacts.map((c) => (
          <li key={c.title}>
            <Contact
              id={c.id}
              name={c.name}
              title={c.title}
              email={c.email}
              phone={c.phone}
              group={c.group}
              favorite={c.favorite}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ContactsList
