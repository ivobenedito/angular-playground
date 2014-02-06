class Contact
  include Mongoid::Document
  include Mongoid::Timestamps

  field :first_name, type: String
  field :last_name,  type: String
  field :email,      type: String
  field :number,     type: Integer
end