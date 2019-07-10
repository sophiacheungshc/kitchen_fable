class Api::ReservationsController < ApplicationController
    def create
    @reservation = Reservation.new(res_params)

        if @reservation.save
            render '/api/reservations/show'
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def index
        @user = User.find(params[:userId])
        if @user
            @reservations = @user.reservations.order(:date)
        else
            render json: ["User not found"], status: 404
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def destroy
        @reservation = Reservation.find(params[:id])

        if @reservation
            @reservation.destroy
            render json: @reservation
        else
            render json: ["Reservation doesn't exist"], status: 404
        end
    end

    private
    def res_params
        params.require(:reservation).permit(:user_id, :rest_id, :party, :date, :time, :occasion)
    end
end
