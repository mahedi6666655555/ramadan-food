import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Single from '../singleCard/Single';

const Fetch = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI`
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data.meals))



    })
    console.log(api);
    return (
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {
                api.map(res => <Single

                    let={res}
                    key={res.idMeal}

                ></Single>)

            }
        </div>
    );
};

export default Fetch;