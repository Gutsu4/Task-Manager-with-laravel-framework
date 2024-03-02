<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login',[AuthController::class,'login']);

Route::get('/tasks',[TaskController::class,'tasks']);

Route::get('/taskById/{taskId}', [TaskController::class, 'taskById']);

Route::delete('/taskDelete/{taskId}', [TaskController::class, 'taskDelete']);

Route::put('/taskUpdate/{taskId}', [TaskController::class, 'taskUpdate']);

Route::post('/addTask',[TaskController::class,'addTask']);
