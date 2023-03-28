<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    public function club(){
        return $this->belongsTo(Club::class);
    }
    public function scopeFilter(Builder $query, $filter){
        if ($filter->name!=null){
            $query->where("name", "like", "%$filter->name%");
        }
        if ($filter->surname!=null){
            $query->where("surname", "like", "%$filter->surname%");
        }
        if ($filter->club_id!=null){
            $query->where("club_id",$filter->club_id);
        }
    }

    public function scopeOrder(Builder $query, $order){
        if ($order->field!=null){
            if ($order->dir!=null){
                $query->orderBy($order->field, $order->dir);
            }else{
                $order->orderBy($order->field);
            }
        }
    }
}
