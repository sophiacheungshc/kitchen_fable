class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false, index: true
      t.integer :rest_id, null: false, index: true
      t.integer :rating, null: false
      t.text :comment, null: false

      t.timestamps
    end
  end
end
