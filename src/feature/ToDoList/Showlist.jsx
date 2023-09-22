import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletelist } from './todoslice';

const Showlist = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoslice);
  return (
    <div className='listshow'>
        {list.map((item , id) => {
            return <li className='lists' key={id}> {item.type === true ? <span>{id+1}. {item.name}</span> : <strike>{item.name}</strike>} <i onClick={() => {dispatch(deletelist({id:id , type:item.type , name:item.name}))}} className={item.type === true ? "fa fa-check-circle" : "fa fa-trash"} style={{fontSize:'30px' , color:'blue'}}></i></li>
        })}
    </div>
  )
}

export default Showlist;