class Contact
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name,   type: String
  field :email,  type: String
  field :number, type: Integer
end