module API
  class TasksController < API::BaseController
    def index
      @tasks = Task.all
    end

    def create
      @task = Task.create(params[:task])
    end

    def show
      @task = Task.find(params[:id])
    end

    def update
      @task = Task.find(params[:id])
      @task.update_attributes(params[:task])
    end

  end
end