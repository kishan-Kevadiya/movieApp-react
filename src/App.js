import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Videos from './components/Videos'
import Footer from './components/Footer'
import Errorfree from './components/Errorfree'
import Upload from './components/Upload'
import Login from './components/Login'
import Forgotpasword from './components/Forgotpasword'
import Signup from './components/Signup'

function App() {
 return <Router>
  <Header/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/Videos' element={<Videos/>} />
        < Route path='/Errorfree' element={<Errorfree/>} />
        < Route path='/Upload' element={<Upload/>} />
        < Route path='/login' element={<Login/>} />
        < Route path='/forgotpasword' element={<Forgotpasword/>} />
        < Route path='/signup' element={<Signup/>} />
      </Routes>

      < Footer/>
  </Router>

}

export default App;
