import React, { useContext } from 'react';
import { UidContext } from "../components/Appcontext";
import Log from "../components/Log";
import ChartForm from "../pages/ChartForm";

const Home = () => {
    const uid = useContext(UidContext);

    return (
    <div className="home">
      
      <div className="main">
        <div className="home-header">
        {uid ? <ChartForm /> : <Log signin={true} signup={false} />}
        </div>
        
        </div>
      </div>
    );
};

export default Home;