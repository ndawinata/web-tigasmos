import React, {useState, useEffect, Fragment} from 'react'
import Axios from 'axios'
import ReactApexChart from 'react-apexcharts'


const Chart1 = () => {
    let [site, setSite] = useState('site-2')
    let [sensor, setSensor] = useState('tekanan')
    let [realtime, setRealtime] = useState(false)

    let [series, setSeries] = useState(
        [{
            data: [["2020-03-25T07:37:18.150Z", 30.95]]
        }]
    )

    
    const [options] = useState({
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('2020-04-22T19:00:00').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            },
            theme: "dark"
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        }
    })
    
    
    // let pilihanSeries = () => {
    //     if(sensor=='seriesTekanan'){
    //         return seriesTekanan
    //         // console.log(seriesTekanan)
    //     } else {
    //         return seriesTekanan
    //     }
    // }

    let handleChangeRealtime = () =>{ 
        setRealtime(!realtime)
        // switch1===false ? (getSocket()):(getServer())
    }

    let handleChangeSensor = (e) => {
        setSensor(e.currentTarget.value)
        // console.log(e.currentTarget.value)
    }

    let handleChange = (e) => {
        setSite(e.currentTarget.value)
        // console.log(e.currentTarget.value)
    }

    function fungsiSeries(num) {
        if(sensor==='tekanan'){
            return [num.date, num.pasut_sensor_tekanan]
        }else{
            return [num.date, num.pasut_sensor_ultrasonik]
        }
        
    }

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/${site}`)
            .then((data)=>{
                var a = data.data.datas.map(fungsiSeries)
                // var b = data.data.datas.map(fungsiUltrasonik)
                setSeries(
                    [{
                        data : a
                    }]
                )
            })
    },[site,sensor]);

    //  [site] => use effect akan dijalan kan ulang setiap site 'site' berubah

    return (
        <Fragment>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                <div className="widget widget-activity-three">
                    <div className="widget-heading">
                        <h5 className="">Tigasmos Site</h5>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="realtimeTabel" checked={realtime}
                                onChange={handleChangeRealtime} 
                                />
                            <label className="custom-control-label" htmlFor="realtimeTabel">Realtime</label>
                        </div>
                    </div>
                    <div className="widget-content mr-3">
                        <ReactApexChart options={options} series={series} type="area" height={250}
                            width={"100%"} />
                    </div>
                    <div className="widget-heading">
                        <div className="container">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input checked={ sensor==="tekanan" } onChange={handleChangeSensor} value="tekanan" type="radio"
                                    id="tekanan" name="tekanan" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="tekanan">Sensor Tekanan</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input checked={ sensor==="ultrasonik" } onChange={handleChangeSensor} value="ultrasonik" type="radio"
                                    id="ultrasonik" name="ultrasonik" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="ultrasonik">Sensor Ultrasonik</label>
                            </div>
                        </div>
    
                        <div className="container">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input checked={site==="site-1" } onChange={handleChange} value="site-1" type="radio" id="site-1"
                                    name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="site-1">Site 1</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input checked={site==="site-2" } onChange={handleChange} value="site-2" type="radio" id="site-2"
                                    name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="site-2">Site 2</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input checked={site==="site-3"} onChange={handleChange} value="site-3" type="radio" id="site-3"
                                    name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="site-3">Site 3</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </Fragment>
        
    )
}



export default Chart1