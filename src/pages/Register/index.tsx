import FormContainer from '../../containers/FormContainer'
import LeftAside from '../../containers/LeftAside'
import { Container } from '../../styles'

const Register = () => (
  <Container>
    <LeftAside showFilter={false} />
    <FormContainer />
  </Container>
)

export default Register
