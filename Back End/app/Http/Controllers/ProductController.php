<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function AddProduct(Request $req){

        $validatedData = $req->validate([
            'name' => 'required',
            'desc' => 'required',
            'price' => 'required|numeric',
            'prcAfterPromo' => 'numeric',
            'img' => 'required|image',
            'category' => 'required',
        ]);

        $product = new Product();
        $product->name = $validatedData['name'];
        $product->desc = $validatedData['desc'];
        $product->price = $validatedData['price'];
        $product->prcAfterPromo = $validatedData['prcAfterPromo'];

        $imageName = time() . '.' . $req->file('img')->getClientOriginalExtension();
        $req->file('img')->move(public_path('products/'), $imageName);
        $product->img = $imageName;

        $product->category = $validatedData['category'];
        $product->save();

        // event
        event (new \App\Events\AjouterProduct());

        return response()->json(['success' => true, 'product' => $product,]);

    }

    public function showProducts (){
        return Product::all();
    }

    public function deleteProduct($id){

        $result = Product::where('id', $id)->delete();
        if ($result){
            return 'is deleted';
        }
    }

    public function editProducts($id){
        $product = Product::findOrFail($id);
        return $product;
    }

    public function updateProducts(Request $request ,$id){
        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required',
            'desc' => 'required',
            'price' => 'required|numeric',
            'prcAfterPromo' => 'numeric',
            'img' => 'required|image',
            'category' => 'required',
        ]);

        $product->name = $validatedData['name'];
        $product->desc = $validatedData['desc'];
        $product->price = $validatedData['price'];
        $product->prcAfterPromo = $validatedData['prcAfterPromo'];

        $path = $request->file('img')->store('public/images');
        $product->img = $path;

        $product->category = $validatedData['category'];
        $product->save();

        return 'saved';
    }
}
