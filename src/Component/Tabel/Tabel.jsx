import React, { Component, Fragment } from "react";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { GlobalConsumer } from "../context/context";
import moment from 'moment';
import Axios from 'axios'

class Tabel extends Component {
    state = {
        site:"site-1",
        site1Active:'active',
        site2Active:'',
        site3Active:'',
        notif:'',
        notifColums:[
            {
                name:'Date',
                selector:'date',
                sortable: true,
                cell: d => moment(d.date).format('D MMMM YYYY')
            },
            {
                name:'Time',
                selector:'date',
                sortable: true,
                cell: d => moment(d.date).format('HH:mm:ss')
            },
            {
                name:'Lokasi',
                selector:'lokasi',
                sortable: true
            },
            {
                name:'Height (m)',
                selector:'ketinggian',
                sortable: true
            }
        ],
        siteColumns:[
            {
                name:'Date',
                selector:'date',
                sortable: true,
                cell: d => moment(d.date).format('D MMMM YYYY')
            },
            {
                name:'Time',
                selector:'date',
                sortable: true,
                cell: d => moment(d.date).format('HH:mm:ss')
            },
            {
                name:'Pasut Sensor 1 (m)',
                selector:'pasut_sensor_tekanan',
                sortable: true
            },
            {
                name:'Pasut Sensor 2 (m)',
                selector:'pasut_sensor_ultrasonik',
                sortable: true
            }
        ],
        tableData:{
            columns:[
                {
                    name:'Date',
                    selector:'date',
                    sortable: true,
                    cell: d => moment(d.date).format('D MMMM YYYY')
                },
                {
                    name:'Time',
                    selector:'date',
                    sortable: true,
                    cell: d => moment(d.date).format('HH:mm:ss')
                },
                {
                    name:'Pasut Sensor 1 (m)',
                    selector:'pasut_sensor_tekanan',
                    sortable: true,
                },
                {
                    name:'Pasut Sensor 2 (m)',
                    selector:'pasut_sensor_ultrasonik',
                    sortable: true
                }
            ],
            data:[{
                "_id": "5ea02f922e5a8d30d01c6470",
                "date": "2020-04-22T13:50:42",
                "pasut_sensor_tekanan": 10,
                "pasut_sensor_ultrasonik": 100,
                "__v": 0
            }]
        }
    }

    handleUpdateTable = (input) =>{
        Axios.get(`http://localhost:5000/api/${input}`)
                .then((dataf) => {
                    var a = dataf.data.datas
                    this.setState({
                        ...this.state,
                        tableData:{
                            columns:this.state.siteColumns,
                            data:a
                        }
                    })
                })
        
    }
    handleUpdateNotif = () =>{
        Axios.get(`http://localhost:5000/api/notif`)
                .then((dataf) => {
                    var c = dataf.data.datas
                    this.setState({
                        ...this.state,
                        tableData:{
                            columns:this.state.notifColums,
                            data:c
                        }
                    })
                })
        
    }
        

    componentDidMount(){
        Axios.get(`http://localhost:5000/api/${this.state.site}`)
                .then((data) => {
                    var a = data.data.datas
                    this.setState({
                        ...this.state,
                        tableData:{
                            columns:this.state.siteColumns,
                            data:a
                        }
                    })
                })
    }
    
    dispatch = (action) =>{
        switch(action.type){
            case 'site_1':
                this.setState({...this.state, site:'site-1', site1Active:'active', site2Active:'', site3Active:'', notif:''})
                this.handleUpdateTable('site-1')
                break
            case 'site_2':    
                this.setState({...this.state, site:'site-2', site1Active:'', site2Active:'active', site3Active:'', notif:''})
                this.handleUpdateTable('site-2')
                break
            case 'site_3':
                this.setState({...this.state, site:'site-3', site1Active:'', site2Active:'', site3Active:'active', notif:''})
                this.handleUpdateTable('site-3')
                break
            case 'notif':
                this.setState({...this.state, site1Active:'', site2Active:'', site3Active:'', notif:'active'})
                this.handleUpdateNotif()
                break
            default :
                this.setState({...this.state})
        }
    }

    render() {
        return (
            <Fragment>
                <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing
                    ${this.props.state.tabel_enable}`}>
                    <div className=" widget widget-activity-three">
                        <div className="widget-heading">
                            <h5 className="">Data Table</h5>
                            <div className="task-action">
                                <div className="container">
                                    <button type="button" onClick={()=> {
                                        this.props.dispatch({ type: "tabel_inactive" });
                                        }}
                                        className="close"
                                        aria-label="Close"
                                        >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-content">
                            <div className="w-content mx-3 px-2">
                            <div className="d-flex flex-row-reverse bd-highlight">
                                    <div className="btn-group mr-3">
                                        <button style={{textTransform:"capitalize"}}
                                            className="btn btn-outline-primary btn-sm dropdown-toggle mt-2" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.site} tigasmos
                                        </button>
                                        <div style={{cursor:"pointer"}} className="dropdown-menu px-0">
                                            <div className={`dropdown-item ${this.state.site1Active}`} onClick={()=>
                                                {this.dispatch({type:"site_1"});}}>Site 1</div>
                                            <div className={`dropdown-item ${this.state.site2Active}`} onClick={()=>
                                                {this.dispatch({type:"site_2"})}}>Site 2</div>
                                            <div className={`dropdown-item ${this.state.site3Active}`} onClick={()=>
                                                {this.dispatch({type:"site_3"})}}>Site 3</div>
                                            <div className={`dropdown-item ${this.state.notif}`} onClick={()=>
                                                {this.dispatch({type:"notif"})}}>Notifikasi</div>
                                        </div>
                                    </div>
                                </div>
                                <DataTableExtensions {...this.state.tableData}>
                                    <DataTable
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                            </div>
                        </div>
                        <div className="widget-content-one">
                        <div className="text-muted">
                                Note :
                            </div>
                            <div className="text-muted">
                                sensor 1 : sensor tekanan
                            </div>
                            <div className="text-muted">
                                sensor 2 : sensor ultrasonik
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GlobalConsumer(Tabel);
