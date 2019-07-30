
class Reservation < ApplicationRecord
    validates :user_id, :rest_id, :party, :date, :time, :occasion, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :rest_id,
        class_name: :Restaurant

    has_one :review,
        foreign_key: :res_id,
        class_name: :Review
end
