<?php

namespace App\Http\Controllers;

use App\Jobs\DeleteToken;
use App\Mail\ForgetPassword;
use App\Mail\MailWelcome;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    //
    public function register(Request $request){

        //Client::truncate();

        $validatedData = $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email|max:255',
            'password' => 'required|string|min:8|max:255',
        ]);

        $client = new Client;
        $client->fullName = $validatedData['fullName'];
        $client->email = $validatedData['email'];
        $client->password = Hash::make($validatedData['password']);
        $client->save();

        // sent Mail Welcome
        if($client->email === 'ftyuiobaba@gmail.com'){
            Mail::to($client->email)->send(new MailWelcome($client)) ;
        }


        return response()->json(['success' => true, 'product' => $client,]);
    }


    public function login(Request $req){

        $validatedData = $req->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $CLient = Client::where('email', $req->email)->first();
        if($CLient && Hash::check($req->password, $CLient->password)){
            return $CLient ;
        }else{
            return ['error'=> " Email or Password is not matched"];
        }

    }

    public function ForgetPassword( Request $request){
        $Validation = $request->validate([
           'email'=> 'required|email|exists:clients,email'
        ]);

        $token = str::random(40);
        $url = 'http://localhost:3000/reset-password/token/'.$token  ;

        $Client = Client::where('email',$Validation['email'])->first();
        $Client->token = $token;
        $Client->save();

        // sent Mail
        Mail::to($Validation['email'])->send(new ForgetPassword($url)) ;
    }

    public  function ResetPassword(Request $request){
        $validatedData = $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'token' => 'required|exists:clients,token',
        ]);

        /*if($validatedData['confirmPass'] != $validatedData['password']){
            return ['error'=> " your password is not identical "];
        }*/

        $Client = Client::where('token',$validatedData['token'])->first();
        $Client->password = Hash::make($validatedData['password']);
        $Client->save();
    }
}








