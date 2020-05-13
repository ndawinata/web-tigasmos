import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import moment from 'moment'

const key = '59f2ab33ebb2defe6a1d5e6f8d546c42'
    // ganti key dengan ini -> '59f2ab33ebb2defe6a1d5e6f8d546b42' ganti key dengan ini
const url = `http://api.weatherstack.com/current?access_key=${key}&query=`

export class Weather extends Component {

    state={
        koordinate:{
            lat:-6.860863,
            lon:106.749765
        },
        current:{
            temperature:0,
            humidity:0,
            pressure:0,
            wind_degree:0,
            wind_speed:0,
            weather_code:111,
            weather_descriptions:'Loading...'
        },
        location:{
            name:'Loading...',
            region:'Loading...',
            country:'Loading...'
        },
        waktu:'day',
        SIcon: 'assets/img/icon-weather/day/111.svg'
    }

    componentDidMount(){
        if (moment().format('HH')>5 && moment().format('HH')<18){
            this.setState({...this.state, waktu:'day'})
        } else {
            this.setState({...this.state, waktu:'night'})
        }
        navigator.geolocation.getCurrentPosition((data)=>{
            this.setState({...this.state, koordinate:{
                lat:data.coords.latitude,
                lon:data.coords.longitude
            }})
            Axios.get(`${url}${this.state.koordinate.lat},${this.state.koordinate.lon}`)
                .then((data)=>{
                    this.setState({...this.state, current:data.data.current})
                    this.setState({...this.state, location:data.data.location})
                    this.setState({...this.state, SIcon:`assets/img/icon-weather/${this.state.waktu}/${this.state.current.weather_code}.svg`})
                })
        })
        
    }

    render() {
        return (
            <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-card-two">
                            <div className="widget-content">

                                <div className="media">
                                    <div className="w-img">
                                    
                                        <img src="assets/img/nature1.png" alt="avatar" />
                                    </div>
                                    <div className="media-body">
                                        <h6>Weather</h6>
                                        <span><img className="mr-2" style={{height:"13px"}} src="assets/img/pin.png" alt="avatar" /></span>
                                        <span style={{fontSize:'small'}} className="text-muted">{this.state.location.name}, {this.state.location.region}, {this.state.location.country}</span>
                                    </div>
                                </div>

                                <div className="card-bottom-section">
                                    <div className="container my-2">
                                        <div className="row px-2">
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

export default Weather
