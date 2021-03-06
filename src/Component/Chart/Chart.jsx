import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from "apexcharts"
import socketIOClient from 'socket.io-client'
import { GlobalConsumer } from '../context/context'

const io = socketIOClient("http://tigasmos-stmkg.my.id:5000")

class Chart extends Component {

    state={
        site:"site-1",
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
                id: 'chartS1',
                type: 'area',
                height: 350,
                fontFamily:'Nunito, sans-serif',
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
                min: "2020-06-20T21:09:00.947Z",
                tickAmount: 6,
                title:{
                    text: 'Datetime',
                    offsetY: 15,
                    style:{
                        fontSize:'14px'
                    }
                }
            },
            yaxis: {
                title:{
                    text: 'Meter',
                    style:{
                        fontSize:'14px'
                    }
                }
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
                this.setState({...this.state, options:{chart:{id:"chartS1"}}, site:'site-1', site1Active:'active', site2Active:'', site3Active:''})
                break
            case 'site_2':
                this.setState({...this.state, options:{chart:{id:"chartS2"}}, site:'site-2', site1Active:'', site2Active:'active', site3Active:''})
                break
            case 'site_3':
                this.setState({...this.state, options:{chart:{id:"chartS3"}}, site:'site-3', site1Active:'', site2Active:'', site3Active:'active'})
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

    componentDidMount(){
        Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.site}`)
            .then((data)=>{
                var a = data.data.datas.map(this.fungsiSeries)
                this.setState({...this.state, series:[{
                    data:a
                }]})
                this.setState({...this.state, options:{
                    xaxis:{
                        min:data.data.datas[0].date
                    }
                }})
            })
        
        io.on('site-1', (data) => {
            if (this.state.sensor === 'tekanan') {
                this.state.series[0].data.push([data.date, data.pasut_sensor_tekanan])
            } else {
                this.state.series[0].data.push([data.date, data.pasut_sensor_ultrasonik])
            }
            ApexCharts.exec('chartS1', 'updateSeries', [{
                data: this.state.series[0].data
            }])
        })
        io.on('site-2', (data) => {
            if (this.state.sensor === 'tekanan') {
                this.state.series[0].data.push([data.date, data.pasut_sensor_tekanan])
            } else {
                this.state.series[0].data.push([data.date, data.pasut_sensor_ultrasonik])
            }
            ApexCharts.exec('chartS2', 'updateSeries', [{
                data: this.state.series[0].data
            }])
        })
        io.on('site-3', (data) => {
            if (this.state.sensor === 'tekanan') {
                this.state.series[0].data.push([data.date, data.pasut_sensor_tekanan])
            } else {
                this.state.series[0].data.push([data.date, data.pasut_sensor_ultrasonik])
            }
            ApexCharts.exec('chartS3', 'updateSeries', [{
                data: this.state.series[0].data
            }])
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.site !== this.state.site | prevState.sensor !== this.state.sensor ){
            Axios.get(`http://tigasmos-stmkg.my.id:5000/api/${this.state.site}`)
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
                <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing ${this.props.state.chart_enable}`}>
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
                            <div className="w-content mt-2 mx-3 px-2 py-1">
                                <ReactApexChart  options={this.state.options} series={this.state.series} type="area"
                                    height="250" width="100%" />
                            </div>
                        </div>
                        <div className="widget-content-one my-4">
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