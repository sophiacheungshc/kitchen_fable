module ApplicationCable
  class Channel < ActionCable::Channel::Base

    # def subscribed
    #   current_user.favorites.each do |fav|
    #     stream_from "notifications:#{fav.rest_id}"
    #   end
    # end

    # def unsubscribed
    #   stop_all_streams
    # end

  end
end
