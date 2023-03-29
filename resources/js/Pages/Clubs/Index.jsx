import AppLayout from "@/Layouts/AppLayout";
import {Link, router} from "@inertiajs/react";
import {useState} from "react";

export default function Index(props){


console.log(props.clubs);
    const clubsList=[];
    // props.can.editClubs
    const editClubs=props.auth.user!=null && props.auth.user.type==1;

    const handleDelete=(event)=>{
        router.delete( route("clubs.destroy", event.target.value) );
    }
    const [order, setOrder]=useState({
        field:"name",
        dir:1
    });

    let clubs=props.clubs;
    clubs.sort(
        (a, b)=>{
            if (a[order.field]>b[order.field]){
                return 1*order.dir;
            }
            if (a[order.field]<b[order.field]){
                return -1*order.dir;
            }
            return 0
        }
    );


    clubs.forEach((club)=>{
        clubsList.push(
            <tr key={club.id}>
                <td>{ club.name}</td>
                <td>{ club.maximum_number}</td>
                <td>{ club.location}</td>
                <td className="text-center">
                    { editClubs && <Link className="btn btn-primary" href={ route('clubs.edit', club.id)}>Redaguoti</Link> }
                </td>
                <td className="text-center">
                    { editClubs &&  <button className="btn btn-danger" onClick={handleDelete} value={club.id}>Ištrinti</button> }
                </td>
            </tr>
        )
    });



    return (
        <AppLayout

        >
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Būrelių sąrašas</div>
                    <div className="card-body">
                        { editClubs && <Link className="btn btn-success float-end" href={ route("clubs.create") }>Pridėti naują būrelį</Link> }
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <span onClick={ ()=>{setOrder({field:"name", dir:1} )} }>
                                            Pavadinimas
                                            </span>
                                    </th>
                                    <th>
                                        <span onClick={ ()=>{setOrder({field:"maximum_number", dir:1} )} }>
                                            Vietų kiekis
                                        </span>
                                        </th>
                                    <th>Vieta</th>
                                    <th colSpan="2" className="text-center">Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                { clubsList }
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </AppLayout>
    )
}
