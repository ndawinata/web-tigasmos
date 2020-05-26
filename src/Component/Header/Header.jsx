import React, { Component, Fragment } from 'react'
import "./style.css";
import "./modules-widgets.css"
import socketIOClient from 'socket.io-client'
import moment from 'moment'

const io = socketIOClient("http://tigasmos-stmkg.my.id:5000")

class Header extends Component {
  state = {
    data : [],
    notif: 'd-none'
  }

  dispatch = (action) =>{
    switch(action.type){
        case 'notif_active':
            this.setState({...this.state, notif:''})
            break
        case 'notif_inactive':
            this.setState({...this.state, notif:'d-none'})
            break
        default :
            this.setState({...this.state})
    }
  }

  listItem(){
    return this.state.data.map((val,i)=>{
      return(
        <div key={i} className="media d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-check-circle">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div className="media-body">
            <div className="notification-para">
              <span className="user-name">Tsunami Terkonfirmasi </span>
            </div>
            <div><small>Ketinggian Tsunami {val.ketinggian} m | {val.nama}</small></div>
            <div className="notification-meta-time">{moment(val.date).fromNow()}</div>
          </div>
        </div>
      )
    })
  }

  componentDidMount(){
    io.on('notif',(value)=>{
      this.state.data.unshift(value)
      let tambah = this.state.data
      this.setState({...this.state, data:tambah})
      this.dispatch({type:"notif_active"})
  })
  }

  render() {
    return (
      <Fragment>
      <div className="header-container fixed-top">
        <header onClick={()=>{this.dispatch({type:"notif_inactive"})}} className="header navbar navbar-expand-sm expand-header">
          <span className="sidebarCollapse click" data-placement="bottom" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </span>

          <ul className="navbar-item flex-row ml-auto">
            <li className="mr-3 nav-item dropdown notification-dropdown">
              <span
                className="nav-link dropdown-toggle click"
                id="notificationDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className={`badge badge-success ${this.state.notif}`}></span>
              </span>
              <div
                className="dropdown-menu position-absolute e-animated e-fadeInUp" aria-labelledby="notificationDropdown">
                <div className="notification-scroll">
                  <div className="dropdown-item">
                    {this.listItem()}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </Fragment>
    )
  }
}

export default Header