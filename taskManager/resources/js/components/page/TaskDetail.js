import React from "react";
import NavBar from '../parts/navBar';
import ViewTask from "../parts/viewTask";
import {EditButton , DeleteButton} from "../parts/button";
import axios from 'axios';
import { useLocation,useNavigate,useParams } from "react-router-dom";

function TaskDetail(){
    document.title = 'Task Detail';

    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search);
    const taskId = url.get('id');

    const handleDeleteClick = async () => {
        // ユーザーに確認を求める
        const isConfirmed = window.confirm("タスクを削除しますか？");
        if (isConfirmed) {
            try {
                // APIを呼び出してタスクを削除
                await axios.delete(`http://127.0.0.1:8000/api/taskDelete/${taskId}`);
                alert("タスクを削除しました");
                // タスクリストを更新するためのコードをここに追加
            } catch (error) {
                console.error("タスクの削除に失敗しました", error);
                alert("タスクの削除に失敗しました");
            }
            navigate('/home');
        }
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
