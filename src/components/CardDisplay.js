import React from 'react'

const prioritycolorglass = (priority) => {
  switch(priority){
    case 'High':
      return 'bg-red-500';
      case 'Medium':
        return 'bg-orange-500';
        case 'Low':
          return 'bg-green-500';
        default:
          return 'bg-gray-500'
  }
}

function CardDisplay({task}) {
  const color = prioritycolorglass(task.priority);
  return (
    <div className='flex flex-col gap-3 bg-white rounded-xl shadow-md border-l-4 border-gray-400 hover:shadow-lg'>
      <h3 className='text-xl font-bold text-gray-900 ml-3 mt-2'>{task.title}</h3>
      <p className='text-sm text-gray-500 ml-3'>{task.desc}</p>
      <div className='flex items-center ml-3'>
        <span className={`rounded-full text-xs font-semibold text-white ${color} px-3 py-1`}>{task.priority}</span>
      </div>
      <div className='text-gray-500 text-sm flex items-center ml-3 mb-4'>
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        <span>{task.dueDate}</span>
      </div>
    </div>
  )
}

export default CardDisplay
