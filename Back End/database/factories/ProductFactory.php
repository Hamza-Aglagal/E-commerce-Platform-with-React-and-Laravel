<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(2, true),
            'desc' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 0, 1000),
            'prcAfterPromo' => $this->faker->randomFloat(2, 0, 1000),
            'img' => $this->faker->imageUrl(640, 480, 'clothes'),
            'category' => $this->faker->randomElement(['Electronics', 'Clothing', 'sports']),
        ];
    }
}
