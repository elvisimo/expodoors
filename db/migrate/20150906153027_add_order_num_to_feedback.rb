class AddOrderNumToFeedback < ActiveRecord::Migration
  def change
    add_column :feedbacks, :order_num, :string
  end
end
