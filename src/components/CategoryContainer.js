import React from 'react'
import Category from './Category'

export default class CategoryContainer extends React.Component{
    renderCategories() {
        return this.props.categories.map((c) => <Category key={c.idCategory} className="sidebar" category={c} handleClick={this.handleClick}/>)
    }

    handleClick = (e) => {
        this.props.filterMeal(e.target.innerText)
    }
    
    render() {
        return(
            <div>
                <p className="sidebar-header"><u>Categories</u></p>
                {this.renderCategories()}
            </div>
        )
    }
}

