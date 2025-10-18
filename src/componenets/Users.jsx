import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const users = useLoaderData()
   
    return (
        <div>
         {
            users.map(user => <User User={user}></User>)
         }
        </div>
    );
};

export default Users;