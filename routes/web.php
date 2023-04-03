<?php

use App\Http\Controllers\ClubController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render("Home");
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        return to_route("clubs.index");
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('/pirmas', function (){
        return Inertia::render('Pirmas', ["sk"=>5]);
    })->name("pirmas");


    Route::get('/antras', function (){
        return Inertia::render('Antras');
    })->name("antras");

    Route::post('/users', function (){
        return Inertia::render('Antras');
    })->name("users");

    Route::post("/participants/filter", [ParticipantController::class, "filter"])->name("participants.filter");
    Route::get("/participants/order/{field}/{dir}", [ParticipantController::class, "order"])->name("participants.order");


    Route::resource('clubs', ClubController::class)->only([
        'index'
    ]);
    Route::resource('participants', ParticipantController::class);

});

Route::middleware(["auth","editClubs"])->group( function(){
    Route::resource('clubs', ClubController::class)->except([
        'index'
    ]);
});

Route::get("/lang/{lang}", [\App\Http\Controllers\LangController::class, "setLanguage"])->name("setLanguage");

require __DIR__.'/auth.php';




