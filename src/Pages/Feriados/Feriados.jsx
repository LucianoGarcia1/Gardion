import React, { useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import Api from "../../Services/Api";
import { Content } from "../../Components/Content";
import { Error } from "../../Components/Error";

export const Feriados = () => {
  const [value, setValue] = useState("");
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(null);
  const getFeriados = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.get(`feriados/v1/${value}`);
      const bodyJson = await response.data;
      setDados(bodyJson);
    } catch (erro) {
      setError(erro.response.data.message);
    }
  };
  return (
    <section className="feriados container">
      <h2>Feriados Nacionais</h2>
      <form onSubmit={getFeriados}>
        <Input
          type="number"
          placeholder="Digite um Ano"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <Button children="Buscar" />
      </form>

      {dados ? (
        <Content>
          <h3> Ano de {value}</h3>
          <div className="boxs">
            {dados.map(({ name, date }) => (
              <div key={name}>
                <p>{name}</p>
                <span>{date}</span>
              </div>
            ))}
          </div>
        </Content>
      ) : (
        <Error erro={error} />
      )}
    </section>
  );
};
