<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\AchievementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/achievements', 'App\Http\Controllers\AchievementController@index');
Route::post('/achievements', 'App\Http\Controllers\AchievementController@store');
Route::get('/achievements/{id}/edit', 'App\Http\Controllers\AchievementController@edit');
Route::put('/achievements/{id}', 'App\Http\Controllers\AchievementController@update');
Route::delete('/achievements/{id}', 'App\Http\Controllers\AchievementController@destroy');

Route::get('/about-me', 'App\Http\Controllers\AchievementController@index');
Route::post('/about-me', 'App\Http\Controllers\AchievementController@store');
Route::get('/about-me/{id}/edit', 'App\Http\Controllers\AchievementController@edit');
Route::put('/about-me/{id}', 'App\Http\Controllers\AchievementController@update');
Route::delete('/about-me/{id}', 'App\Http\Controllers\AchievementController@destroy');
