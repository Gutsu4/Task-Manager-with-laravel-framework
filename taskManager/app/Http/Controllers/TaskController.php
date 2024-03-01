<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task; // Taskモデルを使用
use Illuminate\Support\Facades\Validator;

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

    public function taskUpdate(Request $request, $taskId)
    {
        // バリデーションルール
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'detail' => 'required|string',
            // その他の必要なバリデーションルールを追加
        ]);

        // バリデーションエラーの場合
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // 指定されたIDのタスクを検索
        $task = Task::find($taskId);

        // タスクが存在しない場合
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        // タスクの更新
        $task->update([
            'name' => $request->name,
            'detail' => $request->detail,
            // 必要に応じて他のフィールドも更新
        ]);

        // 更新後のタスクをレスポンスとして返す
        return response()->json($task, 200);
    }
}
