import React from 'react'

const FormList = ({Itemvalue,ItemDelete,id}) => {
    return (
       
            <tr>
                <td>{Itemvalue.email}</td>
                <td>{Itemvalue.username}</td>
                <td>{Itemvalue.phone_number}</td>
                <td>{Itemvalue.password}</td>
                <td><button onClick={()=>{ItemDelete(id)}}>Delete</button></td>
                <td><button>Update</button></td>
            </tr>
        
    )
}

export default FormList
