import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

function App() {
    return (
      <>
        <Navbar />
        <h1>Home</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </>
    )
}

export default App