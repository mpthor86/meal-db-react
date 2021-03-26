import React from 'react'
import CategoryContainer from './CategoryContainer'
import '../Sidebar.css'

export default class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <CategoryContainer style={{fixed: "right"}}filterMeal={this.props.filterMeal} categories={this.props.categories}/>
            </div>
        )
    }
}