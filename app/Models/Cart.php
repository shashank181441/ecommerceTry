<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable =[
        "product_id", "count", "buyer_id"
    ];

    public function buyer()
    {
        return $this->hasOne(User::class, 'buyer_id', 'id');
    }

    public function product()
    {
        return $this->hasOne(Product::class, 'product_id', 'id');
    }


}
