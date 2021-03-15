export const fetchMeals = () => {

}

export const fetchCategories = () => {
    return (disp) => {
        disp({type: 'GET_CATEGORIES'})
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(resp => resp.json())
        .then(json => {disp({type: 'ADD_CATEGORIES', categories: json.categories})})
    }
}