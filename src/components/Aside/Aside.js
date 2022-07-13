import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Link, 
} from 'react-router-dom';

const Aside = ()=>{
    return(
        <aside className='Aside'>
            <ul>
                <li>
                    <Link to='/Ddd'>
                        <ion-icon name="planet-outline"></ion-icon>
                        Discagem direta
                    </Link>
                </li>
                <li>
                    <Link to='/Feriados'>
                        <ion-icon name="rocket-outline"></ion-icon>
                        Feriados
                    </Link>
                </li>
                <li>
                    <Link to='/Cep'>
                        <ion-icon name="location-outline"></ion-icon>
                        Cep
                    </Link>
                </li>
            </ul>

            <div className='colors'>

            </div>

            <div className='btnsActive'>
                <button type='button'>
                    <ion-icon name="color-palette-outline"></ion-icon>
                </button>

                <button type='button'>
                    <Link to='/Contato'><ion-icon name="chatbox-ellipses-outline"></ion-icon></Link>
                </button>
            </div>

            <span>© 2022 Gardion.vercel.app</span>
        </aside>
    );
}
export default Aside;