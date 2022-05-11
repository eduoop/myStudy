import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
