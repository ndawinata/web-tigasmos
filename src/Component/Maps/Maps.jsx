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
  const [site1, setSite1] = useState({
    latitude: -6.249128,
    longitude: 106.768363
  })
  const [site2, setSite2] = useState({
    latitude: -6.249128,
    longitude: 106.768363
  })
  const [site3, setSite3] = useState({
    latitude: -6.276942,
    longitude: 106.803831
  })
  const [center, setCenter] = useState({
    centerlat: -6.252508,
    centerlon: 106.769867
  })
  const [zoom] = useState(8)

  useEffect(() => {
    
      let io = socketIOClient("http://tigasmos-stmkg.my.id:5000")
      io.on("site-1", (data) => setNilaiSite1(data))
      io.on("site-2", (data) => setNilaiSite2(data))
      io.on("site-3", (data) => setNilaiSite3(data))

      axios('http://tigasmos-stmkg.my.id:5000/api/site-1')
        .then((value) => {
          setNilaiSite1(value.data.datas[value.data.datas.length-1])
        })
      axios('http://tigasmos-stmkg.my.id:5000/api/site-2')
        .then((value) => {
          setNilaiSite2(value.data.datas[value.data.datas.length-1])
        })
      axios('http://tigasmos-stmkg.my.id:5000/api/site-3')
        .then((value) => {
          setNilaiSite3(value.data.datas[value.data.datas.length-1])
        })
      axios('http://tigasmos-stmkg.my.id:5000/api/lokasi')
        .then((value) => {
          setSite1(value.data.datas[0])
          setSite2(value.data.datas[1])
          setSite3(value.data.datas[2])
        })
      axios('http://tigasmos-stmkg.my.id:5000/api/delta')
        .then((value) => {
          setCenter(value.data.datas[0])
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
            <Map fullscreenControl center={[center.centerlat, center.centerlon]} zoom={zoom}
              style={{ width: '100%', height: '320px'}}>
              <TileLayer attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapPopUp nama="Site 1" lokasi={[site1.latitude, site1.longitude]} nilai={nilaiSite1} />
              <MapPopUp nama="Site 2" lokasi={[site2.latitude, site2.longitude]} nilai={nilaiSite2} />
              <MapPopUp nama="Site 3" lokasi={[site3.latitude, site3.longitude]} nilai={nilaiSite3} />
            </Map>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default GlobalConsumer(Maps)