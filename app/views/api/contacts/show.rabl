object @contact
attributes :first_name, :last_name, :slug, :email, :number

node(:id) { |c| c.id.to_s }