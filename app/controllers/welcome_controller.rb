class WelcomeController < ApplicationController
  def index; end
  def playground; end
  def contacts; end
  def filter; end
  def custom_filter; end

  def kontacts
    render layout: 'kontacts'
  end
end