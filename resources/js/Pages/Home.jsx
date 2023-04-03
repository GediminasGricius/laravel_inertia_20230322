import AppLayout from "@/Layouts/AppLayout";
import {Link, router} from "@inertiajs/react";
import {useState} from "react";

export default function Index(props){



    return (
        <AppLayout

        >
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header">Būrelių sąrašas</div>
                    <div className="card-body">
                        Prisijunkite prie sistemos
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
