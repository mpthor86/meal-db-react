import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MealContainer from './MealContainer'
import Sidebar from './Sidebar'
import Login from './Login'
import Signup from './Signup'

class Home extends React.Component {
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <MealContainer />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Home