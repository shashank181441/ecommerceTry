<?php

namespace App\Http\Controllers;

use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render("product/Index", [
            "products"=>$products
        ]);
    }
    public function create(){
        return Inertia::render("product/Create");
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            "name"=>"required|string",
            "description"=>"nullable",
            "mainImage"=>"required",
            "price"=>"required|integer"
        ]);

        $mainImage = $request->file("mainImage");


        $cloudinary = new Cloudinary(config("cloudinary.cloud_url"));
        $uploadedFileUrl = Cloudinary::uploadFile(
            $mainImage->getRealPath()
        )->getSecurePath();
        $product = new Product();
        // dd($data);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->mainImage = $uploadedFileUrl;
        $product->price = $request->price;

        $product->seller_id = Auth::id() ;
        $product->save();

        return redirect(route("product.index"));
    }
    public function edit()
    {
    }
    public function update()
    {
    }
    public function delete()
    {
    }
}
