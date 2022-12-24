import React, { useState } from 'react';
import './Qna.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Qna = ({questionData}) => {
    const {question, options, correctAnswer, id} = questionData;
    // console.log(questionData);
    const [answer, setAnswer] = useState();
    const checkError = () =>{

    }
    const notify = (opt) => {
        if(correctAnswer == opt){
            toast("Correct 😀");
        }
        else{
            toast("Incorrect 😡");
        }
        
    }
    return (
        <div className='quiz p-3'>

            <p className='font-bold'>Question: {question}</p>
            <div className='options'>
                {
                    options.map(opt => {
                      return <div>
                      <input  onClick={() => notify(opt)} type="radio" name="options" value="ans" id={opt}/>
                      <label for={opt}>{opt}</label>
                      <ToastContainer />
                    </div>
                      
                    })
                }
            </div>
            <button onClick={()=> setAnswer(correctAnswer)} className='rounded-full bg-red-400 px-5'>See Answer</button>
            <p className='bg-green-400 inline-block mx-4'>Correct Answer: {answer}</p>
        </div>
    );
};

export default Qna;