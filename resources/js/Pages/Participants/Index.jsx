import AppLayout from "@/Layouts/AppLayout";
import {Link, router} from "@inertiajs/react";

export default function Index(props){

    const participantsList=[];



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
                                    <th>Vardas</th>
                                    <th>Pavardė</th>
                                    <th>Būrelio pavadinimas</th>
                                    <th colSpan="2" className="text-center">Veiksmai</th>
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
