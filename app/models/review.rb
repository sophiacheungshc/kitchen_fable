class Review < ApplicationRecord
    validates :user_id, :rest_id, presence: true
    validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
    validates :comment, length: { maximum: 500 }

    belongs_to :user

    belongs_to :restaurant,
        foreign_key: :rest_id,
        class_name: :Restaurant
end
