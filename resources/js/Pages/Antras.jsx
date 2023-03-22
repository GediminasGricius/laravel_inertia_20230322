import { Link, Head } from '@inertiajs/react';

export default function Pirmas(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="card">
                            <div className="card-header">Antras puslapis</div>
                            <div className="card-body">
                                Cia bus musu sistema <br />

                                <Link href={ route('pirmas') }>Pirmas</Link>  <br />

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
