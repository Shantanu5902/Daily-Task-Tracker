import { createContext, useState } from 'react';
import './App.css';
import Heading from './components/Heading'
import TaskSection from './components/TaskSection';
export const ActionContext = createContext();

function App() {
  const handleTask = (prop) => {
  const taskwithId = {...prop,id:Date.now()};
  setTask(prev => [...prev,taskwithId]);
}
  const [tasks,setTask] = useState([])
  const todoTasks = tasks.filter(task => task.status === 'To Do');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const doneTasks = tasks.filter(task => task.status === 'Done');

  return (
    <div className='App min-h-screen flex flex-col bg-gray-100'>
    <ActionContext.Provider value={{handleTask}}>
    <div className="Bar">
      <Heading/>
    </div>
    </ActionContext.Provider>
    <div className='flex-1 gap-6 w-full max-w-6xl p-4 mx-auto grid grid-cols-1 md:grid-cols-3'>
    <TaskSection task={todoTasks} title="To Do"/>
    <TaskSection task={inProgressTasks} title="In Progress"/>
    <TaskSection task={doneTasks} title="Done"/>
    </div>
    </div>
  );
}

export default App;
