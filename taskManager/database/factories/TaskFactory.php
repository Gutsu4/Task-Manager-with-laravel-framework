<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
        return [
            'user_id' => \App\Models\User::factory(), // Userモデルのファクトリーを使ってユーザーIDを生成
            'name' => $this->faker->sentence, // ランダムな文を生成
            'detail' => $this->faker->paragraph, // ランダムな段落を生成
            'is_completed' => $this->faker->boolean, // 真偽値をランダムに生成
        ];
    }
}
