import apiCep from "./apiCep";
const Cep = ()=>{
    return(
        <section className='Cep'>
            <div className='title'>
                <h2>Consulte o cep</h2>
                <p>Fique a vontade para consultar informarções do cep</p>
            </div>

            <div className='form'>
                <input type='number' placeholder='Digite aqui o cep' required className='cep'/>
                <button type='button' onClick={apiCep}>Buscar</button>
            </div>

            <div className='content'>
                <div className='table'>
                    <h3>Logradouro/Rua</h3>
                    <span className='rua'></span>
                </div>

                <div className='table'>
                    <h3>Bairro/Distrito</h3>
                    <span className='bairro'></span>
                </div>
                <div className='table'>
                    <h3>Localidade/Uf</h3>
                    <span className='localidade'></span>
                </div>
            </div>
        </section>
    );
}
export default Cep;