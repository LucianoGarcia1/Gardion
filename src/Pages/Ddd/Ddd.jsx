import React, { useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import Api from "../../Services/Api";
import { Content } from "../../Components/Content";
import { Error } from "../../Components/Error";

export const Ddd = () => {
  const [value, setValue] = useState("");
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(null);
  const getDiscagem = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.get(`ddd/v1/${value}`);
      const bodyJson = await response.data;
      setDados(bodyJson);
    } catch (erro) {
      setError(erro.response.data.message)
    }
  };
  return (
    <section className="discagem container">
      <h2>Discagem direta a distância</h2>
      <form onSubmit={getDiscagem}>
        <Input
          type="number"
          placeholder="Digite um ddd"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <Button children="Buscar" />
      </form>

      {dados ? (
        <Content>
          <h3>{dados.state}</h3>
          <div className="boxs">
            {dados.cities.map((e,index) => (
              <div key={index}>
                <span>{e}</span>
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
