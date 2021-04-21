<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/{url?}', function () {
//     return view('welcome');
// })->where('', '.*');

// Route::get('/{path?}', function () {
//     return view('welcome');
// })->where('path', '.*');

Route::view('/{path}', 'welcome')->where('path', '.*');