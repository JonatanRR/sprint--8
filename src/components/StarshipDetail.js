import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../components/Head';

const StarshipDetail = () => {
    const { id } = useParams();
    //let page = 1;
    const [page, setPage] = useState(1);
    const [starship, setStarship] = useState([]);
    const loadMore = () => {
        axios(`https://swapi.dev/api/starships/?page=${page}`)
        .then(response => {
            const newStarship = [];
            response.data.results.forEach( item => newStarship.push({
                name : item.name,
                model: item.model,
                manufacturer: item.manufacturer,
                cost_in_credits: item.cost_in_credits,
                length: item.length,
                max_atmosphering_speed: item.max_atmosphering_speed,
                crew: item.crew,
                passengers: item.passengers,
                cargo_capacity: item.cargo_capacity,
                consumables: item.consumables,
                hyperdrive_rating: item.hyperdrive_rating,
                MGLT: item.MGLT,
                starship_class:item.starship_class,
                films: item.films
            }));
            setStarship((oldStarship )=> [...oldStarship, ...newStarship]);        
        });
    };
    
    useEffect(() => {
        loadMore();
        setPage(page + 1);
    }, [starship]);    

    const list = 
        starship.map((item, index) => {
            if(item.name === id) {

                return (
                    <div key= {index}>
                        <Head />
                        <div className='text-center'>
                            <h1>{item.name}</h1>
                            <div className='cards2 container' key={item}>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    <div className='col-6'>
                                        <img src={`https://starwars-visualguide.com/assets/img/starships/${index}.jpg`} className="imageShip"/>
                                    </div>
                                    <div className='col-6 text-start'>
                                        <p className='columnDetail'><b>Model: </b>{item.model}</p>
                                        <p className='columnDetail'><b>Manufacturer: </b>{item.manufacturer}</p>
                                        <p className='columnDetail'><b>Cost in Credits: </b>{item.cost_in_credits}</p>
                                        <p className='columnDetail'><b>Length: </b>{item.length}</p>
                                        <p className='columnDetail'><b>Max Atmosphering Speed: </b>{item.max_atmosphering_speed}</p>
                                        <p className='columnDetail'><b>Crew: </b>{item.crew}</p>
                                        <p className='columnDetail'><b>Passengers: </b>{item.passengers}</p>
                                        <p className='columnDetail'><b>Cargo capacity: </b>{item.cargo_capacity}</p>
                                        <p className='columnDetail'><b>Consumables: </b>{item.consumables}</p>
                                        <p className='columnDetail'><b>Hyperdrive Rating: </b>{item.hyperdrive_rating}</p>
                                        <p className='columnDetail'><b>MGLT: </b>{item.MGLT}</p>
                                        <p className='columnDetail'><b>Starship Class: </b>{item.starship_class}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) 
            }
    });

    return(
        <>
            <div>                
                {list}
            </div>
        </>
    );


}


export default StarshipDetail;