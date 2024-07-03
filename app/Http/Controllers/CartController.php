<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(){
        $cartItems = Cart::with([ 'product'])->get();
        // dd($cartItems);
        return Inertia::render("cart/Index", [
            "cartItems"=>$cartItems
        ]);
    }
    public function create(){
    }
    public function store(Request $request){
        $data = $request->validate([
            "product_id"=>"required",
            "count"=>"required|integer"
        ]);
        $cart = new Cart();
        $cart->product_id = $request->product_id;
        $cart->count = $request->count;
        $cart->buyer_id = Auth::id();
        $cart->save();
        return redirect(route("cart.index"));
    }
    public function edit(){
        
    }
    public function update(){
        
    }
    public function destroy(){
        
    }
}
