import { Link, Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.css';
import PrimaryButton from "@/Components/PrimaryButton";
import {useState} from "react";
export default function Pirmas(props) {
  const [values, setValues]=useState({
     sk:0
  });
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(values);
        router.post('/users', values);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="card">
                            <div className="card-header">Pirmas puslapis</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} >
                                    <input type="text" name="sk" id="sk" value={values.sk} onChange={handleChange}   />
                                    <button>Skaiciuoti</button>
                                </form>
                                Cia bus musu sistema: {props.sk} <br />

                                <Link href={ route('antras') }>Antras</Link>  <br />
                                <button className="btn btn-success">Mygtukas</button>
                                <Link href={ route('login') }>Login</Link>
                                    <PrimaryButton className="ml-4" disabled={false}>
                                        Log in
                                    </PrimaryButton>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}
