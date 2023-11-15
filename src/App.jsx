import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<ItemListContainer greeting='Bienvenido a la tienda' />}
          />
          <Route
            path='/category/:categoryId'
            element={<ItemListContainer greeting='Bienvenido a la tienda' />}
          />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
