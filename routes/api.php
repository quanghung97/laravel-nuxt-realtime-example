<?php

use Illuminate\Http\Request;

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

Route::middleware('jwt.auth')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('jwt.auth')->get('users', function () {
//     return auth('api')->user();
// });
Route::post('login', 'API\LoginController@login');

Route::middleware('jwt.auth')->group(function () {
    Route::get('mes', 'API\LoginController@getMes');
    Route::get('registerchannel/auth', 'API\LoginController@registerChannel');
    Route::post('registerchannel/auth', 'API\LoginController@registerChannel');
});

