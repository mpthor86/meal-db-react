Rails.application.routes.draw do
  resources :meals
  resources :users
  resources :sessions, only: [:create]
  get "logged_in", to: "sessions#logged_in"
  delete 'logout', to: 'sessions#logout'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
