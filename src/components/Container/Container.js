import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Link, 
} from 'react-router-dom';
import Home from '../Pages/Home/Home.js';
import Ddd from '../Pages/Ddd/Ddd.js';
import Feriados from '../Pages/Feriados/Feriados.js';
import Cep from '../Pages/Cep/Cep.js';
import Contato from '../Pages/Contato/Contato.js';

const Container = ()=>{
    return(
        <div className='Container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Feriados' element={<Feriados />} />
                <Route path='/Ddd' element={<Ddd />} />
                <Route path='/Cep' element={<Cep />} />
                <Route path='/Contato' element={<Contato />} />
            </Routes>
        </div>
    );
}
export default Container;