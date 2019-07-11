class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :rest_id

      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :rest_id
  end
end
