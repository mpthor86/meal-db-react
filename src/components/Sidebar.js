import React from 'react'
import CategoryContainer from './CategoryContainer'
import '../Sidebar.css'
import {Link} from 'react-router-dom'

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <CategoryContainer style={{fixed: "right"}}filterMeal={this.props.filterMeal} categories={this.props.categories}/>
            </div>
        )
    }
}