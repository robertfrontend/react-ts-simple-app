import { Task } from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props {
    tasks: Task[],
    deleteTask: (id: number) => void
}

export default function TaskList({ tasks, deleteTask }: Props) {
    return (
         <>
            {tasks.map((task, index) => (
                <div className='col-md-4 my-2' key={index}>
                    <TaskCard task={task} deleteTask={deleteTask}/>
                </div>
            ))}
         </>
         
    )
}
