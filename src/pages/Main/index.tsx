import ContactsList from '../../containers/ContactsList'
import LeftAside from '../../containers/LeftAside'
import { Container } from '../../styles'

const Main = () => (
  <Container>
    <LeftAside showFilter />
    <ContactsList />
  </Container>
)

export default Main
