<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LangController extends Controller
{
    public function setLanguage(Request $request, $lang){
        $request->session()->put("lang",$lang);
    }
}
