module Spree
    class ReviewPageController < Spree::StoreController
    skip_before_action :verify_authenticity_token, only: [:create]
    def feedback_params
    	params.permit(:author, :message, :id, :order_num)
    end

    def index
      @feedbacks = Feedback.all
      
    end

    def create
    	@feedback = Feedback.new(feedback_params)
    if @feedback.save
      redirect_to action: "index"
      flash[:success] = "Отзыв добавлен!"
    else
      redirect_to action: "index"
      flash[:alert] = "Отзыв не добавлен!"
    end
    end

    def destroy
      @feedback = Feedback.find(params[:id])
      @feedback.destroy
      redirect_to action: "index"
      flash[:success] = "Отзыв удален!"
    end
  end
end