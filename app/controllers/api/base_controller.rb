module API
  class BaseController < ActionController::Base
    respond_to :json
  end
end