import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Head from '../components/Head';


const Home = () => {

    return(

    <div>
        <Head className/>
            <div className='principal'>
                <div className='textTitle text-center'>
                    <h1 className='firstTitle text-center'>¡Descubre toda la información de tus naves favoritas!</h1>
                    <Link to="/starship" className=''><button className='buttonFisrst'>STARSHIP</button></Link>                
                </div>
            </div>
    </div>
    )
}

export default Home;