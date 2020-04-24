import React, { Fragment, useState, useEffect } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import MapPopUp from '../MapPopUp/MapPopUp'
import 'react-leaflet-fullscreen-control'
import socketIOClient from 'socket.io-client'
import axios from 'axios'

const Maps = () => {
  let [switch1, setSwitch1] = useState(false)
 
  let [nilaiSite1, setNilaiSite1] = useState({
    pasut_sensor_tekanan:0,
    pasut_sensor_ultrasonik:0
  })
  let [nilaiSite2, setNilaiSite2] = useState({
    pasut_sensor_tekanan:0,
    pasut_sensor_ultrasonik:0
  })
  let [nilaiSite3, setNilaiSite3] = useState({
    pasut_sensor_tekanan:0,
    pasut_sensor_ultrasonik:0
  })
  const [site1] = useState({
    lat: -6.2681547,
    lng: 106.748794
  })
  const [site2] = useState({
    lat: -6.249128,
    lng: 106.768363
  })
  const [site3] = useState({
    lat: -6.276942,
    lng: 106.803831
  })
  const [center] = useState({
    lat: -6.252508,
    lng: 106.769867
  })
  const [zoom] = useState(11)

  let handleChange = () =>{ 
    setSwitch1(!switch1)
    switch1===false ? (getSocket()):(getServer())
  }

  let getServer = () => {
    axios('http://localhost:5000/api/site-1')
      .then((value) => {
        setNilaiSite1(value.data.datas[value.data.datas.length-1])
      })
    axios('http://localhost:5000/api/site-1')
      .then((value) => {
        setNilaiSite2(value.data.datas[value.data.datas.length-1])
      })
    axios('http://localhost:5000/api/site-1')
      .then((value) => {
        setNilaiSite3(value.data.datas[value.data.datas.length-1])
      })
  }

  let getSocket = () => {
    const io = socketIOClient("http://localhost:5000")
    io.on("site1", (data) => setNilaiSite1(data))
    io.on("site2", (data) => setNilaiSite2(data))
    io.on("site3", (data) => setNilaiSite3(data))
  }
  useEffect(() => {
    axios('http://localhost:5000/api/site-1')
      .then((value) => {
        setNilaiSite1(value.data.datas[value.data.datas.length-1])
      })
    axios('http://localhost:5000/api/site-2')
      .then((value) => {
        setNilaiSite2(value.data.datas[value.data.datas.length-1])
      })
    axios('http://localhost:5000/api/site-3')
      .then((value) => {
        setNilaiSite3(value.data.datas[value.data.datas.length-1])
      })
  },[])

  return (
    <Fragment>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
        <div className="widget widget-activity-three">
          <div className="widget-heading">
            <h5 className="">Tigasmos Site</h5>
            <div className="custom-control custom-switch">
            <input 
            type="checkbox" 
            className="custom-control-input" 
            id="customSwitch1" 
            checked={switch1} 
            onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">Realtime</label>
          </div>
          </div>
          <div className="widget-content mr-3">

            <Map fullscreenControl center={[center.lat, center.lng]} zoom={zoom}
              style={{ width: '100%', height: '250px'}}>
              <TileLayer attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <MapPopUp nama="Site 1" lokasi={[site1.lat, site1.lng]} nilai={nilaiSite1} />
              <MapPopUp nama="Site 2" lokasi={[site2.lat, site2.lng]} nilai={nilaiSite2} />
              <MapPopUp nama="Site 3" lokasi={[site3.lat, site3.lng]} nilai={nilaiSite3} />
            </Map>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Maps




// export class Maps extends Component {
//     state = {
//       site1:{
//         lat: -6.2681547,
//         lng: 106.748794
//       },
//       site2:{
//         lat: -6.249128,
//         lng: 106.768363,
//       },
//       site3:{
//         lat: -6.276942,
//         lng: 106.803897,
//       },
//       center:{
//         lat:-6.275408, 
//         lng:106.789867
//       },
//       zoom: 11,
//       }
//       componentDidMount(){
//         const io = socketIOClient("http://127.0.0.1:4001");
//     io.on("angka", (data) => setCount(data));
//       }
//     render() {
//         const site1 = [this.state.site1.lat, this.state.site1.lng]
//         const site2 = [this.state.site2.lat, this.state.site2.lng]
//         const site3 = [this.state.site3.lat, this.state.site3.lng]
//         const center = [this.state.center.lat, this.state.center.lng]
//         const nilai = {
//           ultrasonik:30,
//           tekanan:34
//         }
//         return (
//             <Fragment>
//               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
//                 <div className="widget widget-activity-three">
//                   <div className="widget-heading">
//                     <h5 className="">Tigasmos Site</h5>
//                   </div>
//                   <div className="widget-content mr-3">

//                     <Map fullscreenControl center={center} zoom={this.state.zoom} style={{ width: '100%', height: '250px'}}>
//                       <TileLayer attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
//                       <MapPopUp nama="Site 1" lokasi={site1} nilai={nilai} />
//                       <MapPopUp nama="Site 2" lokasi={site2} nilai={nilai} />
//                       <MapPopUp nama="Site 3" lokasi={site3} nilai={nilai} />
//                     </Map>
//                   </div>
//                 </div>
//               </div>
//             </Fragment>
//         )
//     }
// }

// export default Maps
