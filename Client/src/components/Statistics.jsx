import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = () => {
    const [ages, setAges] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}api/passenger`);
                const ageData = response.data.map(passenger => passenger.Age).filter(age => age != null);
                setAges(ageData);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    const calculateMean = (data) => {
        if (data.length === 0) return 0;
        const total = data.reduce((acc, val) => acc + val, 0);
        return total / data.length;
    };
    
    const calculateStandardDeviation = (data, mean) => {
        if (data.length === 0) return 0;
        const squareDiffs = data.map(value => (value - mean) ** 2);
        const avgSquareDiff = calculateMean(squareDiffs);
        return Math.sqrt(avgSquareDiff);
    };

    const mean = calculateMean(ages);
    const stdDev = calculateStandardDeviation(ages, mean);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <h3>Statistiques</h3>
            <p>Moyenne de l'âge : {mean.toFixed(2)}</p>
            <p>Écart type de l'âge : {stdDev.toFixed(2)}</p>
        </div>
    );
};

export default Statistics;
