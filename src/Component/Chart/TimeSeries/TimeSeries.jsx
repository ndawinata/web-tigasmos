import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../../context/context'
import ReactApexChart from 'react-apexcharts'

class TimeSeries extends Component {

    state={
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
                min: new Date('1 Apr 2020').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yy | HH:MM'
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
            },
            yaxis:{
                title:{
                    text: 'meters (m)'
                }
            }
        },
        series:
            [{
                name: this.props.nama,
                data: [["2020-03-25T07:37:18.150Z", 30.95],["2020-04-25T07:37:18.150Z", 31.05]]
            }]
    }

    componentDidMount(){
        this.setState({...this.state, 
            series:[{
                name:this.props.name,
                data:this.props.data
            }]
        })
    }

    render() {
        return (
            <Fragment>
                <div id="chart">
                    <div id="chart-timeline">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} width={600} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GlobalConsumer(TimeSeries)