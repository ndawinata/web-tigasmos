import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../../context/context'
import ReactApexChart from 'react-apexcharts'

class TimeSeries extends Component {
    state={
        options:{
            chart: {
                id: 'sparkline1',
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            yaxis: {
                min: 0
            },
            colors: [this.props.color],
            tooltip: {
                x: {
                    show: false,
                }
            },
            fill: {
                opacity: 1,
                type: "gradient",
                gradient: {
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: .40,
                    opacityTo: .05,
                    stops: [45, 100]
                }
            },
        }
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
                        <ReactApexChart options={this.state.options} series={this.props.series} type="area" height={100} width={253} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GlobalConsumer(TimeSeries)