import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Rotas from './Rotas';
import NotFound from './NotFound';
import Sobre from './Sobre';
import './App.css';

const router = createBrowserRouter([
  {
    path : '/', element : <Menu/>, 
    children : [
      { index : true, element : <Home/>}, 
      {path : 'rotas', element : <Rotas/>}, {path : 'sobre', element : <Sobre/>},
      {path : '*', element : <NotFound/>}
    ]
  }
])


function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
