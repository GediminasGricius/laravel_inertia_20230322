import AppLayout from "@/Layouts/AppLayout";
import {Link, router} from "@inertiajs/react";
import {useState} from "react";

export default function Edit(props){

    const [values, setValues]=useState(props.club);

    const handleChange=(event)=>{
        setValues({
           ...values,
           [event.target.id]:event.target.value
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        router.put( route("clubs.update", values.id), values );
    }


    return (
        <AppLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Būrelio redagavimas</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Pavadinimas</label>
                                <input className="form-control" type="text" id="name" onChange={handleChange} value={values.name} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Maksimalus dalyvių kiekis</label>
                                <input className="form-control" type="text" id="maximum_number" onChange={handleChange} value={values.maximum_number} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Vieta</label>
                                <input className="form-control" type="text" id="location" onChange={handleChange} value={values.location} />
                            </div>
                            <button className="btn btn-success">Išsugoti pakeitimus</button>
                        </form>



                    </div>


                </div>
            </div>
        </AppLayout>
    )
}
