import React from 'react'
import Showpost from './Showpost';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.postSlice);
    console.log(posts);
  return (
    <div className='main'>
        <h1 style={{color:"#ff4d00"}}>Welcome to Amit Web</h1>
        <div className='box App'>
            <h2 style={{color:"red"}}>Create Your Post</h2>
            <form>
                <input type="text" name="name" placeholder='Enter Your Name' className='btn2' required/>
                <input type="text" name="title" placeholder='Enter Your title' className='btn2' required/>
                <textarea type="text" name="description" placeholder='Enter Your Description' className='btn3' required/>
                <div>
                    <button type="submit" className='btn4'> Post </button>
                </div>
            </form>
        </div>
        <h1>
            Posts by peoples
        </h1>
        {posts.map((item , id) => {
            return <Showpost key={id} title={item.title} description={item.description} date={item.date} name={item.name}/>;
        })}
    </div>
  )
}

export default Posts;