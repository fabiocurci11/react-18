import React, { useState } from 'react';
import AddForm from "./components/AddForm";
import Sidebar from "./components/Sidebar";
import Project from './components/Project';

function App() {
  const titleSidebar = "Your project"
  const [dataForm, setDataForm] = useState([])
  const [showProject, setShowProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})


  const handleFormData = (data) => {
    data.id = dataForm.length + 1
    setDataForm((prevItems) => [...prevItems, data]);
  }

  const showAddProject = (bool) => {
    console.log("showAddProject")
    setShowProject(false)
  }

  const showPressedProject = (project) => {
    console.log("showPressedProject")
    console.log(project)
    setShowProject(true)
    setSelectedProject(project)
  }



  return (
    <>
      <div className="flex gap-4 h-screen pt-20 ">
        <div className="w-1/4 bg-black p-4 text-white rounded-r-lg ">
          <Sidebar
            title={titleSidebar}
            projects={dataForm}
            handleClickedProject={showPressedProject}
            handleClickAddProject={showAddProject}
          />
        </div>
        <div className="w-3/5 bg-green-500 p-4 text-white">
          {showProject
            ?
            <Project project={selectedProject}/>
            :
            <AddForm sendFormData={handleFormData} />
          }
        </div>
      </div>
    </>
  );
}

export default App;
