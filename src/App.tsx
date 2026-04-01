import { useState } from "react";



interface ICardProps {
  title: string;
  children: React.ReactNode;
}
const Card = (props: ICardProps) => {
  return(
    <div style={{ border: '1px solid black' }}>
      <span>Title {props.title}</span>

      <div>
        {props.children}
      </div>
      
      <div>
        Fouter
      </div>
    </div>
  );
}










export function App() {
  

  return (
    <div>
      Olá

      <p>Card!</p>

      <Card title="Teste">
        Testando
        Testando
        Testando
        Testando
        Testando
        Testando
      </Card>
    </div>
  )
}

