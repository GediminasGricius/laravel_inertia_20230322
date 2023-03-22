import { Link, Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.css';
import PrimaryButton from "@/Components/PrimaryButton";
export default function Pirmas() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="card">
                            <div className="card-header">Pirmas puslapis</div>
                            <div className="card-body">
                                <form>
                                Cia bus musu sistema <br />

                                <Link href={ route('antras') }>Antras</Link>  <br />
                                <button className="btn btn-success">Mygtukas</button>
                                <Link href={ route('login') }>Login</Link>
                                    <PrimaryButton className="ml-4" disabled={false}>
                                        Log in
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
