import React,{useState} from 'react'
import TodoList from './TodoList.js';

const TodoApp = () => {
    const [item,setItem] = useState("");
    const [list,setList] = useState([]);
    const setItems = () => {
        setList((prev)=>{
            return [...prev,item]
            
        });
        setItem("");
    }

    const DeleteItem = (id) => {
        setList((prev)=>{
            return prev.filter((Ele,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div style={{border:'1px solid black',borderRadius:'25px',padding:'15px'}}>
            <h1>To do App</h1>
            <input placeholder="Enter Your Task" value = {item} onChange={(e)=>{setItem(e.target.value)}}/>
            <br/> <br/>
            <button onClick={setItems}>Add Item</button>
            
        </div>
        </div>
        <br/>
        <div >
                <ol style={{display:'flex',}} >
                    {
                        list.map((val,index)=>{
                            return <TodoList
                            key = {index}
                            id = {index}
                            Itemval = {val}
                            ItemDelete = {DeleteItem}
                            />
                        }
                            
                        )
                    }
                </ol>
          
        </div>
</>
    )
}

export default TodoApp
