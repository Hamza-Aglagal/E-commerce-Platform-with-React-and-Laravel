<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    //
    public function login(Request $req){

        $validatedData = $req->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8|max:255',
        ]);

        if($validatedData){
            $Admin = Admin::where('email', $req->email)->first() ;
            if($Admin && $validatedData['password'] === $Admin->password ){
                return 'true' ;
            }else{
                return ['error'=> " Email or Password is not matched"];
            }
        }

    }
}
