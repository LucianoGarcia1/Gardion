import apiFerias from './apiFerias';
const Feriados = ()=>{
    return(
        <section className='Feriados'>
            <div className='title'>
                <h2>Feriados nacionais</h2>
                <p>Fique a vontade para visualizar os feriados nacionais</p>
            </div>

            <div className='form'>
                <button type='button' onClick={apiFerias}>Veja aqui</button>
            </div>

            <div className='content sub-content'>
        
            </div>
        </section>
    );
}
export default Feriados;