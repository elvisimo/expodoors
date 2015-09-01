module Spree
  class ZamerPageController < Spree::StoreController
    skip_before_action :verify_authenticity_token, only: [:zamer_email]
    def index
    end
    def zamer_email
        @phone = params[:phone]
        @name = params[:name]
        ExpoMailer.zamer_email(@name,@phone).deliver_now
        redirect_to root_url
    end
  end
end