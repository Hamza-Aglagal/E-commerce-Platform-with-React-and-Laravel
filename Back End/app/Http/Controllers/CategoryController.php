<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function AddCategory(Request $request){

        $validatedData = $request->validate([
            'name' => 'required|unique:categories',
            'img' => 'required|image',
        ]);

        $Category = new category();
        $Category->name = $validatedData['name'];

        $imageName = time() . '.' . $request->file('img')->getClientOriginalExtension();
        $request->file('img')->move(public_path('Categories/'), $imageName);
        $Category->img = $imageName;

        $Category->save();
        return response()->json(['success' => true]);
    }


    public function ShowCategory(){
        $Categories = category::all();
        return $Categories;
    }
}




