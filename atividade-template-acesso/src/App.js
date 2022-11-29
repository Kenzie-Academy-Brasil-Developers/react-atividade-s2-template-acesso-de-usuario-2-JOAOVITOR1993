import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Customer } from './pages/Customer';
import { Company } from './pages/Company';
import { Home } from './pages/Home';
import { members } from './array/members';

function App() {
  return (
    <Routes>
      <Route path="/customer/:id" element={ <Customer members={members}/> }/>
      <Route path="/company/:id" element={ <Company members={members}/> }/>
      <Route path="/" element={ <Home members={members}/> }/>
    </Routes>
  );
}

export default App;
