import './App.css';
import Baner from './components/baner';
import Header from './components/header';
import Catalog from './pages/catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <Baner />
      <Catalog />
    </div>
  );
}

export default App;
