import apiDiscagem from "./script.js";

const Ddd = ()=>{
    return(
        <section className='Discagem'>
            <div className='title'>
                <h2>Discagem direta a distância</h2>
                <p>Fique a vontade para explorar o  ddd</p>
            </div>

            <div className='form'>
                <input type='number' placeholder='Digite aqui um ddd' required className='ddd'/>
                <button type='button' onClick={apiDiscagem}>Buscar</button>
            </div>

            <div className='content'>

            </div>
        </section>
    );
}
export default Ddd;