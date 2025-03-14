// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Rotas from './Rotas';
import NotFound from './NotFound';
import Sobre from './Sobre';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/', element: <Menu />,  // Menu is at the root, as a layout
    children: [
      { index: true, element: <Home /> },  // Home route
      { path: 'rotas', element: <Rotas /> },
      { path: 'rotas/:id', element: <Rotas /> },  // Dynamic route for `id`
      { path: 'sobre', element: <Sobre /> },
      { path: '*', element: <NotFound /> }  // Catch-all route for 404
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
