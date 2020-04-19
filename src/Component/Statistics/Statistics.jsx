import React, { Fragment } from 'react'

function Statistics() {
return (
<Fragment>
    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div className="widget widget-one">
            <div className="widget-heading">
                <h6 className="">Statistics</h6>
            </div>
            <div className="w-chart">
                <div className="w-chart-section">
                    <div className="w-detail">
                        <p className="w-title">Total Visits</p>
                        <p className="w-stats">423,964</p>
                    </div>
                    <div className="w-chart-render-one">
                        <div id="total-users"></div>
                    </div>

                    <div className="w-chart-section">
                        <div className="w-detail">
                            <p className="w-title">Paid Visits</p>
                            <p className="w-stats">7,929</p>
                        </div>
                        <div className="w-chart-render-one">
                            <div id="paid-visits"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
)
}

export default Statistics