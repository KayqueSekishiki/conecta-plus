import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import Initial from './pages/Initial'
import Main from './pages/Main'
import Register from './pages/Register'

import { GlobalStyle } from './styles'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Initial />
  },
  {
    path: '/main',
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
      <RouterProvider router={routers} />
    </Provider>
  )
}

export default App
