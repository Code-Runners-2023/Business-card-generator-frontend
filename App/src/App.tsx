import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { CardGenerator } from './components/CardGenerator'
import { Profile } from './components/Profile'

function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='generate' element={<CardGenerator />} />
              <Route path='profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};

export default App;