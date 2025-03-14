// Rotas.jsx
import { useParams } from 'react-router-dom';

const Rotas = () => {
  const { id } = useParams();

  return (
    <>

      <h1>Rotas com React</h1>
      <p>Este é o conteúdo da página de rotas</p>

      {/* Conditionally render the ID if it exists */}
      {id && <h2>ID: {id}</h2>}
    </>
  );
};

export default Rotas;
