import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { CardGenerator } from './components/CardGenerator'
<<<<<<< HEAD
import ImagePreview from './components/ImagePreview'
import NumberInputContainer from './components/NumberInputContainer'

=======
import { Profile } from './components/Profile'
import  ImagePreview  from './components/ImagePreview'
>>>>>>> b1fe8a320793c468d6e261aca43324a037bc4536

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
              <Route path='preview' element={<ImagePreview />} />
              <Route path='auth' element={<NumberInputContainer />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};

export default App;