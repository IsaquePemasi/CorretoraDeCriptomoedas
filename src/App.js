import logo from './logo.svg';
import './App.css';
import CoinList from './components/CoinList';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contato from "./pages/Contato"
import Compra from "./pages/Compra"


function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/Contato" element={ <Contato /> }/>
          <Route path="/Compra" element={ <Compra /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;