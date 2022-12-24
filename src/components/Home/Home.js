import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const data = useLoaderData();
    const topics = data?.data;
    // console.log(data);
    // const contextData = createContext();
    return (
        <div className='sm:mx-24 md:mx-36 md:text-2xl'>
            <div>
                <p className='my-10'>
                Coding is a necessary skill along with mathematics and english, but very few kids get the chance to learn programming because it is hardly ever taught in school.
                </p>
            </div>
            <div className='grid grid-cols-4 gap-4 place-items-center'>
                {
                    topics.map(topic => <Topics
                    key={topic.id}
                    topicData={topic}
                    ></Topics>)
                }
            </div>

        </div>

    );
};

export default Home;