import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tasks');
      setTasks(response.data); // APIから取得したデータをセット
    } catch (error) {
      console.error('タスクの取得に失敗しました:', error);
    }
  };

  return (
    <div>
      <h2>Tasks List</h2>
      {/* Bootstrapテーブルを使用 */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Detail</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.name}</td>
              <td>{task.detail}</td>
              <td>{task.is_completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
