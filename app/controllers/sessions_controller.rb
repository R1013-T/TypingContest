class SessionsController < ApplicationController
    # before_action :already_login?, except: :destroy
    def new
    end
  
    def create
      user = User.find_by_email(params[:email])
      if user && user.authenticate(params[:password])
        @score =  user_params[:speed]

        #todo userのスコアを更新する
        user.update(speed: @score)

        session[:user_id] = user.id
        session[:user_speed] = user.speed

        redirect_to user_path, notice: "You have successfully logged in."
      else
        flash.now[:alert] = "Email or Password is invalid."
        render :new
      end
    end
  
    def destroy
      session[:user_id] = nil
      redirect_to root_path, notice: "You have seccessfully logged out."
    end

    private
    def user_params
      params.require(:user).permit(:speed)
    end
end
