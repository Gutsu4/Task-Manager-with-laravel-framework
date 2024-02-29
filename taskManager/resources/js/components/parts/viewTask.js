import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function ViewTask(){

    const [task,setTask] = useState({});
    const location = useLocation();
    const url = new URLSearchParams(location.search);
    const taskId = url.get('id');

    useEffect(() => {
        fetchTask(taskId);
    },[taskId]);

    const fetchTask = async (taskId) => {
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/taskById/${taskId}`);
            setTask(response.data);
            console.log(response.data);
        }catch(error){
            console.error('タスクの取得に失敗しました:', error);
        }
    };

    return (
        <div>
            <h4 className="mb-3 text-secondary">View Task</h4>
            <table className="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Detail</th>
                <th scope="col">Completed</th>
            </tr>
            </thead>
            <tbody>
                <tr key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>{task.detail}</td>
                <td>{task.is_completed ? 'Yes' : 'No'}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );

}

export default ViewTask;
