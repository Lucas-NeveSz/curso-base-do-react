import { useState } from "react";


export function App() {
  

  return (
    <>
     Olá
    </>
  )
}

//Função JS
const teste = () => {
  return 1 + 1;
}

//Função JS
const useTeste = () => {
  return 1 + 1;
}

//React hook
const useTest = () => {
  const [value] = useState(1 + 1);

  return value;
}

//Função JS que retorna html react
const tests = () => {
  return (
    <div>Teste</div>
  )
}

//Componente Funcional
const Tests = () => {
  return (
    <div>Teste</div>
  )
}