import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qna from '../Qna/Qna';

const Quiz = () => {
    const quizData = useLoaderData();
    const {questions} = quizData.data;

    return (
        <div>
            <h1 className='text-xl'>Quiz pag</h1>
            <div>
                {
                    questions.map(qns => <Qna
                        key={qns.id}
                        questionData={qns} 
                    ></Qna>)
                }
            </div>
        </div>

    );
};

export default Quiz;