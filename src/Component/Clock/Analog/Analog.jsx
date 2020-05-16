import React, { Component, Fragment } from 'react'
import AnalogClock from 'analog-clock-react'
import moment from 'moment'
import { GlobalConsumer } from '../../context/context'

let options = {
    width: "150px",
    border: true,
    borderColor: "#000",
    baseColor: "#fff",
    centerColor: "#d81c7a",
    handColors: {
        second: "#d81c7a",
        minute: "#000",
        hour: "#000"
    }
}

class Analog extends Component {
    state={
        date:'Loading ...',
        tclose:''
    }
    
    // handleClose(e){
    //     this.setState({...this.state, close:"d-none"})
    // }

    componentDidMount(){
        this.setState({date:moment().format('dddd, Do MMMM YYYY, hh:mm a')})
        setInterval(
                () => this.setState({date:moment().format('dddd, DD MMMM YYYY, HH:MM')}),
                60000
            )
    }

    render() {
        return (
            <Fragment>
                <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing ${this.props.state.clock_enable}`}>
                        <div className="widget widget-five">
                            <div className="widget-content">

                                <div className="header">
                                    <div className="header-body ml-2">
                                        <h6>Clock</h6>
                                        <small className="text-muted">{this.state.date}</small>
                                    </div>
                                    <div className="task-action">
                                        <div className="container">
                                            <button type="button" 
                                            onClick={()=>{
                                                // this.props.dispatch({type:'disable'})
                                                this.props.dispatch({type:'clock_inactive'})
                                                }} 
                                                className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-content">
                                <div className="container d-flex justify-content-center">
                                <AnalogClock {...options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Fragment>
        )
    }
}

export default GlobalConsumer(Analog)
