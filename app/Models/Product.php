<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', "description", "mainImage", "price"
    ];

    public function seller(){
        return $this->belongsTo(User::class, "seller_id");
    }

    public function cart(){
        return $this->belongsTo(Cart::class, "product_id");
    }
}
