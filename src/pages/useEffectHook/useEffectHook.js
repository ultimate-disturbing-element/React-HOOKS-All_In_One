import React, { useEffect, useState } from 'react'

const useEffectHook = () => {
    const [item,setItem ]  = useState('');
    useEffect(()=>{
        fetch('https://randomuser.me/api/').
        then(res => res.json()).
        then(data =>{
            setItem(data.results[0].name.first)
        })
    },[])
  return (
    <>
    <div>
        <h1>Random Names</h1>
        {
            item
        }
    </div>
    </>
    
  )
}

export default useEffectHook