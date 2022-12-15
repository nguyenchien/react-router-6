import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import ShareLayout from './pages/ShareLayout';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />}>  
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productID' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          } />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
