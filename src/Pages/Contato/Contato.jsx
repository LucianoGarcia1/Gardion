import { useState } from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import emailjs from "@emailjs/browser";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [very, setVery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha os todos os campos!!!");
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
    };
    emailjs
      .send(
        "service_vicm1bv",
        "template_qsbztqh",
        templateParams,
        "xgi-ie1poKqgqBHhZ"
      )
      .then((res) => {
        setVery("Email Enviado");
        setEmail("");
        setNome("");
        setMensagem("");
      });
  };
  return (
    <section className="contato container">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          placeholder="Nome:"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail:"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <textarea
          value={mensagem}
          onChange={({ target }) => setMensagem(target.value)}
          placeholder="Mensagem"
          required
        ></textarea>
        <Button children="Enviar" />
      </form>

      {very && <p style={{ color: "#0090DD" }}>{very}</p>}
    </section>
  );
};
export default Contato;
