import React from 'react'
import Category from './Category'
import {connect} from 'react-redux'
import {filterMealByCategory} from '../actions/mealActions'

class CategoryContainer extends React.Component{
    renderCategories() {
        return this.props.categories.map((c) => <Category key={c.idCategory + 1} className="sidebar" category={c} handleClick={this.handleClick}/>)
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

const mapStateToProps = state => {
    return {
      categories: state.categoryReducer.categories,
      categoryLoading: state.categoryReducer.loading
    }
}

const dispToProps = disp => {
    return {
      filterMeal: (category) => disp(filterMealByCategory(category))
    }
  }

export default connect(mapStateToProps, dispToProps)(CategoryContainer)