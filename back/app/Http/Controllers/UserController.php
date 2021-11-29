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
<<<<<<< HEAD
            'username' => 'min:3|max:15',
=======
            'first_name' => 'min:3|max:10',
            'last_name' => 'min:3|max:10',
            'phone_number' => 'min:8|max:15',
>>>>>>> 9ab6d793e1dbeed2e65489872cdffd4d3d4642d0
            'email' => 'min:8|max:20',
            'password' => 'min:8|max:20',
            'confirm_password' => 'min:8|max:20',
        ]);
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->confirm_password = bcrypt($request->confirm_password);

        $user->save();
        $token = $user->createToken('MyToken')->plainTextToken;

        return response()->json([
            'Message' => 'Created',
            'data' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Bad login'], 401);
        }

        $token = $user->createToken('MyToken')->plainTextToken;

        return response()->json([
            'Message' => 'Logined',
            'data' => $user,
            'token' => $token
        ]);
    }
<<<<<<< HEAD

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json(['Message' => 'Logouted']);
    }
}
=======
}
>>>>>>> 9ab6d793e1dbeed2e65489872cdffd4d3d4642d0
