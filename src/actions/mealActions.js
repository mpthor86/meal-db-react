export const fetchMeals = () => {
    return (disp) => {
        disp({type: 'GET_MEALS'})
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(r => r.json())
        .then(json => {disp({type: 'ADD_RANDOM_MEAL', randomMeal: json.meals})})
    }
}

export const fetchCategories = () => {
    return (disp) => {
        disp({type: 'GET_CATEGORIES'})
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(resp => resp.json())
        .then(json => {disp({type: 'ADD_CATEGORIES', categories: json.categories})})
    }
}

export const filterMealByCategory = (category) => {
    return (disp) => {
        disp({type: 'GET_MEALS'})
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(resp => resp.json())
        .then(json => {disp({type: 'ADD_MEALS', meals: json.meals})})
    }
}