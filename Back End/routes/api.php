<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// Auth CLient
Route::post('register',[ClientController::class, 'register']);
Route::post('login',[ClientController::class, 'login']);
Route::post('ForgetPassword',[ClientController::class, 'ForgetPassword']);
Route::post('ResetPassword',[ClientController::class, 'ResetPassword']);

// Auth Admin
Route::post('loginAdmin',[AdminController::class, 'login']);



// CRUD Products
Route::post('AddProduct',[ProductController::class, 'AddProduct']);
Route::get('showProducts',[ProductController::class, 'showProducts']);
Route::delete('deleteProduct/{id}',[ProductController::class, 'deleteProduct']);
Route::post('editProducts/{id}',[ProductController::class, 'editProducts']);
Route::post('updateProducts/{id}',[ProductController::class, 'updateProducts']);

// CRUD Brand
Route::post('AddBrand',[BrandController::class, 'store']);
Route::get('ShowBrand',[BrandController::class, 'show']);


// CRUD Category
Route::post('AddCategory',[CategoryController::class, 'AddCategory']);
Route::get('ShowCategory',[CategoryController::class, 'ShowCategory']);


