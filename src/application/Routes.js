import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StarshipDetail from '../components/StarshipDetail';
import Home from '../pages/Home';
import Starship from '../pages/Starship';

export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>} />
            <Route path="/starship/" element={<Starship/>} />
            <Route path='/starship/:id' element= {<StarshipDetail/>} />
        </Routes>
    </BrowserRouter>
);