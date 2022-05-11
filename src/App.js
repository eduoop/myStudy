import Navbar from '../src/components/layouts/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App;
