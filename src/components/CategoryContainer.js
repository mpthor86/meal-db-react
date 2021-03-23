import React from 'react'
import Category from './Category'

export default class CategoryContainer extends React.Component{
    
    catClick = () => {
        this.props.categories.map((c) => <Category key={c.idCategory} name={c.strCategory} />)
        return(<Category />)
    }
    
    render() {
        return(
            <div>
                <button onClick={this.catClick}>Categories</button>
            </div>
        )
    }
}