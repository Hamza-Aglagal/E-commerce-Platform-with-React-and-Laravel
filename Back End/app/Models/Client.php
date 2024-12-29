<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Client extends Model
{
    use HasFactory;

    public static function truncate()
    {
        DB::table('clients')->truncate();
    }

    protected $fillable = [
        'fullName',
        'email',
        'password',
    ];

    public $timestamps = false;
    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst($value),
            set: fn ($value) => strtolower($value),
        );
    }

}
