import React, { useState } from 'react';

const Sidebar = ({ title, projects, handleClickedProject, handleClickAddProject }) => {

    const handleAddProject = () => {
        handleClickAddProject((bool) => true)
    };

    const handleSidebarProject = (project) => {
        console.log("project: ")
        console.log(project)
        handleClickedProject(project)
    };

    //console.log(Object.keys(projects).length)
    console.log("Project created: " + projects.length)

    return (
        <>
            <div className='flex flex-col gap-20 pt-10 text-center items-center'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold uppercase'>{title}</h1>
                    <button
                        className='bg-slate-800 rounded-lg p-2'
                        onClick={handleAddProject}>
                        + Add project
                    </button>
                </div>

                <div className="">
                    {projects.length > 0
                        ?
                        projects.map((item, index) => {
                            return (
                            <h2
                                className="cursor-pointer "
                                key={index}
                                onClick={() => handleSidebarProject(item)}>
                                {item.title}
                            </h2>
                            )
                        })
                        :
                        <h2>Nessun progetto creato</h2>
                    }
                </div>
            </div>
        </>
    );
};

export default Sidebar;