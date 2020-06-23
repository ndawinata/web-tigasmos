import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import moment from 'moment'
import { GlobalConsumer } from '../context/context'

const key = '59f2ab33ebb2defe6a1d5e6f8d546b42'
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
        SIcon:'assets/img/icon-weather/day/111.svg',
        
    }
    setHari(){
        if (moment().format('HH')>5 && moment().format('HH')<18){
            return 'day'
        } else {
            return 'night'
        }
    }
    setLocation(){
        navigator.geolocation.getCurrentPosition((pos)=>{
            var crd = pos.coords;
            Axios.get(`${url}${crd.latitude},${crd.longitude}`)
                .then((data)=>{
                    if(data.data.success===false){
                        this.setState({...this.state})
                        this.setState({...this.state})
                    }else{
                        this.setState({...this.state, current:data.data.current})
                        this.setState({...this.state, location:data.data.location})
                    }
                })
                .then(()=>
                this.setState({...this.state, SIcon:`assets/img/icon-weather/${this.setHari()}/${this.state.current.weather_code}.svg`}))
                
        },()=> {
            Axios.get(`${url}-6.263971,106.748863`)
                .then((data)=>{
                    if(data.data.success===false){
                        this.setState({...this.state})
                        this.setState({...this.state})
                    }else{
                        this.setState({...this.state, current:data.data.current})
                        this.setState({...this.state, location:data.data.location})
                    }
                })
                .then(()=>
                this.setState({...this.state, SIcon:`assets/img/icon-weather/${this.setHari()}/${this.state.current.weather_code}.svg`}))
            
        }
    );
    }
    

    componentDidMount(){
        this.setLocation()
    }
    

    render() {
        return (
            <Fragment>
            <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing ${this.props.state.weather_enable}`}>
                        <div className="widget widget-card-two">
                            <div className="widget-content">

                                <div className="media">
                                    <div className="w-img">
                                    
                                        <img src={process.env.PUBLIC_URL + 'assets/img/nature1.png'} alt="avatar" />
                                    </div>
                                    <div className="media-body">
                                    <span className="task-action">
                                            <div className="container">
                                                <button type="button" onClick={()=>{this.props.dispatch({type:'weather_inactive'})}}
                                                    className="close" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </span>
                                        <h6>Weather</h6>
                                        <span><img className="mr-2" style={{height:"13px"}} src={process.env.PUBLIC_URL + 'assets/img/pin.png'} alt="avatar" /></span>
                                        <span style={{fontSize:'small'}} className="text-muted">{this.state.location.name}, {this.state.location.region}, {this.state.location.country}</span>
                                    </div>
                                </div>

                                <div className="card-bottom-section">
                                    <div className="container my-2">
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <div className="my-2" >
                                                    <img style={{height:"70px"}} src={process.env.PUBLIC_URL + this.state.SIcon} alt="avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="my-4" >
                                                    <h2>{this.state.current.temperature}&deg;C</h2>
                                                </div>
                                            </div>
                                            <div style={{fontSize:"78%", textAlign:"left", marginLeft:15}}>
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

export default GlobalConsumer(Weather)
