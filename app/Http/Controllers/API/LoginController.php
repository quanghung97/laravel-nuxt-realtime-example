<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\User;
use App\Events\PrivateMessage;
use Illuminate\Support\Facades\Broadcast;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // lấy thông tin từ các request gửi lên
        $credentials = $request->only('email', 'password');

        try {
            // xác nhận thông tin người dùng gửi lên có hợp lệ hay không
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // Xử lý ngoại lệ
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = auth()->user();
        //$token = JWTAuth::fromUser($user);
        //dd($user);
        //    event(new PrivateMessage('message', $user, 1));
        // xác nhận thành công thì trả về 1 token hợp lệ
        return response()->json(['token' => $token, 'email' => $user->email, 'id' => $user->id, 'name' => $user->name]);
    }

    public function getMes(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        broadcast(new PrivateMessage('sfgdhfjgk', $user, $user->id));

        return response()->json(['status' => 'ok']);
    }

    public function registerChannel(Request $request)
    {
        $request = JWTAuth::toUser($request->token);
        //$request->user() = $request;
        // $request->channel_name = 'xxx';
        //return $request->user()->reflash();
        //$request->user() = $request;
        dd($request);
        //return Broadcast::auth($request);
    }
}
