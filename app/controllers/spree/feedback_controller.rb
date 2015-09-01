module Spree
    class FeedbackController < Spree::StoreController
skip_before_action :verify_authenticity_token, only: [:send_feedback]
    def send_feedback
    	@email = params[:email]
        @name = params[:name]
        @text = params[:text]
        ExpoMailer.send_feedback(@name,@email,@text).deliver_now
        redirect_to root_url
    end
  end
end