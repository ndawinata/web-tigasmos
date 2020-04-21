import React, { Fragment } from 'react'
// import Sidebar from '../../Component/Sidebar/Sidebar'
import { Map, TileLayer, Marker} from 'react-leaflet'
import 'react-leaflet-fullscreen-control'


const MapLebar = (props) => {
    var str = props.lokasi.split(',')
    var lokasi = [str[0], str[1]]
    return (
        <Fragment>
            <div className="main-container sidebar-closed sbar-open" id="container">
                <div className="overlay"></div>
                <div className="cs-overlay"></div>
                <div className="search-overlay"></div>
                {/* <Sidebar /> */}
                <Map fullscreenControl center={lokasi} zoom={'11'} style={{ width: '100%', height: '690px'}}>
                      <TileLayer attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={lokasi}>
            </Marker>        
                </Map>
            </div>
        </Fragment>
    )
}

export default MapLebar
