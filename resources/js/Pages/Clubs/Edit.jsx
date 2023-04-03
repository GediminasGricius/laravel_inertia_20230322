import AppLayout from "@/Layouts/AppLayout";
import {Link, router, useForm} from "@inertiajs/react";
import {useState} from "react";

export default function Edit(props){

    const {data, setData, post, progress}=useForm({
        ...props.club,
        _method: 'put'
    });

    const handleChange=(event)=>{
        setData({
           ...data,
           [event.target.id]:event.target.value
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        post(route("clubs.update", data.id));
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
                                <input className="form-control" type="text" id="name" onChange={handleChange} value={data.name} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Maksimalus dalyvių kiekis</label>
                                <input className="form-control" type="text" id="maximum_number" onChange={handleChange} value={data.maximum_number} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Vieta</label>
                                <input className="form-control" type="text" id="location" onChange={handleChange} value={data.location} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Paveikslas</label>
                                <input className="form-control" type="file" id="image" onChange={(event)=>{
                                    setData({
                                        ...data,
                                        image:event.target.files[0]
                                    });
                                }} />

                            </div>
                            <div className="mb-3">
                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                            </div>
                            <div className="mb-3">
                                {progress && <span>{progress.percentage} % </span> }
                            </div>
                            <button className="btn btn-success">Išsugoti pakeitimus</button>
                        </form>



                    </div>


                </div>
            </div>
        </AppLayout>
    )
}
