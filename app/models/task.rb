class Task
  include Mongoid::Document
  include Mongoid::Timestamps

  field :description, type: String
  field :completed,   type: Boolean, default: false
end
