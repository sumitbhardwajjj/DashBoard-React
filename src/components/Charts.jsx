import React from 'react'
import '../styles/Charts.css'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Charts = ({aspect}) => {

  const data = [
  {name:'January',Total:1200},
  {name:'Feburary',Total:1000},
  {name:'March',Total:800},
  {name:'April',Total:600},
  {name:'May',Total:1100},
  {name:'June',Total:1500},
  ];

  
  return (
    
     <div className='chart'>
      <div className='revenue'>Last Six Months (Revenue)</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
     </div>
    
  )
}

export default Charts
