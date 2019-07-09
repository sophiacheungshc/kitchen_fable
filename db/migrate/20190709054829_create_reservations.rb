class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :rest_id, null: false
      t.string :time, null: false
      t.string :date, null: false
      t.integer :party, null: false
      t.string :occasion, null: false

      t.timestamps

    end
    
    add_index :reservations, :user_id
    add_index :reservations, :rest_id
  end
end
