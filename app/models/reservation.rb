# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  rest_id    :integer          not null
#  time       :string           not null
#  date       :string           not null
#  party      :integer          not null
#  occasion   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Reservation < ApplicationRecord
    validates :user_id, :rest_id, :party, :date, :time, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :rest_id,
        class_name: :Restaurant
end
