import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistics/Statistic';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/statistic',
          element:<Statistic></Statistic>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/quiz/:quizId',
          loader: async ({params}) =>{
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element:<Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
