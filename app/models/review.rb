# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  res_id     :integer          not null
#  overall    :integer          not null
#  food       :integer          not null
#  service    :integer          not null
#  ambience   :integer          not null
#  comment    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :res_id, presence: true
    validates :overall, :food, :service , :ambience, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true
    validates :comment, length: { maximum: 500 }

    belongs_to :reservation,
        foreign_key: :res_id,
        class_name: :Reservation

    has_one :restaurant,
        through: :reservation,
        source: :restaurant

    has_one :user,
        through: :reservation,
        source: :user

end
