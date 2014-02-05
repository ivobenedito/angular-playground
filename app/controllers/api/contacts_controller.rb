module Api
  class ContactsController < Api::BaseController
    def index
      @contacts = Contact.all
    end

    def create
      @contact = Contact.create(contact_parms)
    end

    def show
      @contact = Contact.find(params[:id])
    end

    def update
      @contact = Contact.find(params[:id])
      @contact.update_attributes(contact_params)
    end

    def contact_params
      params.require(:contact).permit(:name, :email, :number)
    end

  end
end