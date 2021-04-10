import React from "react"
import {Link} from 'react-router-dom'

export default class Category extends React.Component {
    render(){
        return(
            <div>
                <Link to={`/categories/${this.props.category.strCategory}`} className="category" onClick={this.props.handleClick} >{this.props.category.strCategory}</Link>
            </div>
        )
    }  
}