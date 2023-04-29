import { useState } from 'react'
import Header from './components/Header'
import Task from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState ()
  const [tasks, setTasks] = useState ([ 
    {
      id:1,
      text:'Takimi me dentisten',
      day: '12 Prill',
      reminder: true,
    }
  ])

  const addTask = (task) => {
    const id=Math.floor(Math.random() * 10000) +1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No tasks to show')}
    </div>
  )
}
export default App