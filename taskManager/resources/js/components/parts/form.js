import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

export function LoginForm() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserID:', userID, 'Password:', password);

    axios.post('http://127.0.0.1:8000/api/login', {
        userId: userID,
        password: password,
      })
      .then(response => {
        console.log(response.data);
        navigate('/home');
      })
      .catch(error => {
        console.error('Error:', error.response.data);
      });


  };

  return (
    <Container className="pt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserID">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your User ID with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export function EditTaskForm(){

    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search);
    const taskId = url.get('id');
    const [task,setTask] = useState({});

    useEffect(() =>{
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/taskUpdate/${taskId}`, task);
            alert('タスクが更新されました');
            navigate('/home');
        } catch (error) {
            console.error('タスクの更新に失敗しました:', error);
            alert('タスクの更新に失敗しました');
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskDetail" className="form-label">Detail</label>
            <textarea
              className="form-control"
              id="taskDetail"
              name="detail"
              rows="3"
              value={task.detail}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      );
}


export function AddTaskForm() {
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // APIエンドポイントにPOSTリクエストを送信
            const response = await axios.post('http://127.0.0.1:8000/api/addTask', { name, detail });
            alert('タスクが追加されました');
            // フォームをリセット
            setName('');
            setDetail('');
        } catch (error) {
            console.error('タスクの追加に失敗しました', error);
            alert('タスクの追加に失敗しました');
        }
        console.log('response : ',response);
        navigate('/home');
    };

    return (
        <Container className="mt-5">
            <h2>Add New Task</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="taskName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="タスク名を入力"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="taskDetail">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="詳細を入力"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

