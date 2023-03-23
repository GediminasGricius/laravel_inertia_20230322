<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $clubs=Club::all();
        return inertia('Clubs/Index', [
            "clubs"=>$clubs
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
