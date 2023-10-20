import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TrackingParcelItemsPage from "../tracking-parcel-items/TrackingParcelItemsPage";

export default function TrackingParcelPage () {

    const [trackingNumber, setTrackingNumber] = useState('');

    const [data, setData] = useState('');

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    function handleChangeTrackId(event) {
        setTrackingNumber(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        trackingPackage(trackingNumber);
    }

    function handleLogin() {
        navigate("/login");
    }

    async function trackingPackage(trackingNumber) {
        try {
            const response = await axios.get(
                "http://localhost:3030/tracking?tracking_number=" + trackingNumber,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: false,
                }
            );
            setData(response.data);
            setError(false);
        } catch (error) {
            setError(true);
            setData('');
        }
    }

    return (
        <div>
            <div className="text-center m-5-auto">
                <form action="/home">
                    <p>
                        <label>Enter your tracking number</label><br/>
                        <input type="text" value={ trackingNumber } onChange={ handleChangeTrackId } required/>
                    </p>
                    <p>
                        <button id="submit-btn" type="button" onClick={ handleFormSubmit }>Search</button>
                        <a className={"padding-top-10px"} type="button" onClick={ handleLogin }>Go to login</a>
                    </p>
                </form>
            </div>

            <div>
                <div className="container py-3 py-3 display-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div id="tracking-pre"></div>
                            <div id="tracking">
                                <TrackingParcelItemsPage data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="display-flex justify-content-center">
                <span color="red">{error ? "Tracking Number Does Not Exist" : ""}</span>
            </div>

        </div>
    )
}