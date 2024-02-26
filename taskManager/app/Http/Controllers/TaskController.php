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
}
