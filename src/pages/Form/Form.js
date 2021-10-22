import React,{useState} from 'react'
import './Form.css'
import FormList from './FormList';
const Form = () => {
    const [item,setItem] = useState({
        email:'',username:'',phone_number:'',password:''
    })
    const [list,setList] = useState([]);

    const ItemSet = (e) => {
        const {value,name} = e.target;

        setItem((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const InsertItem = () => {
        setList((prev)=>{
            return [...prev,item]
        })
        setItem({
            email:'',username:'',phone_number:'',password:''
        })
    }

    const DeleteItem = (id) => {
        setList((prev)=>{
           return prev.filter((ele,index)=>{
                return index != id;
            })
        })
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <input name="email" placeholder="Enter Email" value={item.email} onChange={ItemSet} />
                <input name="username" placeholder="Enter UserName" value={item.username} onChange={ItemSet} />
                <input name="phone_number" placeholder="Enter mobile Number" value={item.phone_number} onChange={ItemSet} />
                <input name="password" placeholder="Enter Passwword" value={item.password} onChange={ItemSet} />
                <button style={{padding:'10px'}} onClick={InsertItem}>Submit Form</button>
            </div>
            <br/>
            
            
          
            <div>
            <br/>
                <table  width="100%" >
                   
                        <tr>
                            <td>Email</td>
                            <td>UserName</td>
                            <td>Mobile Number</td>
                            <td>Password</td>
                            <td>DeleteItem</td>
                            <td>UpdateItem</td>
                        </tr>
                        {
                            list.map((val,index)=>{
                                return <FormList
                                key={index}
                                id={index}
                                Itemvalue = {val}
                                ItemDelete = {DeleteItem}
                                />
                            })
                        }
                  
                </table>
            </div>
        </div>
    )
}

export default Form
