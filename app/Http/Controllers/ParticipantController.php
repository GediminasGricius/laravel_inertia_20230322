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
    public function index(Request $request)
    {

        $emFilter=new \stdClass();
        $emFilter->name=null;
        $emFilter->surname=null;
        $emFilter->club_id=null;

        $emOrder=new \stdClass();
        $emOrder->field=null;
        $emOrder->dir=null;

       $filter=$request->session()->get("participant_filter", $emFilter);
       $order=$request->session()->get("participant_order", $emOrder);

       return inertia("Participants/Index",[
                "participants"=>Participant::filter($filter)->order($order)->with("club")->get(),
                "clubs"=>Club::all(),
                "filter"=>$filter,
                "order"=>$order,
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

    public function filter(Request $request){
        $filter=new \stdClass();
        $filter->name=$request->name;
        $filter->surname=$request->surname;
        $filter->club_id=$request->club_id;

        $request->session()->put("participant_filter",$filter);
        to_route("participants.index");
    }

    public function order($field, $dir, Request $request){
        $order=new \stdClass();
        $order->field=$field;
        $order->dir=$dir;
        $request->session()->put("participant_order",$order);
        to_route("participants.index");
    }
}
