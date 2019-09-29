class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      @reservations = @user.reservations
      @restaurants = @reservations.map { |res| Restaurant.find(res.rest_id).name }
      render "api/users/show"
    else
      render json: ["Your email and password don't match. Please try again."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # render "api/users/show"
    else
      render json: ["Not currently signed in."], status: 404
    end
  end
end
