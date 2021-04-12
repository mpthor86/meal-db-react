class MealsController < ApplicationController
    def create
        user = User.find_by(username: params[:user][:username])
        meal = Meal.new(user_id: user.id, name: meal_params[:strMeal], picture: meal_params[:strMealThumb], area: meal_params[:strArea], category: meal_params[:strCategory], video: meal_params[:strYoutube])
        if meal.save
            render json: {status: 201, meal: meal}
        else
            render json: {status: 500, message: "Could not create user."}
        end
    end

    def index
        byebug
        meals = Meal.all.find_by(current_user.id)
    end

    private
    def meal_params
        params.require(:meal).permit(:strMeal, :strMealThumb, :strArea, :strCategory, :strYoutube, :username)
    end

end