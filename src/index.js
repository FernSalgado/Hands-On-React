import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//componente funcional
function App(props) {
  //3 etapas: Entrada, Rodando e fim de jogo
  //palpites entre 0 e 300
  //palpite será dado pela maquina

  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const dev = (
    <div className="card">
      <p>Desenvolvido por {props.name}</p>
    </div>
  );
  const iniciarJogo = () => {
    if (estado === "FIM") {
      setNumeroPalpites(1);
      setMin(0);
      setMax(300);
      setPalpite(150);
    }
    setEstado("RODANDO");
  };
  if (estado === "ENTRADA") {
    return (
      <div className="card bg-success" style={{ textAlign: "center" }}>
        <h3 className="card-header bg-primary">Meu primeiro App em React!</h3>
        <p className="card-body">Layout feito com React-bootstrap.</p>
        <button className="btn btn-primary" onClick={iniciarJogo}>
          Começar a jogar
        </button>
        {dev}
      </div>
    );
  }
  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        {dev}
        <p>
          Acertei o número {palpite} com {numeroPalpites} chutes!
        </p>
        <button className="btn btn-primary" onClick={iniciarJogo}>
          Iniciar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="App container">
      {dev}
      <p>O seu número é {palpite}?</p>
      <p>
        Valor mínimo: {min} Valor máximo: {max}
      </p>
      <button className="btn btn-danger btn-block" onClick={menor}>
        Menor!
      </button>
      <button className="btn btn-success btn-block" onClick={acertou}>
        Acertou!
      </button>
      <button className="btn btn-danger btn-block" onClick={maior}>
        Maior!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Fernando Salgado" />, rootElement);
