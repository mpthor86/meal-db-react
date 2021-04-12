class UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.save
            session[:id] = user.id
            render json: {status: 201, user: user, logged_in: true}
        else
            render json: {status: 500, message: "Could not create user."}
        end
    end

    private
    def user_params
    params.require(:user).permit(:username, :password)
    end
end