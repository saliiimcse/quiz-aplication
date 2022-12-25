import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const data = useLoaderData();
    const topics = data?.data;
    // console.log(data);
    // const contextData = createContext();
    return (
        <div className='sm:mx-24 md:mx-36 md:text-2xl'>
            <div className='home-paragraph'>
                <p className='my-10'>
                Coding is a necessary skill along with mathematics and english, but very few kids get the chance to learn programming because it is hardly ever taught in school.
                </p>
            </div>
            <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-1  place-items-center topics'>
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