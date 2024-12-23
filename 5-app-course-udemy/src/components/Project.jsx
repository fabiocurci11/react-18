import React, { useState } from 'react';

const Project = ({ project, deleteProject }) => {
    //IMPROVE - Provare ad usare useRef per l'input

    const [task, setTask] = useState([])
    const [input, setInput] = useState('')



    const handleChange = (event) => {
        console.log(event.target.value)
        setInput(event.target.value)

    };

    const handleDelete = (event) => {
        console.log("delete")
        deleteProject(project.id)

    };

    const handleAddTask = () => {
        console.log("handle add task")


        setTask((prevData) => ([
            ...prevData,
            input,
        ]));
    }

    // Funzione per rimuovere un task
    const handleRemoveTask = (taskToRemove) => {
        setTask((prevTasks) => prevTasks.filter((t) => t !== taskToRemove));
    };

    return (
        <>
            <div className='flex  justify-between'>
                <div className='flex flex-col gap-4 justify-center text-black'>
                    <div>
                        <h1 className='text-3xl font-bold'>{project.title}</h1>
                    </div>
                    <div>
                        <p className=''>{project.date}</p>
                    </div>
                    <div className='mt-3'>
                        <p className=''>{project.description}</p>
                    </div>
                    <hr className="bg-black h-0.5 border-none" />

                    <div>
                        <h2 className='text-2xl font-bold'>Tasks</h2>
                    </div>

                    <div className='flex gap-3'>
                        <input
                            id="task"
                            name="task"
                            className='pl-2'
                            type="text"
                            value={input}
                            onChange={handleChange}
                        />
                        <button onClick={handleAddTask}>Add</button>
                    </div>

                    <div>
                        {task.length > 0
                            ?
                            task.map((item, index) => {
                                return (
                                    <>
                                        <div className='flex gap-3'>
                                            <p className='font-bold' key={index}>{item}</p>
                                            <button onClick={() => handleRemoveTask(item)}>X</button>
                                        </div>
                                    </>
                                )

                            })
                            :
                            <p>Non ci sono task per questo progetto</p>
                        }
                    </div>

                </div>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default Project;