class ApplicationController < ActionController::API
    #skip_before_action :verify_authenticity_token
    def logged_in
        !!current_user
    end

    def current_user
        @current_user ||= User.find(session[:id]) if session[:id]
    end
end
