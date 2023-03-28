import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "@inertiajs/react";

export default function AppLayout({children}) {

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

                            <ul className="navbar-nav float-end">
                                <li className="nav-item">
                                    <Link href={ route("login")} className="nav-link ">Prisijungti</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={ route("register")} className="nav-link ">Registruotis</Link>
                                </li>
                                <li>
                                    <Link href={route('logout')} method="post" as="button">Atsijungti</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
}
