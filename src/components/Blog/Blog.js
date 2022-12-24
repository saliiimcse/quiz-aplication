import React from 'react';

const Blog = () => {
    return (
        <div className='text-lg'>
            <div className='border border-lime-400 m-4 p-4'>
            <p className='font-bold'>*what is the purpose of react router:  </p>
            <p>
                Ans: The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route
            </p>
            </div>
            <div className='border border-lime-400 m-4 p-4'>
                <p className='font-bold'>*What is the use of context API in React?</p>
                <p>Ans: Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
            </div>
            <div className='border border-lime-400 m-4 p-4'>
                <p className='font-bold'>*useRef in React</p>
                <p>Ans: useRef returns a ref object with a single current property initially set to the initial value you provided.

                On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

                Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, 
                </p>
            </div>

        </div>
    );
};

export default Blog;