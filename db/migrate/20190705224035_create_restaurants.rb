class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false      
      t.string :location, null: false      
      t.string :phone_number, null: false     
      t.string :cuisine, null: false      
      t.string :menu, null: false      
      t.string :hours, null: false      
      t.string :dress_code, null: false      
      t.string :exec_chef, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :restaurants, :name
    add_index :restaurants, :location
  end
end
