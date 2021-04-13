class MealsController < ApplicationController
    def create
        user = User.find_by(id: session[:id])
        meal = Meal.new(user_id: user.id, strMeal: meal_params[:strMeal], strMealThumb: meal_params[:strMealThumb], strArea: meal_params[:strArea], strCategory: meal_params[:strCategory], strYoutube: meal_params[:strYoutube])
        if meal.save
            render json: {status: 201, meal: meal}
        else
            render json: {status: 500, message: "Could not create user."}
        end
    end

    def index
        meals = Meal.all.find_by(user_id: session[:id])
        if meals
            render json: {status: 201, meals: meals}
        else
            render json: {status: 500, message: 'Could not find meals for this profile.'}
        end
    end

    private
    def meal_params
        params.require(:meal).permit(:strMeal, :strMealThumb, :strArea, :strCategory, :strYoutube, :username)
    end

end