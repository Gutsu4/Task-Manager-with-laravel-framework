<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('userID', 'password');

        // if (Auth::attempt($credentials)) {
        //     $request->session()->regenerate();

        //     // 認証成功: ステータスコード200と共にJSONレスポンスを返す
        //     return response()->json(['message' => '認証成功'], 200);
        // }

        // // 認証失敗: エラーメッセージと共にレスポンスを返す
        // return response()->json(['error' => 'ユーザーIDまたはパスワードが正しくありません。'], 401);
        return response()->json(['message' => '認証成功'], 200);
    }

}
