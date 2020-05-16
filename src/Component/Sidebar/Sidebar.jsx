import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../context/context'

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                {/* {console.log('sidebar : ', props)} */}
                <div className="sidebar-wrapper sidebar-theme">
                    <nav id="sidebar">
                        <ul className="navbar-nav theme-brand flex-row  text-center">
                            <li className="nav-item theme-logo">
                                <a href="/">
                                    <img src="logo-new.png" className="navbar-logo" alt="logo" />
                                </a>
                            </li>
                            <li className="nav-item theme-text judul">
                                <a href="/" className="nav-link">
                                    TIGASMOS
                                </a>
                            </li>
                        </ul>

                        <ul className="list-unstyled menu-categories" id="accordionExample">
                            <li className="menu menu-heading">
                                <div data-toggle="collapse" aria-expanded="true" className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'enable'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroklinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        <span>Dasboard</span>
                                    </div>
                                </div>
                            </li>
                            <li className="menu menu-heading">
                                <div className="heading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="feather feather-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                    <span>ADD COMPONENT</span>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.weather_active}`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'enable'})}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cloud-lightning"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>                                                                            
                                        <span>Weather</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.clock_active}`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'clock_active'})}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-clock">
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span>Clock</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.chart_active}`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'chart_active'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                        <span>Site Tigasmos Chart</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.maps_active}`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'maps_active'})}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>                                    
                                        <span>Site Tigasmos Maps</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.notif_active}`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'enable'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>                                    
                                        <span>Notifications</span>
                                    </div>
                                </div>
                            </li>
                            <li className="menu menu-heading">
                                <div className="heading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="feather feather-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                    <span>PAGES</span>
                                </div>
                            </li>
                            <li className="menu menu-heading">
                                <div  className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'enable'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        <span>Dasboard</span>
                                    </div>
                                </div>
                            </li>

                            
                            <li className="menu">
                                <a href="../../documentation/index.html" aria-expanded="false"
                                    className="dropdown-toggle">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-book">
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                                            </path>
                                        </svg>
                                        <span>Documentation</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*
                <!--  END SIDEBAR  --> */}
            </Fragment>
        )
    }
}

export default GlobalConsumer(Sidebar)