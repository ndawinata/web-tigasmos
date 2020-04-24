import React, { Fragment } from 'react'
import { Marker, Popup } from 'react-leaflet'

const MapPopUp = (props) => {
    return (
        <Fragment>
            <Marker position={props.lokasi}>
                <Popup>
                    <h5>{props.nama}</h5><br/>
                    <a href={`/site/${props.lokasi[0]},${props.lokasi[1]}`}>
                        {props.lokasi[0]}, {props.lokasi[1]}
                    </a> 
                    <hr />
                    Nilai Pasut : <br />
                    Sensor Ultrasonik : {props.nilai.pasut_sensor_ultrasonik} <br />
                    Sensor Tekanan : {props.nilai.pasut_sensor_tekanan}
                </Popup>
            </Marker>
        </Fragment>
    )
}

export default MapPopUp





// import React, { Component } from 'react'

// export class MapPopUp extends Component {
    
//     render() {
//         return (
//             <div>
//                 props nya adalah : {this.props.nama}
//             </div>
//         )
//     }
// }

// export default MapPopUp



// import React, { Fragment } from 'react'
// import { Marker, Popup } from 'react-leaflet'

// const MapPopUp = (props) => {
//     var nama = props.nama
//     var lokasi = [props.lat, props.lng]
//     var nilai = {
//         ultrasonik: props.ultrasonik,
//         tekanan: props.tekanan
//     }
    
//     return (
//        <Fragment>
//            <Marker position={this.lokasi}>
//                <Popup>
//                    {nama} <br /> <hr />
//                    {lokasi} <br />
//                    Nilai Pasut : <br />
//                    Sensor Ultrasonik : {nilai.ultrasonik} <br />
//                    Sensor Tekanan : {nilai.tekanan}
//                </Popup>
//            </Marker>
//        </Fragment>
//     )
// }

// export default MapPopUp
