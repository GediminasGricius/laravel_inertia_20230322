<?php

namespace App\Http\Controllers;

use App\Models\Club;
use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return inertia("Participants/Index",[
                "participants"=>Participant::with("club")->get()
           ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Participants/Create",[
            "clubs"=>Club::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
           'name'=>'required|min:3',
           'surname'=>'required|min:3',
           'birth_day'=>'required',
            'club_id'=>'required',
        ],
        ['name'=>"Vardas yra privalomas ir ne trumpesnis nei 3 simboliai"]);

        $participant=new Participant();
        $participant->name=$request->name;
        $participant->surname=$request->surname;
        $participant->birth_day=$request->birth_day;
        $participant->school=$request->school;
        $participant->club_id=$request->club_id;
        $participant->save();

        return to_route("participants.index");

    }

    /**
     * Display the specified resource.
     */
    public function show(Participant $participant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Participant $participant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Participant $participant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Participant $participant)
    {
        //
    }
}
