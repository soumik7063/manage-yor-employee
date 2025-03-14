import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react';

const CreateTask = () => {

    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [category, setcategory] = useState('');
    const [assignTo, setAssinTo] = useState('');
    const [description, setdescription] = useState('');
    
    const [task, settask] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault();
        settask({title,description,category,date,assignTo,active:true,newTask:false,failed:false,completed:false})

        const data = JSON.parse(localStorage.getItem('employees'));

        data.forEach(function(elem){
            if(assignTo == elem.firstname){
                elem.tasks.push(task);
            }
        })

        localStorage.setItem('employees',JSON.stringify(data));
        settitle('');
        setdate('');
        setAssinTo('');
        setcategory('');
        setdescription('');
    }
  return (
    <div className='bg-[#1C1C1C] p-12 mx-10 rounded'>
        <form onSubmit = {(e)=>{submitHandler(e)}}className='flex justify-between items-center w-full px-36 '>
            <div>
                <div >
                    <h3>Task Title</h3>
                    <input value={title} onChange= {(e)=>{settitle(e.target.value)}} className='px-2 py-1 text-sm mb-2 w-96 rounded-md text-black' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h3>date</h3>
                    <input value={date} onChange= {(e)=>{setdate(e.target.value)}} className='text-black px-2 py-1 text-sm mb-2 w-96 rounded-md ' type="date"/>
                </div>
                <div>
                    <h3>Assign to</h3>
                    <input value={assignTo} onChange= {(e)=>{setAssinTo(e.target.value)}} className='px-2 py-1 text-sm mb-2 w-96 rounded-md text-black' type="text" placeholder='employee name' />
                </div>
                <div>
                    <h3>Categories</h3>
                    <input value={category} onChange= {(e)=>{setcategory(e.target.value)}} className='px-2 py-1 text-sm mb-2 w-96 rounded-md text-black' type="text" placeholder='dev,design etc.' />
                </div>
            </div>
            <div className='flex flex-col items-enter'>
                <h3>description</h3>
                <input value={description} onChange= {(e)=>{setdescription(e.target.value)}} className= ' text-gray-900 w-96 h-44 py-2 px-4 rounded-lg ' ></input>
            <button className='text-black font-semibold bg-emerald-400 py-3 px-2 mt-3  w-25 rounded-md'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
