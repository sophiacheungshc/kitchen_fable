class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false, index: true
      t.integer :res_id, null: false, index: true
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambience, null: false
      t.text :comment, null: false

      t.timestamps
    end
  end
end
