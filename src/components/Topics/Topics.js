import React from 'react';
import { Link } from 'react-router-dom';


const Topics = ({topicData}) => {
    const {name, logo, id} = topicData

    return (
        <div className='border-2 border-green-400 my-3 p-12'>
            <div>
                <h1>{name}</h1>
                <img className='w-24 h-24 m-3' src={logo} alt="" />
                <Link to={`./quiz/${id}`} className='rounded-lg rounded-lg bg-green-300 px-6'>Details</Link>
            </div>
        </div>
    );
};

export default Topics;