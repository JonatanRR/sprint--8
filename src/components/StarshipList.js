import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const StarshipList = () => {
    let page = 1;
    const [starship, setStarship] = useState([]);
    const loadMore = () => {
        axios(`https://swapi.dev/api/starships/?page=${page}`)
        .then(response => {
            const newStarship = [];
            response.data.results.forEach( item => newStarship.push({
                name : item.name,
                model: item.model
            }));
            setStarship((oldStarship )=> [...oldStarship, ...newStarship]);        
        });
        page = page + 1;
    };
    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
            loadMore();
        }
    }

    useEffect(() => {
        loadMore();
        window.addEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            {starship.map((item, index) => {
                return (
                    <>
                        <div className='cards' key={item}>
                            <Link to={`/starship/${item.name}`} className='links' key={index}>
                                <h3 key={index}>{item.name}</h3>
                                <p key={item.model}>{item.model}</p>
                            </Link>
                        </div>
                    </>
                ) 
            })}
        </>
        
    );
}