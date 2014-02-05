AngularTodoApp::Application.routes.draw do
  root 'welcome#index'

  get 'playground',       to: 'welcome#playground'
  get 'contacts',         to: 'welcome#contacts'
  get 'filter',           to: 'welcome#filter'
  get 'custom_filter',    to: 'welcome#custom_filter'
  get 'custom_directive', to: 'welcome#custom_directive'

  namespace :api, defaults: { format: :json } do
    resources :tasks
  end
end
