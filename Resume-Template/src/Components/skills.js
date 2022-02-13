import React from "react";
import LinearProgress from '@mui/material/LinearProgress';

function Skills(){
    return(
    <div >
        <h2 className="header">SKILLS</h2>
        <p>node js </p>
        <LinearProgress label = "node js" labelPosition="side" variant="determinate" value={80} />
        <p>react    <LinearProgress variant="determinate" value={60} /></p>
        <p>mongo db   <LinearProgress variant="determinate" value={40} /></p>
    </div>
    )
}
export default Skills;