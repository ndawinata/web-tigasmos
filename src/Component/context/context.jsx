import React, {Component, createContext} from 'react'

const RootContext = createContext()

//Provider
const Provider = RootContext.Provider
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {

            state = {
                clock_enable:"",
                clock_active:"active",
                weather_enable:"",
                weather_active:"active",
                chart_enable:"",
                chart_active:"active",
                maps_enable:"",
                maps_active:"active",
                notif_enable:"",
                notif_active:"active",
            }

            
            dispatch = (action) =>{
                switch(action.type){
                    case 'weather_active':
                        this.setState({...this.state, weather_active:'active', weather_enable:''})
                        break
                    case 'weather_inactive':
                        this.setState({...this.state, weather_active:'menu-heading', weather_enable:'d-none'})
                        break
                    case 'clock_active':
                        this.setState({...this.state, clock_active:'active', clock_enable:''})
                        break
                    case 'clock_inactive':
                        this.setState({...this.state, clock_active:'menu-heading', clock_enable:'d-none'})
                        break
                    case 'chart_active':
                        this.setState({...this.state, chart_active:'active', chart_enable:''})
                        break
                    case 'chart_inactive':
                        this.setState({...this.state, chart_active:'menu-heading', chart_enable:'d-none'})
                        break
                    case 'maps_active':
                        this.setState({...this.state, maps_active:'active', maps_enable:''})
                        break
                    case 'maps_inactive':
                        this.setState({...this.state, maps_active:'menu-heading', maps_enable:'d-none'})
                        break
                    case 'notif_active':
                        this.setState({...this.state, notif_active:'active', notif_enable:''})
                        break
                    case 'notif_inactive':
                        this.setState({...this.state, notif_active:'menu-heading', notif_enable:'d-none'})
                        break
                    default :
                        this.setState({...this.state})
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state:this.state,
                            dispatch:this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider

//Consumer
const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }                        
                    </Consumer>                    
                )
            }
        }        
    )
}
