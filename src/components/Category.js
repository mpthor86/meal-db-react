import React from "react"

export default class Category extends React.Component {
    render(){
        return(
            <div>
                <li className="category" onClick={this.props.handleClick} >{this.props.category.strCategory}</li>
            </div>
        )
    }  
}