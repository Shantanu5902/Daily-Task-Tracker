import React, { useContext, useState } from 'react'
import { ActionContext } from '../App'

function AddTask({onClose}) {
    const {handleTask} = useContext(ActionContext);
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [priority,setPriority] = useState('Medium');
    const [status, setStatus] = useState('To Do');
    const [dueDate, setDueDate] = useState('');
    const handleSubmit = () => {
      onClose()
      const newTask = {
        title,
        desc,
        priority,
        status,
        dueDate
      }
      handleTask(newTask)
      setTitle('')
      setDesc('')
      setPriority('Medium')
      setStatus('To Do')
      setDueDate('')
    }
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4'>
        {/* <div className="relative bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 overflow-y-auto max-h-[90vh]"> */}
        <div className='relative bg-white rounded-xl w-full shadow-2xl p-8 mx-auto max-w-lg overflow-y-auto max-h-[90vh] opacity-100'>
        <div className='flex justify-between border-b border-gray-200 mb-6 pb-1'>
            <h1 className='text-3xl font-bold text-gray-800'>Add Task</h1>
            <button
            onClick={onClose} // Call the onClose prop (which is App's handleCloseModal)
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          </div>
        <form onSubmit={onClose} className='text-left'>
          <div className='mb-4'>
            <label className='block font-medium text-lg text-black-500 pb-2'>Title <span className='text-red-500'>*</span></label>
            <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}
            className='block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg' placeholder='Complete project report' required
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium text-lg text-black-500 pb-2'>Description</label>
            <textarea type='text' id='desc' value={desc} onChange={(e)=>setDesc(e.target.value)}
            className='block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg' placeholder='Complete project report' required
            />
          </div>
          <div className='mb-4'>
            <label className='block font-medium text-lg text-black-500 pb-2'>Priority</label>  
            <div className='flex gap-3 flex-wrap'>
            {
            ["High","Medium","Low"].map((p)=>(
              <button type='button' key={p}
                onClick={()=>setPriority(p)}
                className={`px-6 py-2 rounded-full font-semibold text-white
                  ${p==='High' && (priority === 'High' ? 'bg-red-600 shadow-md' : 'bg-red-500 hover:bg-red-600')}
                  ${p==='Medium' && (priority === 'Medium' ? 'bg-orange-600 shadow-md' : 'bg-orange-500 hover:bg-orange-600')}
                  ${p==='Low' && (priority === 'Low' ? 'bg-green-600 shadow-md' : 'bg-green-500 hover:bg-green-600')}
                  ${priority !== p && 'opacity-80 hover:opacity-100'}
                `}
              >
                {p}
              </button>
            ))
            }
            </div>
          </div>
          <div className='mb-4'>
            <label className='block font-medium text-lg pb-2 text-black-500'>Status</label>
            <select id='status' value={status} onChange={(e)=>setStatus(e.target.value)}
             className='rounded-lg border border-gray-500 px-4 py-3 block w-full bg-white text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'  
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block font-medium text-lg text-black-500 pb-2'>Due Date</label>
            <input type='date'
              id='dueDate'
              value={dueDate}
              onChange={e=>setDueDate(e.target.value)}
              className='block w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg'
            />
          </div>
          <div className='flex justify-end gap-4 border-t border-gray-300 p-4'>
            <button className='rounded-full px-6 py-3 bg-red-500 text-white' type='button' onClick={onClose}>Cancel</button>
            <button className='rounded-full px-6 py-3 bg-green-500 text-white' type='button' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default AddTask