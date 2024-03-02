import React from "react";
import { EditTaskForm } from "../parts/form";
import NavBar from "../parts/navBar";

function EditTask(){

    const handleSubmit = () => {
        console.log("変更します");
    };

    return(
        <div>
            <NavBar></NavBar>
            <EditTaskForm onSubmit={handleSubmit}></EditTaskForm>
        </div>
    );
};


export default EditTask;
