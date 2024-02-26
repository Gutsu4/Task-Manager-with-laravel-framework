<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TasksTableSeeder extends Seeder
{
    public function run()
    {
        // Taskモデルのファクトリーを使用して、10個のテストデータを生成・挿入
        Task::factory()->count(10)->create();
    }
}
