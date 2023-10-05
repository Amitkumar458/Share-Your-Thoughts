import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletelist } from './todoslice';

const Showlist = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoslice);
  let c = 0;
  return (
    <div className='listshow'>
        {list.map((item , id) => {
          if(item.type === true){
            c++;
            return <li className='lists' key={id}> <span>{c}. {item.name}</span> <i onClick={() => {dispatch(deletelist({id:id , type:item.type , name:item.name}))}} className="fa fa-check-circle button1" style={{fontSize:'30px' , color:'blue'}}></i></li>
          }
        })}
        <div style={{textAlign:'center' , fontSize:'20px' , color:'red' , fontWeight:'600'}}>Tasks completed</div>
        {list.map((item , id) => {
          if(item.type === false){
            return <li className='lists' key={id}> <strike>{item.name}</strike> <i onClick={() => {dispatch(deletelist({id:id , type:item.type , name:item.name}))}} className="fa fa-trash button1" style={{fontSize:'30px' , color:'blue'}}></i></li>
          }
        })}
    </div>
  )
}

export default Showlist;