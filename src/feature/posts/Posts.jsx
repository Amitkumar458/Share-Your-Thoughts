import React, { useEffect } from 'react'
import Showpost from './Showpost';
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from './CreatePost';
import { fetchPost } from './postSlice';


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postSlice.posts);

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    console.log(posts);
  return (
    <div className='main'>
        <h1 style={{color:"#ff4d00"}}>Welcome to Amit Web</h1>
        <div className='box App'>
            <h2 style={{color:"red"}}>Create Your Post</h2>
           <CreatePost/>
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