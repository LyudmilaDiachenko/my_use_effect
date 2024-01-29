import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalog from './pages/catalog';
import Main from './pages/main';
import News from './pages/news';
import NotFound from './pages/not-found';
import Layout from './pages/layout';
import NewsDetails from './pages/newsDetails';
import { AppProvider } from './utils/context';


function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={<Main />}/>
            <Route  path='catalog' element={<Catalog />}/>
            <Route  path='news' element={<News />}/>
            <Route  path='*' element={<NotFound />}/>
            <Route  path='/news/:title' element={<NewsDetails />}/>
          </Route>
        </Routes>
      </div>
    </AppProvider>
    
  );
}

export default App;
