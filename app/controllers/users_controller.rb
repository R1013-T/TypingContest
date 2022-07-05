class UsersController < ApplicationController
  # before_action :already_login?, only: [:new, :create]
  # before_action :login?, only: :show
  
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      session[:user_name] = user.name
      session[:user_email] = user.email
      session[:user_speed] = user.speed
      redirect_to user_path, notice: "You have successfully signed in."
    else
      # render :new
      return
    end
  end

  def show
    @name = session[:user_name]
    @email = session[:user_email]
    @score = session[:user_speed]
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :speed)
  end
end