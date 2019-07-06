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

end
