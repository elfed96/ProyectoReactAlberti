
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Inicio from './components/pages/Inicio'
import Indumentaria from './components/pages/Indumentaria'
import Contacto from './components/pages/Contacto'

function App() {
  return (
    <div className="App">

        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' exact component={Inicio}/>
              <Route path='/Indumentaria' exact component={Indumentaria}/>
              <Route path='/Contacto' exact component={Contacto}/>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
