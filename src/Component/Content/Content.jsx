import React, {Fragment} from 'react'
import Expenses from '../Expenses/Expenses'
// import UniqueVisitor from '../UniqueVisitor/UniqueVisitor'
import Notifications from '../Notifications/Notifications'
import Visitors from '../Visitors/Visitors'
import Followers from '../Followers/Followers'
import Article from '../Article/Article'
import PendingTask from '../PendingTask/PendingTask'
import Members from '../Members/Members'
import Maps from '../Maps/Maps'
// import Statistics from '../Statistics/Statistics'
import Proplan from '../Proplan/Proplan'
import Weather from '../Weather/Weather'
import Analog from '../Clock/Analog/Analog'
import Kalender from '../Kalender/Kalender'
import Chart from '../Chart/Chart'

// import Chart from '../Chart/Chart'

const Content = () => {
return (
<Fragment>
    <div id="content" className="main-content">
        <div className="layout-px-spacing">
            <div className="row layout-top-spacing">
                {/* <Weather/> */}
                <Analog />
                {/* <Kalender /> */}
                <PendingTask />
                <Members />
                <Chart />
                <Maps />
                {/* <Statistics /> */}
                <Proplan />
                
                <Expenses />
                {/* <UniqueVisitor /> */}
                <Notifications />
                <Visitors />
                <Followers />
                <Article />
                
                {/* <Chart /> */}
            </div>
        </div>
    </div>
</Fragment>
)
}

export default Content