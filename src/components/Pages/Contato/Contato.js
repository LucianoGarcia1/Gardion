const Contato = ()=>{
    return(
        <div className='Contato'>
            <div className='title'>
                <h2>Entre em contato</h2>
                <p>Fique a vontade para nos enviar qualquer mensagem</p>
            </div>

            <form className='form'>
                <input type='text' placeholder='Nome' required/>
                <input type='email' placeholder='Email' required/>
                <textarea placeholder='Mensagem' required></textarea>
                <button type='button'>Enviar</button>
            </form>
        </div>
    );
}
export default Contato;