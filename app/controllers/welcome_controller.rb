class WelcomeController < ActionController::Base
  def index
    render text: 'WELCOME!'
  end
end