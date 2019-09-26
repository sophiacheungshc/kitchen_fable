class Notification < ApplicationRecord
    validates :user, :rest_id, presence: true

    belongs_to :restaurant,
        foreign_key: :rest_id,
        class_name: :Restaurant
end
