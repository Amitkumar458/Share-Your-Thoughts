import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addlist } from './todoslice';
import Showlist from './Showlist';

const ToDo = () => {
    const dispatch = useDispatch();
    const [val, setval] = useState("")
    let runthis = (e) => {
        e.preventDefault();
        if(val === "") return;
        dispatch(addlist(val , true));
        setval("");
    }
    let changefun = (e) => {
        setval(e.target.value);
    }
    return (
        <div className='main'>
                <h1 style={{ color: 'red'}}>Welcome to To-Do List</h1>
            <div className='box2'>
                <div style={{textAlign:'center'}}>
                    <h4>Add Your Tasks</h4>
                </div>
                <form className="group" onSubmit={runthis}>
                    <input required="" type="text" onChange={changefun} placeholder='Enter Item' value={val} className="input1"/>
                    <button type='submit' className='btn1'>Add</button>
                </form>
                <Showlist/>
            </div>
        </div>
    )
}

export default ToDo;