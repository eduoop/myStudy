import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from '../src/components/pages/About'
import Support from '../src/components/pages/Support'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about-us' element={<About/>}/>
        <Route path='support' element={<Support/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
