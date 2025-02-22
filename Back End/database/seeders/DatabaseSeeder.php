<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(10)->create();

        //Product::factory()->create([
        //    'name' => 'Test User',
        //    'email' => 'test@example.com',
        // ]);
    }
}
