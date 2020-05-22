import React, { Component, Fragment } from 'react'
import AnalogClock from 'analog-clock-react'
import moment from 'moment'
import { GlobalConsumer } from '../../context/context'

let options = {
    width: "150px",
    border: true,
    borderColor: "#3b3b3b",
    baseColor: "#fff",
    centerColor: "#d81c7a",
    handColors: {
        second: "#d81c7a",
        minute: "#3b3b3b",
        hour: "#3b3b3b"
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
                <div className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing ${this.props.state.clock_enable}`}>
                    <div className="widget widget-activity-three">
                        <div className="widget-heading">
                            
                            <div className="row">
                                <div className="col-12"><h5 className="">Clock</h5></div>
                                {/* <div className="col-12 text-muted"><small>{this.state.date}</small></div> */}
                            </div>
                            <div className="task-action">
                                <div className="container">
                                    <button type="button" onClick={()=>{
                                        this.props.dispatch({type:'clock_inactive'})
                                        }}
                                        className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="widget-content d-flex justify-content-center ">
                            <div className="row container d-flex justify-content-center">
                                <div className="col-12 d-flex justify-content-center my-3">
                                    <AnalogClock {...options} />
                                </div>
                                <div className="mb-2 col-12 d-flex justify-content-center">
                                    <h2>{moment().format('hh:mm')}</h2>
                                </div>
                                <div style={{fontWeight:"bold"}} className="col-12 d-flex justify-content-center">
                                    <h6>{moment().format('dddd')}</h6>
                                </div>
                                <div style={{fontWeight:"bold"}} className="col-12 d-flex justify-content-center">
                                    <h6>{moment().format('D MMMM YYYY')}</h6>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        //     <Fragment>
        //         <div className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing ${this.props.state.clock_enable}`}>
        //                 <div className="widget widget-activity-three">
        //                     <div className="widget-content">

        //                         <div className="widget-heading">
        //                             <div className="header-body ml-2">
        //                                 <h6>Clock</h6>
        //                                 <small className="text-muted">{this.state.date}</small>
        //                             </div>
        //                             <div className="task-action">
        //                                 <div className="container">
                                            // <button type="button" 
                                            // onClick={()=>{
                                            //     // this.props.dispatch({type:'disable'})
                                            //     this.props.dispatch({type:'clock_inactive'})
                                            //     }} 
                                            //     className="close" aria-label="Close">
                                            //     <span aria-hidden="true">&times;</span>
                                            // </button>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         <div className="border w-content">
                                // <div className="border container d-flex justify-content-center">
                                // <AnalogClock {...options} />
                                    // </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        // </Fragment>
        )
    }
}

export default GlobalConsumer(Analog)
