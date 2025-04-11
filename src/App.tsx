import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import Initial from './pages/Initial'
import Main from './pages/Main'
import Register from './pages/Register'

import { GlobalStyle, Container } from './styles'

const routers = createBrowserRouter([
  {
    path: '/login',
    element: <Initial />
  },
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routers} />
      </Container>
    </Provider>
  )
}

export default App
