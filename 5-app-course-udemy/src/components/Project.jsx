import React, { useState } from 'react';

const Project = ({project}) => {
 
  return (
    <div>
      <h1>Project</h1>
      <h2>{project.title}</h2>
    </div>
  );
};

export default Project;