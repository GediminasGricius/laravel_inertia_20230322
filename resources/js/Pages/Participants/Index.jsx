import AppLayout from "@/Layouts/AppLayout";
import {Link, router} from "@inertiajs/react";
import {useState} from "react";

export default function Index(props){

    const participantsList=[];

    const [filter,setFilter]=useState({
        name:props.filter.name,
        surname:props.filter.surname,
        club_id:props.filter.club_id
    });

    const handleChange=(event)=>{
        setFilter({
            ...filter,
            [event.target.id]:event.target.value,
        });
    }

    const handleFilter=()=>{
        router.post( route("participants.filter"), filter);
//        console.log(filter);
    }

    const order=props.order;

    props.participants.forEach((participant)=>{
        participantsList.push(
            <tr key={participant.id}>
                <td>{ participant.name}</td>
                <td>{ participant.surname}</td>
                <td>{ participant.club.name}</td>
                <td className="text-center">

                </td>
                <td className="text-center">

                </td>
            </tr>
        )
    });

    const clubOptions=[];
    clubOptions.push(<option key="0" value="">-</option>);
    props.clubs.forEach((club)=>{
        clubOptions.push(<option key={club.id} value={club.id}>{club.name}</option> );
    })

    return (
        <AppLayout>
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Dalyvių sąrašas</div>
                    <div className="card-body">

                        <Link className="btn btn-success float-end" href={ route("participants.create") }>Pridėti naują dalyvį</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <Link href={route("participants.order", ["name", order.field=="name" && order.dir=="ASC"?"DESC":"ASC" ] )} > Vardas </Link>
                                    </th>
                                    <th>
                                        <Link href={route("participants.order", ["surname", order.field=="surname" && order.dir=="ASC"?"DESC":"ASC"] )} > Pavardė </Link>
                                    </th>
                                    <th>
                                        <Link href={route("participants.order", ["club_id", order.field=="club_id" && order.dir=="ASC"?"DESC":"ASC"] )} > Būrelio pavadinimas </Link>
                                    </th>
                                    <th colSpan="2" className="text-center">Veiksmai</th>
                                </tr>
                                <tr>
                                    <th>
                                        <input id="name" type="text" className="form-control" value={filter.name} onChange={handleChange} />
                                    </th>
                                    <th>
                                        <input id="surname" type="text" className="form-control" value={filter.surname} onChange={handleChange} />
                                    </th>
                                    <th>
                                        <select id="club_id" className="form-select"  value={filter.club_id} onChange={handleChange}>
                                            {clubOptions}
                                        </select>

                                    </th>
                                    <th>
                                        <button  className="btn btn-success" onClick={handleFilter}>Filtruoti</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { participantsList }
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </AppLayout>
    )
}
