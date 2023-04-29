<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutMe extends Model
{
    protected $table = 'about-me';
    protected $fillable = ['title', 'content', 'links', 'images'];
}
