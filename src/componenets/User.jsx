import React, { Suspense, useState } from 'react';
import { NavLink} from 'react-router';
import SingleData from './SingleData';

const User = ({User}) => {
    const singledata = fetch(`https://jsonplaceholder.typicode.com/users/${User.id}`).then(res => res.json())
     const [details ,setdetails] = useState(false)
   
    return (
        <div className='border-2 border-blue-700 w-max-[1240px] mx-auto text-center my-4 p-4'>
            <p>{User.name}</p>
            <p>{User.phone}</p>
            <p className='mb-3'>{User.website}</p>
            <NavLink  className="bg-amber-300 p-2 rounded-2xl" to={`/users/${User.id}`}>show more</NavLink>
            <button  className="bg-amber-300 p-2 rounded-2xl" onClick={()=> setdetails(!details)}>
                { details ? 'hide': "show details"}</button>

                {
                    details && <Suspense  fallback={"data loadiing.."} >
                        <SingleData singledata={singledata}></SingleData>
                    </Suspense>
                }

        </div>
    );
};

export default User;