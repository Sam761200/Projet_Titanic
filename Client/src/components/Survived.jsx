import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Survived = () => {
    const [survivors, setSurvivors] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}api/passenger`);
                const survivorData = response.data.filter(passenger => passenger.Survived === 1).length;
                setSurvivors(survivorData);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div className='Survived'>
            <h3>Survivants</h3>
            <p>Nombre de survivants : {survivors}</p>
        </div>
    );
};

export default Survived;
