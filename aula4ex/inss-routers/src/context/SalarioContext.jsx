import { createContext, useContext, useState } from "react";

const SalarioContext = createContext();

export const SalarioProvider = ({ children }) => {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    horasSemana: "",
    valorHora: "",
    salarioBruto: 0,
    inss: 0,
    salarioLiquido: 0,
  });

  const calcularSalario = () => {
    const salarioBruto = dados.horasSemana * dados.valorHora * 5;
    const inss = calcularINSS(salarioBruto);
    const salarioLiquido = salarioBruto - inss;
    
    setDados((prev) => ({ ...prev, salarioBruto, inss, salarioLiquido }));
  };

  const calcularINSS = (salario) => {
    if (salario <= 1518) return salario * 0.075;
    if (salario <= 2793.88) return salario * 0.09;
    if (salario <= 4190.84) return salario * 0.12;
    if (salario <= 8157.41) return salario * 0.14;
    return 8157.41 * 0.14;
  };

  return (
    <SalarioContext.Provider value={{ dados, setDados, calcularSalario }}>
      {children}
    </SalarioContext.Provider>
  );
};

export const useSalario = () => useContext(SalarioContext);
