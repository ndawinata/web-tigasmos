import React, { Fragment, useState, useEffect  } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import MapPopUp from '../MapPopUp/MapPopUp'
import 'react-leaflet-fullscreen-control'
import socketIOClient from 'socket.io-client'
import axios from 'axios'
import { GlobalConsumer } from '../context/context'



const Maps = (props) => {
  
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

  useEffect(() => {
    
      let io = socketIOClient("http://localhost:5000")
      io.on("site-1", (data) => setNilaiSite1(data))
      io.on("site-2", (data) => setNilaiSite2(data))
      io.on("site-3", (data) => setNilaiSite3(data))

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
      <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing ${props.state.maps_enable}`}>
        <div className="widget widget-activity-three">
          <div className="widget-heading">
            <h5 className="">Tigasmos Site Map</h5>
            <div className="task-action">
              <div className="container">
                <button type="button" onClick={()=>{props.dispatch({type:'maps_inactive'})}}
                  className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="widget-content">
            <Map fullscreenControl center={[center.lat, center.lng]} zoom={zoom}
              style={{ width: '100%', height: '320px'}}>
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

export default GlobalConsumer(Maps)