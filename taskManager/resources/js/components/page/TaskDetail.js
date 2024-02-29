import React from "react";
import NavBar from '../parts/navBar';
import ViewTask from "../parts/viewTask";
import {EditButton , DeleteButton} from "../parts/Button";

function TaskDetail(){
    document.title = 'Task Detail';

    const handleDeleteClick = () => {
        console.log("Delete");

    };

    const handleEditClick = () => {
        console.log("Edit");
    };

    return (
        <div>
            <NavBar />
            <ViewTask />
            <EditButton onClick={handleEditClick}></EditButton>
            <DeleteButton onClick={handleDeleteClick}></DeleteButton>
        </div>
    );
}


export default TaskDetail;
