import React from 'react'
import { Link } from 'react-router-dom';
//JSX

const Navbar = ()=>{

    const age = 23;
    return (
        <div>
           <nav>
<ul>
    <div className='navone'>
    <li>
        <Link to='/'>
        Home
        </Link>
        </li>
    </div>
    <div className='navtwo'>
    <li>Login</li>
    <li>
        <Link to='/register'>
    Register
        </Link>
    </li>
    </div>
</ul>
            </nav>
        </div>
    )
}

export default Navbar
