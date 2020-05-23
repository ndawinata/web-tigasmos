import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import socketIOClient from 'socket.io-client'
import { GlobalConsumer } from '../context/context'
import TimeSeries from '../Chart/TimeSeries/TimeSeries'

const io = socketIOClient("http://localhost:5000")

export class Monitor extends Component {

    state = {
        seriesA: [{
            name: 'Site 1',
            data: [28, 50, 36, 60, 38, 52, 38]
        }],
        seriesB: [{
            name: 'Site 2',
            data: [28, 50, 36, 60, 38, 52, 38]
        }],
        seriesC: [{
            name: 'Site 3',
            data: [28, 50, 36, 60, 38, 52, 38]
        }]
    };

    render() {
        return (
            <Fragment>
                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                    <div className="row widget-statistic">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="widget widget-one_hybrid widget-followers">
                                <div className="widget-heading">
                                    <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" 
                                    className="feather feather-life-buoy">
                                        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                    </svg>
                                    </div>
                                    <p className="w-value">0.23 meter</p>
                                    <h5 className="">Site 1</h5>
                                </div>
                                <div className="widget-content">
                                    <div className="w-chart">
                                        <TimeSeries series={this.state.seriesA} color='#1b55e2'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="widget widget-one_hybrid widget-referral">
                                <div className="widget-heading">
                                    <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" 
                                    className="feather feather-life-buoy">
                                        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                    </svg>
                                    </div>
                                    <p className="w-value">0.32 meter</p>
                                    <h5 className="">Site 2</h5>
                                </div>
                                <div className="widget-content">
                                    <div className="w-chart">
                                    <TimeSeries series={this.state.seriesB} color='#e7515a' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="widget widget-one_hybrid widget-engagement">
                                <div className="widget-heading">
                                    <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" fill="none" 
                                    stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" 
                                    className="feather feather-life-buoy">
                                        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                    </svg>
                                    </div>
                                    <p className="w-value">0.45 meter</p>
                                    <h5 className="">Site 3</h5>
                                </div>
                                <div className="widget-content">
                                    <div className="w-chart">
                                        <TimeSeries series={this.state.seriesC} color='#8dbf42'/>
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

export default Monitor