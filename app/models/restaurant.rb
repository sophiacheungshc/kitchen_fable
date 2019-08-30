# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  location     :string           not null
#  phone_number :string           not null
#  cuisine      :string           not null
#  menu         :string           not null
#  hours        :string           not null
#  dress_code   :string           not null
#  exec_chef    :string           not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#


class Restaurant < ApplicationRecord
    
    has_many :reservations,
        foreign_key: :rest_id,
        class_name: :Reservation

    has_many :favorites,
        foreign_key: :rest_id,
        class_name: :Favorite

    has_many :reviews,
        through: :reservations,
        source: :review

    has_one_attached :photo

    CUISINES = [
        "American",
        "Chinese",
        "French",
        "Greek",
        "Italian",
        "Indian",
        "Japanese",
        "Korean",
        "Mediterranean",
        "Mexican",
        "Soul",
        "Thai",
        "Turkish",
        "Vietnamese",
        "Cantonese"
    ]

    def self.find_by_keyword(keyword)
        Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%")
                .or(Restaurant.where("lower(location) like ?", "%#{keyword.downcase}%"))
                .or(Restaurant.where("lower(cuisine) like ?", "%#{keyword.downcase}%"))
    end

    def self.find_by_name(name)
        Restaurant.where("lower(name) like ?", "%#{name.downcase}%")
    end

end
