import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Catalog from './pages/catalog';
import Main from './pages/main';
import News from './pages/news';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path='/main-page' element={<Main />}/>
        <Route  path='/laptop-catalog' element={<Catalog />}/>
        <Route  path='/top-new' element={<News />}/>
      </Routes>
    </div>
  );
}

export default App;
