import React from 'react'
import CardDisplay from './CardDisplay'

function TaskSection({title,task}) {
  return (
    <div className='flex flex-col bg-gray-50 rounded-xl shadow-md gap-4 p-6 overflow-y-auto max-h-[calc(100vh-160px)]'>
      <h1 className='text-2xl font-bold text-gray-800 pb-3 mb-2 border-b-2 border-gray-200'>{title}</h1>
      <div className='flex flex-col gap-4'>
        {
            task.length > 0?(
                task.map((task) => (
                    <CardDisplay key={task.id} task={task}/>
                ))
            )
            :
            <p className='text-center py-4 text-gray-500'>No tasks in this column.</p>
        }
      </div>
    </div>
  )
}

export default TaskSection
