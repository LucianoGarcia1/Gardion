import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Link, 
} from 'react-router-dom';

import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
import Aside from '../Aside/Aside.js';

const Layout = ()=>{
    return(
        <div className='Layout'>
            <Header />
            <Aside />
            <Container />
        </div>
    );
}
export default Layout;