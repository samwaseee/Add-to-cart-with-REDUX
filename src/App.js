import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
