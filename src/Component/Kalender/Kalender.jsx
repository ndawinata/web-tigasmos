import React, { Component, Fragment } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

class Kalender extends Component {
    state={
        date:new Date()
    }
    onChange = date => this.setState({date})

    render() {
        return (
            <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-card-two">
                            <div className="widget-content">

                                <div className="media">
                                    <div className="w-img">
                                    
                                    </div>
                                    <div className="media-body">
                                        <h6>Calendar</h6>
                                        <p className="meta-date">{moment().format("LLLL")}</p>
                                    </div>
                                </div>

                                <div className="card-bottom-section">
                                    <div className="container">
                                        <div>
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
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

export default Kalender
