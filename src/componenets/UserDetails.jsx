import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user =useLoaderData()
        const  navi = useNavigate()
        const handlebtn=()=>{
            navi(-1)
        }
    console.log(user)
    return (
        <div>
           <p>{user.name}</p>
         <button className='btn ml-3 bg-amber-900 text-white' onClick={ handlebtn}>go back</button>

        </div>
    );
};

export default UserDetails;