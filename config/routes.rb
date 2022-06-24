Rails.application.routes.draw do
  root 'homes#top'
  get 'main', to:"homes#main"
  resource :user, only: [:new, :create, :show]
  get 'login', to: "sessions#new"
  post 'login', to: "sessions#create"
  get 'logout', to: "homes#top"
  delete 'logout', to: "homes#top"
  get 'view', to: "users#index"
end
