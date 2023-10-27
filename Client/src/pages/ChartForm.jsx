import axios from 'axios';
import React, {useState} from 'react';
import Graphique from '../components/Graphique';
import Statistics from '../components/Statistics';
import Survived from '../components/Survived';
import Logout from "../components/Log/logout"

const ChartForm = () => {

  const [Sex, setSex] = useState("");
  const [Age, setAge] = useState("");
  const [Pclass, setPclass] = useState("");

  const [Data, setData] = useState(null);
  const [graphique, setGraphique] = useState(false);


  const handleChart = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${import.meta.env.VITE_REACT_APP_API_URL}api/passenger/ByFilter`,
      withCredentials: true,
      data: {
        Sex,
        Age,
        Pclass,
      },
    })
       .then((res) => {
         setData(res.data)
         setGraphique(true)
         console.log(Data)
      })
       .catch((err) => {
         console.log(err);
       });
   };

   const handleReset = () => {
    setSex("");
    setAge("");
    setPclass("");
    setData(null);
    setGraphique(false);
  };


    return (
      <>
      <Logout />
      <Statistics />
      <Survived />

      <form action="" onSubmit={handleChart} id="Chart-form">

      <select
        placeholder='Choississez un sexe'
        name="Sex"
        id="Sex"
        onChange={(e) => setSex(e.target.value)}
        value={Sex}
      >
      <option value="disabled">Choissisez un sexe</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      </select>
      <br />
      <br />

      <label htmlFor="Age">Age</label>
      <br />

      <input
        type="number"
        name="Age"
        id="Age"
        onChange={(e) => setAge(e.target.value)}
        value={Age}
      />
      <br />
      <br />

      <select
        placeholder='Choississez une classe'
        name="Pclass"
        id="Pclass"
        onChange={(e) => setPclass(e.target.value)}
        value={Pclass}
      >
      <option value="disabled">Choissisez une classe</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </select>

      <br />
      <br />
      <input type="submit" value="Submit" />
      <button type="button" onClick={handleReset} className='Reinitialiser'>Réinitialiser</button> 
    </form>
    
    {graphique && <Graphique Data = {Data} Sex = {Sex} Age = {Age} Pclass = {Pclass}/>}
    </>
    );
};

export default ChartForm;