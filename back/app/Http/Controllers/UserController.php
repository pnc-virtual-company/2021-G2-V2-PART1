<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
    public function register(Request $request)
    {   
        $request->validate([
            'username' => 'required|max:50|regex:/^[a-zA-Z]/',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
            'confirm_password' => 'required|min:8|confirmed',
        ]);
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->confirm_password = $request->confirm_password;
        $user->save();

        return response()->json([
            'Message' => 'Created',
            'data' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Bad login'], 401);
        }
    
        return response()->json([
            'Message' => 'Logined',
            'data' => $user,
        ]);
    }

    public function logout(Request $request)
    {
        return response()->json(['Message' => 'Logouted']);
    }
}
