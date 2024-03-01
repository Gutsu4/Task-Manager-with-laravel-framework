<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task; // Taskモデルを使用

class TaskController extends Controller
{
    public function tasks()
    {
        // Taskモデルを使用して全タスクを取得
        $tasks = Task::all();

        // タスクリストをJSON形式で返す
        return response()->json($tasks);
    }

    public function taskById($taskId){

        //タスクをIDで検索
        $task = Task::find($taskId);

        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        return response()->json($task);
    }

    function taskDelete($taskId){
        $task = Task::find($taskId);
        if ($task) {
            $task->delete();
            return response()->json(['message' => 'Task successfully deleted'], 200);
        } else {
            return response()->json(['message' => 'Task not found'], 404);
        }
    }
}
