import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from "apexcharts"
import socketIOClient from 'socket.io-client'
import { GlobalConsumer } from '../context/context'


const io = socketIOClient("http://localhost:5000")

class Chart extends Component {

    state={
        site:"site-1",
        namaSite:["site-1","site-2","site-3"],
        sensor:"tekanan",
        pSensor:'active',
        uSensor:'',
        site1Active:'active',
        site2Active:'',
        site3Active:'',
        series:[{
            data:[]
        }],
        options:{
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
        }
    }

    dispatch = (action) =>{
        switch(action.type){
            case 'tekanan':
                this.setState({...this.state, sensor:'tekanan', pSensor:'active', uSensor:''})
                break
            case 'ultrasonik':
                this.setState({...this.state, sensor:'ultrasonik', uSensor:'active', pSensor:''})
                break
            case 'site_1':
                this.setState({...this.state, site:'site-1', site1Active:'active', site2Active:'', site3Active:''})
                break
            case 'site_2':
                this.setState({...this.state, site:'site-2', site1Active:'', site2Active:'active', site3Active:''})
                break
            case 'site_3':
                this.setState({...this.state, site:'site-3', site1Active:'', site2Active:'', site3Active:'active'})
                break
            default :
                this.setState({...this.state})
        }
    }

    fungsiSeries = (num) => {
        if(this.state.sensor==='tekanan'){
            return [num.date, num.pasut_sensor_tekanan]
        }else{
            return [num.date, num.pasut_sensor_ultrasonik]
        }
        
    }

    fungsiRealtime = (value) =>{
        io.on(value, (data) => {
            console.log(this.state.sensor)
            if (this.state.sensor === 'tekanan') {
                this.state.series[0].data.push([data.date, data.pasut_sensor_tekanan])
            } else {
                this.state.series[0].data.push([data.date, data.pasut_sensor_ultrasonik])
            }
            ApexCharts.exec('area-datetime', 'updateSeries', [{
                data: this.state.series[0].data
            }])
        })
    }

    componentDidMount(){
        Axios.get(`http://localhost:5000/api/${this.state.site}`)
            .then((data)=>{
                var a = data.data.datas.map(this.fungsiSeries)
                this.setState({...this.state, series:[{
                    data:a
                }]})
            })
        // realtime
        this.state.namaSite.map(this.fungsiRealtime)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.site !== this.state.site | prevState.sensor !== this.state.sensor ){
            Axios.get(`http://localhost:5000/api/${this.state.site}`)
                .then((data) => {
                    var a = data.data.datas.map(this.fungsiSeries)
                    this.setState({
                        ...this.state,
                        series: [{
                            data: a
                        }]
                    })
                })
        }
        
        
    }
    render() {       
        return (
            <Fragment>
                <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing ${this.props.state.chart_enable}`}>
                    <div className=" widget widget-activity-three">
                        <div className="widget-heading">
                            <h5 className="">Tigasmos Site Chart</h5>
                            <div className="task-action">
                                <div className="container">
                                    <button type="button" onClick={()=>{this.props.dispatch({type:'chart_inactive'})}}
                                        className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-content">
                            <div className="w-content mt-2 mr-3 ">
                                <ReactApexChart  options={this.state.options} series={this.state.series} type="area"
                                    height="250" width="100%" />
                            </div>
                        </div>
                        <div className="widget-content-one">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="btn-group">
                                            <button style={{textTransform:"uppercase"}}
                                                className="btn btn-outline-primary btn-sm dropdown-toggle" type="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sensor {this.state.sensor}
                                            </button>
                                            <div style={{cursor:"pointer"}} className="dropdown-menu px-0">
                                                <div className={`dropdown-item ${this.state.pSensor}`} onClick={()=>
                                                    {this.dispatch({type:"tekanan"})}}>Sensor Tekanan</div>
                                                <div className={`dropdown-item ${this.state.uSensor}`} onClick={()=>
                                                    {this.dispatch({type:"ultrasonik"})}}>Sensor Ultrasonik</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="btn-group">
                                            <button style={{textTransform:"uppercase"}}
                                                className="btn btn-outline-primary btn-sm dropdown-toggle" type="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {this.state.site} tigasmos
                                            </button>
                                            <div style={{cursor:"pointer"}} className="dropdown-menu px-0">
                                                <div className={`dropdown-item ${this.state.site1Active}`} onClick={()=>
                                                    {this.dispatch({type:"site_1"})}}>Site 1</div>
                                                <div className={`dropdown-item ${this.state.site2Active}`} onClick={()=>
                                                    {this.dispatch({type:"site_2"})}}>Site 2</div>
                                                <div className={`dropdown-item ${this.state.site3Active}`} onClick={()=>
                                                    {this.dispatch({type:"site_3"})}}>Site 3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GlobalConsumer(Chart)