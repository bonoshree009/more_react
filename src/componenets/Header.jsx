import React from 'react';
import { Link,NavLink } from 'react-router';


const Header = () => {
    return (
        <div className='text-center text-2xl bg-amber-500 my-4 p-4'>
            <h1>this is header</h1>
           <nav >
             {/* <a href='../Home.jsx'>Home</a> */}
             <NavLink to ="/" className=""> home</NavLink>
              <NavLink to = "/contact" className=""> Contact </NavLink>
               <NavLink to ="/Pages"> pages</NavLink>
               <NavLink to ="/users"> users</NavLink>
               
             </nav>
        </div>
    );
};

export default Header;