<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {




        //$clubs=Club::all();
        $clubs=Club::with("participants")->get();
        return inertia('Clubs/Index', [

            "clubs"=>$clubs,
            "lang"=>[
                "clubs"=>__("app.clubs"),
                "clubsCreate"=>__("app.clubsCreate")
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Clubs/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $club=new Club();
        $club->name=$request->name;
        $club->maximum_number=$request->maximum_number;
        $club->location=$request->location;
        if ($request->file("image")!=null){
            $request->file("image")->store("/public/clubs");
            $club->image=$request->file("image")->hashName();
        }

        $club->save();
        return to_route('clubs.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Club $club)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Club $club)
    {
        return inertia('Clubs/Edit',[
           "club"=>$club
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Club $club)
    {
        $club->name=$request->name;
        $club->maximum_number=$request->maximum_number;
        $club->location=$request->location;

        if ($request->file("image")!=null){
            if ($club->image!=null){
                unlink(storage_path()."/app/public/clubs/".$club->image);
            }
            $request->file("image")->store("/public/clubs");
            $club->image=$request->file("image")->hashName();
        }

        $club->save();
        return to_route('clubs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Club $club)
    {
        $club->delete();
        return to_route('clubs.index');
    }
}
