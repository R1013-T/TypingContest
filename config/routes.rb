Rails.application.routes.draw do
  root 'homes#top'
  
  resource :user, only: [:new, :create, :show]

  get 'login', to: "sessions#new"
  post 'login', to: "sessions#create"
  delete 'logout', to: "sessions#destroy"

  get 'main', to: "homes#main"
  get 'result', to: "homes#result"
  get 'view', to: "homes#view"

  post 'result', to: "home#result"

  get 'signin', to: "users#new"
  get 'conf', to: "users#show"
end
