import React, { useState } from 'react'
import DATA from './DATA.json';
import './Filter.css'
const Filter = () => {
    const [item,setItem] = useState([]);
    return (
        <div className="filterApp">
            <input placeholder='Search' onChange={(e)=>setItem(e.target.value)} value={item} type="text"/>
            {
                DATA.filter((val)=>{
                    if(item == ""){
                        return val
                    } else if(val.country.toLowerCase().includes(item.toLowerCase())){
                        return val
                    }
                }).map((val,key)=>{
                    return <div className="data" key={key}>
                        <p>
                            {val.country}
                        </p>
                        </div>
                })
            }
        </div>
    )
}

export default Filter
