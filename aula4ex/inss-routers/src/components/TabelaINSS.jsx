
const TabelaINSS = () => {
  return (
    <div className="table-container mt-4 p-4 border border-secondary rounded shadow-sm bg-white">
      <h3 className="table-title text-center mb-3">Tabela INSS</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>De</th>
            <th>Até</th>
            <th>Alíquota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R$ 0,00</td>
            <td>R$ 1.518,00</td>
            <td>7,5%</td>
          </tr>
          <tr>
            <td>R$ 1.518,01</td>
            <td>R$ 2.793,88</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>R$ 2.793,89</td>
            <td>R$ 4.190,84</td>
            <td>12%</td>
          </tr>
          <tr>
            <td>R$ 4.190,85</td>
            <td>R$ 8.157,41</td>
            <td>14%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaINSS;
