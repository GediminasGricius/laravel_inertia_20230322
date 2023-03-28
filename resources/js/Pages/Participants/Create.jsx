import AppLayout from "@/Layouts/AppLayout";
import {Link, router, useForm} from "@inertiajs/react";
import {useState} from "react";
import validator from "validator/es";


export default function Create(props){

    const {data, setData, post, errors, isDirty, setError, clearErrors}=useForm({
        name:'',
        surname:'',
        birth_day:null,
        school:'',
        club_id:null
    });

    const [isDirtyField, setDirtyField]=useState({
        name:false,
        surname:false,
        birth_day:false,
        school:false,
        club_id:false
    });

   const validate=()=>{
       if (isDirtyField.name){
           if (data.name.length>=3){
               clearErrors("name");
           }else{
               setError("name", "Vardas yra privalomas laukas ir ne trumpesnis nei 3 simb.")
           }
       }
       if (isDirtyField.surname){
           if ( data.surname.length>=3 ){
               clearErrors("surname");
           }else{
               setError("surname", "Pavardė yra privalomas laukas ir ne trumpesnis nei 3 simb.")
           }
       }
   }

    const handleChange=(event)=>{
        data[event.target.id]=event.target.value;
        validate();
        setData({
           ...data,
           [event.target.id]:event.target.value,

        });



    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        post( route("participants.store") );
        setSent(true);
    }

    const handleBlur=(event)=>{
        isDirtyField[event.target.id]=true;

        setDirtyField({
            ...isDirtyField,
            [event.target.id]:true
        });
        validate();
    }

    const clubsList=[];
    clubsList.push(<option key={0} value="">-</option>);
    props.clubs.forEach((club)=>{
        clubsList.push(<option key={club.id} value={club.id}>{club.name}</option>)
    });


    return (
        <AppLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Pridėti naują dalyvį</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">

                                <label className="form-label">Vardas</label>
                                <input className={"form-control"+ (errors.name!=null?" is-invalid ":"")}  type="text" id="name" onChange={handleChange} onBlur={handleBlur} value={data.name}  />
                                <div className="invalid-feedback">
                                    { errors.name }
                                </div>


                            </div>
                            <div className="mb-3">
                                <label className="form-label">Pavardė</label>
                                <input className={"form-control"+ (errors.surname!=null?" is-invalid ":"")} type="text" id="surname" onChange={handleChange} onBlur={handleBlur} value={data.surname} />
                                <div className="invalid-feedback">
                                    { errors.surname }
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gimimo data</label>
                                <input  className={"form-control"+ (errors.birth_day!=null?" is-invalid ":"")} type="date" id="birth_day" onChange={handleChange} onBlur={handleBlur} value={data.birth_day} />
                                <div className="invalid-feedback">
                                    { errors.birth_day }
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mokykla</label>
                                <input className="form-control" type="text" id="school" onChange={handleChange} onBlur={handleBlur} value={data.school} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Būrelis</label>
                                <select className={"form-control"+ (errors.club_id!=null?" is-invalid ":"")}  id="club_id" onChange={handleChange} onBlur={handleBlur} value={data.club_id} >
                                    {clubsList}
                                </select>
                                <div className="invalid-feedback">
                                    { errors.club_id }
                                </div>
                            </div>
                            <button className="btn btn-success">Pridėti</button>

                        </form>

                    </div>


                </div>
            </div>
        </AppLayout>
    )
}
