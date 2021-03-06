Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :campaigns, only: [:create, :show, :index, :update, :destroy] do
      resources :rewards, only: [:index, :create]
    end
    resources :contributions, only: [:create]
    resources :rewards, only: [:update, :destroy]
    get 'firstfive', to: 'features#firstfive'
  end

  root to: 'static_pages#root'

end
