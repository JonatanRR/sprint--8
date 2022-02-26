import React from 'react';
import {StarshipList} from '../components/StarshipList';
import Head from '../components/Head';

function Starship() {

    return(
        <>
            <Head />
                <div className="App">
                <div className= "content">
                    <StarshipList />
                </div>
                </div>
        </>
    );
}

export default Starship;