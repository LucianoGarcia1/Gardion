import logo from '../../../img/welcome.svg';

const Home = ()=>{
    return(
        <section className='Home'>
            <h2>Bem vindo</h2>
            <p>Fique a vontade para explorar.</p>

            <img src={logo} alt='Welcome'/>
        </section>
    );
}
export default Home;