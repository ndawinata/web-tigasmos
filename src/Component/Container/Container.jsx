import React, {Fragment} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
// import Grafik from '../Grafik/Grafik'
// import ApexChart from '../Apex/Apex'

const Container = () => {
    return (
        <Fragment>
            <div className="main-container sidebar-closed sbar-open" id="container">
                <div className="overlay"></div>
                <div className="cs-overlay"></div>
                <div className="search-overlay"></div>
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <Content />

            </div>
        </Fragment>
    )
}


export default Container