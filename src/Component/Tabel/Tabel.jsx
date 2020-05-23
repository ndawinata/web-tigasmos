import React, { Component, Fragment } from "react";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns, data } from './data';
import { GlobalConsumer } from "../context/context";
import moment from 'moment';

class Tabel extends Component {
    state = {
        site:"site-1",
        namaSite:["site-1","site-2","site-3"],
        site1Active:'active',
        site2Active:'',
        site3Active:'',
        dateNow:moment().format('YYYY-MM-DD'),
        datePick:moment().format('YYYY-MM-DD'),
    }
    tableData = {
        columns,
        data,
    };

    dispatch = (action) =>{
        switch(action.type){
            case 'site_1':
                this.setState({...this.state, site:'site-1', site1Active:'active', site2Active:'', site3Active:''})
                break
            case 'site_2':
                this.setState({...this.state, site:'site-2', site1Active:'', site2Active:'active', site3Active:''})
                break
            case 'site_3':
                this.setState({...this.state, site:'site-3', site1Active:'', site2Active:'', site3Active:'active'})
                break
            default :
                this.setState({...this.state})
        }
    }

    render() {
        return (
            <Fragment>
                <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing
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
                                <DataTableExtensions {...this.tableData}>
                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>
                                        <label className="mr-2" for="start">Start date :</label>
                                        <input className="btn btn-outline-primary btn-sm" id="start" type="date" value={this.state.datePick} min='2020-04-23' max={this.state.dateNow} />
                                    </div>
                                    <div className="btn-group">
                                        <button style={{textTransform:"capitalize"}}
                                            className="btn btn-outline-primary btn-sm dropdown-toggle" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.site} tigasmos
                                        </button>
                                        <div style={{cursor:"pointer"}} className="dropdown-menu px-0">
                                            <div className={`dropdown-item ${this.state.site1Active}`} onClick={()=>
                                                {this.dispatch({type:"site_1"})}}>Site 1</div>
                                            <div className={`dropdown-item ${this.state.site2Active}`} onClick={()=>
                                                {this.dispatch({type:"site_2"})}}>Site 2</div>
                                            <div className={`dropdown-item ${this.state.site3Active}`} onClick={()=>
                                                {this.dispatch({type:"site_3"})}}>Site 3</div>
                                        </div>
                                    </div>
                                    <button style={{textTransform:"capitalize"}} type="button"
                                        className="btn btn-outline-primary btn-sm">Download All</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-one">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="btn-group">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-center">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GlobalConsumer(Tabel);
