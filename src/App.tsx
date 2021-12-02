import { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import logo from './logo.svg'

interface PropsApp {
  title?: string
}

export default function App({ title }: PropsApp) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn react",
      description: "Learn TypeScript",
      completed: false
    },
  ])

  const getCurrentTimestam = (): number => new Date().getTime()

  // agregar tarea
  const addNewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimestam(), completed: false}])


  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  return (
    <div className="bg-dark text-white" style={{minHeight: '100vh'}}>
      {/* navbar */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="React Logo" style={{ width: '4rem' }} />
            {title ? (
              <h1>{title}</h1>
            ) : (
                'React and TypeScript'
            )}
          </a>
        </div>
      </nav>


      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
