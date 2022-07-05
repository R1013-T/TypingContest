class HomesController < ApplicationController
  def top
    puts "top"
    if params[:onlySpeed]
      puts "onlySpeed"
      crtScore = session[:score]
      print crtScore
      #todo スピードだけデータベースに保存する処理

      user = User.new

      time = (Time.now).to_s

      user.name = "NoName"
      user.email =  time + ".gmail.com"
      user.password = "123456"
      user.password_confirmation = "123456"
      user.speed = crtScore
      
      user.save

    end
  end

  def main 
    print "main"

    @articles = orderUser

    speeds = []
    @articles.each do |spd|
      speeds.push(spd.speed)
    end
    @js_speeds_json = speeds.to_json.html_safe

  end
  def result
    @score = params[:score]
    session[:score] = @score
    
  end
  def view
    @articles = orderUser
  end

  private
  def orderUser
    User.all.order(:speed)
  end
end
