import React, { Fragment } from "react";
import Notifications from "../Notifications/Notifications";
import Maps from "../Maps/Maps";
import Weather from "../Weather/Weather";
import Analog from "../Clock/Analog/Analog";
import Chart from "../Chart/Chart";
import Monitor from "../Monitor/Monitor";
import Tabel from "../Tabel/Tabel";

const Content = () => {
    return (
    <Fragment>
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                <div className="row layout-top-spacing">
                    <Weather />
                    <Monitor />
                    <Analog />
                    <Maps />
                    <Notifications />
                    <Chart />
                    <Tabel/>
                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default Content;
