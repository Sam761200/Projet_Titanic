import React, {useEffect, useState} from 'react';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  

const Graphique = ( {Data, Sex, Age, Pclass} ) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const [selectedData,setSelectedData] = useState(null)
  

    const passengerAge = [Age]
    
    const passengerSex = [Sex]
    
    const passengerPclass = [Pclass]
    
    const tableLength = [Data.length]
    

    const options = {
        maintainAspectRatio:true,
    }
    

    console.log(Sex, Pclass, Age)
        useEffect(() => {

            const dataGraphAge = {
                labels: [`Il y'a ${tableLength} Passagers âgé de ${passengerAge} ans`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers âgé de ${passengerAge} ans`,
                        data: [`${tableLength}`],
                        backgroundColor: ["green"],
                    },
                ],
            }
        
            const dataGraphSex = {
                labels: [`Il y'a ${tableLength} de passagers ${passengerSex}`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} de passagers ${passengerSex}`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Blue"],
                    },
                ],
            }
        
            const dataGraphPclass = {
                labels: [`Il y'a ${tableLength} Passagers dans la class ${passengerPclass}`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers dans la class ${passengerPclass}`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Red"],
                    },
                ],
            }
        
            const dataGraphAgeAndSex = {
                labels: [`Il y'a ${tableLength} Passagers ayant ${passengerAge} et de sex ${passengerSex}`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers ayant ${passengerAge} et de sex ${passengerSex}`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Brown"],
                    },
                ],
            }
        
            const dataGraphAgeAndPclass = {
                labels: [`Il y'a ${tableLength} Passagers ayant ${passengerAge} présent dans la class ${passengerPclass}`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers ayant ${passengerAge} présent dans la class ${passengerPclass}`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Brown"],
                    },
                ],
            }
            
            const dataGraphSexAndPclass = {
                labels: [` Il y'a ${tableLength} Passagers de sexe ${passengerSex} présent dans la class ${passengerPclass}`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers de sexe ${passengerSex} présent dans la class ${passengerPclass}`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Brown"],
                    },
                ],
            }
        
            const dataGraphSexAndPclassAndAge = {
                labels: [`Il y'a ${tableLength} Passagers de sexe ${passengerSex} présent dans la class ${passengerPclass} et ayant ${passengerAge} ans`],
                datasets : [
                    {
                        label: `Il y'a ${tableLength} Passagers de sexe ${passengerSex} présent dans la class ${passengerPclass} et ayant ${passengerAge} ans`,
                        data: [`${tableLength}`],
                        backgroundColor: ["Brown"],
                    },
                ],
            }
    
            if(Sex && Pclass && Age) {
                setSelectedData(dataGraphSexAndPclassAndAge)
            }
            else if (Age !=="" && Sex !=="disabled") {
                setSelectedData(dataGraphAgeAndSex)
            }
            else if (Age !=="" && Pclass !=="disabled") {
                setSelectedData(dataGraphAgeAndPclass)
            }
            else if (Sex !=="disabled" && Pclass !=="disabled") {
                setSelectedData(dataGraphSexAndPclass)
            }
            else if (Age !== "") {
                setSelectedData(dataGraphAge)
            }
            else if (Sex !=="disabled") {
                setSelectedData(dataGraphSex)
            }
            else if (Pclass !=="disabled") {
                setSelectedData(dataGraphPclass)
            }
        }, [Data, Sex, Age, Pclass, setSelectedData])
        

    return (
        <div className='Graphique'>
             <div> {selectedData && <Bar data={selectedData} option={options} />}
            </div>  
        </div>
    );
};

export default Graphique;