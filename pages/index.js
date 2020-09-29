import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Creators as LocationActions } from "../store/ducks/location";

const Home = () => {
  const dispatch = useDispatch();
  const [zipcode, setZipcode] = useState("");

  const requestZipcode = () => {
    // Disparar uma action para solicitar o endereço baseado no meu CEP.
    dispatch(LocationActions.requestLocation(zipcode));
  };

  const location = useSelector((state) => state.location.location);
  const { data, status } = location;

  console.log("data", data);
  console.log("status", status);

  return (
    <>
      <p>Informe seu CEP:</p>
      <input onChange={(e) => setZipcode(e.target.value)} value={zipcode} />
      <button onClick={requestZipcode}>Buscar</button>

      {status === "idle" ? <h1>Não iniciado</h1> : <></>}

      {status === "pending" ? <h1>Carregando...</h1> : <></>}

      {status === "resolved" ? (
        <>
          <label>Endereço:</label>
          <p>{data.logradouro}</p>

          <label>Bairro</label>
          <p>{data.bairro}</p>

          <label>Cidade:</label>
          <p>{data.localidade}</p>

          <label>UF:</label>
          <p>{data.uf}</p>
        </>
      ) : (
        <></>
      )}

      {status === "rejected" ? <h1>Ocorreu algum erro...</h1> : <></>}
    </>
  );
};

export default Home;
