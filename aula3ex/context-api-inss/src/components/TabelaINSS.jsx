import { useEffect } from "react";

const TabelaINSS = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .tabela-container {
        margin-top: 24px;
        padding: 16px;
        border: 2px solid #4a4a4a;
        border-radius: 12px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
        width: 50%;
        background-color: #ffffff;
      }

      .tabela-title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 12px;
      }

      .tabela {
        width: 100%;
        border-collapse: collapse;
      }

      .tabela th, .tabela td {
        border: 2px solid #4a4a4a;
        padding: 12px;
        text-align: center;
      }

      .tabela thead {
        background-color: #d1d1d1;
        color: #333;
      }

      .tabela tbody tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="tabela-container">
      <h3 className="tabela-title">Tabela INSS</h3>
      <table className="tabela">
        <thead>
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
