import 'bootstrap/dist/css/bootstrap.css';
import {Link, usePage} from "@inertiajs/react";

export default function AppLayout({ children}) {
    const {auth, pavadinimas}=usePage().props;
    const user=auth.user;
    console.log(pavadinimas);
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Būreliai</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href={ route("clubs.index")} className="nav-link ">Būrelių sąrašas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={ route("participants.index")} className="nav-link ">Dalyvių sąrašas</Link>
                                </li>
                            </ul>
                        </div>
                        {user==null ?
                            <div className="float-end">

                                    <Link className="btn btn-primary mr-3 "  href={ route("login")} >Prisijungti</Link>
                                &nbsp;


                                    <Link className="btn btn-info "  href={ route("register")} >Registruotis</Link>

                            </div>
                            :
                            <div className="float-end">
                                <span >Jūs esate prisijungęs kaip: <b>{user.name} ({user.type==1?"administratorius":"vartotojas"})</b> </span>
                                <Link className="btn btn-warning " href={route('logout')} method="post" >Atsijungti</Link>

                            </div>
                        }
                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
}
