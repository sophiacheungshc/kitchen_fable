class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :rest_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :notifications, :rest_id
  end
end
