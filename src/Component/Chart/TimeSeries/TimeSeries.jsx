import React, {useState, useEffect} from 'react'
import ReactApexChart from 'react-apexcharts'


const TimeSeries = (props) => {

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
    })

    let [series, setSeries] = useState(
        [{
            name: props.nama,
            data: [["2020-03-25T07:37:18.150Z", 30.95],["2020-04-25T07:37:18.150Z", 31.05]]
        }]
    )

    useEffect(() => {
        setSeries([
            {name : props.nama, data : props.data}
        ])

    },[]);

    return (
        <div>
            <div id="chart">
                <div id="chart-timeline">
                    <ReactApexChart options={options} series={series} type="area" height={350} width={600} />
                </div>
            </div>
        </div>
    )
}

export default TimeSeries