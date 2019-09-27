class Api::NotificationsController < ApplicationController
  def index
  end

  def create
    @notification = Notification.new(notification_params)
    
    if @notification.save
        ActionCable
            .server
            .broadcast("notifications:#{@notification.rest_id}",
                      notification: {
                          id: @notification.id,
                          restId: @notification.rest_id,
                          name: @notification.name,
                          createdAt: @notification.created_at,
                      }
    else
        render json: @notification.errors.full_messages, status: 401
    end
  end 

  def destroy
    @notification = Notification.find(id: params[:id])

    if @notification
      @restaurant = @notification.restaurant
      @notification.destroy
      render 'api/restaurants/show'
    else
      render json: ["Notification doesn't exist"], status: 404
    end
  end

  def notification_params
    params.require(:notification).permit(:name, :rest_id)
  end
end
