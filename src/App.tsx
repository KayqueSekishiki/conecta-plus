import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Initial from './pages/Initial'
import Main from './pages/Main'
import Register from './pages/Register'

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
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
