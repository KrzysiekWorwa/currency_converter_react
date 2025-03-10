import Container from "./Container";
import Form from "./Form";
import { currencies } from "./currencies";
import React, { useState } from "react";
import { DateCounter } from "./Date";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Container>
      <DateCounter />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}


export default App;
