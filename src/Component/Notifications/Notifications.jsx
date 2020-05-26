import React, { Component, Fragment } from 'react'
import logo from './tsunami_51px.png'
import axios from 'axios'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import socketIOClient from 'socket.io-client'
import {GlobalConsumer} from '../context/context'

const io = socketIOClient("http://tigasmos-stmkg.my.id:5000")

class Notifications extends Component {

    state = {
        data:[]
    }
    
    notifikasi(){
            return this.state.data.map((value,index)=>{
                return (
                    <div key={index} className="item-timeline timeline-new">
                        <div className="t-dot">
                            <div className="t-primary"><img src={logo} width="85%" height="85%" alt="logo" /></div>
                        </div>
                        <div className="t-content">
                            <div className="t-uppercontent">
                                <h5>Tsunami</h5>
                                <span> {moment(value.date).format('D MMM YYYY')} </span>
                            </div>
                            <p><a href="https://www.google.com/maps/@-6.2713083,106.7352587">{value.lokasi}</a>
                            </p>
                            <p>Konfirmasi Kedatangan Tsunami di {value.nama} Setinggi {value.ketinggian} m</p>    
                        </div>
                    </div>
                )
            })
    }

    componentDidMount(){
        axios('http://tigasmos-stmkg.my.id:5000/api/notif')
            .then((value) => {
            let reverseData=value.data.datas.reverse()
            this.setState({data:reverseData})
        })
        io.on('notif',(value)=>{
            this.state.data.unshift(value)
            let tambah = this.state.data
            this.setState({data:tambah})
        })
    }

    render() {
        return (
            <Fragment>
                <div className={`col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing ${this.props.state.notif_enable}`}>
                <div className="widget widget-activity-three">
                    <div className="widget-heading">
                        <h5 className="">Notifications</h5>
                        <div className="task-action">
                                    <button type="button" onClick={()=>{this.props.dispatch({type:'notif_inactive'})}}
                                        className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                        </div>
                    </div>
                    <div className="widget-content">
                        <div className="mt-container pl-0">
                        
                                <PerfectScrollbar className="px-3">
                            <div className="timeline-line">
                                {/* {displayData} */}
                                {/* {datarealtime()} */}
                                {this.notifikasi()}
                                
                            </div>
                                </PerfectScrollbar>
                            
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default GlobalConsumer(Notifications)