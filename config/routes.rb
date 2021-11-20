Rails.application.routes.draw do
  root to: 'flats#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :flats
end
