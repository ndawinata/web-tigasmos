import React, { Component, Fragment } from 'react'
import { GlobalConsumer } from '../context/context'
import './style.css'

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
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
                            <li className="menu menu-heading my-2">
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
                            <li className={`menu ${this.props.state.weather_active} mt-1 mb-3`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'weather_active'})}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cloud-lightning"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>                                                                            
                                        <span>Weather</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.clock_active} my-3`}>
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
                            <li className={`menu ${this.props.state.maps_active} my-3`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'maps_active'})}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>                                    
                                        <span>Site Tigasmos Maps</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.notif_active} my-3`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'notif_active'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>                                    
                                        <span>Notifications</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.chart_active} my-3`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'chart_active'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                        <span>Site Tigasmos Chart</span>
                                    </div>
                                </div>
                            </li>
                            <li className={`menu ${this.props.state.tabel_active} mb-1 mt-3`}>
                                <div className="dropdown-toggle" onClick={()=>
                                    {this.props.dispatch({type:'tabel_active'})}}>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>                                    
                                        <span>Data Table</span>
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
                                    <span>APP VERSION<div className="mt-4 px-4 text-muted version h4">Version 1.0.0</div></span>
                                    
                                </div>
                                
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