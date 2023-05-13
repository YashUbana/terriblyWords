import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Histogram =({passed})=>{

  return(
    <div>

        <BarChart
          width={1550}
          height={300}
          data={passed}
          
          
          style={{ position: 'absolute',
        top: '0', bottom:'0', left:'0',right:'0', margin: 'auto'}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey= {"name"}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"num"} fill="#8884d8" />
        </BarChart>
    </div>
  )

}

export default Histogram