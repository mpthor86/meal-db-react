import React from "react"

export default class Category extends React.Component {
    render(){
        return(
            <div>
                <li>{this.props.category.strCategory}</li>
            </div>
        )
    }  
}