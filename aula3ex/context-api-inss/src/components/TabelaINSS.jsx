const TabelaINSS = () => {
  return (
    <div className="mt-6 border border-gray-400 p-4 rounded-lg shadow-lg w-1/2">
      <h3 className="text-lg font-semibold text-center mb-3">Tabela INSS</h3>
      <table className="w-full border border-gray-500">
        <thead>
          <tr className="bg-gray-300 text-gray-800">
            <th className="border border-gray-500 p-3 text-center">De</th>
            <th className="border border-gray-500 p-3 text-center">Até</th>
            <th className="border border-gray-500 p-3 text-center">Alíquota</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          <tr className="text-center">
            <td className="border border-gray-500 p-3">R$ 0,00</td>
            <td className="border border-gray-500 p-3">R$ 1.518,00</td>
            <td className="border border-gray-500 p-3">7,5%</td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-500 p-3">R$ 1.518,01</td>
            <td className="border border-gray-500 p-3">R$ 2.793,88</td>
            <td className="border border-gray-500 p-3">9%</td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-500 p-3">R$ 2.793,89</td>
            <td className="border border-gray-500 p-3">R$ 4.190,84</td>
            <td className="border border-gray-500 p-3">12%</td>
          </tr>
          <tr className="text-center">
            <td className="border border-gray-500 p-3">R$ 4.190,85</td>
            <td className="border border-gray-500 p-3">R$ 8.157,41</td>
            <td className="border border-gray-500 p-3">14%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaINSS;
