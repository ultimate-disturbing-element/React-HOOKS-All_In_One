import React from 'react';

const TodoList = ({ Itemval,ItemDelete,id }) => {
    return (
        <div style={{ display: 'flex', flexDirection: "row",marginRight:"20px",border:'1px solid gray',padding:'8px',borderRadius:"15px",marginBottom:"10px" }}>
            <button onClick={()=>{ItemDelete(id)}}  style={{ marginRight: '5px' }}>X</button>
            <li style={{ listStyle: 'none' }}>{Itemval}</li>
        </div>

    )
}

export default TodoList;