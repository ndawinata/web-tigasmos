import React, {Fragment} from 'react'
import Expenses from '../Expenses/Expenses'
import UniqueVisitor from '../UniqueVisitor/UniqueVisitor'
import Notifications from '../Notifications/Notifications'
import Visitors from '../Visitors/Visitors'
import Followers from '../Followers/Followers'
import Article from '../Article/Article'
import PendingTask from '../PendingTask/PendingTask'
import Members from '../Members/Members'
import Maps from '../Maps/Maps'
import Statistics from '../Statistics/Statistics'
import Proplan from '../Proplan/Proplan'

const Content = () => {
return (
<Fragment>
    <div id="content" className="main-content">
        <div className="layout-px-spacing">
            <div className="row layout-top-spacing">
                <Statistics />
                <Proplan />
                <Expenses />
                <UniqueVisitor />
                <Notifications />
                <Visitors />
                <Followers />
                <Article />
                <PendingTask />
                <Members />
                <Maps />
            </div>
        </div>
    </div>
</Fragment>
)
}

export default Content