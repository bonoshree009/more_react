import React, { use } from 'react';

const SingleData = ({singledata}) => {
   
    const data = use(singledata)
    console.log(data)
    return (
        <div>
            <p>{data.name}</p>
           <p>{data.email}</p>
        </div>
    );
};

export default SingleData;