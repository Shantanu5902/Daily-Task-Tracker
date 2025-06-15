import React from 'react'
import AddTask from './AddTask'
import { useState } from 'react'

function Heading() {
  const [modal,setModal] = useState(false)

  return (
    <div className='flex items-center justify-center px-4 py-4'>
      <h1 className='Task text-3xl font-bold pr-10'>Daily Task Tracker</h1>
      <button className='But ' onClick={()=>setModal(true)}>+ Add Task</button>
      {modal && <AddTask onClose={()=>setModal(false)}/>}
    </div>
  )
}

export default Heading
