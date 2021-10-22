import React from 'react'
import { Link } from 'react-router-dom'
import TodoApp from './pages/ToDoApp/TodoApp'
const Home = () => {
    return (
        <div style={{ display: 'flex'}}>
            <Link to="/todoApp" style={{marginRight:'5px'}}>
                <button>TodoApp</button>
            </Link>
            <Link to="/form" style={{marginRight:'5px'}} >
                <button>Form</button>
            </Link>
            <Link to="/filter" style={{marginRight:'5px'}}>
                <button>FilterSearch</button>
            </Link>

        </div>
    )
}

export default Home
