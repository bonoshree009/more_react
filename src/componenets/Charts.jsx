import React from 'react';
import { LineChart,Line  } from 'recharts';
import { Bar, BarChart, Tooltip } from 'recharts';

  

const data =[
  { "name": "Rahim",   "phy": 78, "chemistry": 82 },
  { "name": "Karim",   "phy": 85, "chemistry": 74 },
  { "name": "Ayesha",  "phy": 92, "chemistry": 88 },
  { "name": "Sultana", "phy": 69, "chemistry": 73 },
  { "name": "Babul",   "phy": 80, "chemistry": 65 },
  { "name": "Mitu",    "phy": 75, "chemistry": 90 },
  { "name": "Shakib",  "phy": 88, "chemistry": 85 },
  { "name": "Nusrat",  "phy": 95, "chemistry": 91 },
  { "name": "Fahim",   "phy": 60, "chemistry": 70 },
  { "name": "Rima",    "phy": 82, "chemistry": 79 }
]

const Charts = () => {
    return (
        <div>
           <LineChart width={600} height={300} data={data}>  <Line dataKey="phy" /></LineChart> 
           
<BarChart width={550} height={240}  data={data}>
  <Tooltip trigger="click" content={() => null} cursor={false} shared={false} />
  <Bar dataKey="chemistry" stackId="a" fill="green" activeBar={{ stroke: 'black', strokeWidth: 7 }} />
</BarChart>

        </div>
    );
};

export default Charts;