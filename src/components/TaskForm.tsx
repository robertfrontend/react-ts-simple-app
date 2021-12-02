import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Task } from '../interfaces/Task'

type HandleInputChage = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
    addNewTask: (task: Task) => void
}

const intialState = {
    title: '',
    description: ''
}

export default function TaskForm({addNewTask}: Props) {
    const [task, setTask] = useState(intialState)
    const inputTtile = useRef<HTMLInputElement>(null)

    const handleInputChange = ({ target: { name, value }}: HandleInputChage) => {
        setTask({...task, [name]: value})
    }

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNewTask(task)
        setTask(intialState)
        inputTtile.current?.focus()
    }

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add Task</h1>

            <form onSubmit={handleNewTask}>
                <input
                    type="text"
                    placeholder="Write a title"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.title}
                    autoFocus
                    ref={inputTtile}
                />
                <textarea
                    name="description" rows={2}
                    placeholder="Write a description"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.description}
                >
                </textarea>
                <button className="btn btn-primary w-100">
                    <span className="px-2">Save</span>
                    <BsPlusLg/>
                </button>
            </form>
        </div>
    )
}
