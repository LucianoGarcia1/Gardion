import React, { useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import Api from "../../Services/Api";
import { Content } from "../../Components/Content";
import { Error } from "../../Components/Error";

export const Cep = () => {
  const [value, setValue] = useState("");
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(null);
  const getCep = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.get(`cep/v1/${value}`);
      const bodyJson = await response.data;
      setDados(bodyJson);
    } catch (erro) {
      setError(erro.response.data.message);
    }
  };
  return (
    <section className="cep container">
      <h2>Consulte um Cep</h2>
      <form onSubmit={getCep}>
        <Input
          type="number"
          placeholder="Digite o Cep"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <Button children="Buscar" />
      </form>

      {dados ? (
        <Content>
          <h3> Cep {dados.cep}</h3>
          <div className="boxs">
            <div>
              <p>Logradouro/Rua</p>
              <span>{dados.street}</span>
            </div>
            <div>
              <p>Bairro/Distrito</p>
              <span>{dados.neighborhood}</span>
            </div>
            <div>
              <p>Localidade/Uf</p>
              <span>{dados.city} / {dados.uf}</span>
            </div>
          </div>
        </Content>
      ) : (
        <Error erro={error} />
      )}
    </section>
  );
};
