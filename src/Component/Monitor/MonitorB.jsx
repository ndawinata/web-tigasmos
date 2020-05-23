import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import moment from 'moment'

export class MonitorB extends Component {

    render() {
        return (
            <Fragment>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-card-two">
                            <div className="widget-content">

                                <div className="media">
                                    <div className="w-img">
                                    
                                        <img src="assets/img/nature1.png" alt="avatar" />
                                    </div>
                                    <div className="media-body">
                                        <h6>Weather</h6>
                                        {/* <span><img className="mr-2" style={{height:"13px"}} src="assets/img/pin.png" alt="avatar" /></span>
                                        <span style={{fontSize:'small'}} className="text-muted">{this.state.location.name}, {this.state.location.region}, {this.state.location.country}</span> */}
                                    </div>
                                </div>

                                <div className="card-bottom-section">
                                    <div className="container my-2">
                                        {/* <div className="row px-2">
                                            <div className="col-3">
                                                <img className="my-3" style={{height:"70px"}} src={this.state.SIcon} alt="avatar" />
                                            </div>
                                            <div className="col-3">
                                                <h2 className="my-4">{this.state.current.temperature}&deg;C</h2>
                                            </div>
                                            <div style={{fontSize:"78%", textAlign:"left"}} className="col-6 my-1">
                                                <div><b>Humidity : </b>{this.state.current.humidity}%</div>
                                                <div><b>Pressure : </b>{this.state.current.pressure} mb</div>
                                                <div><b>Wind Degree : </b>{this.state.current.wind_degree}&deg;</div>
                                                <div><b>Wind Speed : </b>{this.state.current.wind_speed} km/h</div>
                                                <div><b>Weather : </b>{this.state.current.weather_descriptions}</div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Fragment>
        )
    }
}

export default MonitorB
